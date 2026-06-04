// ==========================================
// 1. KÖNYV TARTALMA (Ide vidd fel az oldalakat!)
// ==========================================
const pages = [
    // 0. oldal: Zárt állapot, balra eltolva (átlátszó lap)
    { 
        type: 'transparent', 
        eraCss: 'era-transparent' 
    },
    
    // 1. oldal: Elülső borító
    { 
        type: 'front-cover', 
        eraCss: 'era-cover' 
    },

    // --- 1. SPREAD ---
    // 2. oldal: Előszó
    { 
        type: 'text', 
        eraCss: 'era-1920', 
        dropCap: true,
        header: 'UMSZKI 100 – TÖRTÉNELMI ARCHÍVUM <br>1927-2027', 
        title: 'Előszó', 
        subtitle: 'A Szerkesztőség', 
        content: 'Ez a kötet száz esztendő emlékeit foglalja magában. Egy évszázadnyi tudás, közösség és szakmai fejlődés krónikája olvasható ezeken a lapokon.'
    },
    
    // 3. oldal: Tartalomjegyzék (Tartalmát a gép automatikusan generálja!)
    { 
        type: 'toc', 
        eraCss: 'era-1920', 
        header: 'UMSZKI 100 – TÖRTÉNELMI ARCHÍVUM <br>1927-2027', 
        title: 'Tartalom', 
        subtitle: 'Kattints a fejezetre az ugráshoz' 
    },

    // --- 2. SPREAD ---
    // 4. oldal: I. Fejezet (type: 'chapter' -> bekerül a tartalomjegyzékbe)
    { 
        type: 'chapter', 
        eraCss: 'era-1920', 
        dropCap: true,
        tocTitle: 'I. Az alapítás kora — 1927–1944', 
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA', 
        title: 'Az alapítás előzményei', 
        content: 'Az intézmény 1927-ben nyitotta meg kapuit. Ebben a nehéz, de reménnyel teli időszakban hatalmas szükség volt jól képzett műszaki szakemberekre.'
    },
    
    // 5. oldal
    { 
        type: 'text', 
        eraCss: 'era-1920', 
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA', 
        title: 'Az első évek', 
        content: 'A kezdeti években az iskola épülete még másként festett, de a tanárok elhivatottsága már akkor is a maihoz volt mérhető. A diákok kemény fizikai és szellemi munkával sajátították el az ipari alapismereteket. <br><br>Az első tantervek még a gépészetre fókuszáltak...' 
    },

    // --- 3. SPREAD ---
    // 6. oldal
    { 
        type: 'text', 
        eraCss: 'era-1920', 
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA', 
        content: '...mivel abban az időben az ipar gerincét a gépgyártás és a fémfeldolgozás adta. Hamarosan azonban nyilvánvalóvá vált, hogy a technológia gyorsuló ütemben fejlődik.<br><br>Az 1930-as évekre az iskola laboratóriumai és műhelyei folyamatosan bővültek. Új esztergagépek és mérőműszerek érkeztek, melyek mind a gyakorlati oktatás magas színvonalát szolgálták.' 
    },
    
    // 7. oldal
    { 
        type: 'text', 
        eraCss: 'era-1920', 
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA', 
        title: 'A háború vihara', 
        content: 'Az 1940-es évek elejére az intézmény életére sötét árnyékot vetettek a világesemények. Az oktatást egyre nehezebb volt fenntartani, mégis a falak között mindvégig megmaradt a szolidaritás és a tudás tisztelete.' 
    },

    // --- 4. SPREAD ---
    // 8. oldal: II. Fejezet
    { 
        type: 'chapter', 
        eraCss: 'era-1950', 
        dropCap: true,
        tocTitle: 'II. Újjáépítés és Landler-korszak',
        header: 'II. FEJEZET – ÚJJÁÉPÍTÉS', 
        title: 'Új korszak', 
        content: 'A háború utáni években az iskola története új fejezethez érkezett. A romok eltakarítása után az oktatás soha nem látott lendülettel indult újra.'
    },
    
    // 9. oldal
    { 
        type: 'text', 
        eraCss: 'era-1950', 
        header: 'II. FEJEZET – ÚJJÁÉPÍTÉS', 
        title: 'Landler-korszak', 
        content: 'A technikai oktatás szerepe egyre hangsúlyosabbá vált. Ebben a korszakban az intézmény <span class="info-link" data-name="Landler Jenő" data-info="Landler Jenő (1875–1928) ügyvéd és politikus. Az iskola 1950 és 1990 között viselte a nevét (Landler Jenő Gép- és Híradásipari Technikum), ekkor vált az intézmény a hazai híradástechnikai oktatás legfontosabb központjává." data-img="KEPEK/landler_jeno.jpg">Landler Jenő</span> nevét viselte, és óriási fejlődésen ment keresztül a híradástechnika irányába.' 
    },

    // --- 5. SPREAD ---
    // 10. oldal: III. Fejezet
    { 
        type: 'chapter', 
        eraCss: 'era-1990', 
        dropCap: true,
        tocTitle: 'III. Az informatika hajnala',
        header: 'III. FEJEZET – INFORMATIKA', 
        title: 'Az informatika hajnala', 
        content: 'A számítógépek megjelenése új irányt adott az oktatásnak az 1980-as és 90-es évek fordulóján. Megjelentek az első PC-k a tantermekben.'
    },
    
    // 11. oldal
    { 
        type: 'text', 
        eraCss: 'era-1990', 
        header: 'III. FEJEZET – INFORMATIKA', 
        title: 'Modern eszközök', 
        content: 'A műszaki képzés egyre jobban összekapcsolódott a digitális világgal. A programozás és a hálózatépítés az alaptanterv része lett.' 
    },

    // --- UTOLSÓ SPREAD ---
    // 12. oldal: Hátsó borító (Zárt könyv)
    { 
        type: 'back-cover', 
        eraCss: 'era-cover' 
    },
    
    // 13. oldal: Jobb oldal átlátszó
    { 
        type: 'transparent', 
        eraCss: 'era-transparent' 
    }
];

