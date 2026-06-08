// app.js - Lapozás, animációk, csempés galéria és kép-megnyitó
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
let idleTimeout;
const IDLE_TIME_LIMIT = 90000;

function requestFullScreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen().catch(err => console.log(err));
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    }
}

function wakeUpBook() {
    if (scene.classList.contains('idle')) scene.classList.remove('idle');
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
        if (scene.classList.contains('idle')) wakeUpBook();
        else resetIdleTimer();
    });
});

window.addEventListener('load', () => setTimeout(() => wakeUpBook(), 600));

function updateBookState(targetIndex) {
    book.classList.remove('closed-front', 'closed-back');
    if (targetIndex === 0) book.classList.add('closed-front');
    else if (targetIndex === spreadsData.length - 1) book.classList.add('closed-back');
}

function renderSpread(index) {
    updateBookState(index);
    const spread = spreadsData[index];
    staticLeft.innerHTML = ''; staticLeft.appendChild(buildPageElement(spread.leftPage, spread.leftNum, 'left'));
    staticRight.innerHTML = ''; staticRight.appendChild(buildPageElement(spread.rightPage, spread.rightNum, 'right'));
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
        staticLeft.innerHTML = ''; staticLeft.appendChild(buildPageElement(spreadsData[currentSpread].leftPage, spreadsData[currentSpread].leftNum, 'left'));
        staticRight.innerHTML = ''; staticRight.appendChild(buildPageElement(spreadsData[nextSpread].rightPage, spreadsData[nextSpread].rightNum, 'right'));
        flipLayer.className = 'forward dragging';
        flipLayer.style.transform = 'translateZ(2px) rotateY(0deg)';
        flipFront.innerHTML = ''; flipFront.appendChild(buildPageElement(spreadsData[currentSpread].rightPage, spreadsData[currentSpread].rightNum, 'right'));
        flipBack.innerHTML = ''; flipBack.appendChild(buildPageElement(spreadsData[nextSpread].leftPage, spreadsData[nextSpread].leftNum, 'left'));
    } else {
        const prevSpread = currentSpread - 1;
        updateBookState(prevSpread);
        staticLeft.innerHTML = ''; staticLeft.appendChild(buildPageElement(spreadsData[prevSpread].leftPage, spreadsData[prevSpread].leftNum, 'left'));
        staticRight.innerHTML = ''; staticRight.appendChild(buildPageElement(spreadsData[currentSpread].rightPage, spreadsData[currentSpread].rightNum, 'right'));
        flipLayer.className = 'backward dragging';
        flipLayer.style.transform = 'translateZ(2px) rotateY(0deg)';
        flipFront.innerHTML = ''; flipFront.appendChild(buildPageElement(spreadsData[currentSpread].leftPage, spreadsData[currentSpread].leftNum, 'left'));
        flipBack.innerHTML = ''; flipBack.appendChild(buildPageElement(spreadsData[prevSpread].rightPage, spreadsData[prevSpread].rightNum, 'right'));
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
    flipFront.innerHTML = ''; flipBack.innerHTML = '';
}

