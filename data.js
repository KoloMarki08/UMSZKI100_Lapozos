// data.js - Csak az oldalak tartalma
const pages = [
    { type: 'transparent', eraCss: 'era-transparent' },
    { type: 'front-cover', eraCss: 'era-cover' },

    {
        type: 'text', eraCss: 'era-1920', dropCap: true,
        header: 'UMSZKI 100 – TÖRTÉNELMI ARCHÍVUM <br>1927-2027',
        title: 'Előszó', subtitle: 'A Szerkesztőség',
        content: 'Ez a kötet száz esztendő emlékeit foglalja magában. Egy évszázadnyi tudás, közösség és szakmai fejlődés krónikája olvasható ezeken a lapokon.'
    },
    {
        type: 'toc', eraCss: 'era-1920',
        header: 'UMSZKI 100 – TÖRTÉNELMI ARCHÍVUM <br>1927-2027',
        title: 'Tartalom', subtitle: 'Kattints a fejezetre az ugráshoz'
    },

    {
        type: 'chapter', eraCss: 'era-1920', dropCap: true,
        tocTitle: 'I. Az alapítás kora — 1927–1944',
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA', title: 'Az alapítás előzményei',
        content: 'Az intézmény 1927-ben nyitotta meg kapuit. Ebben a nehéz, de reménnyel teli időszakban hatalmas szükség volt jól képzett műszaki szakemberekre.'
    },
    {
        type: 'text', eraCss: 'era-1920',
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA', title: 'Az első évek',
        content: 'A kezdeti években az iskola épülete még másként festett, de a tanárok elhivatottsága már akkor is a maihoz volt mérhető. A diákok kemény fizikai és szellemi munkával sajátították el az ipari alapismereteket. <br><br>Az első tantervek még a gépészetre fókuszáltak...'
    },

    {
        type: 'text', eraCss: 'era-1920',
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA',
        content: '...mivel abban az időben az ipar gerincét a gépgyártás és a fémfeldolgozás adta. Hamarosan azonban nyilvánvalóvá vált, hogy a technológia gyorsuló ütemben fejlődik.<br><br>Az 1930-as évekre az iskola laboratóriumai és műhelyei folyamatosan bővültek. Új esztergagépek és mérőműszerek érkeztek, melyek mind a gyakorlati oktatás magas színvonalát szolgálták.'
    },
    {
        type: 'text', eraCss: 'era-1920',
        header: 'I. FEJEZET – AZ ALAPÍTÁS KORA', title: 'A háború vihara',
        content: 'Az 1940-es évek elejére az intézmény életére sötét árnyékot vetettek a világesemények. Az oktatást egyre nehezebb volt fenntartani, mégis a falak között mindvégig megmaradt a szolidaritás és a tudás tisztelete.'
    },

    {
        type: 'chapter', eraCss: 'era-1950', dropCap: true,
        tocTitle: 'II. Újjáépítés és Landler-korszak',
        header: 'II. FEJEZET – ÚJJÁÉPÍTÉS', title: 'Új korszak',
        content: 'A háború utáni években az iskola története új fejezethez érkezett. A romok eltakarítása után az oktatás soha nem látott lendülettel indult újra.'
    },
    {
        type: 'text', eraCss: 'era-1950',
        header: 'II. FEJEZET – ÚJJÁÉPÍTÉS', title: 'Landler-korszak',
        content: 'A technikai oktatás szerepe egyre hangsúlyosabbá vált. Ebben a korszakban az intézmény <span class="info-link" data-name="Landler Jenő" data-info="Landler Jenő (1875–1928) ügyvéd és politikus. Az iskola 1950 és 1990 között viselte a nevét (Landler Jenő Gép- és Híradásipari Technikum), ekkor vált az intézmény a hazai híradástechnikai oktatás legfontosabb központjává." data-img="KEPEK/landler_jeno.jpg">Landler Jenő</span> nevét viselte, és óriási fejlődésen ment keresztül a híradástechnika irányába.'
    },

    {
        type: 'chapter', eraCss: 'era-1990', dropCap: true,
        tocTitle: 'III. Az informatika hajnala',
        header: 'III. FEJEZET – INFORMATIKA', title: 'Az informatika hajnala',
        content: 'A számítógépek megjelenése új irányt adott az oktatásnak az 1980-as és 90-es évek fordulóján. Megjelentek az első PC-k a tantermekben.'
    },
    {
        type: 'text', eraCss: 'era-1990',
        header: 'III. FEJEZET – INFORMATIKA', title: 'Modern eszközök',
        content: 'A műszaki képzés egyre jobban összekapcsolódott a digitális világgal. A programozás és a hálózatépítés az alaptanterv része lett.'
    },

    { type: 'back-cover', eraCss: 'era-cover' },
    { type: 'transparent', eraCss: 'era-transparent' }
];