// builder.js - Tiszta DOM alapú sablon feltöltő (HTML szövegek támogatásával)
const spreadsData = [];
const tocData = [];

function initBookData() {
    let tocCounter = 1;

    // 1. Automatikus, duplikációmentes cím-begyűjtés
    pages.forEach((page, index) => {
        if (page.type === 'chapter' || page.type === 'text' || page.type === 'image') {
            const titleStr = page.tocTitle || page.title;

            if (titleStr && !tocData.find(t => t.title === titleStr)) {
                tocData.push({
                    title: titleStr,
                    target: Math.floor(index / 2),
                    number: tocCounter++
                });
            }
        }
    });

    let currentThemeNum = '';

    // 2. Oldalpárok összeállítása és a témaszám kiosztása SPREAD-enként
    for (let i = 0; i < pages.length; i += 2) {
        const leftPage = pages[i];
        const rightPage = pages[i + 1];
        const spreadIndex = i / 2;

        // Ha ezen az oldalpáron kezdődik egy új téma a TOC szerint, frissítjük a számot
        const tocItem = tocData.find(t => t.target === spreadIndex);
        if (tocItem) {
            currentThemeNum = tocItem.number;
        }

        const noNumTypes = ['front-cover', 'back-cover', 'transparent', 'toc-left', 'toc-right', 'impresszum'];

        const showLeftNum = leftPage && !noNumTypes.includes(leftPage.type);
        const showRightNum = rightPage && !noNumTypes.includes(rightPage.type);

        spreadsData.push({
            leftPage: leftPage,
            leftNum: showLeftNum ? currentThemeNum : '',
            rightPage: rightPage,
            rightNum: showRightNum ? currentThemeNum : ''
        });
    }
}

function buildPageElement(pageData, pageNum, side) {
    const pageDiv = document.createElement('div');
    if (!pageData) return pageDiv;

    const isTransparent = pageData.eraCss === 'era-transparent';
    pageDiv.className = `page-content ${pageData.eraCss || ''} ${isTransparent ? '' : 'lined'} page-${side}`;

    if (isTransparent) return pageDiv;

    let templateId = 'tpl-text-page';
    if (pageData.type === 'front-cover') templateId = 'tpl-front-cover';
    else if (pageData.type === 'back-cover') templateId = 'tpl-back-cover';
    else if (pageData.type === 'image') templateId = 'tpl-image-page';

    const template = document.getElementById(templateId);
    if (!template) return pageDiv;

    const content = template.content.cloneNode(true);

    if (pageData.type === 'front-cover' || pageData.type === 'back-cover') {
        pageDiv.appendChild(content);
        return pageDiv;
    }

    if (pageData.type === 'image') {
        const imgContainer = content.querySelector('.main-image-container');
        if (pageData.image) {
            const mainImg = document.createElement('img');
            mainImg.src = pageData.image;
            mainImg.className = 'main-page-image';
            mainImg.alt = 'Fejezet kép';
            mainImg.style.cursor = 'pointer'; // Egérkurzor mutatóra vált
            if (pageData.imagePosition) mainImg.style.objectPosition = pageData.imagePosition;

            // --- ÚJ KÓD: KATTINTÁS ESEMÉNY A NAGYÍTÁSHOZ ---
            mainImg.addEventListener('click', (e) => {
                e.stopPropagation(); // Megakadályozzuk, hogy a kattintástól lapozzon a könyv
                openLightbox(pageData.image); // Meghívjuk az app.js galéria nagyítóját
            });

            imgContainer.appendChild(mainImg);
        }

        const pocketContainer = content.querySelector('.pocket-container');
        if (pageData.gallery && pageData.gallery.length > 0) {
            const pageIndex = pages.indexOf(pageData);
            const wrapper = document.createElement('div');
            wrapper.className = 'pocket-wrapper';
            wrapper.dataset.pageIndex = pageIndex;
            const photosDiv = document.createElement('div');
            photosDiv.className = 'pocket-photos';

            pageData.gallery.slice(0, 3).forEach((imgUrl, i) => {
                const pPhoto = document.createElement('img');
                pPhoto.src = imgUrl;
                pPhoto.className = `pocket-photo img-${i}`;
                photosDiv.appendChild(pPhoto);
            });

            const frontDiv = document.createElement('div');
            frontDiv.className = 'pocket-front';
            frontDiv.textContent = pageData.pocketTitle || 'Galéria';

            wrapper.appendChild(photosDiv);
            wrapper.appendChild(frontDiv);
            pocketContainer.appendChild(wrapper);
        } else if (pageData.content) {

            imgContainer.style.flex = 'none';
            imgContainer.style.height = 'calc(var(--base-lh) * 10)';
            imgContainer.style.paddingBottom = '0';

            pocketContainer.style.alignItems = 'flex-start';
            pocketContainer.style.height = 'auto';

            const textDiv = document.createElement('div');
            textDiv.className = 'chapter-body';
            textDiv.style.width = '100%';

            // Header törölve, a Title veszi át a legfelső helyet
            if (pageData.title) {
                const titleDiv = document.createElement('div');
                titleDiv.className = 'chapter-title';
                titleDiv.textContent = pageData.title;
                titleDiv.style.marginBottom = '2vh'; // Kicsi szünet a cím és a szöveg között
                textDiv.appendChild(titleDiv);
            }

            const paragraphs = pageData.content.split('\n\n');
            paragraphs.forEach((pText, index) => {
                const p = document.createElement('p');
                p.innerHTML = pText;
                if (index === 0 && pageData.dropCap) {
                    p.className = 'drop-cap';
                }
                textDiv.appendChild(p);
            });

            pocketContainer.appendChild(textDiv);
        }
    } else {
        // Header teljes törlése a HTML-ből
        const header = content.querySelector('.page-header');
        if (header) header.remove();

        // A Cím (Title) veszi át a főszerepet
        const title = content.querySelector('.chapter-title');
        if (pageData.title || pageData.header) {
            // Ha a data.js-ben csak header van (pl. a TARTALOM oldalnál), azt is nagy címként kezeli
            title.textContent = pageData.title || pageData.header;
            title.style.marginBottom = '2vh'; // Kicsi szünet a cím és a szöveg között
        } else {
            title.remove();
        }

        const year = content.querySelector('.chapter-year');
        if (pageData.subtitle) year.textContent = pageData.subtitle; else year.remove();

        const body = content.querySelector('.chapter-body');
        body.innerHTML = '';

        if (pageData.type === 'toc-left' || pageData.type === 'toc-right') {
            body.classList.add('toc-grid');

            const halfLength = Math.ceil(tocData.length / 2);
            const itemsToRender = pageData.type === 'toc-left'
                ? tocData.slice(0, halfLength)
                : tocData.slice(halfLength);

            itemsToRender.forEach(item => {
                const span = document.createElement('span');
                span.className = 'toc-link';
                span.dataset.target = item.target;
                span.textContent = `${item.number}. ${item.title}`;
                body.appendChild(span);
            });
        } else if (pageData.content) {
            const paragraphs = pageData.content.split('\n\n');
            paragraphs.forEach((pText, index) => {
                const p = document.createElement('p');
                p.innerHTML = pText;
                if (index === 0 && pageData.dropCap) {
                    p.className = 'drop-cap';
                }
                body.appendChild(p);
            });
        }
    }

    const num = content.querySelector('.page-num');
    if (num) {
        num.className = `page-num ${side}`;
        num.textContent = pageNum;
    }

    pageDiv.appendChild(content);
    return pageDiv;
}

initBookData();