// ==========================================
// 2. KÖNYV GENERÁLÓ LOGIKA (Ide ne nyúlj!)
// ==========================================
let globalTocHTML = '';
const spreads = [];

function generateContentHTML(page, pageNum, side) {
    if (!page || page.type === 'transparent') return '';

    if (page.type === 'front-cover') {
        return `
            <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; padding: 20px;">
                <h1 style="font-family: 'IM Fell English', serif; font-size: 38px; color: #d4af37; margin-bottom: 35px; text-shadow: 2px 2px 6px rgba(0,0,0,0.9); letter-spacing: 2px;">UMSZKI 100</h1>
                <img src="umszki_logo.jpg" alt="UMSZKI Logo" style="width: 170px; height: 170px; border-radius: 50%; margin: 0 auto 35px; box-shadow: 0 12px 25px rgba(0,0,0,0.8), 0 0 0 3px #d4af37;">
                <h2 style="font-family: 'Crimson Text', serif; font-size: 20px; color: #f1e5c9; letter-spacing: 3px; margin-bottom: 15px; text-transform: uppercase;">Történelmi Archívum</h2>
                <div style="width: 50px; height: 2px; background-color: #a08c5b; margin: 0 auto 15px;"></div>
                <p style="font-family: 'IM Fell English', serif; font-size: 18px; color: #d4af37; letter-spacing: 5px;">1927 - 2027</p>
            </div>
        `;
    }
    if (page.type === 'back-cover') {
        return `
            <div style="height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; padding-bottom: 20px; opacity: 0.6;">
                <img src="umszki_logo.jpg" alt="UMSZKI Logo" style="width: 60px; height: 60px; border-radius: 50%; opacity: 0.3; margin-bottom: 15px; filter: grayscale(100%);">
                <p style="color: #d4af37; font-size: 11px; letter-spacing: 2px; text-align: center; font-family: 'IM Fell English', serif;">Újpesti Két Tanítási Nyelvű<br>Műszaki Technikum</p>
            </div>
        `;
    }
    if (page.type === 'toc') {
        return `
            <div class="header-area">
                <div class="page-header">${page.header || ''}</div>
                <div class="chapter-title">${page.title || ''}</div>
                <div class="chapter-year">${page.subtitle || ''}</div>
            </div>
            <div class="chapter-body" style="font-size:15px;line-height:32px;">
                ${globalTocHTML}
            </div>
            <div class="page-num ${side}">${pageNum}</div>
        `;
    }
    
    // Normál szöveges vagy fejezet kezdő oldal
    const dropCapClass = page.dropCap ? 'drop-cap' : '';
    return `
        <div class="header-area">
            ${page.header ? `<div class="page-header">${page.header}</div>` : ''}
            ${page.title ? `<div class="chapter-title">${page.title}</div>` : ''}
            ${page.subtitle ? `<div class="chapter-year">${page.subtitle}</div>` : ''}
        </div>
        <div class="chapter-body ${dropCapClass}">${page.content || ''}</div>
        <div class="page-num ${side}">${pageNum}</div>
    `;
}

