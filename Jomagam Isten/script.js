const cards = document.querySelector('#cards');
const template = document.querySelector('#cardTemplate');
const searchInput = document.querySelector('#searchInput');
const categorySelect = document.querySelector('#categorySelect');

const modal = document.querySelector('#detailModal');
const modalClose = document.querySelector('#modalClose');
const modalNumber = document.querySelector('#modalNumber');
const modalCategory = document.querySelector('#modalCategory');
const modalTitle = document.querySelector('#modalTitle');
const modalMeta = document.querySelector('#modalMeta');
const modalDescription = document.querySelector('#modalDescription');
const modalGallery = document.querySelector('#modalGallery');
const imageViewer = document.querySelector('#imageViewer');
const imageViewerImg = document.querySelector('#imageViewerImg');
const imageViewerClose = document.querySelector('#imageViewerClose');

const categories = [...new Set(EXHIBITS.map(item => item.category))].sort((a,b)=>a.localeCompare(b,'hu'));
for (const category of categories) {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category[0].toUpperCase() + category.slice(1);
  categorySelect.appendChild(option);
}

function normalize(text){return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function padId(id){return String(id).padStart(2,'0');}
function anchorToId(anchor){
  const match = String(anchor).replace('#','').match(/targy-(\d+)/);
  return match ? Number(match[1]) : null;
}
function fallbackItem(anchor){
  const id = anchorToId(anchor);
  if (!id) return null;
  return {
    id,
    title: `${padId(id)}. kiállítási elem`,
    meta: 'A pontos megnevezés később tölthető ki',
    category: 'térképen jelölt elem',
    description: 'Ez a szám szerepel a teremtérképen. A tárgy pontos nevét, leírását és fotóit az items.js fájlban lehet majd megadni.',
    anchor: `targy-${padId(id)}`
  };
}
function getItemByAnchor(anchor){
  const clean = String(anchor).replace('#','');
  return EXHIBITS.find(item => item.anchor === clean) || fallbackItem(clean);
}

function defaultImagesFor(item){
  const id = padId(item.id);
  return item.images || [
    `assets/targy-kepek/targy-${id}/1.jpg`,
    `assets/targy-kepek/targy-${id}/2.jpg`,
    `assets/targy-kepek/targy-${id}/3.jpg`
  ];
}

function openImageViewer(src, alt){
  imageViewerImg.src = src;
  imageViewerImg.alt = alt || 'Tárgyfotó nagyítva';
  imageViewer.classList.add('is-open');
  imageViewer.setAttribute('aria-hidden','false');
}
function closeImageViewer(){
  imageViewer.classList.remove('is-open');
  imageViewer.setAttribute('aria-hidden','true');
  imageViewerImg.src = '';
}

function renderGallery(item){
  modalGallery.innerHTML = '';
  const images = defaultImagesFor(item);
  images.forEach((src, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-item';
    button.type = 'button';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${item.title} fotó ${index + 1}`;
    img.loading = 'lazy';
    img.addEventListener('error', () => button.remove());
    const caption = document.createElement('span');
    caption.textContent = `${padId(item.id)}/${index + 1}`;
    button.append(img, caption);
    button.addEventListener('click', () => openImageViewer(src, img.alt));
    modalGallery.appendChild(button);
  });
}

function clearActiveCards(){
  document.querySelectorAll('.card.is-active').forEach(card => card.classList.remove('is-active'));
}
function markActiveCard(anchor){
  clearActiveCards();
  const card = document.getElementById(anchor);
  if (!card) return;
  card.classList.add('is-active');
  card.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

function openDetail(item, updateHash = true){
  if (!item) return;
  modalNumber.textContent = padId(item.id);
  modalCategory.textContent = item.category;
  modalTitle.textContent = item.title;
  modalMeta.textContent = item.meta;
  modalDescription.textContent = item.description;
  renderGallery(item);
  markActiveCard(item.anchor);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  if (updateHash && location.hash !== `#${item.anchor}`) {
    history.pushState(null, '', `#${item.anchor}`);
  }
}
function closeDetail(){
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function render(){
  const query = normalize(searchInput.value.trim());
  const selected = categorySelect.value;
  cards.innerHTML = '';
  const filtered = EXHIBITS.filter(item => {
    const haystack = normalize(`${item.title} ${item.meta} ${item.category} ${item.description}`);
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = selected === 'all' || item.category === selected;
    return matchesQuery && matchesCategory;
  });
  for (const item of filtered) {
    const node = template.content.cloneNode(true);
    const article = node.querySelector('.card');
    article.id = item.anchor;
    article.tabIndex = 0;
    article.setAttribute('role','button');
    article.setAttribute('aria-label', `${item.title} megnyitása`);
    node.querySelector('.number').textContent = padId(item.id);
    node.querySelector('.category').textContent = item.category;
    node.querySelector('h2').textContent = item.title;
    node.querySelector('.meta').textContent = item.meta;
    node.querySelector('.description').textContent = item.description;
    const openButton = node.querySelector('.open-detail');
    openButton.addEventListener('click', (event) => {
      event.stopPropagation();
      openDetail(item);
    });
    article.addEventListener('click', () => openDetail(item));
    article.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDetail(item);
      }
    });
    cards.appendChild(node);
  }
  if (!filtered.length) cards.innerHTML = '<p class="empty">Nincs találat. Próbálj más keresőszót vagy kategóriát.</p>';
}

searchInput.addEventListener('input', render);
categorySelect.addEventListener('change', render);
modalClose.addEventListener('click', closeDetail);
modal.addEventListener('click', (event) => { if (event.target === modal) closeDetail(); });
imageViewerClose.addEventListener('click', closeImageViewer);
imageViewer.addEventListener('click', (event) => { if (event.target === imageViewer) closeImageViewer(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (imageViewer.classList.contains('is-open')) closeImageViewer();
    else closeDetail();
  }
});
window.addEventListener('hashchange', () => {
  const item = getItemByAnchor(location.hash);
  if (item) openDetail(item, false);
});

render();
window.addEventListener('load', () => {
  const item = getItemByAnchor(location.hash);
  if (item) setTimeout(()=>openDetail(item, false), 120);
});
