const pages = [
    { type: 'transparent', eraCss: 'era-transparent' },
    { type: 'front-cover', eraCss: 'era-cover' },

    // --- BEVEZETÉS ---
    { 
        type: 'text', eraCss: 'era-uniform', header: 'UMSZKI 100 – BEVEZETÉS', title: 'Az újpesti magyar állami fa- és fémipari szakiskola', dropCap: true,
        content: 'Újpest ikonikus épülete és kultikus oktatási intézménye - ahová újpesti fiatalok generációi jártak és járnak még most is - az Újpesti Két Tanítási Nyelvű Műszaki Technikum. Az intézmény épülete, eredeti nevén a Magyar Királyi Állami Fa- és Fémipari Szakiskola, 1926-ban épült fel. Klebelsberg Kunó kultuszminiszternek és Semsey Aladár polgármesternek kiemelt szerepe volt a létrehozásában. Születésnapunk tehát egyrészt a gyönyörű épületünk 1927-es átadásához, valamint az ekkor beinduló fémipari szakiskolai képzéshez kötődik. Az első tanévünknek az 1927/28 tanévet tekinthetjük. A kép mégis árnyaltabb. Volt egy jogelőd iskola - az Újpesti Faipari Szakiskola – mely 1895-ben kezdte meg működését. Ez az iskola költözött át - továbbra is Blockner Gyula igazgatása mellett - 1927-ben, fémipari szakiskolai tagozattal bővülve, az új épületbe.                                                                             <a href="https://edir.umszki.hu/rolunk/tortenet " target="_blank">(helytörténet 88-94.)</a> <a href="https://www.youtube.com/watch?v=-0KIu1-IwSE&list=PLiROlxlxPFLIVTnwUDQTPqc8g4Epfhs03&index=5" target="_blank">Archív felvételek</a>'
    },
    {
        type: 'text', eraCss: 'era-uniform', 
        header: 'UMSZKI 100 – BEVEZETÉS',
        content: 'Az 1928-tól kiadott iskolai Értesítők – melyek 1940-től az Évkönyv nevet kapták – a születésnapnak az 1895/96 tanévet tekintették. Az utolsó írásos anyag erről az időszámításról, az 1945/46-os évkönyv, ami kiadásra nem került, de gépelt kézirat formájában fennmaradt. 1951-ben az iskola kettévált. Létrejött az 1 sz. Faipari Technikum és a 2 sz. Gépipari Technikum, melyek más-más főhatóság irányítás alá kerültek, de mindkettő továbbra is ugyanabban az épületben működött tovább. A szétváláskor a faipar a Corvin utcai szárnyat kapta. A születésnap kérdése érdekes módon mindkét iskolánál szinte egyszerre az 1958/59 tanévben bukkan elő. Meglepő módon mindkét iskola egymástól eltérő és a korábbival nem egyező születésnapot jelölt. Az új évszámok a faipar 75 éves Jubileumi évkönyvében, illetve a nálunk újra indított évkönyv kiadás első könyvében olvasható: az 1927-es születési évvel.Az iskola már alapításakor a korabeli szakmai oktatás jelentős intézménye volt és hosszú története során képes volt a szakoktatás élvonalában maradni. A tartalmilag folyamatosan megújuló fémipari-gépészképzés a kezdetektől napjainkig a korszerű ismeretekkel rendelkező szakemberek forrása.'
    },
    // --- Foerk Ernő (kék téma) ---
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/55_Landler Jenő.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        tocTitle: 'Személyek - Foerk Ernő',
        header: 'SZEMÉLYEK', title: 'Foerk Ernő', subtitle: '(1868–1934)',
        content: 'Foerk Ernő  a magyar késő historizmus egyik legjelentősebb építésze, iparművész és műemlékvédelmi szakember volt. Legismertebb alkotása a szegedi Fogadalmi templom (Dóm), amelynek terveit Schulek Frigyes eredeti elképzeléseit átdolgozva készítette el.  Temesváron született, eredetileg szobrásznak készült, majd a bécsi Képzőművészeti Akadémián tanult építészetet. Hazatérése után Steindl Imre tanársegédje volt a Műegyetemen, ahol részt vett az Országház belső tereinek kialakításában. Emléktáblája egykori óbudai lakóházán és a szegedi Dóm altemplomában is megtalálható, ahol nyugszik. 1907-ben elnyerte a Ferenc József rend lovagkeresztjét, 1931-ben a Corvin koszorút. Foerk Ernő 1911-ben írta ezt magáról: „Két lény lakozik bennem, az egyik az alkotó művész, a másik a búvárkodó, tanulmányozó tudós ember."'
    },
    //Zsolnay csempék
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80',
        pocketTitle: 'További képek',
        gallery: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
            'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        tocTitle: 'IV. Egyéb – A múlt darabkái',
        header: 'Zsolnay csempék', title: 'Zsolnay csempék',
        content: 'Az archívumban számtalan olyan tárgy maradt fenn, amely egy adott kor technológiai csúcsát képviselte. Régi oszcilloszkópok, mechanikus számológépek és kézzel írt naplók.<br><br>Ezek az <b>egyéb kincsek</b> mesélik el talán a legpontosabban, mennyit változott a világ. Ha érdekel a régi műszerek restaurálása és története, érdemes körülnézni a <a href="https://wikipedia.org" target="_blank">Wikipédia technológia-történeti</a> lapjain.'
    },
    // iskolanevek, korszakok
    { 
        type: 'text', eraCss: 'era-esemeny',
        header: 'Iskolanevek, korszakok',
        title: 'Iskolanevek, korszakok',
        content: '1927 - 1941 Újpesti Magyar Királyi Állami Fa- és Fémipari Szakiskola<br>1941 – 1943 Gépészeti Tagozattal Működő Felsőipariskola<br>1943 – 1946 Felsőipariskola Gépészeti- és Faipari Tagozatokkal<br>1946 – 1947 2. Számú Vas- és Fémipari Felsőipariskola Faipari Tagozattal<br>1947 Újpesti Magyar Állami Felsőipariskola<br>1947 – 1948 Állami Műszaki Középiskola<br>1948 – 1949 Általános Gépészeti Állami Műszaki Szakközépiskola Általános Faipari Tagozattal<br>1950 – 1951 6. Számú Ipari Gimnázium Vas-, Fém-, Gép- és Faipari Tagozattal<br>1951 januárjától Általános Gépészeti Technikum Faipari Tagozattal<br>1951 szeptemberétől – 1955 2. Számú Általános Gépészeti Technikum Faipari Tagozattal<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum'
    },
    {
        type: 'text', eraCss: 'era-esemeny', 
        header: 'Iskolanevek, korszakok',
        content: '1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola<br>1990 – 1995 Újpesti Műszaki Szakközépiskola<br>1995 - 1998 Újpesti Műszaki Szakközépiskola és Gimnázium<br>1999 – 2001 Újpesti Kéttannyelvű Műszaki Szakközépiskola és Gimnázium<br>2001 - 2005 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola és Gimnázium<br>2005 - 2012 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola, Szakiskola és Gimnázium<br>2012 -2015 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola és Szakiskola<br>2015 – 2017 Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskolája és Szakiskolája<br>2017 – 2019 Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Szakgimnáziuma és Szakközépiskolája<br>2020 - Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Technikum'
    },
    //Blochner Gyula
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/05_Blockner_Gyula.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Blockner Gyula', title: 'Blockner Gyula', subtitle: '(1877 Székesfehérvár – 1941 Újpest)',
        content: 'Blockner Gyula neves újpesti pedagógus, szakiskolai igazgató és helytörténeti kutató volt. Gépészmérnökként végzett. Tagja volt a nagy múltú Magyar Mérnök- és Építész-Egyletnek (ahogy egyébként Hajós Alfréd is).'
    },
    //Laurencsik Béla
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/06_Laurencsik_Béla.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Laurencsik Béla', title: 'Laurencsik Béla', subtitle: '(1888 Fülek – 1972 Budapest)',
        content: 'Laurencsik Béla 1912-ben szerzett műszaki oklevelet. De a Képzőművészeti Főiskolán is tanult. Az I. világháborúban szibériai hadifogságba került Vlagyivosztokban. Több, ekkor született rajza maradt fent. A világháboró után Újpestre költözött felesége családjához. Így lett az újpesti faipari technikum rajztanára. 1922-ben nevezték ki az iskola műhelyfőnökének. 1929-től igazgatóhelyettes. Blochner Gyula után ő vette át az igazgatói feladatokat egy tanéven át: 1939-től 1940-ig. Festőművészként mesterei: Révész Imre, Hegedűs László, Edvi Illés Aladár, Szentiványi Gyula. A képzőművészeten belül több műfajban is kipróbálta magát.'
    },
    //kovacsmuhely
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/7_kovácsműhely.JPG',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszínek – Kovácsműhely', title: 'Kovácsműhely',
        content: 'A kovácsműhely, mely az épület egyetlen olyan helyisége, ahol zömében az eredeti berendezés és eszközök megmaradtak.'
    },
    //az elso tablo
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/8_az első tabló.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak – Az első tabló', title: 'Az első tabló',
        content: 'A fémipari hároméves képzés 1927-ben indult, így 1930-ban végzett az első osztály. Nyolc tanuló tett vizsgát. A tablóhoz érdekes módon jutott hozzá az iskola. 1977-ben lett az intézmény 50 éves. Ennek megünneplésére sor került. Újságban is meghirdették az esemény. Erre jelentkezett Somlyai (anno Staufer) Endre. Ő ajándékozta a tablóját az iskolának. A tablón látható Blockner Gyula, Szabó Béla s Király Endre. Ők fontos, meghatározó személyiségei voltak az intézménynek.'
    },
    //a kapu feletti címer szombilikája
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/9_a kapu feletti címer szimbolikája.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', 
        header: 'Kapu feletti címer szombilikája', title: 'A kapu feletti címer szombilikája'
    },
    //Szabó Béla
    {
        eraCss: 'era-szemelyek', type: 'image',
        image: 'KEPEK/10_Szabó Béla.jpg'
    },
    { 
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Szabó Béla', title: 'Szabó Béla', subtitle: '(1899 Józseffalva -  )',
        content: '1925-ben szerzett gépészmérnöki oklevelet a Királyi József Műegyetemen. 1927-től műhelyfőnöke az iskolának. Berendezte a fémipari tanműhelyeket, a gépházat és a szertárakat. Majd megbízott igazgató lett 1940-től. A második világháború frontjának közeledtével 1944 októberében megkezdte az iskola gépi berendezéseinek mentését, részben elásatta, részben befalaztatta azokat. A tanítás 1944. november 17-én megszakadt, és csak 1945. május 7-én indult újra. 1948 januárjában felmentették igazgatói állásából Szabó Bélát.'
    },
    //Lepcsohaz
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/11_LÉPCSŐHÁZ.JPG',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszínek – Lépcsőház', title: 'Lépcsőház'
    },
    //lépcsőházi ólomüvegablak
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/12_lépcsőházi ólomüvegablak.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak – Lépcsőházi ólomüvegablak', title: 'Lépcsőházi ólomüvegablak',
        content: 'Ez az ólomüveg a kőművesek és kőfaragók céhének jelképét ábrázolja. A szimbólum elemei a mesterség alapvető szerszámai, amelyek gyakran megjelennek céhes címereken és szabadkőműves jelképrendszerben is: Körző és derékszög: A pontosság és a mértéktartás szimbólumai. Gyalu és vésők: A megmunkálás és a finomítás eszközei. A vörös háttér gyakran használt szín a történelmi céhes üvegablakokon. Történelmi háttér: Hasonló ólomüveg alkotások Európa-szerte megtalálhatók régi városházákon vagy céhházakban. Például a németországi Stade városházáján látható egy 1721-ből származó kőműves céhpecsét, amely szinte azonos elrendezésű. Ezek a medálok az adott mesterség tiszteletére és a szakmai közösség összetartozásának jeléül készültek.'
    },
    //az igazgatoi elott
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/13_igazgatói előtt.JPG',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszínek – Igazgatói előtt', title: 'Az igazgatói előtt',
        content: 'A régi igazgatói lakás hallja ma így néz ki. Dr. Szentirmay János az 1951/52 tanév elején lett az iskola igazgatója. Ő volt az első igazgató aki nem költözött be a szolgálati lakásba. Neki is kezdtek az átalakításnak. Odáig jutottak, hogy egy tervező iroda elkészítette a terveket. Aztán a következő tanévben a szegedi technikumból az ottani igazgató helyettes Badár Gábor lett az igazgató és családjával beköltözött a lakásba, az átalakítás így elmaradt.  Badár Gábor a korábbi igazgató 1962-ig még bent lakott az iskolában. 1957. szeptenber 17–től Bartos Lívia lett az igazgató. Miután Bartos Lívia nem vette igénybe a szolgálati lakás lehetőséget, így átépítés után   itt lett kialakítva – első ütemben - az igazgatói iroda és később a teljes irodai blokk.'
    },
    //korabeli kisfilm
    { 
        type: 'image', eraCss: 'era-targyak'
    },
    {
        type: 'chapter', eraCss: 'era-targyak',
        header: 'Emléktárgyak – Lépcsőházi ólomüvegablak', title: 'Lépcsőházi ólomüvegablak',
        content: '<a href="https://www.youtube.com/watch?v=ayaf8uwFNB8" target="_blank">Filmhiradó</a>'
    },
    //az iskola egykori korterme
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/15_az iskola egykori körterme.png',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszínek – Iskola egykori korterme', title: 'Az iskola egykori korterme',
        content: 'Az Auditorium Maximum (gyakran rövidítve AudMax) latin kifejezés, amely a legnagyobb előadótermet jelöli egy oktatási intézményben. A körterem a főépület jobboldali sarokpavilonjában volt. Ez a nagyterem 300 fő feletti befogadó képességével évtizedeken keresztül kiváló színtere volt az iskola teljes közösségét mozgató programoknak. A hatvanas évek elején az iskola létszámának már a harmada sem fért be, így eredeti funkcióját elvesztette. A felfutó létszám és a beindult híradástechnikai képzés gyakorlati oktatása infrastruktúrájának megteremtése krónikus helyiség hiányt eredményezett. Ezen valamennyit segített a kollégium 1960-ban történt kiköltöztetése, de nem oldott meg minden problémát. Ezért döntés született a körterem megszüntetésére, oktató termekre történő átépítésére, ami 1962-ben megkezdődött.'
    },
    //muszaki vena
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/16_műszaki véna.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', 
        header: 'Műszaki véna', title: 'Műszaki véna',
        content:'A "műszaki véna" kifejezés a technikai érzékre, a gépek, szerkezetek működésének gyors átlátására és a gyakorlati problémamegoldó képességre utal. Ez egy olyan tehetség vagy készség, amely lehetővé teszi valakinek a technikai eszközök intuitív megértését, javítását vagy tervezését. Jellemzők: logikus gondolkodás: ok-okozati összefüggések átlátása; gyakorlatiasság: a "hogyan működik?" kérdés megválaszolása cselekvéssel; térlátás: szerkezeti elemek vizualizálása; kreativitás: új megoldások keresése technikai problémákra.'
    },
    //iskola egyenruha
    { 
        type: 'image', eraCss: 'era-targyak',
        image: ''
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak – Iskola egyenruha', title: 'Iskola egyenruha',
        content: ''
    },
    //Az udvar platánjai
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/18_platán.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Az udvar platánjai', subtitle: 'Ady Endre: A platánfa álma',
        content: 'A Nap huga, zöld szemü lány,<br>(Kit imádnak álom-vitézek)<br>Megszánt egy holdas éjjelen<br>És megigézett.<br><br>Két lábam elhült s szétbomolt<br>Gyökerekként a mélybe szállva<br>S itt állok a fehér mezőn,<br>Mint árva platánfa.<br><br>Girhes, szomorú derekam<br>Szökkenve büszke lombot ontott,<br>Lombom a felhőket veri<br>S elhagytak a gondok.<br><br>Állok: várom a Nap hugát<br>Némán a nagy, éji mezőben<br>S koronámról hull a levél<br>Zörgőn, búsan, rőten.'
    },
    //Radioamator URH-allomas HG5KCC
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/19_rádióamatőrök_1957 Galyatető.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Rádióamatőr URH-állomás', title:'Rádióamatőr URH-állomás HG5KCC',
        content: '<a href="https://www.youtube.com/watch?v=4uezzqbeYOs&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=27" target="_blank">A HG5KCC rádióamatőr URH kollektív állomás indulása 1954/55.</a><br>Vajda György kiváló pedagógus volt. Jól érzékelte: az új szak sikeres indításához kevés a tárgyi- és személyi feltételekkel foglalkozni. Szükség van a tanulók köréből egy olyan csoport szervezésére, mely a szakirány összes diákja számára mintául szolgál és az érdeklődők számára a tananyagon túlmutató ismeretanyag elsajátítását teszi lehetővé. 1954-ben szakkört alapított, melynek célja a rádióamatőr tevékenység elterjesztése az iskolában. Az akkor még a rádióamatőrök körében is „fehér folt”-nak számító URH sávot választotta. Ez kitűnő döntés volt, hiszen ehhez az adót, vevőt és antennát – más lehetőség nem lévén – házilag kellett előállítani. A tevékenység súlypontja így a készülékek, eszközök megépítése volt, ami nagyon jól támogatta az iskola képzési céljainak megvalósulását. A rádióamatőr tevékenység sokak számára élethosszig tartó hobbivá vált. 1955-ben Vajda György rádióamatőr vizsgát tett és adóengedélyt kapott URH kollektív rádióamatőr adóállomás működtetetésére. Az országban ekkor tíz alatt volt ezek száma. <a href="https://www.youtube.com/watch?v=UlsbM1RyCFA&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=28" target="_blank">1956-ban már két nemzetközi URH versenyen elindultunk.</a>'
    },
    //Jegesmedve relikvia
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/20_jegesmedve relikvia.JPG',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/20_jegesmedve relikvia.JPG',
            'KEPEK/20_jegesmedve átadás 1945_46.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak – Jegesmedve relikvia', title: 'Jegesmedve relikvia',
        content: 'A jegesmedve szobor feliratán látszik, hogy az 1945/46. évi középiskolás labdarúgó bajnokságot nyerte meg a Landler csapata. A győztesek neve a réztábláról leolvasható.'
    },
    //a tornaterem
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/21_tornaterem.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Tornaterem', title:'Tornaterem',
        content: 'A tornatermet mélyítették 5 méterrel'
    },
    //Dr. Radnai László
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/55_Landler Jenő.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Dr. Radnai László', title: 'Dr. Radnai László', subtitle: '(xxxx-xxxx)',
        content: ''
    },
    //Tanar-diak sportesemeny 1943-bol
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/23_Szabó Gyula véd.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Események - Tanár-diák sportesemény', title: 'Tanár-diák sportesemény 1943-ból',
        content: 'Szokás volt, hogy a tantestület és a diákság minden évben kirándult valahová. Az 1943-as év kirándulása június 2-án Visegrádon volt. Egyéb programok mellett sor került egy focimeccsre az elméleti és gyakorlati tanárok között. Az elméletiek 3:1 –re győztek. A képen Szabó Gyula, az iskola akkori igazgatója őrzi a kaput vigyázó szemeivel.'
    },
    //Tanmuhelyek
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/24_TANMŰHELY.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Tanműhelyek', title:'Tanműhelyek',
        content: ''
    },
    //autómodellező és gépjármű szakkör
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/25_.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Események - Autómodellező és Gépjármű Szakkör', title: 'Autómodellező és Gépjármű Szakkör',
        content: 'A műhelyben Fekete Gyula tanár vezetésével működött az autómodellező és gépjármű szakkör. A tanár úr volt diákja, Halász Erika (1953-57) segítségével elérte, hogy annak munkahelye – a  Csepel Motorkerékpárgyár – alkatrészekben egy Pannónia motorkerékpárt adományozott az iskolának. Ezek zömében hibásak voltak. Felújításuk és az összeszerelés 1959 őszétől a szakkörben történt. A munkába bekapcsolódott  az 1959/60 tanév III.B osztályának néhány lelkes tanulója is, köztük Mucsi Ferenc akitől a képeket kaptam. Fekete Gyula tanár. 1934 és 1967 között oktatott az iskolában, fémforgácsolás gyakorlatot, ezen belül zömében esztergálást. Hobbija volt a gépjármű. Nyugdíjasként 1968 és 1974 között az iskola gépkocsiját vezette. Sóvárgó tekintetek követik a ”száguldó” Mucsi Ferencet. A képen jól látszik, hogy ekkor az udvarnak még nem volt szilárd burkolata.'
    },
    //Az iskola "helyrajza"
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/26_az iskola helyrajza.jpg',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/26B_Hősök ligete.jpg',
            'KEPEK/26C_Hősök ligete.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg',
        header: 'Helyszín - Iskola helyrajza', title:'Az iskola "helyrajza"',
        content: '1880-as években Vasút utca volt, majd 1926-tól Horthy Miklós utca, 1945-től Dózsa György utca, 1991-től Görgey Artúr utca lett, az elnevezés arra utal, hogy 1849 januárjában itt vonult át Görgey Artúr hadserege. Iskolánk mögött egy csodálatosan szép park – a Hősök ligete – állt. A mellékelt térképen is láthatóan a Szent Imre út, Leiningen Károly utca, Munkácsy Mihály utca és Bajza János utca által határolt területen feküdt. Volt benne egy halastó, melynek két oldalát egy szép fahíd kötötte össze. Középtájon egy mesterségesen kialakított kis dombon vezetett át a sétány. Innen teljes pompájában lehetett áttekinteni a bokrokkal, fákkal és virágokkal díszített parkot. Körben kerítés volt, bejáratként a Corvin utca - akkor Revízió utca -magasságában kialakított díszes kovácsoltvas kapu szolgált. Erre a részre építették az Országzászló nevet viselő első világháborús emlékművet az elhunyt hősök tiszteletére. A Hősök ligete park az emlékművel 1935-ben készült el és lett átadva. Ettől kezdve a város itt rendezte a nemzeti ünnepeken a megemlékezéseket, ünnepélyes zászlófelvonással. A háború alatt a környéken élők szükségből a fákat kivágták és eltüzelték, majd a háború után az emlékmű is lebontásra került. Erre a területre épült nem sokkal később a Szent Imre út vonalában egy lakóépület, mögötte óvoda, bölcsőde és a Bajza utcai Általános Iskola. Mindezek ma is funkcionálnak.'
    },
    //Az orosz nyelv oktatása
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/27_iskolacímerek.jpg',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/27_iskolacímer.jpg',
            'KEPEK/27_iskolacímerek.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Események - Orosz nyelv oktatása', title: 'Az orosz nyelv oktatása',
        content: ''
    },
    //Major tamas a Landlerben
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/28_MAJOR TAMÁS.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Major Tamás', title: 'Major Tamás a Landlerben',
        content: 'Major Tamás színművész a diákklub vendége volt 1972-ben. Az iskolai diákszervezet - az akkori KISZ -szervezésében a diákok láthatták a Nemzeti Színházban -  a Hevesi Sándor téren - Peter Weiss: A luzitán szörny c. drámáját. Az előadás egy sajátos és emlékezetes színházi produkció volt, melynek hatástörténetéhez iskolánk is kapcsolódik oly módon, hogy az előadást követően Major Tamás a színház főrendezője – kiemelkedő színészegyéniség – meglátogatta az iskolát és a diákklubban élményt jelentő beszélgetést folytatott az érdeklődő diákokkal.'
    },
    //Bartos Lívia
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/29_BARTOS LÍVIA.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Bartos Lívia', title: 'Bartos Lívia', subtitle: '(1923 Budapest – 1999 Budapest)',
        content: 'Gazdasági mérnöki diplomáját a Budapesti Műszaki Egyetem Gépészmérnöki Karának gazdaságmérnöki szakán, gépipari ágazaton szerezte. 23 éven át látta el az iskola igazgatói teendőit 1957 és 1980 között. Neki köszönhető, hogy a mi iskolánkat bízták meg az országban először számítástechnikai oktatás bevezetésével.'
    },
    //Az elso nemzetkozi kapocs
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/30_jugoszláv kapcsolatok.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Esemény – Első nemzetközi kapocs', title: 'Az első nemzetközi kapocs', subtitle: 'Kranj, Ljubljana',
        content: 'A múlt század hatvanas éveinek közepére csökkent a feszültség Magyarország és Jugoszlávia között. Nyilván politikai nyomásra a KGM Oktatási Osztálya is szervezett kapcsolatfelvételt. Mint a kiemelkedően jó iskola, az UMSZKI (akkor Landler) lett kijelölve a projektre. Az útra 1964 szeptemberében került sor. A vendéglátó iskola egy Ljubljánában működő szakképző intézmény volt.'
    },
    //naplok, ellenorzok, bizonyitvanyok
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Naplók, ellenőrzők, bizonyítványok', title: 'Naplók, ellenőrzők, bizonyítványok',
        content: 'Digitális bizonyítvány, Kréta-értesítő, Kréta-napló sem volt egészen a 2000-es évekig, így az ellenőrzők, bizonyítványok, tanári naplók megléte és bejegyzései mutatták az adott tanévek eredményeit, szolgáltak az oktatás eredményekben mérhető lenyomataként. A kézzel ékesen írt bizonyítványok, az érdemjegyekkel teletűzdelt ellenőrzők és naplók mára kordokumentumként is szolgálnak.'
    },
    //Udvaratalakitas
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/32_udvarátalakítás.JPG',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/32_udvarátalakítás.JPG',
            'KEPEK/32_medence.jpg',
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Udvar', title: 'Udvarátalakítás',
        content: 'Eredetileg belső parkja volt az iskola épületének. De azt is kevesen tudják, hogy eredetileg az udvaron volt egy medence a mai tengópálya helyén, kb. 4x8 méteres és 1,2 méter mélységű. Egyáltalán nem sportolási vagy fürdőzési célokat szolgált. A háború előtt építették tűzoltó víz tárolásának céljára. Az udvar „burkolata” ekkor még pormentesített, döngölt föld volt. 1966-ban – a toldalék épület elkészülte után - került sor az udvar felújítására. Ekkor tüntették el a medencét és készítették el alapozás nélkül a teljes udvar aszfaltburkolatát.'
    },
    //Szalagavatok, szalagtuzok
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/33_szalagavatók.jpg',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/33_szalagavatók.jpg',
            'KEPEK/33B_szalagavatók.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Esemény – Szalagavatók', title: 'Szalagavatók és szalagtuzok',
        content: 'Iskolánkban a nappali tagozaton az első érettséginek is megfelelő végbizonyítványt 1950-ben kapta egy ipari gimnáziumi (gépészeti) osztály. Elvileg ekkor lehetett volna az első szalagtűzés. Az első ismert szalagtűzés 1957-ben történt. . Az 1953-57 ~ B osztály az iskolában tartott egy szűk-körű rendezvényt, ahol az osztályfőnök – Németh László - feltűzte a szalagokat. Farsangi mulatsággal egybekötött szalagtűzés, az 1954-58-as. 1959-ben először fordult elő, hogy a szaltűzés épületen kívül történt. Valamelyik kultúrházban tartották. Ez volt az első igazi „Szalagavató Bál”, nyitótánccal. Iskolában, a Gellért szálló márványcsarnokában (1964, 1965) …. Jégcsarnok <a href="https://www.youtube.com/watch?v=63URkrkH2UU" target="_blank">2002-es szalagavató tanári tánca</a>'
    },
    //tanacsterem
    { 
        type: 'image', eraCss: 'era-helyiseg'
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Tanácsterem', title: 'Tanácsterem',
        content: 'A 113-as számú terem a tanácsterem, az igazgatóság és a korábban naplószobaként funkcionáló tanári, 2022 óta az iskolatörténeti gyűjteménynek helyet adó terem között helyezkedik el. Funkcióját tekintve igen forgalmas helyszíne az épületnek: értekezletek, érettségi vizsgák, Erasmus találkozók, projektmunkák, versmondó versenyek, dolgozatírások helyszínéül szolgál tanévról tanévre.'
    },
    //dinasztiák
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/55_Landler Jenő.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Dinasztiák', title: 'Dinasztiák',
        content: 'Magyar kommunista politikus, jogász, a 20. századi magyar munkásmozgalom egyik kulcsfigurája. A kommün bukása után emigrált, a Kommunisták Magyarországi Pártja egyik vezetője maradt haláláig.<br><br>Az intézmény megnevezésében 35 éven át jelen volt Landler Jenő neve:<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola'
    },
    //evkonyvek
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80',
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Évkönyvek', title: 'Évkönyvek',
        content: ''
    },
    //hiradastechnikai kepzes
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'https://images.unsplash.com/photo-1551131628-6623bc17e826?w=800&q=80'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Esemény – Hiradástechnikai képzés', title: 'Híradástechnikai képzés',
        content: 'Szerencsésen egészült ki az iskola profilja az ötvenes években az akkor újdonságnak számító híradásipari tagozattal. Ebben az időszakban vált az iskola a főváros egyik legnagyobb oktatási intézményévé.'
    },
    //sportelet,sportsikerek
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/38_sportélet.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Esemény – Sportélet', title: 'Sportélet és sportsikerek',
        content: 'Szöllősi Antal iskolánk legendás testnevelő tanára a negyvenes évek végén kinevelt egy kitűnő tornász csapatot. Versenyeken is indultak. Szöllősi a torna mellett az atlétikával is kiemelten foglalkozott. Sete Vilmos tanár úr jóvoltából az UMSZKI egyik sikersportága évtizedeken keresztül a kézilabda volt. Andorfer János - iskolánk olt diákja, tanára - a kerületi, városi labdarúgó tornákra nevezte és kísérte rendszeresen az UMSZKI csapatait. Szenczi László 1. Gáll Mária – tornász 2. Bakos István – kézilabdázó 3. Jakab István – kézilabdázó 4. Sütő József – atléta, maratonista 5. Fekete Sándor – atléta 6. Tóth Zoltán – labdarúgó 7. Nyirádi György – kajakozó 8. Mózes András – atléta, maratonista 9. Brabant Béla – gyeplabda játékos 10. Tóth Zoltán – motoros hajómodellező 11. Ancsin János – jégkorongozó 12. Brockhauser István – labdarúgó 13. Sztankó Éva – röplabdázó 14. Szűcs Lajos – labdarúgó 15. Hoboth Sándor – röplabdázó 16. Giczy Csaba – kajakozó 17. Füzesi Zsolt – labdarúgó 18. Kovács Zoltán – válogatott vízilabdázó 19. Vass Sándor – kézilabdázó 20. Móró Endre – thai-boxoló 21. Spránitz Gábor – sportlövő 22. Vass Károly – kézilabdázó 23. Monostori Attila – vízilabdázó 24. Lange Péter - RSM Hungary Sail Racing Team tagja 25. Battlay Krisztina - röplabda UTE, Vasas 26. Lőw Zsolt - labdarúgó 27. Nyerges Krisztián - labdarúgó 28. Czingli László – tornász 29. Szirányi Bence - válogatott jégkorongozó 30. Németh Zsanett - olimpiai birkózó 31. Guczoghy György - tornász 32. Ágh György - válogatott vízilabdázó 33. Farkas János - válogatott kalapácsvető 34. Nagy Tibor - válogatott labdarúgó'
    },


    //MINTA//
    // --- SZEMÉLYEK (Kék téma) ---
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/55_Landler Jenő.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Landler Jenő', title: 'Landler Jenő', subtitle: '(1875–1928)',
        content: 'Magyar kommunista politikus, jogász, a 20. századi magyar munkásmozgalom egyik kulcsfigurája. A kommün bukása után emigrált, a Kommunisták Magyarországi Pártja egyik vezetője maradt haláláig.<br><br>Az intézmény megnevezésében 35 éven át jelen volt Landler Jenő neve:<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola'
    },


    // --- TÖRTÉNET (Piros téma) ---
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'https://images.unsplash.com/photo-1551131628-6623bc17e826?w=800&q=80',
        pocketTitle: 'További képek',
        gallery: [
            'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80',
            'https://images.unsplash.com/photo-1580536417537-eb4a4d6b63f5?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Esemény – Mérföldkövek', title: 'Az Újjáépítés és Fejlődés', subtitle: 'Korszakok a történelemben',
        content: 'Az iskola <b>1927-es alapítása</b> után hamar szembesült a világtörténelem viharaival. A háború és az azt követő újjáépítés komoly próbatétel elé állította a közösséget.<br><br>A korszak történelmi hátterének mélyebb megértéséhez érdemes átlapozni a <a href="https://zanza.tv" target="_blank">Zanza.tv történelmi oktatótárát</a>. Később, a technológiai robbanással a híradástechnika, majd a 90-es évektől az informatika forradalma határozta meg a mindennapokat.'
    },

    // --- HELYSZÍN (Zöld téma) - 10 képes galéria ---
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
        pocketTitle: 'További képek',
        gallery: [
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
            'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Tanácsterem', title: 'Tanácsterem',
        content: '1927 óta működő intézményünk 114-es termében, korábban naplószobájában, kapott helyett 2022 novemberében a megújult iskolatörténeti gyűjtemény.<br><br>Ennek alapjául az iskola alagsorában 20 éven át működő múzeum anyaga és Urbán Kornélnak – iskolánk egykori diákjának és későbbi mérnöktanárának – hagyatéka szolgált.'
    },

    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/95_új múzeum.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        tocTitle: 'Helyiség - Új múzeum',
        header: 'Új múzeum', subtitle: 'Iskolatörténeti gyűjtemény',
        content: '1927 óta működő intézményünk 114-es termében, korábban naplószobájában, kapott helyett 2022 novemberében a megújult iskolatörténeti gyűjtemény.<br>Ennek a gyűjteménynek alapjául az iskola alagsorában 20 éven át működő múzeum anyaga és Urbán Kornélnak – iskolánk egykori diákjának és későbbi mérnöktanárának – hagyatéka szolgált. Az ajtón elhelyezett táblán szereplő felirat: „Iskolatörténeti gyűjtemény Urbán Kornél emlékére” is ezt hirdeti. Még a 2002-ben, iskolánk fennállásának 75. évfordulójára alapított Iskola- és technikatörténeti gyűjtemény az ERASMUS+ “Sustainability- Preserving Europe for the Future Generations” projekt keretében és eredményeként újult meg intézményünk 95. tanévében. Az ünnepélyes átadás 2022. november 9-én volt.<br>A kibővített múzeumban igyekeztünk megmutatni Urbán Kornél hagyatékának az iskolára vonatkozó jelentős részét. Ezért is választottunk a gyűjtemény méltó mottójaként az alábbi Ipolyi Arnold idézetet:<br>„Őrizzük emlékeinket, gyűjtsük össze töredékeinket, nehogy végleg elvesszenek,<br>s ezáltal is üresebb legyen a múlt, szegényebb a jelen, kétesebb a jövő.”'

    },

    // --- EGYÉB (Arany téma) ---
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80',
        pocketTitle: 'További képek',
        gallery: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
            'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        tocTitle: 'IV. Egyéb – A múlt darabkái',
        header: 'IV. FEJEZET – EGYÉB', title: 'Ikonikus Tárgyak', subtitle: 'Műszerek és emlékek',
        content: 'Az archívumban számtalan olyan tárgy maradt fenn, amely egy adott kor technológiai csúcsát képviselte. Régi oszcilloszkópok, mechanikus számológépek és kézzel írt naplók.<br><br>Ezek az <b>egyéb kincsek</b> mesélik el talán a legpontosabban, mennyit változott a világ. Ha érdekel a régi műszerek restaurálása és története, érdemes körülnézni a <a href="https://wikipedia.org" target="_blank">Wikipédia technológia-történeti</a> lapjain.'
    },

    { type: 'back-cover', eraCss: 'era-cover' },
    { type: 'transparent', eraCss: 'era-transparent' }
];