function initBook() {
    pages.forEach((page, index) => {
        if (page.type === 'chapter' && page.tocTitle) {
            const targetSpread = Math.floor(index / 2); 
            globalTocHTML += `<span class="toc-link" data-target="${targetSpread}">${page.tocTitle}</span><br>\n`;
        }
    });

    let realPageNum = 1;
    for (let i = 0; i < pages.length; i += 2) {
        const leftPage = pages[i];
        const rightPage = pages[i + 1];
        
        let leftHtml = '';
        if (leftPage) {
            const isTextPage = ['text', 'chapter', 'toc'].includes(leftPage.type);
            leftHtml = generateContentHTML(leftPage, isTextPage ? realPageNum++ : '', 'left');
        }

        let rightHtml = '';
        if (rightPage) {
            const isTextPage = ['text', 'chapter', 'toc'].includes(rightPage.type);
            rightHtml = generateContentHTML(rightPage, isTextPage ? realPageNum++ : '', 'right');
        }

        spreads.push({
            leftEraCss: leftPage ? leftPage.eraCss : '',
            rightEraCss: rightPage ? rightPage.eraCss : '',
            left: leftHtml,
            right: rightHtml
        });
    }
}

initBook();

// ==========================================
// 3. LAPOZÁS ÉS ANIMÁCIÓ RÉSZ
// ==========================================
const staticLeft = document.getElementById('static-left');
const staticRight = document.getElementById('static-right');
const flipLayer = document.getElementById('flip-layer');
const flipFront = document.getElementById('flip-front');
const flipBack = document.getElementById('flip-back');
const book = document.getElementById('book');
const scene = document.getElementById('scene');

let currentSpread = 0;
let isDragging = false;
let isFlipping = false;
let dragDirection = 0;
let startX = 0;
let dragProgress = 0;
let wasDragged = false; 

let rafId = null;
let pendingTransform = '';

function requestFullScreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => console.log("Hiba a teljes képernyő indításakor:", err));
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
}

let idleTimeout;
const IDLE_TIME_LIMIT = 10000; 

function wakeUpBook() {
    if (scene.classList.contains('idle')) {
        scene.classList.remove('idle');
    }
    resetIdleTimer();
}

function putDownBook() {
    closeModal();
    if (currentSpread !== 0) {
        jumpToSpread(0);
        setTimeout(() => { scene.classList.add('idle'); }, 350);
    } else {
        scene.classList.add('idle');
    }
}

function resetIdleTimer() {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(putDownBook, IDLE_TIME_LIMIT);
}

['pointerdown', 'pointermove', 'keydown', 'wheel', 'click'].forEach(evt => {
    window.addEventListener(evt, () => {
        requestFullScreen();
        if (scene.classList.contains('idle')) {
            wakeUpBook();
        } else {
            resetIdleTimer();
        }
    });
});

window.addEventListener('load', () => {
    setTimeout(() => { wakeUpBook(); }, 600);
});

function updateBookState(targetIndex) {
    book.classList.remove('closed-front', 'closed-back');
    if (targetIndex === 0) {
        book.classList.add('closed-front');
    } else if (targetIndex === spreads.length - 1) {
        book.classList.add('closed-back');
    }
}

function pageHTML(index, side) {
    const spread = spreads[index];
    if (!spread) return '';

    const css = side === 'left' ? spread.leftEraCss : spread.rightEraCss;
    const content = side === 'left' ? spread.left : spread.right;
    const linedClass = css === 'era-transparent' ? '' : 'lined';

    return `<div class="page-content ${css} ${linedClass}">${content}</div>`;
}

function renderSpread(index) {
    updateBookState(index);
    staticLeft.innerHTML = pageHTML(index, 'left');
    staticRight.innerHTML = pageHTML(index, 'right');
}

function applyFlipTransform(value) {
    pendingTransform = value;
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
        flipLayer.style.transform = pendingTransform;
        rafId = null;
    });
}

function prepareFlip(direction) {
    flipLayer.style.display = 'block';
    flipLayer.style.transition = 'none';
    flipLayer.classList.add('dragging');

    if (direction === 1) {
        const nextSpread = currentSpread + 1;
        updateBookState(nextSpread);
        staticLeft.innerHTML = pageHTML(currentSpread, 'left');
        staticRight.innerHTML = pageHTML(nextSpread, 'right');
        flipLayer.className = 'forward dragging';
        flipLayer.style.transform = 'translateZ(2px) rotateY(0deg)';
        flipFront.innerHTML = pageHTML(currentSpread, 'right');
        flipBack.innerHTML = pageHTML(nextSpread, 'left');
    } else {
        const prevSpread = currentSpread - 1;
        updateBookState(prevSpread);
        staticLeft.innerHTML = pageHTML(prevSpread, 'left');
        staticRight.innerHTML = pageHTML(currentSpread, 'right');
        flipLayer.className = 'backward dragging';
        flipLayer.style.transform = 'translateZ(2px) rotateY(0deg)';
        flipFront.innerHTML = pageHTML(currentSpread, 'left');
        flipBack.innerHTML = pageHTML(prevSpread, 'right');
    }
}

