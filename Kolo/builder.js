// builder.js - A sablonok és az adatok összekapcsolása
const spreadsData = [];
const tocData = [];

// 1. Kiszámoljuk az oldalpárokat (spreadek) és a tartalomjegyzéket
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
        
        const isLeftText = leftPage && ['text', 'chapter', 'toc'].includes(leftPage.type);
        const isRightText = rightPage && ['text', 'chapter', 'toc'].includes(rightPage.type);

        spreadsData.push({
            leftPage: leftPage,
            leftNum: isLeftText ? realPageNum++ : '',
            rightPage: rightPage,
            rightNum: isRightText ? realPageNum++ : ''
        });
    }
}

// 2. Létrehoz egy kész HTML elemet a megfelelő sablon (template) alapján
function buildPageElement(pageData, pageNum, side) {
    const pageDiv = document.createElement('div');
    if (!pageData) return pageDiv;

    const isTransparent = pageData.eraCss === 'era-transparent';
    pageDiv.className = `page-content ${pageData.eraCss || ''} ${isTransparent ? '' : 'lined'}`;

    if (isTransparent) return pageDiv; // Átlátszó oldalhoz nem kell tartalom

    // Kiválasztjuk a megfelelő HTML sablont
    let templateId = 'tpl-text-page';
    if (pageData.type === 'front-cover') templateId = 'tpl-front-cover';
    else if (pageData.type === 'back-cover') templateId = 'tpl-back-cover';

    const template = document.getElementById(templateId);
    if (!template) return pageDiv;

    // Klónozzuk a sablon tartalmát
    const content = template.content.cloneNode(true);

    // Borítóknál nincs további dolgunk
    if (pageData.type === 'front-cover' || pageData.type === 'back-cover') {
        pageDiv.appendChild(content);
        return pageDiv;
    }

    // Normál oldalak elemeinek kitöltése vagy törlése (ha nincs adat)
    const header = content.querySelector('.page-header');
    if (pageData.header) header.innerHTML = pageData.header; else header.remove();

    const title = content.querySelector('.chapter-title');
    if (pageData.title) title.innerHTML = pageData.title; else title.remove();

    const year = content.querySelector('.chapter-year');
    if (pageData.subtitle) year.innerHTML = pageData.subtitle; else year.remove();

    const body = content.querySelector('.chapter-body');
    if (pageData.type === 'toc') {
        // Tartalomjegyzék felépítése DOM elemekkel
        tocData.forEach(item => {
            const span = document.createElement('span');
            span.className = 'toc-link';
            span.dataset.target = item.target;
            span.textContent = item.title;
            body.appendChild(span);
            body.appendChild(document.createElement('br'));
        });
    } else {
        body.innerHTML = pageData.content || '';
        if (pageData.dropCap) body.classList.add('drop-cap');
    }

    const num = content.querySelector('.page-num');
    num.className = `page-num ${side}`;
    num.textContent = pageNum;

    pageDiv.appendChild(content);
    return pageDiv;
}

// Azonnal lefuttatjuk, hogy a memória feltöltődjön az adatokkal
initBookData();