// data.js - Hozzáigazítva az új színes kategóriákhoz és a 10 képes galériához
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
        pocketTitle: 'Emléktárgyak',
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
    // iskolanevek, korszakok
    { 
        type: 'text', eraCss: 'era-esemeny', header: 'UMSZKI 100 – BEVEZETÉS', title: 'Az újpesti magyar állami fa- és fémipari szakiskola', dropCap: true,
        content: 'Újpest ikonikus épülete és kultikus oktatási intézménye - ahová újpesti fiatalok generációi jártak és járnak még most is - az Újpesti Két Tanítási Nyelvű Műszaki Technikum. Az intézmény épülete, eredeti nevén a Magyar Királyi Állami Fa- és Fémipari Szakiskola, 1926-ban épült fel. Klebelsberg Kunó kultuszminiszternek és Semsey Aladár polgármesternek kiemelt szerepe volt a létrehozásában. Születésnapunk tehát egyrészt a gyönyörű épületünk 1927-es átadásához, valamint az ekkor beinduló fémipari szakiskolai képzéshez kötődik. Az első tanévünknek az 1927/28 tanévet tekinthetjük. A kép mégis árnyaltabb. Volt egy jogelőd iskola - az Újpesti Faipari Szakiskola – mely 1895-ben kezdte meg működését. Ez az iskola költözött át - továbbra is Blockner Gyula igazgatása mellett - 1927-ben, fémipari szakiskolai tagozattal bővülve, az új épületbe.                                                                             <a href="https://edir.umszki.hu/rolunk/tortenet " target="_blank">(helytörténet 88-94.)</a> <a href="https://www.youtube.com/watch?v=-0KIu1-IwSE&list=PLiROlxlxPFLIVTnwUDQTPqc8g4Epfhs03&index=5" target="_blank">Archív felvételek</a>'
    },
    {
        type: 'text', eraCss: 'era-esemeny', 
        header: 'UMSZKI 100 – BEVEZETÉS',
        content: 'Az 1928-tól kiadott iskolai Értesítők – melyek 1940-től az Évkönyv nevet kapták – a születésnapnak az 1895/96 tanévet tekintették. Az utolsó írásos anyag erről az időszámításról, az 1945/46-os évkönyv, ami kiadásra nem került, de gépelt kézirat formájában fennmaradt. 1951-ben az iskola kettévált. Létrejött az 1 sz. Faipari Technikum és a 2 sz. Gépipari Technikum, melyek más-más főhatóság irányítás alá kerültek, de mindkettő továbbra is ugyanabban az épületben működött tovább. A szétváláskor a faipar a Corvin utcai szárnyat kapta. A születésnap kérdése érdekes módon mindkét iskolánál szinte egyszerre az 1958/59 tanévben bukkan elő. Meglepő módon mindkét iskola egymástól eltérő és a korábbival nem egyező születésnapot jelölt. Az új évszámok a faipar 75 éves Jubileumi évkönyvében, illetve a nálunk újra indított évkönyv kiadás első könyvében olvasható: az 1927-es születési évvel.Az iskola már alapításakor a korabeli szakmai oktatás jelentős intézménye volt és hosszú története során képes volt a szakoktatás élvonalában maradni. A tartalmilag folyamatosan megújuló fémipari-gépészképzés a kezdetektől napjainkig a korszerű ismeretekkel rendelkező szakemberek forrása.'
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
        header: 'UMSZKI 100 – BEVEZETÉS', title: 'A kapu feletti címer szombilikája'
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
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/12_lépcsőházi ólomüvegablak.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak – Lépcsőházi ólomüvegablak', title: 'Lépcsőházi ólomüvegablak',
        content: 'Ez az ólomüveg a kőművesek és kőfaragók céhének jelképét ábrázolja. A szimbólum elemei a mesterség alapvető szerszámai, amelyek gyakran megjelennek céhes címereken és szabadkőműves jelképrendszerben is: Körző és derékszög: A pontosság és a mértéktartás szimbólumai. Gyalu és vésők: A megmunkálás és a finomítás eszközei. A vörös háttér gyakran használt szín a történelmi céhes üvegablakokon. Történelmi háttér: Hasonló ólomüveg alkotások Európa-szerte megtalálhatók régi városházákon vagy céhházakban. Például a németországi Stade városházáján látható egy 1721-ből származó kőműves céhpecsét, amely szinte azonos elrendezésű. Ezek a medálok az adott mesterség tiszteletére és a szakmai közösség összetartozásának jeléül készültek.'
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
        image: 'KEPEK/8_az első tabló.jpg'
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


    // --- SZEMÉLYEK (Kék téma) ---
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/55_Landler Jenő.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        tocTitle: 'Személyek - Landler Jenő',
        header: 'SZEMÉLYEK', title: 'Landler Jenő', subtitle: '(1875–1928)',
        content: 'Magyar kommunista politikus, jogász, a 20. századi magyar munkásmozgalom egyik kulcsfigurája. A kommün bukása után emigrált, a Kommunisták Magyarországi Pártja egyik vezetője maradt haláláig.<br><br>Az intézmény megnevezésében 35 éven át jelen volt Landler Jenő neve:<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola'
    },


    // --- TÖRTÉNET (Piros téma) ---
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'https://images.unsplash.com/photo-1551131628-6623bc17e826?w=800&q=80',
        pocketTitle: 'Korabeli Iratok',
        gallery: [
            'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&q=80',
            'https://images.unsplash.com/photo-1580536417537-eb4a4d6b63f5?w=400&q=80'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        tocTitle: 'II. Történet – Mérföldkövek',
        header: 'II. FEJEZET – TÖRTÉNET', title: 'Az Újjáépítés és Fejlődés', subtitle: 'Korszakok a történelemben',
        content: 'Az iskola <b>1927-es alapítása</b> után hamar szembesült a világtörténelem viharaival. A háború és az azt követő újjáépítés komoly próbatétel elé állította a közösséget.<br><br>A korszak történelmi hátterének mélyebb megértéséhez érdemes átlapozni a <a href="https://zanza.tv" target="_blank">Zanza.tv történelmi oktatótárát</a>. Később, a technológiai robbanással a híradástechnika, majd a 90-es évektől az informatika forradalma határozta meg a mindennapokat.'
    },

    // --- HELYSZÍN (Zöld téma) - 10 képes galéria ---
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
        pocketTitle: 'Régi Épületszárnyak',
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
        tocTitle: 'III. Helyszín – Ahol a jövő épül',
        header: 'III. FEJEZET – HELYSZÍN', title: 'A Falak Titkai', subtitle: 'Műhelyek és Tantermek',
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
        pocketTitle: 'Emléktárgyak',
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