// builder.js - Tiszta DOM alapú sablon feltöltő (HTML szövegek támogatásával)
const spreadsData = [];
const tocData = [];

function initBookData() {
    pages.forEach((page, index) => {
        if (page.type === 'chapter' && page.tocTitle) {
            tocData.push({ title: page.tocTitle, target: Math.floor(index / 2) });
        }
    });

    let realPageNum = 1;
    for (let i = 0; i < pages.length; i += 2) {
        const leftPage = pages[i];
        const rightPage = pages[i + 1];

        const isLeftCountable = leftPage && ['text', 'chapter', 'toc', 'image'].includes(leftPage.type);
        const isRightCountable = rightPage && ['text', 'chapter', 'toc', 'image'].includes(rightPage.type);

        spreadsData.push({
            leftPage: leftPage,
            leftNum: isLeftCountable ? realPageNum++ : '',
            rightPage: rightPage,
            rightNum: isRightCountable ? realPageNum++ : ''
        });
    }
}

function buildPageElement(pageData, pageNum, side) {
    const pageDiv = document.createElement('div');
    if (!pageData) return pageDiv;

    const isTransparent = pageData.eraCss === 'era-transparent';
    pageDiv.className = `page-content ${pageData.eraCss || ''} ${isTransparent ? '' : 'lined'}`;

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
        }
    } else {
        const header = content.querySelector('.page-header');
        if (pageData.header) header.textContent = pageData.header; else header.remove();

        const title = content.querySelector('.chapter-title');
        if (pageData.title) title.textContent = pageData.title; else title.remove();

        const year = content.querySelector('.chapter-year');
        if (pageData.subtitle) year.textContent = pageData.subtitle; else year.remove();

        const body = content.querySelector('.chapter-body');
        body.innerHTML = '';

        if (pageData.type === 'toc') {
            tocData.forEach(item => {
                const span = document.createElement('span');
                span.className = 'toc-link';
                span.dataset.target = item.target;
                span.textContent = item.title;
                body.appendChild(span);
            });
        } else if (pageData.content) {
            let cleanContent = pageData.content.replace(/(<br\s*\/?>\s*)+<a/g, '\n\n<a');
            const paragraphs = cleanContent.split('\n\n');
            paragraphs.forEach((pText, index) => {
                if (pText.trim().startsWith('<a')) {
                    const footerLinks = document.createElement('div');
                    footerLinks.className = 'page-footer-links-block';
                    footerLinks.innerHTML = pText;
                    body.appendChild(footerLinks);
                } else {
                    const p = document.createElement('p');
                    p.innerHTML = pText;
                    if (index === 0 && pageData.dropCap) {
                        p.className = 'drop-cap';
                    }
                    body.appendChild(p);
                }
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