function finishFlip(direction) {
    currentSpread += direction;
    renderSpread(currentSpread);
    cleanupFlip();
    isFlipping = false;
}

function cleanupFlip() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    updateBookState(currentSpread);
    flipLayer.className = '';
    flipLayer.style.display = 'none';
    flipLayer.style.transition = 'none';
    flipLayer.style.transform = '';
    flipFront.innerHTML = '';
    flipBack.innerHTML = '';
}

function animateFlip(direction, complete) {
    isFlipping = true;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    flipLayer.classList.remove('dragging');
    flipLayer.style.transition = 'transform .52s cubic-bezier(.25, .8, .25, 1)';

    requestAnimationFrame(() => {
        if (direction === 1) {
            flipLayer.style.transform = complete ? 'translateZ(2px) rotateY(-180deg)' : 'translateZ(2px) rotateY(0deg)';
        } else {
            flipLayer.style.transform = complete ? 'translateZ(2px) rotateY(180deg)' : 'translateZ(2px) rotateY(0deg)';
        }
    });

    window.setTimeout(() => {
        if (complete) { finishFlip(direction); } 
        else {
            renderSpread(currentSpread);
            cleanupFlip();
            isFlipping = false;
        }
    }, 540);
}

function startDrag(e) {
    if (isFlipping || scene.classList.contains('idle')) return;
    wasDragged = false; 
    if (e.target.closest('#bookmark')) return;

    isDragging = true;
    dragDirection = 0;
    dragProgress = 0;
    startX = e.clientX;
}

function moveDrag(e) {
    if (!isDragging || isFlipping) return;
    const deltaX = e.clientX - startX;

    if (Math.abs(deltaX) > 10) { wasDragged = true; }

    if (!dragDirection) {
        if (deltaX < -15 && currentSpread < spreads.length - 1) {
            dragDirection = 1;
            prepareFlip(1);
        } else if (deltaX > 15 && currentSpread > 0) {
            dragDirection = -1;
            prepareFlip(-1);
        }
    }

    if (!dragDirection) return;
    if (e.cancelable) e.preventDefault();

    dragProgress = Math.min(1, Math.max(0, Math.abs(deltaX) / (window.innerWidth * .32)));
    if (dragDirection === 1) {
        applyFlipTransform(`translateZ(2px) rotateY(${-180 * dragProgress}deg)`);
    } else {
        applyFlipTransform(`translateZ(2px) rotateY(${180 * dragProgress}deg)`);
    }
}

function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    if (!dragDirection) return;

    const complete = dragProgress > .28;
    animateFlip(dragDirection, complete);
    dragDirection = 0;
    dragProgress = 0;
}

function jumpToSpread(index) {
    if (index === currentSpread || index < 0 || index >= spreads.length) return;
    
    book.style.opacity = '0';
    updateBookState(index);
    
    setTimeout(() => {
        currentSpread = index;
        renderSpread(currentSpread);
        cleanupFlip();
        book.style.opacity = '1';
    }, 300); 
}

function openModal(name, info, imageUrl) {
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-body').innerHTML = info;
    
    const modalImg = document.getElementById('modal-img');
    if (imageUrl) {
        modalImg.src = imageUrl;
        modalImg.style.display = 'block'; 
    } else {
        modalImg.style.display = 'none'; 
        modalImg.src = '';
    }
    document.getElementById('info-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('info-modal').classList.remove('active');
}

book.addEventListener('click', (e) => {
    if (wasDragged) return;

    if (e.target.closest('#bookmark')) {
        jumpToSpread(1); 
        return;
    }

    const tocLink = e.target.closest('.toc-link');
    if (tocLink) {
        const targetIndex = parseInt(tocLink.getAttribute('data-target'), 10);
        jumpToSpread(targetIndex);
        return;
    }

    const infoLink = e.target.closest('.info-link');
    if (infoLink) {
        const name = infoLink.getAttribute('data-name');
        const info = infoLink.getAttribute('data-info');
        const imageUrl = infoLink.getAttribute('data-img'); 
        openModal(name, info, imageUrl);
    }
});

document.getElementById('info-modal').addEventListener('click', (e) => {
    if (e.target.id === 'info-modal') closeModal();
});

renderSpread(currentSpread);

book.addEventListener('pointerdown', startDrag);
window.addEventListener('pointermove', moveDrag, { passive: false });
window.addEventListener('pointerup', endDrag);
window.addEventListener('pointercancel', endDrag);