// data.js - Gazdagon formázott tartalom archívumi és külső hivatkozásokkal
const pages = [
    { type: 'transparent', eraCss: 'era-transparent' },
    { type: 'front-cover', eraCss: 'era-cover' },

    // --- BEVEZETÉS (1. Oldalpár) ---
    { 
        type: 'image', eraCss: 'era-uniform',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=800&q=80',
    },
    {
        type: 'text', eraCss: 'era-uniform', dropCap: true,
        header: 'UMSZKI 100 – BEVEZETÉS',
        title: 'Egy Évszázad Öröksége', subtitle: 'A Szerkesztőség',
        content: 'Ez a kötet száz esztendő emlékeit foglalja magában. Egy évszázadnyi tudás, közösség és szakmai fejlődés krónikája olvasható ezeken a lapokon.<br>Az alábbi fejezetekben végigjárjuk az intézmény meghatározó személyiségeit, legfontosabb történelmi mérföldköveit, ikonikus helyszíneit, és azokat a tárgyakat, amelyek végigkísérték diákok ezreinek mindennapjait. Naprakész információkért és aktualitásokért látogasd meg az <a href="https://www.umszki.hu" target="_blank">UMSZKI Hivatalos Weboldalát</a>.'
    },

    // --- SZEMÉLY (2. Oldalpár) ---
    { 
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/55_Landler Jenő.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        tocTitle: 'Személyek',
        header: 'SZEMÉLY', title: 'Landler Jenő', subtitle: '(1875–1928)',
        content: 'Magyar kommunista politikus, jogász, a 20. századi magyar munkásmozgalom egyik kulcsfigurája. A kommün bukása után emigrált, a Kommunisták Magyarországi Pártja egyik vezetője maradt haláláig.<br>Az intézmény megnevezésében 35 éven át jelen volt Landler Jenő neve:<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>58 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola'
    },

    // --- TÖRTÉNET (3. Oldalpár) ---
    { 
        type: 'image', eraCss: 'era-uniform',
        image: 'https://images.unsplash.com/photo-1551131628-6623bc17e826?w=800&q=80',
        pocketTitle: 'Korabeli Iratok',
        gallery: [
            'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80',
            'https://images.unsplash.com/photo-1580536417537-eb4a4d6b63f5?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        tocTitle: 'II. Történet – Mérföldkövek',
        header: 'II. FEJEZET – TÖRTÉNET', title: 'Az Újjáépítés és Fejlődés', subtitle: 'Korszakok a történelemben',
        content: 'Az iskola <b>1927-es alapítása</b> után hamar szembesült a világtörténelem viharaival. A háború és az azt követő újjáépítés komoly próbatétel elé állította a közösséget.<br>A korszak történelmi hátterének mélyebb megértéséhez érdemes átlapozni a <a href="https://zanza.tv" target="_blank">Zanza.tv történelmi oktatótárát</a>. Később, a technológiai robbanással a híradástechnika, majd a 90-es évektől az informatika forradalma határozta meg a mindennapokat.'
    },

    // --- HELYSZÍN (4. Oldalpár) ---
    { 
        type: 'image', eraCss: 'era-uniform',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
        pocketTitle: 'Régi Épületszárnyak',
        gallery: [
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        tocTitle: 'III. Helyszín – Ahol a jövő épül',
        header: 'III. FEJEZET – HELYSZÍN', title: 'A Falak Titkai', subtitle: 'Műhelyek és Tantermek',
        content: 'A laboratóriumok, a hatalmas gépekkel felszerelt műhelyek és a hosszú folyosók mind magukon viselik az eltelt száz év nyomát. Itt nemcsak elméletet tanultak a diákok, hanem a gyakorlatban formálták az anyagot.<br>Az iskola épülete <i>Újpest szívében</i> található, amelyről részletes térképeket és városrészi leírásokat találhatsz a <a href="https://google.com/maps" target="_blank">Google Térképen</a>. Az udvar és a legendás "műhelyek" mind olyan terek, amelyekhez generációk emlékei fűződnek.'
    },

    // --- EGYÉB (5. Oldalpár) ---
    { 
        type: 'image', eraCss: 'era-uniform',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80',
        pocketTitle: 'Emléktárgyak',
        gallery: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
            'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        tocTitle: 'IV. Egyéb – A múlt darabkái',
        header: 'IV. FEJEZET – EGYÉB', title: 'Ikonikus Tárgyak', subtitle: 'Műszerek és emlékek',
        content: 'Az archívumban számtalan olyan tárgy maradt fenn, amely egy adott kor technológiai csúcsát képviselte. Régi oszcilloszkópok, mechanikus számológépek és kézzel írt naplók.<br>Ezek az <b>egyéb kincsek</b> mesélik el talán a legpontosabban, mennyit változott a világ. Ha érdekel a régi műszerek restaurálása és története, érdemes körülnézni a <a href="https://wikipedia.org" target="_blank">Wikipédia technológia-történeti</a> lapjain.'
    },

    { type: 'back-cover', eraCss: 'era-cover' },
    { type: 'transparent', eraCss: 'era-transparent' }
];