function animateFlip(direction, complete) {
    isFlipping = true;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    flipLayer.classList.remove('dragging');
    flipLayer.style.transition = 'transform .52s cubic-bezier(.25, .8, .25, 1)';

    requestAnimationFrame(() => {
        if (direction === 1) flipLayer.style.transform = complete ? 'translateZ(2px) rotateY(-180deg)' : 'translateZ(2px) rotateY(0deg)';
        else flipLayer.style.transform = complete ? 'translateZ(2px) rotateY(180deg)' : 'translateZ(2px) rotateY(0deg)';
    });

    window.setTimeout(() => {
        if (complete) finishFlip(direction);
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
    if (e.target.closest('#bookmark') || e.target.closest('.pocket-wrapper')) return;

    isDragging = true;
    dragDirection = 0;
    dragProgress = 0;
    startX = e.clientX;
}

function moveDrag(e) {
    if (!isDragging || isFlipping) return;
    const deltaX = e.clientX - startX;

    if (Math.abs(deltaX) > 10) wasDragged = true;

    if (!dragDirection) {
        if (deltaX < -15 && currentSpread < spreadsData.length - 1) { dragDirection = 1; prepareFlip(1); }
        else if (deltaX > 15 && currentSpread > 0) { dragDirection = -1; prepareFlip(-1); }
    }

    if (!dragDirection) return;
    if (e.cancelable) e.preventDefault();

    dragProgress = Math.min(1, Math.max(0, Math.abs(deltaX) / (window.innerWidth * .32)));
    if (dragDirection === 1) applyFlipTransform(`translateZ(2px) rotateY(${-180 * dragProgress}deg)`);
    else applyFlipTransform(`translateZ(2px) rotateY(${180 * dragProgress}deg)`);
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
    if (index === currentSpread || index < 0 || index >= spreadsData.length) return;
    book.style.opacity = '0';
    updateBookState(index);
    setTimeout(() => {
        currentSpread = index;
        renderSpread(currentSpread);
        cleanupFlip();
        book.style.opacity = '1';
    }, 300);
}

// --- ÚJ, CSENMPÉS (2 SOROS) GALÉRIA ÉS KÉPMEGNYITÓ ---
function openGalleryModal(pageIndex) {
    const page = pages[pageIndex];
    if (!page || !page.gallery) return;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = ''; 

    // Rács (csempe) tartó
    const grid = document.createElement('div');
    grid.className = 'gallery-tile-grid';

    let wasGridDragged = false;

    page.gallery.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.className = 'gallery-tile-img';
        img.draggable = false;
        
        // Kattintás -> Kép megnyitása teljes méretben
        img.addEventListener('click', (e) => {
            if(wasGridDragged) return; // Ha csak húztuk a rácsot, ne nyissa meg
            e.stopPropagation(); 
            openLightbox(imgUrl);
        });
        
        grid.appendChild(img);
    });

    modalBody.appendChild(grid);
    document.getElementById('info-modal').classList.add('active');

    // Drag-scroll a 2 soros csempékhez
    let isGridDown = false;
    let gridStartX;
    let scrollLeft;

    grid.addEventListener('mousedown', (e) => {
        isGridDown = true;
        wasGridDragged = false;
        grid.classList.add('active-drag');
        gridStartX = e.pageX - grid.offsetLeft;
        scrollLeft = grid.scrollLeft;
    });
    
    grid.addEventListener('mouseleave', () => {
        isGridDown = false;
        grid.classList.remove('active-drag');
    });
    
    grid.addEventListener('mouseup', () => {
        isGridDown = false;
        grid.classList.remove('active-drag');
    });
    
    grid.addEventListener('mousemove', (e) => {
        if (!isGridDown) return;
        e.preventDefault();
        const x = e.pageX - grid.offsetLeft;
        const walk = (x - gridStartX) * 2; 
        if (Math.abs(walk) > 5) wasGridDragged = true;
        grid.scrollLeft = scrollLeft - walk;
    });

    // Sötét hézagra kattintás bezárja a modált
    grid.addEventListener('click', (e) => {
        if (wasGridDragged) return; 
        if (e.target === grid) {
            closeModal();
        }
    });
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

    const pocket = e.target.closest('.pocket-wrapper');
    if (pocket) {
        const pageIndex = parseInt(pocket.getAttribute('data-page-index'), 10);
        openGalleryModal(pageIndex);
        return;
    }
});

// A modál bezárása ha kifejezetten az overlay-re vagy a bezáró ikonra kattintanak
document.getElementById('info-modal').addEventListener('click', (e) => {
    if (e.target.id === 'info-modal' || e.target.classList.contains('modal-close')) {
        closeModal();
    }
});

// --- LIGHTBOX (Egyedi kép kinagyítása) ---
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-close">&times;</div>
    <img id="lightbox-img" src="" alt="Nagy kép">
`;
document.body.appendChild(lightbox);

function openLightbox(url) {
    document.getElementById('lightbox-img').src = url;
    lightbox.classList.add('active');
}

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

renderSpread(currentSpread);

book.addEventListener('pointerdown', startDrag);
window.addEventListener('pointermove', moveDrag, { passive: false });
window.addEventListener('pointerup', endDrag);
window.addEventListener('pointercancel', endDrag);