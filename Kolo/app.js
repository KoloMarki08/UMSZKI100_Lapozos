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
const IDLE_TIME_LIMIT = 600000;

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

['touchstart', 'mousedown', 'keydown', 'click'].forEach(evt => {
    window.addEventListener(evt, (e) => {
        if (evt === 'click' || evt === 'touchstart') {
            requestFullScreen();
        }
        if (scene.classList.contains('idle')) {
            wakeUpBook();
        } else {
            resetIdleTimer();
        }
    }, { passive: false });
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
    requestAnimationFrame(() => { distributePageElements(); });
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
    
    // LIGHTBOX VÉDELEM: Ne lapozzon, ha nyitva a nagy kép
    if (document.getElementById('lightbox') && document.getElementById('lightbox').classList.contains('active')) return;

    wasDragged = false;
    if (e.target.closest('#bookmark') || e.target.closest('.pocket-wrapper')) return;

    isDragging = true;
    dragDirection = 0;
    dragProgress = 0;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
}

function moveDrag(e) {
    if (!isDragging || isFlipping) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = clientX - startX;

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

function openGalleryModal(pageIndex) {
    const page = pages[pageIndex];
    if (!page || !page.gallery) return;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'gallery-tile-grid';

    let wasGridDragged = false;

    page.gallery.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.className = 'gallery-tile-img';
        img.draggable = false;

        img.addEventListener('click', (e) => {
            if (wasGridDragged) return;
            e.stopPropagation();
            openLightbox(imgUrl);
        });

        grid.appendChild(img);
    });

    modalBody.appendChild(grid);
    document.getElementById('info-modal').classList.add('active');

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

document.getElementById('info-modal').addEventListener('click', (e) => {
    if (e.target.id === 'info-modal' || e.target.classList.contains('modal-close')) {
        closeModal();
    }
});

function distributePageElements() {
    const bodies = document.querySelectorAll('.chapter-body');
    bodies.forEach(body => {
        const elements = body.children;
        if (elements.length <= 1) return;

        for (let el of elements) { el.style.marginBottom = ''; }

        const pageContent = body.closest('.page-content');
        if (!pageContent) return;

        const totalHeight = pageContent.clientHeight;
        const paddingBottom = parseFloat(getComputedStyle(pageContent).paddingBottom) || 0;
        const maxBottom = totalHeight - paddingBottom;

        const baseLhStr = getComputedStyle(document.documentElement).getPropertyValue('--base-lh');
        const baseLhVal = parseFloat(baseLhStr) || 3.6;
        const baseLhPx = baseLhVal * (window.innerHeight / 100);

        let currentBottom = body.offsetTop + body.offsetHeight;
        let safetyCounter = 0;

        while ((maxBottom - currentBottom) >= baseLhPx && safetyCounter < 40) {
            safetyCounter++;
            let changed = false;
            for (let i = 0; i < elements.length - 1; i++) {
                if ((maxBottom - currentBottom) < baseLhPx) break;

                const el = elements[i];
                const currentMargin = parseFloat(getComputedStyle(el).marginBottom) || 0;
                el.style.marginBottom = `${currentMargin + baseLhPx}px`;

                currentBottom = body.offsetTop + body.offsetHeight;
                changed = true;
            }
            if (!changed) break;
        }
    });
}

window.addEventListener('resize', distributePageElements);

renderSpread(currentSpread);

book.addEventListener('pointerdown', startDrag);
window.addEventListener('pointermove', moveDrag, { passive: false });
window.addEventListener('pointerup', endDrag);
window.addEventListener('pointercancel', endDrag);


// =====================================================================
// --- ÚJ LIGHTBOX ZOOM ÉS MOZGATÁS (Mobil Pinch-to-Zoom támogatással) ---
// =====================================================================
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-close">&times;</div>
    <img id="lightbox-img" src="" alt="Nagy kép" style="cursor: grab; transition: transform 0.05s linear; touch-action: none;">
`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('#lightbox-img');
let lbScale = 1;
let lbPointX = 0;
let lbPointY = 0;
let lbStartX = 0;
let lbStartY = 0;
let isLbDragging = false;

let lbPointers = []; 
let lbInitialDistance = null;
let lbInitialScale = 1;

function openLightbox(url) {
    lbImg.src = url;
    lightbox.classList.add('active');
    lbScale = 1;
    lbPointX = 0;
    lbPointY = 0;
    lbPointers = []; 
    updateLightboxTransform();
}

function updateLightboxTransform() {
    lbImg.style.transform = `translate(${lbPointX}px, ${lbPointY}px) scale(${lbScale})`;
}

lightbox.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox' || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
    }
});

lightbox.addEventListener('wheel', (e) => {
    if (!lightbox.classList.contains('active')) return;
    e.preventDefault();
    
    const xs = (e.clientX - lbPointX) / lbScale;
    const ys = (e.clientY - lbPointY) / lbScale;
    const delta = Math.sign(e.deltaY) * -1; 
    
    if (delta > 0) lbScale *= 1.2;
    else lbScale /= 1.2;
    
    lbScale = Math.min(Math.max(0.5, lbScale), 10); 

    lbPointX = e.clientX - xs * lbScale;
    lbPointY = e.clientY - ys * lbScale;
    
    updateLightboxTransform();
}, { passive: false });

lbImg.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    lbPointers.push(e);
    
    if (lbPointers.length === 1) {
        isLbDragging = true;
        lbStartX = e.clientX - lbPointX;
        lbStartY = e.clientY - lbPointY;
        lbImg.style.cursor = 'grabbing';
    } else if (lbPointers.length === 2) {
        isLbDragging = false; 
        lbInitialDistance = Math.hypot(
            lbPointers[0].clientX - lbPointers[1].clientX,
            lbPointers[0].clientY - lbPointers[1].clientY
        );
        lbInitialScale = lbScale;
    }
});

window.addEventListener('pointermove', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    const index = lbPointers.findIndex(p => p.pointerId === e.pointerId);
    if (index !== -1) {
        lbPointers[index] = e;
    }

    if (lbPointers.length === 2) {
        e.preventDefault();
        const currentDistance = Math.hypot(
            lbPointers[0].clientX - lbPointers[1].clientX,
            lbPointers[0].clientY - lbPointers[1].clientY
        );
        
        if (lbInitialDistance) {
            const scaleDiff = currentDistance / lbInitialDistance;
            lbScale = Math.min(Math.max(0.5, lbInitialScale * scaleDiff), 10);
            updateLightboxTransform();
        }
    } else if (lbPointers.length === 1 && isLbDragging) {
        e.preventDefault();
        lbPointX = e.clientX - lbStartX;
        lbPointY = e.clientY - lbStartY;
        updateLightboxTransform();
    }
}, { passive: false });

function removePointer(e) {
    lbPointers = lbPointers.filter(p => p.pointerId !== e.pointerId);
    
    if (lbPointers.length < 2) {
        lbInitialDistance = null;
    }
    if (lbPointers.length === 1) {
        isLbDragging = true;
        lbStartX = lbPointers[0].clientX - lbPointX;
        lbStartY = lbPointers[0].clientY - lbPointY;
    } else if (lbPointers.length === 0) {
        isLbDragging = false;
        lbImg.style.cursor = 'grab';
    }
}

window.addEventListener('pointerup', removePointer);
window.addEventListener('pointercancel', removePointer);


// =====================================================================
// --- BILLENTYŰZETES LAPOZÁS (Nyilak) ---
// =====================================================================
window.addEventListener('keydown', (e) => {
    const isLightboxActive = document.getElementById('lightbox') && document.getElementById('lightbox').classList.contains('active');
    const isModalActive = document.getElementById('info-modal') && document.getElementById('info-modal').classList.contains('active');
    
    if (isFlipping || isDragging || scene.classList.contains('idle') || isLightboxActive || isModalActive) {
        return;
    }

    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        if (currentSpread < spreadsData.length - 1) {
            prepareFlip(1);
            requestAnimationFrame(() => animateFlip(1, true));
        }
    } 
    else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        if (currentSpread > 0) {
            prepareFlip(-1);
            requestAnimationFrame(() => animateFlip(-1, true));
        }
    }
});