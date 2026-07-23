const pages = [
    { type: 'transparent', eraCss: 'era-transparent' },
    { type: 'front-cover', eraCss: 'era-cover' },

    // --- TARTALOMJEGYZÉK (ToC SPREAD) ---
    { 
        type: 'toc-left', 
        eraCss: 'era-toc', 
        header: 'TARTALOM' 
    },
    { 
        type: 'toc-right', 
        eraCss: 'era-toc', 
        header: 'TARTALOM'
    },

    // --- BEVEZETÉS ---
    { 
        type: 'chapter', eraCss: 'era-uniform', header: 'ANTRÉ 75 éves jubileumi', title: 'Az újpesti magyar állami fa- és fémipari szakiskola', dropCap: true,
        content: 'Újpest ikonikus épülete és kultikus oktatási intézménye - ahová újpesti fiatalok generációi jártak és járnak - az Újpesti Két Tanítási Nyelvű Műszaki Technikum. Az intézmény épülete, eredeti nevén a Magyar Királyi Állami Fa- és Fémipari Szakiskola, 1926-ban épült fel. Klebelsberg Kunó kultuszminiszternek és Semsey Aladár polgármesternek kiemelt szerepe volt a létrehozásában. Születésnap tehát egyrészt a gyönyörű épület 1927-es átadásához, valamint az ekkor beinduló fémipari szakiskolai képzéshez kötődik. Az első tanévnek az 1927/28-as tanévet tekinthetjük. A helyzet mégis árnyaltabb. Volt egy jogelőd iskola - az Újpesti Faipari Szakiskola – mely 1895-ben kezdte meg működését. Ez az iskola költözött át - továbbra is Blockner Gyula igazgatása mellett - 1927-ben, fémipari szakiskolai tagozattal bővülve, az új épületbe.<br><a href="https://www.youtube.com/watch?v=-0KIu1-IwSE&list=PLiROlxlxPFLIVTnwUDQTPqc8g4Epfhs03&index=5" target="_blank">1926-os építkezési videó</a><br><a href="https://edir.umszki.hu/rolunk/tortenet" target="_blank">75. Jubileumi évkönyv 6-28.</a>'
    },
    {
        type: 'chapter', eraCss: 'era-uniform', 
        header: 'ANTRÉ 75 éves jubileumi',
        content: 'Az 1928-tól kiadott iskolai Értesítők – melyek 1940-től az Évkönyv nevet kapták – a születésnapnak az 1895/96 tanévet tekintették. Az utolsó írásos anyag erről az időszámításról, az 1945/46-os évkönyv, ami kiadásra nem került, de gépelt kézirat formájában fennmaradt. 1951-ben az iskola kettévált. Létrejött az 1 sz. Faipari Technikum és a 2 sz. Gépipari Technikum, melyek más-más főhatóság irányítás alá kerültek, de mindkettő továbbra is ugyanabban az épületben működött tovább. A szétváláskor a faipar a Corvin utcai szárnyat kapta. (A születésnap kérdése mindkét iskolánál szinte egyszerre az 1958/59 tanévben bukkan elő. Meglepő módon mindkét iskola egymástól eltérő és a korábbival nem egyező születésnapot jelölt.) Az iskola már alapításakor a korabeli szakmai oktatás jelentős intézménye volt és hosszú története során képes volt a szakoktatás élvonalában maradni. A tartalmilag folyamatosan megújuló fémipari-gépészképzés a kezdetektől napjainkig a korszerű ismeretekkel rendelkező szakemberek forrása, az azóta megjelent és újra és újrafogalmazott híradástechnikai, elektrotechnikai, informatikai és mechatronikai képzés teszi teljessé a mai arculatot.'
    },
    // --- Foerk Ernő (kék téma) ---
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/2_FoerkErno.jpg',
        pocketTitle: 'Foerk tervek',
        gallery: [
            'KEPEK/2_Foerk tervek/ÉGy 69.222..4.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.2.5.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.6-.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.10.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.12.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Foerk Ernő', title: 'Foerk Ernő', subtitle: '(1868–1934)',
        content: 'Iskolánk tervezője, Foerk Ernő [ejtsd: "förk"] a magyar késő historizmus egyik legjelentősebb építésze, iparművész és műemlékvédelmi szakember volt. Legismertebb alkotása a szegedi Fogadalmi templom, a szegedi dóm, amelynek terveit Schulek Frigyes eredeti elképzeléseit átdolgozva készítette el. Temesváron született, eredetileg szobrásznak készült, majd a bécsi Képzőművészeti Akadémián tanult építészetet. Hazatérése után Steindl Imre tanársegédje volt a Műegyetemen, ahol részt vett az Országház belső tereinek kialakításában. Emléktáblája egykori óbudai lakóházán és a szegedi Dóm altemplomában is megtalálható, ahol nyugszik. 1907-ben elnyerte a Ferenc József rend lovagkeresztjét, 1931-ben a Corvin koszorút. Foerk Ernő 1911-ben írta ezt magáról: „Két lény lakozik bennem, az egyik az alkotó művész, a másik a búvárkodó, tanulmányozó tudós ember."'
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
        type: 'text', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak - Zsolnay csempék', title: 'Zsolnay csempék',
        content: ' Az 1920-as évekre jellemző - a szecesszió és az art deco határán álló - építészeti stílushoz illeszkednek. A korszak hasonló középületeiben - például hentesüzletekben vagy iskolákban - gyakran használtak mázas pirogránit alapanyagú, fagyálló és könnyen tisztítható csempéket, melyek közül a legnevesebbek a Zsolnay-gyárból kerültek ki. A mázas pirogránit a Zsolnay-gyár által kifejlesztett, rendkívül ellenálló kerámiaanyag, amelyet különböző színű és típusú mázakkal vonnak be.'
    },
    // iskolanevek, korszakok
    { 
        type: 'text', eraCss: 'era-esemeny',
        header: 'Iskolanevek, korszakok',
        title: 'Iskolanevek, korszakok', dropCap: true,
        content: '1926 óta a XX. és XXI. század minden nehézségének, fordulatának lenyomatát adják az elmúlt 100 év névváltoztatásai, névváltozatai:<br>1927 - 1941 Újpesti Magyar Királyi Állami Fa- és Fémipari Szakiskola<br>1941 – 1943 Gépészeti Tagozattal Működő Felsőipariskola<br>1943 – 1946 Felsőipariskola Gépészeti- és Faipari Tagozatokkal<br>1946 – 1947 2. Számú Vas- és Fémipari Felsőipariskola Faipari Tagozattal<br>1947 Újpesti Magyar Állami Felsőipariskola<br>1947 – 1948 Állami Műszaki Középiskola<br>1948 – 1949 Általános Gépészeti Állami Műszaki Szakközépiskola Általános Faipari Tagozattal<br>1950 – 1951 6. Számú Ipari Gimnázium Vas-, Fém-, Gép- és Faipari Tagozattal<br>1951 januárjától Általános Gépészeti Technikum Faipari Tagozattal<br>1951 szeptemberétől – 1955 2. Számú Általános Gépészeti Technikum Faipari Tagozattal<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum'
    },
    {
        type: 'text', eraCss: 'era-esemeny', 
        header: 'Iskolanevek, korszakok',
        content: '1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola<br>1990 – 1995 Újpesti Műszaki Szakközépiskola<br>1995 - 1998 Újpesti Műszaki Szakközépiskola és Gimnázium<br>1999 – 2001 Újpesti Kéttannyelvű Műszaki Szakközépiskola és Gimnázium<br>2001 - 2005 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola és Gimnázium<br>2005 - 2012 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola, Szakiskola és Gimnázium<br>2012 -2015 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola és Szakiskola<br>2015 – 2017 Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskolája és Szakiskolája<br>2017 – 2019 Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Szakgimnáziuma és Szakközépiskolája<br>2020 - Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Technikum'
    },
    //Blochner Gyula
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/5_Blockner Gyula.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Blockner Gyula', title: 'Blockner Gyula', subtitle: '(1877 Székesfehérvár – 1941 Újpest)',
        content: 'Blockner Gyula neves újpesti pedagógus, szakiskolai igazgató és helytörténeti kutató volt. Gépészmérnökként végzett. Tagja volt a nagy múltú Magyar Mérnök- és Építész-Egyletnek (ahogy egyébként Hajós Alfréd is). Munkássága leginkább az ipari szakoktatáshoz kötődik. Másfél évtizenden át - 1924 és 1939 között -  tevékenykedett az Újpesti Magyar Királyi Állami Fa- és Fémipari Szakiskola igazgatójaként. Nevéhez fűződik az intézmény több évkönyvének és értesítőjének kiadása az 1930-as években. Újpest közéletének aktív tagja volt, különböző egyesületi tisztségeket is betöltött az Újpesti Helytörténeti Értesítő szerint. Mindemellett Erdély történelméhez is vonzódott. Különösen foglalkoztatta Déva vára. 1905-ben az Erdélyi Múzeumban publikált tanulmányt a dévai várról, melyet saját rajzaival illusztrált. Kutatásait 1826-ból származó bécsi katonai tervrajzokra alapozta. Blockner Gyula testvére az a hirdetőiroda-alapító Blockner Izidor, kinek veje Hajós Alfréd volt, hiszen lányát, Blockner Vilmát vette feleségül. Blochner Gyula felesége a neves bőrgyáros családból származó Mauthner Ilona volt.'
    },
    //Laurencsik Béla
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/6_Laurencsik Béla.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Laurencsik Béla', title: 'Laurencsik Béla', subtitle: '(1888 Fülek – 1972 Budapest)',
        content: 'Laurencsik Béla 1912-ben szerzett műszaki oklevelet. De a Képzőművészeti Főiskolán is tanult. Az I. világháborúban szibériai hadifogságba került Vlagyivosztokban. Több, ekkor született rajza maradt fent. A világháboró után Újpestre költözött felesége családjához. Így lett az újpesti faipari technikum rajztanára. 1922-ben nevezték ki az iskola műhelyfőnökének. 1929-től igazgatóhelyettes. Blochner Gyula után ő vette át az igazgatói feladatokat egy tanéven át: 1939-től 1940-ig. Az iskola 1940 – 41-es évkönyvében a következőket olvashatjuk: „Laurencsik Béla iskolánk faipari tagozatán 18 éven át működött mint műhelyfőnök tanár, majd helyettes, illetve megbízott igazgató. Ez idő alatt szaktudásával, szervező képességével feljebbvalóinak teljes elismerését, kartársainak és művezetőinek megbecsülését, az ifjúságnak pedig osztatlan szeretetét érdemelte ki.”Festőművészként mesterei: Révész Imre, Hegedűs László, Edvi Illés Aladár, Szentiványi Gyula. A képzőművészeten belül több műfajban is kipróbálta magát.'
    },
    //kovacsmuhely
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/7_kovácsműhely.JPG',
        pocketTitle: 'Kovácsműhely',
        gallery: [
            'KEPEK/7_mappa_KOVÁCSMŰHELY/PICT3495.JPG',
            'KEPEK/7_mappa_KOVÁCSMŰHELY/PICT3958.JPG',
            'KEPEK/7_mappa_KOVÁCSMŰHELY/PICT3960.JPG',
            'KEPEK/7_mappa_KOVÁCSMŰHELY/PICT3963.JPG',
            'KEPEK/7_mappa_KOVÁCSMŰHELY/PICT4001.JPG',
            'KEPEK/7_mappa_KOVÁCSMŰHELY/PICT4002.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszínek – Kovácsműhely', title: 'Kovácsműhely',
        content: 'A kovácsműhely, mely az épület egyetlen olyan helyisége, ahol zömében az eredeti berendezés és eszközök megmaradtak igazi kuriúzuma az épületnek. 2022 óta újra teljes pompájában tündököl, amennyiben ez a kifejezés egy kovácsműhely kapcsán helytálló.'
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
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/9_a kapu feletti címer szimbolikája.jpg',
        pocketTitle: 'A kapu feletti címer',
        gallery: [
            'KEPEK/9_a kapu feletti címer szimbolikája.jpg',
            'KEPEK/9_bejárat.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', 
        header: 'Emléktárgyak – A kapu feletti címer', title: 'A kapu feletti címer szombilikája', dropCap: true,
        content: ' A főbejárat kovácsoltvas díszítésének tervrajzán pajzs alakú magyar címer stilizált változata látható. A szimbolika a következő: a kettős kereszt a magyar államiság és a keresztény hagyomány egyik legfontosabb jelképe. A kettős kereszt a középkor óta a magyar címer része, és a keresztény hitre, valamint a történelmi Magyar Királyságra utal. A vízszintes sávok az Árpád-házi uralkodók vörös–ezüst sávozására emlékeztetnek. A heraldikában ez a magyar államiság történelmi folytonosságát jelképezi. A kör alakú keret, vagyis a címer kör alakú medaillonba foglalása gyakori szecessziós és historizáló épületdíszítési megoldás, amely kiemeli a nemzeti jelképet. A babér- vagy tölgyágak hagyományosan a dicsőség, a tudomány, a siker vagy az erő, állhatatosság, kitartás jelképei. A négy irányban elhelyezett virágmotívumok elsősorban dekoratív szerepűek, de a szimmetriát és a teljességet is hangsúlyozzák. A szecessziós növényi indák, azaz az ornamentika az életet, a fejlődést és a folytonosságot szimbolizálják. A magyar címer alkalmazása az intézmény állami jellegét és nemzeti kötődését hangsúlyozza, míg a növényi ornamentika az épület historizáló–szecessziós díszítőstílusához igazodik.'
    },
    //Szabó Béla
    {
        eraCss: 'era-szemelyek', type: 'image',
        image: 'KEPEK/10_Szabó Béla.jpg',
        pocketTitle: 'Szabó Béla',
        gallery: [
            'KEPEK/10_Szabó/Szabó gúnyrajz.png'
        ]
    },
    { 
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Szabó Béla', title: 'Szabó Béla', subtitle: '(1899 Józseffalva -  )',
        content: '1925-ben szerzett gépészmérnöki oklevelet a Királyi József Műegyetemen. 1927-től műhelyfőnöke az iskolának. Berendezte a fémipari tanműhelyeket, a gépházat és a szertárakat. Majd megbízott igazgató lett 1940-től. A második világháború frontjának közeledtével 1944 októberében megkezdte az iskola gépi berendezéseinek mentését, részben elásatta, részben befalaztatta azokat. A tanítás 1944. november 17-én megszakadt, és csak 1945. május 7-én indult újra. 1948 januárjában felmentették igazgatói állásából Szabó Bélát. Az őt ábároló gúnyrajzzal szemléltették az akkor kialakult helyzetet: A „fémipart a tenyerén hordozza”, a faipar meg a „kalapács súlya alatt nyög”.'
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
        content: 'Ez az ólomüveg a kőművesek és kőfaragók céhének jelképét ábrázolja. A szimbólum elemei a mesterség alapvető szerszámai, amelyek gyakran megjelennek céhes címereken és szabadkőműves jelképrendszerben is:<br>- körző és derékszög - a pontosság és a mértéktartás szimbólumai,<br>- gyalu és vésők - a megmunkálás és a finomítás eszközei. A vörös háttér gyakran használt szín a történelmi céhes üvegablakokon. Hasonló ólomüveg alkotások Európa-szerte megtalálhatók régi városházákon vagy céhházakban. Például a németországi Stade városházáján látható egy 1721-ből származó kőműves céhpecsét, amely szinte azonos elrendezésű. Ezek a "medálok" az adott mesterség tiszteletére és a szakmai közösség összetartozásának jeléül készültek.'
    },
    //az igazgatoi elott
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/13_igazgatói előtt.JPG',
        pocketTitle: 'Az igazgatói előtt',
        gallery: [
            'KEPEK/13_igazgatói előtt/K.JPG',
            'KEPEK/13_igazgatói előtt/O.JPG',
            'KEPEK/13_igazgatói előtt/L.jpg',
            'KEPEK/13_igazgatói előtt/M.jpg',
            'KEPEK/13_igazgatói előtt/N.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszínek – Igazgatói előtt', title: 'Az igazgatói előtt',
        content: 'Az egykori igazgatói lakás hallja így néz ki. Dr. Szentirmay János az 1951/52-es tanév elején lett az iskola igazgatója. Ő volt az első igazgató, aki nem költözött be a szolgálati lakásba. Neki is kezdtek az átalakításnak. Odáig jutottak, hogy egy tervezőiroda elkészítette a terveket. Aztán a következő tanévben a szegedi technikumból az ottani igazgatóhelyettes Badár Gábor lett az igazgató és családjával beköltözött a lakásba, az átalakítás így elmaradt. 1957. szeptenberétől Bartos Lívia lett az igazgató. Badár Gábor, a korábbi igazgató 1962-ig még bent lakott az iskolában. Miután Bartos Lívia nem vette igénybe a szolgálati lakás lehetőséget, így átépítés után itt alakították ki –  első ütemben - az igazgatói irodát és később a teljes irodai blokkot.'
    },
    //korabeli kisfilm
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/14_1950_kisfilm.png'
    },
    {
        type: 'chapter', eraCss: 'era-targyak',
        header: 'Emlékek – Korabeli kisfilm', title: 'Korabeli kisfilm',
        content: '<a href="https://www.youtube.com/watch?v=ayaf8uwFNB8" target="_blank">Korabeli kisfilm</a><br>"Így határozta el Sásdi Mária, hogy a szovjet minta nyomán szervezett gépészeti technikumban tanul tovább." - az 1950-es tanévnyitó ünnepséget, és jópár, kordokumentumként is nagyra értékelhető pillanatát eleveníti meg a kisfilm az 1950-es évnek.'
    },
    //az iskola egykori korterme
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/15_az iskola egykori körterme.png',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszínek – Iskola egykori korterme', title: 'Az iskola egykori korterme',
        content: 'Az Auditorium Maximum (gyakran rövidítve AudMax) latin kifejezés, amely a legnagyobb előadótermet jelöli egy oktatási intézményben. A körterem a főépület jobboldali sarokpavilonjában volt. Ez a nagyterem 300 fő feletti befogadó képességével évtizedeken keresztül kiváló színtere volt az iskola teljes közösségét mozgató programoknak. A hatvanas évek elején az iskola létszámának már a harmada sem fért be, így eredeti funkcióját elvesztette. A felfutó létszám és a beindult híradástechnikai képzés gyakorlati oktatása, infrastruktúrájának megteremtése krónikus helyiséghiányt eredményezett. Ezen valamennyit segített a kollégium 1960-ban történt kiköltöztetése, de nem oldott meg minden problémát. Ezért döntés született a körterem megszüntetéséről, oktató termekre történő átépítésére, ami 1962-ben meg is kezdődött.'
    },
    //muszaki vena
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/16_műszaki véna.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', 
        header: 'Műszaki véna', title: 'Műszaki véna',dropCap: true,
        content:'A "műszaki véna" kifejezés a technikai érzékre, a gépek, szerkezetek működésének gyors átlátására és a gyakorlati problémamegoldó képességre utal. Ez egy olyan tehetség vagy készség, amely lehetővé teszi valakinek a technikai eszközök intuitív megértését, javítását vagy tervezését. Jellemzők: logikus gondolkodás; ok-okozati összefüggések átlátása; gyakorlatiasság: a "hogyan működik?" kérdés megválaszolása cselekvéssel; térlátás: szerkezeti elemek vizualizálása; kreativitás: új megoldások keresése technikai problémákra. Mind a faipari, mind a fémipari részlegben nagy jelentőséget tulajdonítottak a rajzkészségnek is. Ez nemcsak művészi érzéküket fejlesztette a diákoknak, hanem nélkülözhetetlen volt mindennapi munkájuk elvégzéséhez is. Meg kellett tervezni és lerajzolni az elkészítendő bútort, a kovácsoltvas alkotásokat, de éppen úgy műszaki rajzot kellett készíteni egyes gépalkatrészekről, mégpedig nagyon nagy pontossággal, hiszen ettől is függhetett egy-egy gép működése, felhasználhatósága. A növendékek rajzaiból, munkáiból, alkotásaiból minden évben kiállítás nyílt. Itt tudták bemutatni mindazt, melyet tanulásuk idején készítettek. A technikusok hidat jelentenek a szakmunkások és a mérnökök között.'
    },
    //iskola egyenruha
    { 
        type: 'image', eraCss: 'era-targyak'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak – Iskola egyensapka', title: 'Iskola egyensapka',
        content: 'Az 1960-as években kötelező volt az iskolai egyenruha viselése. A korszak technikumaira és szakiskoláira jellemző módon a diákok kötelező jelleggel sötétkék sapkát viseltek, amelynek az elején vagy oldalán az iskola egyedi, zománcozott fém sapkajelvénye (vagy iskolajelvénye) szerepelt. Az 1961/65-ben iskolánba járt évfolyam egy diákjának visszaemlékezése szerint: "Az iskolához kapcsolódó külsőségek közül talán a legnépszerűtlenebb volt a diáksapka. Ezt némi visszfordíthatatlan átalakítással kabátzsebben hordhatóvá tettük, és csak közvetlenül az iskola kapuja előtt raktuk a fejünkre."'
    },
    //Az udvar platánjai
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/18_platán.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Az udvar platánjai', title: 'Ady Endre: A platánfa álma',
        content: 'A Nap huga, zöld szemü lány,<br>(Kit imádnak álom-vitézek)<br>Megszánt egy holdas éjjelen<br>És megigézett.<br><br>Két lábam elhült s szétbomolt<br>Gyökerekként a mélybe szállva<br>S itt állok a fehér mezőn,<br>Mint árva platánfa.<br><br>Girhes, szomorú derekam<br>Szökkenve büszke lombot ontott,<br>Lombom a felhőket veri<br>S elhagytak a gondok.<br><br>Állok: várom a Nap hugát<br>Némán a nagy, éji mezőben<br>S koronámról hull a levél<br>Zörgőn, búsan, rőten.'
    },
    //Radioamator URH-allomas HG5KCC
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/19_rádióamatőrök_1957 Galyatető.jpg',
        pocketTitle: 'Rádióamatőr Album',
        gallery: [
            'KEPEK/19_rádióamatőr_ALBUM/A.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/B.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/C.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/D.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/E.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/F.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/G.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/H.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Rádióamatőr URH-állomás', title:'Rádióamatőr URH-állomás HG5KCC',
        content: '<a href="https://www.youtube.com/watch?v=4uezzqbeYOs&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=27" target="_blank">A HG5KCC rádióamatőr URH kollektív állomás 1954/55-ben indult.</a><br>Vajda György pedagógus felismerte, hogy új szak sikeres indításához kevés a tárgyi- és személyi feltételekkel foglalkozni. Szükség van a tanulók köréből egy olyan csoport szervezésére, mely a szakirány összes diákja számára mintául szolgál és az érdeklődők számára a tananyagon túlmutató ismeretanyag elsajátítását teszi lehetővé. 1954-ben szakkört alapított, melynek célja a rádióamatőr tevékenység elterjesztése az iskolában. Az akkor még a rádióamatőrök körében is „fehér folt”-nak számító URH sávot választotta, mindehhez az adót, vevőt és antennát – más lehetőség nem lévén – házilag kellett előállítani. A tevékenység súlypontja így a készülékek, eszközök megépítésén volt, ami nagyon jól támogatta az iskola képzési céljainak megvalósulását. A rádióamatőr tevékenység sokak számára élethosszig tartó hobbivá vált. 1955-ben Vajda György rádióamatőr vizsgát tett és adóengedélyt kapott URH kollektív rádióamatőr adóállomás működtetetésére. Az országban ekkor kevesebb mint tíz ilyen állomás működött.<a href="https://www.youtube.com/watch?v=UlsbM1RyCFA&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=28" target="_blank">1956-ban már két nemzetközi URH versenyen indultak a landleres diákok.</a>'
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
        content: 'A jegesmedve szobor felirata szerint az 1945/46. évi középiskolás labdarúgó bajnokságot megnyerte a Landler akkori csapata. A győztesek neve a réztábláról leolvasható. A legesmedve tehát több mint 80 éve lakik az iskola falai között. Tanáriból múzeumba, múzeumból a végleges iskolatörténeti gyűjteménye cammogott át, és őrzi a 114-es terem biztonságát.'
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
        image: 'KEPEK/22_Radnai.jpg'
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
        pocketTitle: 'Tanár-diák sportesemény',
        gallery: [
            'KEPEK/23_tanár_diák sportesemény_1943/A..jpg',
            'KEPEK/23_tanár_diák sportesemény_1943/B..jpg',
            'KEPEK/23_tanár_diák sportesemény_1943/C..jpg'
        ]
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
        pocketTitle: 'Tanműhely',
        gallery: [

        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Tanműhelyek', title:'Tanműhelyek',
        content: 'Mennyiféle tanműhely a gyakorlati oktatás központi helyszíne, ahol a diákok a valós ipari környezetet modellező körülmények között sajátíthatják el szakmájuk alapjait. Kovácstanműhely, lánghegesztő műhely, öntöde, távbeszélőműhely, vezérlőszoba, gépműhely, rádióműhely, belsőégésű motorok gépterme, daraboló, lakatosműhely, forgácsoló műhely, ívhegesztő műhely, elektonikai műhelyek, informatikatermek, számítógéptermek. A műhelygyakorlatokon elsődleges cél és feladat az ipari gépek, szerszámok biztonságos kezelésének megtanulása. A biztonsági előírások és rutinszerű alkalmazásuk rögzítése. Valódi termékek vagy makettek önálló legyártása. Jellemző felszereltség, ágazattól függően:<br>Gépészet: esztergák, marógépek, fúrógépek, CNC-berendezések, hegesztőboxok. Elvárás a zárt munkaruha: hosszú nadrág, kabát. Elektronika: oszcilloszkópok, forrasztóállomások, tápegységek, PLC-programozók. Informatika: hálózati rack szekrények, szerverek, teszt-számítógépek, krimpelők.'
    },
    //autómodellező és gépjármű szakkör
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/25_autómodellező és gépjármű szakkör.jpg',
        pocketTitle: 'Autómodellező és Gépjármű Szakkör',//roviíteni
        gallery: [
            'KEPEK/25_.jpg',
            'KEPEK/25_autómodellező/A.jpg',
            'KEPEK/25_autómodellező/AA.jpg',
            'KEPEK/25_autómodellező/B.jpg',
            'KEPEK/25_autómodellező/C.jpg',
            'KEPEK/25_autómodellező/D.jpg',
            'KEPEK/25_autómodellező/D (2).jpg',
            'KEPEK/25_autómodellező/E.jpg'
        ]
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
            'KEPEK/26C_Hősök ligete.jpg',
            'KEPEK/26_az iskola helyrajza/C.jpg',
            'KEPEK/26_az iskola helyrajza/D.jpg',
            'KEPEK/26_az iskola helyrajza/E.jpg',
            'KEPEK/26_az iskola helyrajza/F.jpg',
            'KEPEK/26_az iskola helyrajza/F - beolvasás0007.jpg',
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg',
        header: 'Helyszín - Iskola helyrajza', title:'Az iskola "helyrajza"',
        content: '1880-as években Vasút utca volt, majd 1926-tól Horthy Miklós utca, 1945-től Dózsa György utca, 1991-től Görgey Artúr utca lett, az elnevezés arra utal, hogy 1849 januárjában itt vonult át Görgey Artúr hadserege. Iskolánk mögött egy csodaszép park – a Hősök ligete – állt. A mellékelt térképen is láthatóan a Szent Imre út, Leiningen Károly utca, Munkácsy Mihály utca és Bajza János utca által határolt területen feküdt. Volt benne egy halastó, melynek két oldalát egy szép fahíd kötötte össze. Középtájon egy mesterségesen kialakított kis dombon vezetett át a sétány. Innen teljes pompájában lehetett áttekinteni a bokrokkal, fákkal és virágokkal díszített parkot. Körben kerítés volt, bejáratként a Corvin utca - akkor Revízió utca - magasságában kialakított díszes kovácsoltvas kapu szolgált. Erre a részre építették az Országzászló nevet viselő első világháborús emlékművet az elhunyt hősök tiszteletére. A Hősök ligete park az emlékművel 1935-ben készült el és lett átadva. Ettől kezdve a város itt rendezte a nemzeti ünnepeken a megemlékezéseket, ünnepélyes zászlófelvonással. A háború alatt a környéken élők szükségből a fákat kivágták és eltüzelték, majd a háború után az emlékmű is lebontásra került. Erre a területre épült nem sokkal később a Szent Imre út vonalában egy lakóépület, mögötte óvoda, bölcsőde és a Bajza utcai Általános Iskola.  Mindezek ma is funkcionálnak. Míg a park létezett, diákjaink, különösen a kollégisták alkalomadtán el-eljártak oda.'
    },
    //Az orosz nyelv oktatása
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/27_orosz nyelv.jpg',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/27_iskolacímer.jpg',
            'KEPEK/27_iskolacímerek.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Események - Orosz nyelv oktatása', title: 'Az orosz nyelv oktatása',
        content: 'Az érettségivel záruló képzések tantervében mindig szerepel idegen nyelv. Idegennyelvi képzés nálunk az 1943/44 tanévben a dolgozók tagozatán kezdődött. Külsős óraadó tanárral oldották meg a német nyelv tanítását. Ez az osztály az 1946/47 tanévben végzett. A háború miatt újabb ilyen felnőtt osztály az 1945/46 tanévben indult. A nappali tagozaton az 1947/48-as tanévben indult az érettségit adó képzés. Az első három évben németet tanultak a diákok a Könyves Gimnáziumból átjárt óraadó tanár, Kalavszky István irányításával. A negyedikben át kellett térniük az orosz nyelvre. Az  1948/49 tanévtől a fenntartó az orosz nyelv oktatását írta elő annak ellenére, hogy erre képzett tanár akkor még nem állt rendelkezésre. "Ki tud többet a Szovjetunióról?" - ez volt a vetélkedő címe, mely évtizedekig meghatározta az orosz nyelvtanuláshoz kötödő tudás irányvonalát.'
    },
    //Major tamas a Landlerben
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/28_MAJOR TAMÁS.jpg',
        pocketTitle: 'Major Tamás a Landlerben',
        gallery: [
            'KEPEK/28_Major Tamás/A.jpg',
            'KEPEK/28_Major Tamás/B.jpg',
            'KEPEK/28_Major Tamás/C.jpg',
            'KEPEK/28_Major Tamás/D.jpg',
            'KEPEK/28_Major Tamás/E.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Major Tamás', title: 'Major Tamás a Landlerben',
        content: 'Major Tamás színművész a diákklub vendége volt 1972-ben. Az iskolai diákszervezet - az akkori KISZ -szervezésében a diákok láthatták a Nemzeti Színház akkori stúdiószínházában a Katona József Színházban Peter Weiss: A luzitán szörny c. drámáját. Az előadás egy sajátos és emlékezetes színházi produkció volt, melynek hatástörténetéhez iskolánk is kapcsolódik oly módon, hogy az előadást követően Major Tamás a színház főrendezője – kiemelkedő színészegyéniség – meglátogatta az iskolát és a diákklubban élményt jelentő beszélgetést folytatott az érdeklődő diákokkal.'
    },
    //Bartos Lívia
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/29_Bartos Lívia.jpg'
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
            'KEPEK/32_medence.jpg',
            'KEPEK/32_udvarátalakítás.JPG',
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín - Udvar', title: 'Udvarátalakítás',
        content: 'Eredetileg belső parkja volt az iskola épületének. Azt is kevesen tudják, hogy az udvaron volt egy medence a mai tengópálya helyén, kb. 4x8 méteres és 1,2 méter mélységű. Egyáltalán nem sportolási vagy fürdőzési célokat szolgált. A háború előtt építették tűzoltó víz tárolásának céljára. Az udvar „burkolata” ekkor még pormentesített, döngölt föld volt. 1966-ban – a stílustörő toldaléképület elkészülte után - került sor az udvar felújítására. Ekkor tüntették el a medencét és készítették el alapozás nélkül a teljes udvar aszfaltburkolatát.'
    },
    //Szalagavatok, szalagtuzok
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/33_szalagavatók.jpg',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/33B_szalagavatók.jpg',
            'KEPEK/33_szalagavatók/A.JPG',
            'KEPEK/33_szalagavatók/B.JPG',
            'KEPEK/33_szalagavatók/C.JPG',
            'KEPEK/33_szalagavatók/D.JPG',
            'KEPEK/33_szalagavatók/E.JPG',
            'KEPEK/33_szalagavatók/H.jpg',
            'KEPEK/33_szalagavatók/önfeledt pillanat.jpg',
            'KEPEK/33_szalagavatók/1959.jpg',
            'KEPEK/33_szalagavatók/1958_szalagtűző farsang.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Esemény – Szalagavatók', title: 'Szalagavatók és szalagtuzok',
        content: 'Iskolánkban a nappali tagozaton az első érettséginek is megfelelő végbizonyítványt 1950-ben kapta egy ipari gimnáziumi, gépészeti osztály. Elvileg ekkor lehetett volna az első szalagtűzés. Az első ismert szalagtűzés viszont 1957-ben történt. Az 1953-57 -es B osztály az iskolában tartott egy szűkkörű rendezvényt, ahol az osztályfőnök – Németh László - feltűzte a szalagokat. Farsangi mulatsággal egybekötött szalagtűzés volt az 1954-58-as évfolyam tűzője. 1959-től külső helyszínen,  a Vasas Kultúrházban a farsangi időszakban technikus bálokra került sor. Arra vonatkozóan nincs adat, hogy a szalagtűzés is az esemény része lett volna. 1961-ben sajátos módon, az igazgatóság tiltásának ellenére szerveződött a bál külső helyszínen. Nyilvánvalóan kuriózumnak számított a Gellért szálló márványcsarnokában tartott szalagavató bál 1964-ben és 1965-ben.Bizonyos, hogy a 80-as években a Dallos Ida Művelődési Ház adott otthont ennek az iskolai ünnepségnek. A 90-es években a Petőfi Csarnok volt a helyszín, és arra is volt példa, hogy a Kanizsay Dorottya Egészségügyi Szakiskola leányaival közösen táncolták a keringőt umszkis fiaink. Egy ideig a zuglói Körcsarnok, majd a káposztásmegyeri Jégcsarnok vált helyszínévé a szalagavatónknak.'
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
        image: 'KEPEK/35_dinasztiák.png',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Dinasztiák', title: 'Dinasztiák',
        content: ''
    },
    //evkonyvek
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/36_évkönyvek.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak - Évkönyvek', title: 'Évkönyvek',
        content: 'A kezdet kezdetén évenként megjelentetett iskolai Értesítők tájékozattak a tanév eseményeiről, adatairól összegzőleg.Ezeket váltották 1940-től az Évkönyvek. Az utolsó évkönyv 1980-ban került kiadásra. Fontos szempont az évkönyvek közt keresésnél, hogy Landler Jenő nevét több szakiskola és középiskola viselte a XX. század második felében: Budapesten, Debrecenben és Nagykanizsán is volt "Landler". Ezen középiskolák és szakiskolák évkönyvei, köztük az újpesti Landleré is elsősorban digitális archívumokban, antikváriumokban és helytörténeti gyűjteményekben érhetők el. Sok landleres diák relikviáként gyűjti ezeket az évkönyveket. A 80-as évek vége és a 90-es évek eleje események ilyen módon történő rögzítéséről nem gondoskodott. Az iskola első internetes bejegyzése 1998-ból való, és ettől az évtől kezdve honlapok ismertetik az érdeklődőkkel az iskola adatait, sikereit, eredményeit.'
    },
    //hiradastechnikai kepzes
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/37_híradástechnika kezdete.jpg'
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
        content: 'Szöllősi Antal iskolánk legendás testnevelő tanára a negyvenes évek végén kinevelt egy kitűnő tornász csapatot. Versenyeken is indultak. Szöllősi a torna mellett az atlétikával, sőt a labdarúgással is kiemelten foglalkozott. Sete Vilmos tanár úr jóvoltából az UMSZKI egyik sikersportága évtizedeken keresztül a kézilabda volt. Kis Alajos labdarúgóedző, csapatával országos nagypályás bajnokságon is részt vett. Andorfer János - iskolánk volt diákja, tanára - 1993-tól vette át a kispályás labdarúgó csapatot, és 2018-ig vitte renszeresen a diákokat kerületi, városi labdarúgó tornákra nevezte és kísérte rendszeresen az UMSZKI csapatait. Ifjósági országos curling bajnokásgon 6. helyezést értek el. UTE öregfiúk - Újpest diákválogatott mérkőzés 2015 felkérték a kerületi középiskolás váléogatott vezetésére. Országos floorball-bajnokságon is szerepeltek. Szenczi László- UTE/Honvéd atlétika edző, Molnár Imréné az iskolában országos és fővárosi atlétikai versenyekre vitte a diákokat. 1. Gáll Mária – tornász 2. Bakos István – kézilabdázó 3. Jakab István – kézilabdázó 4. Sütő József – atléta, maratonista 5. Fekete Sándor – atléta 6. Tóth Zoltán – labdarúgó 7. Nyirádi György – kajakozó 8. Mózes András – atléta, maratonista 9. Brabant Béla – gyeplabda játékos 10. Tóth Zoltán – motoros hajómodellező 11. Ancsin János – jégkorongozó 12. Brockhauser István – labdarúgó 13. Sztankó Éva – röplabdázó 14. Szűcs Lajos – labdarúgó 15. Hoboth Sándor – röplabdázó 16. Giczy Csaba – kajakozó 17. Füzesi Zsolt – labdarúgó 18. Kovács Zoltán – válogatott vízilabdázó 19. Vass Sándor – kézilabdázó 20. Móró Endre – thai-boxoló 21. Spránitz Gábor – sportlövő 22. Vass Károly – kézilabdázó 23. Monostori Attila – vízilabdázó 24. Lange Péter - RSM Hungary Sail Racing Team tagja 25. Battlay Krisztina - röplabda UTE, Vasas 26. Lőw Zsolt - labdarúgó 27. Nyerges Krisztián - labdarúgó 28. Czingli László – tornász 29. Szirányi Bence - válogatott jégkorongozó 30. Németh Zsanett - olimpiai birkózó 31. Guczoghy György - tornász 32. Ágh György - válogatott vízilabdázó 33. Farkas János - válogatott kalapácsvető 34. Nagy Tibor - válogatott labdarúgó'
    },
    //Csizmadia Ferenc
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: ''
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Csizmadia Ferenc', title: 'Csizmadia Ferenc', subtitle: '()',
        content: '1962-ben szerzett hőerőgépész diplomát a Budapesti Műszaki Egyetem Gépészmérnöki Karán. Pályája kezdetén a Ganz-Mávagnál Diesel-motorok turbófeltöltőinek és levegőhűtőinek fejlesztésével foglalkozott. A mérnöki munka mellett gépipari technikumokban is tanított esti tagozaton. Az itt szerzett élmények vitték egyre közelebb a pedagógusi pályához. 1980 és 2000 között volt iskolánk igazgatója, nyugdíjazása után is tevékenykedett óraadóként, tankönyvszerzőként.'
    },
    //művésztanárok, képzőművészeink
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/40_művésztanáraink.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Művésztanárok, Képzőművészeink', title: 'Művésztanárok, Képzőművészeink',
        content: 'Magyar kommunista politikus, jogász, a 20. századi magyar munkásmozgalom egyik kulcsfigurája. A kommün bukása után emigrált, a Kommunisták Magyarországi Pártja egyik vezetője maradt haláláig.<br><br>Az intézmény megnevezésében 35 éven át jelen volt Landler Jenő neve:<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola'
    },
    //Gepeszet
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/41_gépészet.png',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Gépészet', title: 'Gépészet',
        content: '<a href="https://www.youtube.com/watch?v=F3HLp9LxE8o" target="_blank">Gépészeti ágazat  bemutató videó</a>'
    },
    //Elektronika
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/42_elektronika.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Elektronika', title: 'Elektronika',
        content: '<a href="https://www.youtube.com/watch?v=0yaMR7XflqQ" target="_blank">Az elkészült áramkör működésének ellenőrzése zajlik a képen.</a>'
    },
    //Informatika
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/43_informatika.png',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Informatika', title: 'Informatika',
        content: 'Szakmai szempontból igen jelentős az 1971-es tanév, hiszen ekkor indult az országban elsőként a számítástechnikai képzés.'
    },
    //Műhelyfőnökök
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/44_műhelyfőnökök.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Műhelyfőnökök', title: 'Műhelyfőnökök',
        content: 'Laurencsik Béla volt a kezdetektől közel két évtizeden át az iskola műhelyfőnöke. Csányi István gépész műhelyfőnök. Jegyernik Pál mérnöktanár is volt a gépész műhelyfőnök. Vajda György - 1953-tól a villamos tanműhely főnöke volt. Garai József - 1983-tól gépész műhelyfőnök volt. Urbán Kornél - 1985-től vette át a villamos majd 1996-ban a gépész tanműhely vezetését is. Barabás Gábor - 2000-től kapta meg a műhelyfőnöki feladatokat. 2013-ban a szakképzési törvény módosításakor megszüntették ezt a funkciót. Négy műhelyfőnök, három generáció. Vajda György tanította Urbán Kornélt, aki meg Barabás Gábornak volt tanára.'
    },
    //tanári szobák
    { 
        type: 'image', eraCss: 'era-helyiseg'
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Tanári szobák', title: 'Tanári szobák',
        content: 'Egy tantestületi vacsora emléke 1969-ből:<br><a href="https://www.youtube.com/watch?v=Qsb-9d8y3Ag" target="_blank">Videó 1</a><br><a href="https://www.youtube.com/watch?v=2s-FGVlW1LI" target="_blank">Videó 2</a><br><a href="https://www.youtube.com/watch?v=PFtCYstWymM" target="_blank">Videó 3</a><br><a href="https://www.youtube.com/watch?v=dtbWKrULnJI" target="_blank">Videó 4</a><br><a href="https://www.youtube.com/watch?v=5BZI6spfChk" target="_blank">Videó 5</a><br><a href="https://www.youtube.com/watch?v=iqbgCSvFWgU" target="_blank">Videó 6</a><br><a href="https://www.youtube.com/watch?v=5XwYrA2MT7Y" target="_blank">Videó 7</a>'
    },
    //diák voltam, tanár lettem
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: '',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Diák voltam, tanár lettem', title: 'Diák voltam, tanár lettem',
        content: 'Szakmai szempontból igen jelentős az 1971-es tanév, hiszen ekkor indult az országban elsőként a számítástechnikai képzés.'
    },
    //ballagások
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/47_ballagás.JPG',
        pocketTitle: 'További képek',
        gallery: [
            'KEPEK/47_ballagás.JPG',
            'KEPEK/47_ballagások.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Ballagások', title: 'Ballagások',
        content: '<a href="https://www.youtube.com/watch?v=4uezzqbeYOs&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=27" target="_blank">1968-as ballagás</a>'
    },
    //aula, zsibongó
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image:'KEPEK/48_aula.jpg',
        pocketTitle: 'Aula és a zsibongó',
        gallery: [
            'KEPEK/48_nagy aula_zsibongó.jpg',
            'KEPEK/48_aula_zsibongó/C.JPG',
            'KEPEK/48_aula_zsibongó/D.JPG',
            'KEPEK/48_aula_zsibongó/E.JPG',
            'KEPEK/48_aula_zsibongó/F.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Aula, zsibongó', title: 'Aula és a zsibongó',
        content: 'Foerk Ernő a Corvin utcai oldalon, két szinten, a fő- és műhelyépület között átjárást biztosított. A műhelyépület földszintje a főépület alagsorával megfelelő ajtók betervezésével lett megoldva. A műhelyépület emeletét a főépület földszintjével az eredeti tervek szerint kőoszlopokon álló, kőpárkányos pergolával - a szintkülönbséget lépcsők beiktatásával – oldotta meg. Egy diákklub kialakításának terve kapcsán, az 1983 áprilisában íródott talajmechanikai szakvéleményben a következő olvasható: „A raktárhelyiség kb. 40 évvel ezelőtt készült a gépműhely és a szomszédos épületszárny között. Eredetileg a két épület között az udvar felőli oldalon csak egy keskeny átjáró volt, alul árkádos megoldással. Később ezt bővítették újabb pillérsor és íves falazat építésével. A bővítés során a pillérekre és a falazatra I 320-as acéltartókat helyeztek és közöttük téglaboltozatot alakítottak ki.” Így kialakult egy zárt raktárépület, melynek födémét leaszfaltozták. Az emeleten az átjárási funkciót megtartották, a földszinten viszont megszűnt. A Corvin utca felé a kijárat szintén megszűnt. Ennek az átalakításnak feltehetően két célja volt. Egyrészt a közelgő háború okán jónak látták az ezen a részen nyitott épületet lezárni, másrészt az amúgy is szűkös koksztárolási kapacitást valamivel növelni tudták. Az átalakítás két lépcsőben történt. Először 1983-ban a kihasználatlan raktárhelyiségből egy diákklub létesült. Majd 1987 után – a különállóan működő faipari iskola kiköltözése kapcsán – az átjáró beépítésre került. Így a kulturáltabb közlekedésen túlmenően egy jól kihasználható közösségi tér jött létre. Sok éven át élt a zsibongóban egy tárlóban egy plüss óriásgorilla, aki mára az iskolatörténeti gyűjteményt őrzi nagy erőkkel.'
    },
    //Zombori Béla
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: '',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Zombori Béla', title: 'Zombori Béla',
        content: 'Középiskolai tanulmányait iskolánkban végezte. 1970-ben érettségizett. 1977-ben szerzett villamosmérnöki oklevelet. Az egyetem elvégzése után iskolánkban kezdte el tanári pályafutását. Elektronikát, elektrotechnikát, villamos méréseket, számítástechnikát és digitális számítógépek tantárgyakat tanított. A tanítás mellett folyamatosan képezte magát. Sorra jelentek meg a műszaki oktatást segítő tankönyvei. 1986 óta műszaki igazgatóhelyettese volt az iskolának, majd 2000-től 2010-ig igazgatója. 2022-ben Nyárs Csaba – díjat kapott.'
    },
    //50 éves az iskola
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/50_jubileum.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – 50 Éves Jubileum', title: '50 éves az iskola',
        content: '1977-ben került sor 50 éves fennállásunk ünneplésére. Az akkori iskolavezetés a három napos „Landler Napok” rendezvénysorozatába – május 5-6-7. - illesztette és a ballagási ünnepséggel vonta össze. A rendezvénysorozat első két napján politikai vetélkedő volt (a kispesti Landler Gimnázium részvételével), zászlóavatás, emléktábla-avatás, iskolatörténeti kiállítás megnyitása, kézilabdatorna, „Ady Endre” szavalóverseny (a Landler Gimnázium és a kassai „testvériskola” részvételével), irodalmi pályázat (a költő 100 éve született) és esti majális az udvaron a P. Mobil együttes fellépésével.'
    },
    //zsolnay relikvia
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/51_Zsolnay relikvia.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak - Zsolnay relikvia', title: 'Zsolnay relikvia',
        content: 'Ez a tárgy egy ritka Zsolnay eozin kerámia emlékváza, amelyet a KGM (Kohó- és Gépipari Minisztérium) technikusainak jubileumára készítettek. Tárgy: Eozin mázas emlékváza jellegzetes zöldes-kékes irizáló színnel. Felirat: "TKGM TE" és "1952-1972", ami a Technikum jubileumára utal. Stílus: A pécsi Zsolnay gyárra jellemző eozin technika alkalmazása. Érték: Mivel egyedi jubileumi kiadás, gyűjtők számára értékes darabnak számít.'
    },
    //tantestuleti kirandulasok
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/52_tantestületi kir.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Történet – Tantestületi kirándulások', title: 'Tantestületi kirándulások',
        content: 'A tanári kuirándulások az 50-es évektől kezdődtek. Egy 1968-as kirándulás felvételei négy összeállításban:<br><a href="https://www.youtube.com/watch?v=HIjiH655OWs" target="_blank">Videó 1</a><br><a href="https://www.youtube.com/watch?v=OdiwdCWJprM" target="_blank">Videó 2</a><br><a href="https://www.youtube.com/watch?v=xxCfwaUGvKk" target="_blank">Videó 3</a><br><a href="https://www.youtube.com/watch?v=Bxi_Y7eihE0" target="_blank">Videó 4</a><br>70-es, 80-as évek: Kassa, éveken át Meldorf<br>90-es évek: Balatonszentgyörgy-Vörs, Firenze, Róma, Nápoly, Párizs<br>2000-es évek: Bécs<br>2020-as évek: Eger, Kiskunmajsa '
    },
    //madartavlat
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image:'KEPEK/53_MADÁR.jpg',
        pocketTitle: 'Madártávlatból',
        gallery: [
            'KEPEK/53_MADÁR.jpg',
            'KEPEK/53_MADÁRTÁVLAT.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Madártávlat', title: 'Madártávlat',
        content: '<a href="https://www.youtube.com/watch?v=5wylxrdFFBI" target="_blank">Madártávlat</a>'
    },
    //Tankonyvszerzoink
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/54_ tankönyvszerzőink.png',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Tankönyvszerzőink', title: 'Tankönyvszerzőink',
        content: 'dr. Podhorányi Györgyné: Kémiai kísérletgyűjtemény (1984)<br>Horváth Zoltán - Juhász Róbert - Masa László: Ipari elektronika (2000)<br>Kovács János: Irányítástechnikai alapismeretek (2000)<br>Hámori Zoltán: Az elektrotechnika alapjai (2000)<br>Hámori Zoltán: Villamosgépek (2000)<br>Hámori Zoltán: Alapmérések - Villamos mérések (2001)<br>Nagy Imre: Minőségbiztosítás (2006)<br>Horváthné Tőkei Zsuzsanna: Számítógép rendszertechnika 1.-2. (2005, 2006)<br>Horváth József: Munka- és környezetvédelem (2010)<br>Zombori Béla: Elektronika (2020)<br>Zombori Béla: Digitális elektronika (2020)<br>Zombori Béla: Elektronikai feladatgyűjtemény (2020)'
    },
    //LANDLER JENO
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/55_Landler Jenő.jpg',
        pocketTitle: 'Landler Jenő',
        gallery: [
            'KEPEK/55_Landler Jenő/55_Landler.jpg',
            'KEPEK/55_Landler Jenő.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Landler Jenő', title: 'Landler Jenő', subtitle: '(1875–1928)',
        content: 'Landler Jenő magyar szociáldemokrata politikus, jogász, a 20. századi magyar munkásmozgalom egyik kulcsfigurája. A kommün bukása után emigrált, a Kommunisták Magyarországi Pártja egyik vezetője maradt haláláig. Az intézmény nevében 35 éven át szerepelt a neve:<br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola'
    },
    //Tanulmányi versenyek
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/56_tanulmányi versenyek.png',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Történet – Tanulmányi versenyek', title: 'Tanulmányi versenyek',
        content: ''
    },
    //iskolazaszlo
    { 
        type: 'image', eraCss: 'era-targyak',
        image: ''
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak - Iskolazászló', title: 'Iskolazászló',
        content: 'Az 1977-es ballagáson, az 50 éves ünnepség napján a ballagók az előző napon felavatott zászló mögött vonultak. Az egyik oldala nemzeti színű zászló, a másik oldalon egyszínű piros mezőben az akkori iskolacímer látható. Valószínűsíthető, hogy ettől az időponttól minden ballagáson elöl ezt az iskolazászlót vitték. A kezdeti időszakból az 1977-es, 1980-as és az 1986-os ballagásról fennmaradt „zászlós” fotó. A 2002-es múzeum avatóünnepségen az 1977-ben felavatott iskolazászló volt látható a falon. Az iskola fennállásának 75. évfordulóján, a fenntartó képviselője új zászlót adott át. Ennek egyik oldalán a magyar címer, másik oldalán az iskolacímer látható. Azóta minden ballagási menet élén ez halad. A zászlót az igazgatói iroda előterében helyezik el. A rendszerváltás után az új címeres zászló elkészültéig ezt használták ballagáson, hiszen akkor már nem volt aktuális önmagában a vörös szín, és a névváltozás miatt a rajta lévő iskolacímer sem.'
    },
    //iskolai ünnepsegek
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/58_iskolai ünnep.jpeg',
        pocketTitle: 'Iskolai ünnepségek',
        gallery: [
            'KEPEK/58_iskolai ünnep.jpeg',
            'KEPEK/58_iskolai ünnepségek.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        header: 'Történet – Iskolai ünnepségek', title: 'Iskolai ünnepségek',
        content: ''
    },
    //Elektroncso
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/59_elektroncső.jpg',
        pocketTitle: 'Elektroncső',
        gallery: [
            'KEPEK/59_elektroncső/A.JPG',
            'KEPEK/59_elektroncső/B.jpg',
            'KEPEK/59_elektroncső/C.JPG',
            'KEPEK/59_elektroncső/D.jpg',
            'KEPEK/59_elektroncső/E.jpg',
            'KEPEK/59_elektroncső/F.jpg',
            'KEPEK/59_elektroncső/G.JPG',
            'KEPEK/59_elektroncső/H.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak - Elektroncső', title: 'Elektroncső',
        content: 'Az 1961/62 tanévben az iskola tanműhelyében kialakítottak a Tungsram gyár jóvoltából egy vákuumtechnikai műhelyt (a mai raktár helyén). Ebben az időszakban a gyárnak egyre több technikusra volt szüksége, hiszen a hagyományos izzólámpa készítés mellett felfutott a fénycsőgyártás, az elektroncső gyártás volumene pedig a növekedő televízió gyártás (Orion, Videoton) miatt nőtt jelentősen. Egyebek mellett telepítettek ponthegesztő gépet és vákuumszivattyút is. Az iskolában izzólámpa és elektroncső gyártás befejező műveleteire került sor. A tanulók EL 84 típusú elektroncsövet gyártottak. A műveletek a következők voltak:<br>1. a gyárban előszerelt komplett szerelvényt pont-hegesztéssel a kivezetéssel ellátott üvegtalphoz rögzítették;<br>2. a vákuum csonkkal ellátott burát a szerelvényezett üvegtalppal gázlánggal összeolvasztották;<br>3. vákuumszivattyúzás;<br>4. getterezés;<br>5. a funkcionális működés vizsgálata.<br>A tanulók először a gázlánggal felhevített üveg megmunkálását (hajlítás, összeforrasztás, stb.) gyakorolták. Ezt követte az izzólámpa készítés néhány művelete, majd következett az EL 84 elektroncső gyártása. A vákuumtechnikai műhely működtetése az 1971/72. tanévben fejeződött be. Ennek oka, hogy a híradástechnikai profilt a számítástechnikai képzés váltotta fel.'
    },
    //sikerek magyar nyelv és irodalomból, valamint történelemből
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/60_sikerek magyar.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Sikerek', title: 'Sikerek magyar nyelv és irodalomból, valamint történelemből',
        content: 'A 70-es, 80-as évek a Landler Művészeti Stúdió - LMS tevékenysége sok diákot megmozgatott. Versmondó versenyek, színházi előadások kerültek megrendezésre. Szép Magyar Beszéd, Implom József Középiskolai Helyesírási Verseny, Édes Anyanyelvünk, Hatágú Síp Versmondó Verseny költészet napján - az 1993 óta már hagyományossá vált „Hatágú Síp” elnevezésű szavalóverseny került megrendezésre 100 éves József Attila évforduló - 24 órás felolvasás Újpesti Helytörténeti Vetélkedő, Újpesti Akadémikusok Vetélkedője'
    },
    //a Magyar Köztársaság Ezüst Érdemkeresztje
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/61_kovács mihály.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Kovács Mihály', title: 'Kovács Mihály',
        content: 'Az iskola történetének legmagasabb szintű kitüntetését <a href="https://www.youtube.com/watch?v=2X9oa6YFFCs&list=PLgQbRN68uStpzHCOXW7TFELVJ9sJX1HoZ&index=13" target="_blank">Kovács Mihály</a> kapta. 1995-ben Göncz Árpád köztársasági elnöktől vehette át a Magyar Köztársaság Ezüst Érdemkereszt Kitüntetést. A Magyar Ezüst Érdemkereszt a független és demokratikus Magyarország érdekeinek előmozdítása, valamint a nemzet szolgálata terén végzett kimagasló, példamutató tevékenység elismerésére adományozható állami kitüntetés.'
    },
    //Elso szamitogep
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/62_ELSŐ SZÁMÍTÓGÉP.jpg',
        pocketTitle: 'Első számítógép',
        gallery: [
            'KEPEK/62_első számítógép/A.JPG',
            'KEPEK/62_első számítógép/B.jpg',
            'KEPEK/62_első számítógép/C.JPG',
            'KEPEK/62_első számítógép/D.jpg',
            'KEPEK/62_első számítógép/E.jpg',
            'KEPEK/62_első számítógép/F.jpg',
            'KEPEK/62_első számítógép/G.JPG',
            'KEPEK/62_első számítógép/H.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emléktárgyak - Első számítógép', title: 'Az első számítógép',
        content: 'Iskolánkban az 1971/72-es tanévben indult a számítástechnikai műszerész képzés, mely a híradástechnikai technikus képzésünket váltotta ki. Akkor a  3.A és C osztályban történt az átállás, valamint mindhárom újonnan beiskolázott első osztályban. Ennek a projektnek a megvalósításához kapcsolódóan kaptuk a KFKI által gyártott TPA 1001 nevű számítógépet. Ebben az időben az országban még mindössze 170 db számítógép volt. Mi voltunk az első középiskola, amely számítógéppel rendelkezett. Előzmények: A félvezetők megjelenése az ötvenes évek végétől – elsősorban az Egyesült Államokban – ugrásszerű fejlődést hozott a számítástechnikában (második generációs gépek).  A KGST-ben 1969-ben volt az „áttörés”.  Az országok között „szétosztották” a gyártási feladatokat. Magyarország a rendszer legkisebb (R10) gépének gyártását kapta. A KGM (Kohó- és Gépipari Minisztérium, az iskola akkori fenntartója) feladata egyrészt a gyártás megszervezése, másrészt az ehhez és a legyártott gépek üzemeltetéséhez szükséges középfokú végzettségű munkaerő képzésének biztosítása volt. A középfokú szakember képzésre bennünket találtak legalkalmasabbnak, mi voltunk akkoriban az elektronikához kapcsolódó technikus képzés „zászlóshajója”. Később a koncepció kissé változott, a gyártás Székesfehérváron valósult meg. A TPA 1001 1971. szepntember 8-án lett üzembe helyezve. Az elméleti képzés megszervezését Nagy Imre, a gyakorlati képzését Urbán Kornél kapta feladatul. A gép a fszt. 9.B jelű helyiségben kapott helyet. A kábeleknek álmennyezet és álpadló lett kiépítve.'
    },
    //Görgey Artúr út 26.
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image:'KEPEK/63_Görgey szobor koszorúzás.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Görgey Artúr út 26.', title: 'Görgey Artúr út 26.',
        content: 'Görgey Artúr (1818–1916), az 1848–49-es forradalom és szabadságharc honvéd tábornokának mellszobra a róla elnevezett utcában áll. A mellszobor egy 150 cm magas talapzaton nyugszik. Alkotója Gömbös László szobrászművész; alkotását 1998-ban állították fel.'
    },
    //Hachné Nyerges Rita
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: '',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Hachné Nyerges Rita', title: 'Hachné Nyerges Rita', 
        content: '1989-ben végzett az Eötvös Loránd Tudományegyetem Természettudományi Karán okleveles matematika szakos középiskolai tanárként, majd Kecskeméten, Szegeden, és a Corvinuson tett további szakvizsgákat. Volt az iskola matematikát angol nyelven oktató tanára, mérési csoportjának vezetője, reál-szakterületének vezetője, igazgatóhelyettese és igazgatója 2012 és 2018 között.'
    },
    //sikerek matematikabol
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: '',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Sikerek', title: 'Sikerek matematikából',
        content: 'Zrínyi Ilona Matematikaverseny, Kenguru Nemzetközi Matematika Verseny, Gordiusz Matematika Verseny, Arany Dániel Matematika Verseny, '
    },
    //Szakmak ejszakaja
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/66B_szakmák éjszakája.jpg',
        pocketTitle: 'Szakmák éjszakája',
        gallery: [
            'KEPEK/66_szakmák éjszakája/K.jpg',
            'KEPEK/66_szakmák éjszakája/L.jpg',
            'KEPEK/66_szakmák éjszakája/szakmák éjszakája.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Szakmak éjszakája', title: 'Szakmak éjszakája',
        content: '2016. április 15-én sok érdeklődő vett részt a SZAKMÁK ÉJSZAKÁJÁN az UMSZKI-ban. Első ízben ekkor került megrendezésre ez az interaktív bemutató. Látogathatóak voltak a műhelyek és a szaktantermek, különlegesen érdekes programokkal, bemutatókkal várták az érdeklődőket. Szülők, gyerekek és kollégák lelkesen próbáltak ki mindent, amit csak lehetett. Az umszkis diákok és tanárok éjszakába nyúlóan dolgoztak, fáradhatatlanul beszéltek, be- és megmutattak az iskola fő profiljait a látogatóknak.'
    },
    //Konyvtar
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image:'KEPEK/',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Könyvtár', title: 'Könyvtár',
        content: 'HOSSZÚ SZÖVEG'
    },
    //Újpesti Középiskolai Börze
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/68_újpesti iskolák börzéje.png',
        pocketTitle: 'Újpesti Középiskolai Börze',
        gallery: [
            'KEPEK/68_középiskolai börze/I.jpg',
            'KEPEK/68_középiskolai börze/J.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Újpesti Középiskolai Börze', title: 'Újpesti Középiskolai Börze', dropCap: true,
        content: 'A többnapos rendezvényen a pályaválasztás előtt álló diákok és szüleik segítséget kapnak a továbbtanulási lehetőségek feltérképezésben akár budapesti vagy Budapest környéki iskolaválasztásban gondolkoznak. Az iskolák bemutatkozása mellett, a helyszínen lehetőséget biztosítnak pályaorientációs szolgáltatás igénybe vételére is, hogy a diákok célirányosabban tájékozódjanak az iskolák képzési kínálatáról.'
    },
    //diákszaj
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: '',
        pocketTitle: 'Diákszáj',
        gallery: [
            'KEPEK/69_diákszáj/Juliánus Béla.png',
            'KEPEK/69_diákszáj/Szulejmán.png'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Diákszáj', title: 'Diákszáj', dropCap: true,
        content: 'Az emberek nagy része vizuális típus. A tanári pálya egyik öröm- és egyszerre kudarcforrása, ha egy-egy kevésbé jól sikerült módon megfogalmazott mondat kapcsán elindult a belső képalkotás. Mára ez a mentális műfaj élővé a meme-k által vált. Néhány mondat kapcsán kreált meme illusztrálja ezeket most. <br>"Szulejmán szultán Szigetvár alatt tehetetlen haragjában megütötte a gutát."<br>"Amikor Juliánus barát meghozta a tatát veszedelem hírét, IV. Béla várromokat építtetett."<br>"Dugonics Titusz fenekét a falnak támasztotta és azon felmászott a bástyára."<br>"Vörösmarty Mihály az MTK tagja volt."'
    },
    //24oras angol ora - Guinness rekord - Uniós csatlakozás
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/70_uniós csatlakozás, guinness (2).jpg',
        pocketTitle: '24 órás angol óra - Guinness rekord - Uniós csatlakozás',
        gallery: [
            'KEPEK/70_uniós csatlakozás, guinness.jpg',
            'KEPEK/70_uniós csatlakozás, guinness (2).jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Guinness rekord és uniós csatlakozás', title: '24 órás angol óra – Guinness rekord - Uniós csatlakozás', dropCap: true,
        content: 'Az UMSZKI-ban hogyan ünnepeltük uniós csatlakozásunkat?<br>Az akkor érettségi előtt álló 13.H osztály angol órákat tartottak "Nyelvtudással lépünk Európába " jelszóval. Volt matematika, informatika, testnevelés, irodalom, fizika, zene... és minden angolul, izgalmas szórakoztató feladatokkal. Összefogtak a tanárok és a szülők, és hozzásegítették a csapatot a Guinness-rekord felállításához. Az akkori Oktatási Minisztérium volt az egyik támogató. Szép emlék.'
    },
    //sikerek nemet nyelvbol
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: ''
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Sikerek', title: 'Sikerek német nyelvből', dropCap: true,
        content: 'Német nyelvi és civilizáció verseny, Német nyelvi vers-és prózamondó iskolai verseny, „Gewinne einen Sprachkurs”'
    },
    //Ujpesti fáklyás ballagás
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/72_újpesti fáklyás menet.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Újpesti fáklyás ballagás', title: 'Újpesti fáklyás ballagás', dropCap: true,
        content: ''
    },
    //Technikai dolgozók
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/73_technikai dolgozók.JPG',
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Emlékek - Technikai dolgozók', title: 'Technikai dolgozók',
        content: 'A tanárokon, oktatókon és a diákokon túl ki mindenki járul még hozzá egy iskola mindennapjaihoz, működtetéséhez?<br>A tanulmányi osztály, a titkárság, a munkaügyért felelős, a gazdasági felelős, a portás, a gondnok, a konyhai alkalmazottak, a takarítók, a kertész, a raktáros, az árubeszerző. Legtöbbször ők is back stage-ben teszik a dolgukat, de nélkülük egyetlen közintézmény sem működni sehogy. Ha ez a működés olajozott és zökkenőmentes, ahhoz ők is hozzájárulnak nap mint nap. Újabb érdekesség az épület eredeti állapotát illetően, hogy régen nem volt portásfülke, a mai 121-es tanári szoba volt a portás tartózkodási helye. Innen egy ablakon keresztül - ez ma is létezik - lehetett rálátni a nagykapura. Ebből a helyiségből egy vas csigalépcső vezetett le a portás lakásba.'
    },
    //75 éves az iskola
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/74_75 éves az iskola.jpg',
        pocketTitle: '75 éves az iskola',
        gallery: [
            'KEPEK/74_75 éves az iskola/A. oldal.jpg',
            'KEPEK/74_75 éves az iskola/B (2).jpg',
            'KEPEK/74_75 éves az iskola/B. oldal.jpg',
            'KEPEK/74_75 éves az iskola/B.jpg',
            'KEPEK/74_75 éves az iskola/F.jpg',
            'KEPEK/74_75 éves az iskola/Kép16.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – 75 éves az iskola', title: '75 éves az iskola', dropCap: true,
        content: 'A teljes 2002/2003-as tanév a hetvenöt éves fennállás ünneplésének jegyében zajlott. A hivatalos ünnepség nyitánya a 2002. szeptember 1-jei tanévnyitó volt. Emlékezetessé az tette ezt a napot, hogy eljött nagyon sok régi diákunk és tanárunk. Az iskolavezetés és az alapítvány közösen szervezte az eseményt. November elején avatták a múzeumot, és ezidőtájt került sor az öregdiák találkozóra is. A 75. Jubileumi Évkönyv kiadása az ünnepségsorozat fontos eleme volt. Az évkönyvet Gál Katalin tanárnő – egyben könyvtár-vezető - szerkesztette. A helytörténeti vetélkedő az Újpesthez kötődő, elhunyt akadémikusok márványtábláján szereplő személyek életútjának, tevékenységének alapos ismeretéről szólt. A vetélkedőre – a jubileumi tanév rendezvényeként – 2002. novemberének közepén - több kerületi középiskola részvételével - került sor. A jubileumi év utolsó eseménye 2003. júniusában a technikusi oklevélosztó ünnepségen történt. Ekkor került sor – történetünkben először – Arany Technikusi Oklevél átadására.'
    },
    //A régi múzeum
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/75_75 éves műzeum.JPG',
        pocketTitle: 'A régi múzeum',
        gallery: [
            'KEPEK/75_75 éves iskolamúzeum/A.jpg',
            'KEPEK/75_75 éves iskolamúzeum/B.jpg',
            'KEPEK/75_75 éves iskolamúzeum/C.jpg',
            'KEPEK/75_75 éves iskolamúzeum/D.jpg',
            'KEPEK/75_75 éves iskolamúzeum/E.jpg',
            'KEPEK/75_75 éves iskolamúzeum/F.jpg',
            'KEPEK/75_75 éves iskolamúzeum/G.jpg',
            'KEPEK/75_75 éves iskolamúzeum/H.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – A régi múzeum', title: 'A régi múzeum',
        content: 'A múzeum – melynek korrekt neve Iskolatörténeti állandó kiállítás – átadására 2002.11.08-án a tantestület jelenlétében került sor. Másnap a jubileumi öregdiák találkozón a megjelentek körében óriási sikert aratott. Azóta is sok-sok látogatója volt. A korábbi lánghegesztő műhely  felszámolásával és a kovács műhely korhű felújításával iskolamúzeum kialakítására került sor. A jubileumi tanév egyik fő attrakciója az iskolamúzeum létrehozása volt. A munka már az előző tanévben elkezdődött. Egyrészt a helyszín kialakítása, másrészt a tárlók elkészítése, valamint a kiállítás anyagának összeszedése. A múzeum a korábbi lánghegesztő műhely helyén lett kialakítva. Meg kívánom jegyezni, hogy ez a helyiség eredetileg a kovács-műhely része volt. Valamikor az ötvenes években lett leválasztva. A múzeum szerves része, a kovácsműhely, mely az épület egyetlen olyan helyisége, ahol zömében az eredeti berendezés és eszközök megmaradtak.'
    },
    //Osztálytablók, osztálytalálkozók
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/776_osztálytalálkozók.jpg',
        pocketTitle: 'Osztálytablók, osztálytalálkozók',
        gallery: [
            'KEPEK/76_osztálytalálkozók.jpg',
            'KEPEK/76_osztálytabló.png'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Esemény – Osztálytablók, osztálytalálkozók', title: 'Osztálytablók, osztálytalálkozók', dropCap: true,
        content: 'Az osztálytablókról az adott korra, korszakra jellemző hangulat sugárzik. A tablók kivitelezése is az adott kor stílusát tükrözik. Urbán Kornélnak köszönhetően az elmúlt száz év tablóinak zöme fellelhető az iskolatörténeti gyűjteményben időrendbe sorakoztatva. "Találkozunk öt év múlva." Ez az idézet, felirat szerepelt hagyományosan a legtöbb tablón az 1960-as évektől. Ez a cselekvésre felszólító mondat az öttel és tízzel osztható számokhoz köthető évfordulók örömmel teljesíthető kötelezettségeit eredményezi: öt, tíz, húsz, huszonöt, harminc, negyven, ötven, sőt hatvan éves osztálytalálkozók szerveződtek és szerveződnek folyamatosan. Hagyomány az iskolában, hogy az osztálytalálkozókon emléktáblát avatnak a főbejárat mellett az újratalálkozás emlékét őrizendő.'
    },
    //Újpesti akadémikusok emléktábláinak koszorúzása
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/77_újpesti akadémikusok emléktáblái.jpeg',
        pocketTitle: 'Újpesti akadémikusok emléktábláinak koszorúzása',
        gallery: [
            'KEPEK/77_újpesti akadémikusok emléktáblái.jpeg',
            'KEPEK/77_AKADÉMIKUSOK EMLÉKTÁBLÁI.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Újpesti akadémikusok emléktábláinak koszorúzása', title: 'Újpesti akadémikusok emléktábláinak koszorúzása', dropCap: true,
        content: 'A magyar tudomány ünnepe november 3-a, arra emlékezve, hogy Széchenyi István 1825-ben ezen a napon ajánlotta fel birtokainak jövedelmét a Magyar Tudós Társaság (a mai MTA) megalapítására. A hivatalosan 2003 óta megtartott ünnep célja a tudományos élet eredményeinek bemutatása és a társadalommal való megismertetése. A magyar tudomány napja alkalmából 2008 óta tartanak megemlékezést az iskola kertjében, az emlékezetünkben élő újpesti akadémikusok márványtáblája, később márványtáblái előtt.  Az akadémikusokra emlékezve fontos, hogy az utókor méltó legyen nagy elődeihez, és emlékezzen újpesti kötődésű tudósaira. <a href="https://www.youtube.com/watch?v=0RxP8TP5OtA&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=24" target="_blank">Megállapodás ÚKTV Híradó</a>'
    },
    //angol kéttannyelvűség
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: '',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Angol kéttannyelvűség', title: 'Angol kéttannyelvűség', dropCap: true,
        content: 'A két tanítási nyelvű osztályokban az előkészítő év után több tantárgyat idegennyelven oktatunk: matematika, történelem/fizika, illetve az egyébként is célnyelven tartott civilizáció tantárgy. Ezekből a tantárgyakból az érettségin az oktatott nyelven zajlik a vizsga, valamint idegen nyelvből emelt szintű érettségit tesznek le a diákok. Az emelt szintű érettségi, valamint az idegen nyelven tanult tárgyak felsőfokú nyelvvizsgaként jelennek meg az érettségi bizonyítványban. Sok értékes programba vonják be diákjaikat az angok munkaközösség tanárai: iskolai versmondó versenyek a könyvtárban, kéttannyelvű iskolák versenye, Creative Writing, angolnyelvű színjátszó verseny a Berzeviczyben. Kasza Gyuláné Bánó Kacskovics Judit sokat tett azért, hogy 1995-ben elindulhasson a gimnáziumi képzés nálunk. Neki köszönhetjük, hogy - országosan az elsők közt - itt kezdődött meg a két tanítási nyelvű oktatás 1998-ban, s ehhez kapcsolódóan 2002-től intézményünk nyelvvizsgaközpont is lett. Folyamatosan azon dolgozott, hogy a képzés sokoldalúbb és színvonalasabb legyen. <a href="https://www.youtube.com/watch?v=Z5lxTw0C_7I" target="_blank">Angolul szavaltak a diákok az UMSZKI-ban</a>'
    },
    //német kéttannyelvűség
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/79_német kéttannyelvű.png',
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Német kéttannyelvűség', title: 'Német kéttannyelvűség', dropCap: true,
        content: 'Az első évfolyam 2000-ben indult.'
    },
    //URBÁN KORNÉL
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/80_urbán kornél.jpg',
        pocketTitle: 'Urbán Kornél',
        gallery: [
            'KEPEK/80_Urbán Kornél/1_érettségi tablókép.jpg',
            'KEPEK/80_Urbán Kornél/2_tanárként.jpg',
            'KEPEK/80_Urbán Kornél/3_munka közben.jpg',
            'KEPEK/80_Urbán Kornél/4_nyugdíjasként.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Urbán Kornél', title: 'Urbán Kornél', subtitle: '(1940-2020)',
        content: 'Urbán Kornél villamosmérnök, mérnöktanár. Iskolánkban érettségizett, és az egyetem után 49 éven át volt az iskola tanára. Újpestért díjas tanár. Az Újpesti Városvédő Egyesület alapítótagja. Az Újpesti Közművelődési Kör tagja is volt, és az Újpest Internetes Lexikon főszerkesztő-helyettese. 2022-ben emléktáblát avattak a tiszteletére. Az iskolatörténeti gyűjteménynek jelentős része az ő jóvoltából kerülhet az érdeklődők elé. Szöllősy Marianne helytörténész, az Újpesti Városvédő Egyesület elnöke, az Újpesti Helytörténeti Gyűjtemény vezetője életút-interjút készített vele, mely az <a href="">Újpesti Helytörténeti Értesítő 2020 szeptemberi számában olvasható</a><br>Ennek a virtuálisan lapozható emlékönyvnek az összeállításánál is Urbán Kornél az iskolával kapcsolatos, évtizedek alatt összegyűjtött anyagai szolgáltak alapul, csakúgy mint az iskolatörténeti gyűjtemény esetében.'
    },
    //STUDIÓ
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image:'KEPEK/81_studió.JPG',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Könyvtár', title: 'Studió',
        content: 'Mint minden oktatási intézményben, az Umszkiban is fontos eleme minden tanteremnek a fali hangszóró. Itt a regionális nyelvváltozat szerint az ezekből elhangzó rádiós megemlékezéseket "dobozos műsorként" emlegetik, tartják számon az iskola polgárai. A stúdió az a hely, ahol a kreativitás találkozik a fizikával és a technika ördögével. A mindenkori stúdiósok felelnek az iskolai ünnepségek, előadások teljes technikai hátteréért. Nemcsak kezelik a keverőpultokat, a mikrofonokat és a hangfalakat, de igazi csapatként oldják meg a hirtelen jött színpadi helyzeteket is. A "back stage"-ben zajló munka a technikai felszerelés előkészítésén, karbantartásán, üzemeltetésén túl a műsorok hangfelvételének szerkesztéséig terjed. A stúdiósok idejüket, energiájukat áldozzák egy-egy iskolai rendezvény minél zavartalanabb lebonyolításához.'
    },
    //építőtáborok,golyatáborok
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/82_építőtáborok.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Építőtáborok, gólyatáborok', title: 'Építőtáborok, gólyatáborok', dropCap: true,
        content: 'A 70-es évek egyik fontos momnetuma a Sziklai Sándor hansági KISZ- (Kommunista Ifjúsági Szövetség) építőtábor. Építőtáborokat a gazdasági mellett nevelési és propagandacélokból már az ötvenes évektől szerveztek (bizonyos iskolákban elvárás volt a diákoktól néhány heti önkéntes munka felajánlása), ám csúcspontjukat nem ekkor érték el. Azaz: ami a résztvevőket illeti nem ekkorra tehető a csúcs, hanem a hetvenes évekre (annak is inkább a végére) vagyis a klasszikus kádári pangás időszakára. Míg 1960-ban 22 ezer fiú és lány dolgozott nyáron önkéntes munkán, 1982-re mintegy 54 ezerre nőtt a nyári munkára a huszonegy felállított KISZ-táborba érkezett fiatalok száma. Természetesen a nagyberuházásokra érkező fiatalok mellett számos egyéb építőtábor is létezett, amelyekben elsősorban mezőgazdasági munkát végeztek a diákok, gyümölcs- és zöldségszedés  (szőlőszüret, kukoricacímerezés, paradicsomszedés) és mindezek feldolgozása volt a legtöbb esetben az elvégzendő munka. Pécs melletti Szilágypuszta: gyümölcsszedés. Új korszak, új tábortípus: a gólyatábor merőben más szándékkal szerveződött.'
    },
    //nyelvi táborok
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Nyelvi táborok', title: 'Nyelvi táborok', dropCap: true,
        content: '1996 - Tiszapüspöki Pályázattal indult. Balatoni táborok.'
    },
    //Erasmus+
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/84_erasmus.JPG'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Erasmus+', title: 'Erasmus+', dropCap: true,
        content: 'Az Erasmus+ az Európai Unió átfogó programja, amely az oktatást, a képzést, az ifjúságügyet és a sportot támogatja Európában. A jelenlegi, 2021-től 2027-ig tartó ciklusban kiemelt figyelmet fordítanak a társadalmi befogadásra, a zöld és digitális átállásra, valamint a fiatalok demokratikus életben való részvételének ösztönzésére. Tanulók és tanárok csoportos vagy egyéni mobilitását, szakmai látogatásokat, úgynevezett job-shadowingokat tesz lehetővé. Az iskola 2001 ót vesz részt uniós pályázatokban. Mindig bővül, folyamatosan változik a partneriskolák listája. Az igazgatóság előtti folyosórészen létrehozott Erasmus-fal jól szemlélteti a kapcsolathálót. <a href="https://edir.umszki.hu/p/erasmus" target="_blank">Weboldal linkje</a>'
    },
    //Budapesti Műszaki Szakképzlsi Centrum
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/85_szakmaszerkezet_technikum.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – BMSZC', title: 'Budapesti Műszaki Szakképzési Centrum', dropCap: true,
        content: 'A 2010-es évek elejétől a magyar köznevelés és szakképzés gyökeresen átalakult. Az iskolák állami fenntartásba vételével (Klebelsberg Központ, majd a Szakképzési Centrumok megalakulásával) a klasszikus önkormányzati TISZK-társulások megszűntek vagy beolvadtak a mai centralizált szakképzési struktúrába. A TISZK a Térségi Integrált Szakképző Központ rövidítése volt. Napjainkban Magyarországon a szakképzés gerincét a 44 állami fenntartású szakképzési centrum alkotja, amelyek összesen 365 szakképző iskolát integrálnak. Ezek az intézmények fogják össze a térségi szakképzést, biztosítva a technikai hátteret és a munkaerőpiaci kapcsolatokat a tanulók számára. A BMSZC tizenkét nagy múltú iskolát tömörít, a modern technológia oktatására fókuszálva.'
    },
    //World Schoolar's Cup 2018
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/86_World Schcolars Cup 2018.jpg',
        pocketTitle: 'World Schoolars Cup 2018',
        gallery: [
            'KEPEK/86_World Scholars Cup 2018/A_1.jpg',
            'KEPEK/86_World Scholars Cup 2018/A.jpg',
            'KEPEK/86_World Scholars Cup 2018/B.png',
            'KEPEK/86_World Scholars Cup 2018/C.jpg',
            'KEPEK/86_World Scholars Cup 2018/D.jpg',
            'KEPEK/86_World Scholars Cup 2018/E.jpg',
            'KEPEK/86_World Scholars Cup 2018/F.jpg',
            'KEPEK/86_World Scholars Cup 2018/G.jpg',
            'KEPEK/86_World Scholars Cup 2018/H.jpg',
            'KEPEK/86_World Scholars Cup 2018/I.jpg',
            'KEPEK/86_World Scholars Cup 2018/J.jpeg',
            'KEPEK/86_World Scholars Cup 2018/K.jpg',
            'KEPEK/86_World Scholars Cup 2018/L.jpeg',
            'KEPEK/86_World Scholars Cup 2018/M.jpg',
            'KEPEK/86_World Scholars Cup 2018/N.png'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – World Schoolars Cup 2018', title: 'World Schoolars Cup 2018', dropCap: true,
        content: 'HOSSZU SZOVEG'
    },
    //Lányok az UMSZKIban
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/87_lányok.jpg',
        pocketTitle: 'Lányok az Umszkiban',
        gallery: [
            'KEPEK/87_lányok.jpg',
            'KEPEK/87_lányok az iskolában.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - Lányok', title: 'Lányok az Umszkiban',
        content: '1945-ben az iparügyi miniszter (69 259/II./3.-1945 számú) rendelete tette lehetővé, hogy középfokú iparoktatási intézmények nappali tanulói közé lányok is felvehetők legyenek. Később a 13.970/1947. számú kormányrendelet a műszaki középiskola létesítéséről rendelkezett és megerősítette a lányok ilyen intézményben való továbbtanulási jogát. Iskolánkba az 1949/50-es tanévben vettek fel két leány. Ők voltak az „első fecskék”. Közülük egy fő, Svéd Mariann tett képesítő vizsgát az 1952/53. tanévben a IV. B osztályban. Vele indult tehát a történet. A következő, az  1950/51-es tanévben tizenegy leány került felvételre, közöttük volt Sásdi Mária is. Az országos tanévnyitóra iskolánkban került sor. Darvas József miniszter tartotta az ünnepélyes tanévnyitót az akkori körtermünkben. A fő üzenet a lányok megjelenésének hangsúlyozása volt az iparoktatásban. A filmhíradó is beszámolt a jeles eseményről, melybe beleszőtték Sásdi Mária történetét is, üzenve a fiatal lányoknak, hogy várja Őket az iparoktatás. 80-as években gépszerkesztői szakon sok lány került az iskolába. A tanulói létszámokat az 1951 és 1980 közötti időintervallumban vizsgálva láthatjuk, hogy a 10%-ot is meghaladta a lánytanulók aránya ebben az időszakban. Az iskola életében jelentős változást hozott a gimnáziumi képzés, hiszen a gimnáziumi osztályokba addig soha nem tapasztalt mértékben jelentkeztek lányok. Ez az arány a technikusi képzés újragondolásával nagyon visszaesett. 2020-as években már 30 fő alatt volt a nappali tagozaton tanuló lányok létszáma. A 2026-ban felvétel nyertek között két lány szerepel, akárcsak 1949/50-ben.'
    },
    //3D-s nyomtató
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/',
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Tárgyak - 3D nyomtató', title: '3D nyomtató',
        content: ''
    },
    //Dr.Nyárs Csaba-díj, Czellér András-díj
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/89_nyárs csaba díj.JPG',
        pocketTitle: 'Dr. Nyárs Csaba-díj, Czellér András-díj',
        gallery: [
            'KEPEK/89_nyárs csaba díj/G.JPG',
            'KEPEK/89_nyárs csaba díj/I.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Díjak', title: 'Dr. Nyárs Csaba-díj, Czellér András-díj (2024)', dropCap: true,
        content: '2016 decemberében került sor először a Nyárs Csaba-díj átadására. A díjat Dr. Nyárs Csaba, a jeles újpesti lokálpatrióta alapította azzal a céllal, hogy az UMSZKI - a kitűnő újpesti technikusképző intézmény – két diákja és két tanára részesüljön minden évben az elismerésben. A díj átadására az iskolai karácsonyi ünnepségen kerül sor. Dr. Nyárs Csaba a közjegyzőnél hitelesített díj-alapító okirat alapján az iskolai alapítványnál három millió forintot helyezett el a finanszírozásra. A mindenkori díjazottak az 50.000 forintos pénzjutalom mellé egy, az épületünket ábrázoló ezüst kitűzőt kapnak díszdobozban, valamint egy díszes oklevelet.<br>Czellér S. András iskolánk diákja volt. Számos tapasztalattal rendelkezik az energiaipar, a nemzetközi kereskedelem, az üzleti és a szoftverfejlesztés területén.  A 2022-ben létrehozott iskolatörténeti gyűjteményt látva 50 éves osztálytalálkozójuk alkalmával ajánlott fel jutalmazás céljára felhasználható pénzösszeget, valamint az iskola új múzeumának fejlesztésére szolgáló jelentős összeget.'
    },
    //90. tanév ünnepe
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/90_.JPG',
        pocketTitle: '90. tanév ünnepe',
        gallery: [
            'KEPEK/90_szülinap/A - P1013055.JPG',
            'KEPEK/90_szülinap/A (2).jpg',
            'KEPEK/90_szülinap/A-x21230905_1649694451739587_4875766784013359516_n.jpg',
            'KEPEK/90_szülinap/A.jpg',
            'KEPEK/90_szülinap/B - Bicskei Gy.-1.jpg',
            'KEPEK/90_szülinap/B - DSCF1033.JPG',
            'KEPEK/90_szülinap/B - P1013056.JPG',
            'KEPEK/90_szülinap/B.jpg',
            'KEPEK/90_szülinap/Berki Bea.jpg',
            'KEPEK/90_szülinap/C.JPG',
            'KEPEK/90_szülinap/D (2).JPG',
            'KEPEK/90_szülinap/D (3).JPG',
            'KEPEK/90_szülinap/D-P1013059.JPG',
            'KEPEK/90_szülinap/D.jpg',
            'KEPEK/90_szülinap/E - szept1. előkészület2.JPG',
            'KEPEK/90_szülinap/E -P1013065.JPG',
            'KEPEK/90_szülinap/E.jpg',
            'KEPEK/90_szülinap/F.jpg',
            'KEPEK/90_szülinap/G.JPG',
            'KEPEK/90_szülinap/J.jpg',
            'KEPEK/90_szülinap/P1013062.JPG',
            'KEPEK/90_szülinap/P1013063.JPG',
            'KEPEK/90_szülinap/P1013064.JPG',
            'KEPEK/90_szülinap/P1013067.JPG',
            'KEPEK/90_szülinap/P1013069.JPG',
            'KEPEK/90_szülinap/P1013070.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – 90. tanév ünnepe', title: '90. tanév ünnepe', dropCap: true,
        content: ''
    },
    //címer rekonstrukció
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/91_homlokzat.JPG',
        pocketTitle: 'Címer rekonstrukció',
        gallery: [
            'KEPEK/91_címer rekonstrukció/27_iskolacímerek.jpg',
            'KEPEK/91_címer rekonstrukció/36222849_337497080115360_6456547593601155072_n.jpg',
            'KEPEK/91_címer rekonstrukció/36269341_10204356952720590_8321282094122663936_n.jpg',
            'KEPEK/91_címer rekonstrukció/36312680_337496553448746_6207689779652329472_n.jpg',
            'KEPEK/91_címer rekonstrukció/36316749_1852273668170779_1388618671177334784_n.jpg',
            'KEPEK/91_címer rekonstrukció/IMG_4794 - A.JPG',
            'KEPEK/91_címer rekonstrukció/IMG_6427.JPG',
            'KEPEK/91_címer rekonstrukció/IMG_6434 - D.JPG',
            'KEPEK/91_címer rekonstrukció/IMG_6503 - N.JPG',
            'KEPEK/91_címer rekonstrukció/iskolacímer.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Tárgyak - Címer', title: 'Címer rekonstrukció',
        content: 'Az 1950/51-es tanévben az akkori hatalom eltávolította az iskola homlokzatát díszítő magyar címert. Helyére évziedekre a vörös csillag került. A rendszerváltás után ugyan a csillag lekerült, de közel 30 éven át semmi nem történt a homlokzattal. 2018 júniusának végén került vissza az építő, Foerk Ernő eredeti tervei alapján az iskola homlokzatára a címer rekonstrukciója. A projekt megvalósulásának támogatói között köszönthettük Újpest legjelentősebb civil szervezeteit, jónéhány volt diákunkat, újpesti lokálpatriótákat és több újpesti vállalkozót. Az eseményen az igazgatóasszony összefoglalta a címer történetét és méltatta azt a széleskörű társadalmi összefogást, ami lehetővé tette a megvalósítást. Ugyanakkor készült egy gránit tábla is, mely emléket állít a jeles eseménynek és tiszteleg a megvalósítók és támogatók előtt. A reprezentatív képen a bejárati vaskapun látható iskolajelvény is látszik. Érdekesség, hogy ez az 1949/50-es tanévben került oda, tehát néhány hónappal a homlokzati címer eltávolítása előtt. Diákok készítették Durkó László tanár úr irányításával.<br><a href="https://youtu.be/jlxM2OHSKsk" target="_blank">Szabó Tamás által készített videó</a>'    
    },
    //Az iskolakert
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image:'KEPEK/92_iskolakert.jpg',
        pocketTitle: 'Az iskolakert',
        gallery: [
            'KEPEK/92_iskolakert.jpg',
            'KEPEK/92B_iskolakert.jpg',
            'KEPEK/92_iskolakert/1928_nincs kerítés.jpg',
            'KEPEK/92_iskolakert/1932_van kerítéés.jpg',
            'KEPEK/92_iskolakert/1960-as évek.jpg',
            'KEPEK/92_iskolakert/G.JPG',
            'KEPEK/92_iskolakert/H.JPG',
            'KEPEK/92_iskolakert/NYÁR_1.jpg',
            'KEPEK/92_iskolakert/NYÁR_2.jpg',
            'KEPEK/92_iskolakert/ŐSZ_1.jpg',
            'KEPEK/92_iskolakert/P1011977.JPG',
            'KEPEK/92_iskolakert/P1011982.JPG',
            'KEPEK/92_iskolakert/TAVASZ_2.jpg',
            'KEPEK/92_iskolakert/TAVASZ_3.jpg',
            'KEPEK/92_iskolakert/TAVASZ_4.jpg',
            'KEPEK/92_iskolakert/TÉL_1.jpg',
            'KEPEK/92_iskolakert/TÉL_3.jpg',
            'KEPEK/92_iskolakert/TÉL_4.jpg',
            'KEPEK/92_iskolakert/umszki_004.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Iskolakert', title: 'Az iskolakert',
        content: 'Az udvar platánfái és hársfája mellett az épületet körülölelő területnek is megvannak szemet gyönyörködtető kertészeti csodái. Előkertünk eredendően újpesti közpark volt. Amikor az épület 1927-ben elkészült még nem volt kerítése. 1932-ben a város megállapodott a tulajdonosi jogokat gyakorló Kereskedelemügyi Minisztériummal, hogy az előkert nyilvános park legyen, vállalva ekkor a park kialakítását és fenntartását. Később Lenkei László megbízott tanácselnökhelyettes 1957-ben kelt leveléből kiderül, hogy 1948-ban Döbrentei Károlyné polgármester „kérte az iskola körüli park közterület céljára való átengedését, arra való hivatkozással, hogy Újpest a közterületi parkot erősen nélkülözi”. Igaz, ekkor még a Hősök Ligete létezett, de már elhanyagoltan, a város rendelkezésére állt, feltehetően már építési területként gondoltak rá. Lenkei László leveléből az is kiderül, hogy az iskola igazgatója Bartos Lívia – forráshiányra hivatkozva – szerette volna továbbra is város gondozására bízni az előkertünket, amit nem sikerült elérnie. A jellegzetes jegenye sor elöregedett, egyik másik ki is dőlt, megrongálva a kerítést, sőt az egyik a villamos felső-vezetéket is. 2003 és 2007 között lettek kivágva – egy kivételével – az előkert fái. Helyükre juharfák kerültek. A kivágás és ültetés az önkormányzat segítségével történt. 2005-ben történt egy teljes kertészeti felújítás. A kertgondozás azóta is folyamatos. Az iskola parkfenntartói feladatát kitűnően teljesíti, hiszen az iskolakert manapság is gondos kezekben van: a Görgey út felőli fasor mentén bokrok, virágágyások színesítik az összképet.'
    },
    //UMSZKI diákdíj
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/93_umszki diákdíj.JPG'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – UMSZKI diákdíj', title: 'UMSZKI diákdíj', dropCap: true,
        content: '2004 óta minden évben UMSZKI diákdíj átadására került sor. Ezt mindig a legkiválóbbak kapják. A tanulmányi eredmény, a tanulmányi versenyeken elért eredmény, az iskola diákközösségének szervezésében végzett munka képezi egyebek mellett a kiválasztás szempontjait.'
    },
    //Lézergravírozás
    { 
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        header: 'Tárgyak - Lézergravírozás', title: 'Lézergravírozás',
        content: 'A lézergravírozás egy modern, érintésmentes anyagmegmunkálási eljárás, amely során egy nagy intenzitású lézersugár az anyag felületét felhevíti, elégeti vagy elpárologtatja, így hozva létre a tartós mintát vagy feliratot. Ez a technológia rendkívül precíz, gyors és tiszta, mivel nincs szükség a munkadarab mechanikus rögzítésére.'    
    },
    //Iskolatörténeti gyűjtemény - a megújult iskolamúzeum
    { 
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/95_új múzeum.jpg',
        pocketTitle: 'Iskolatörténeti gyűjtemény',
        gallery: [
            'KEPEK/95_új múzeum.jpg',
            'KEPEK/95_ÚJMÚZEUM.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        header: 'Helyszín – Új múzeum', title: 'Iskolatörténeti gyűjtemény - a megújult iskolatörténeti gyűjtemény',
        content: '1927 óta működő intézményünk 114-es termében, korábban naplószobájában, kapott helyett 2022 novemberében a megújult iskolatörténeti gyűjtemény. Ennek a gyűjteménynek alapjául az iskola alagsorában 20 éven át működő múzeum anyaga és Urbán Kornélnak – iskolánk egykori diákjának és későbbi mérnöktanárának – hagyatéka szolgált. Az ajtón elhelyezett táblán szereplő felirat: „Iskolatörténeti gyűjtemény Urbán Kornél emlékére” is ezt hirdeti. Még a 2002-ben, iskolánk fennállásának 75. évfordulójára alapított Iskola- és technikatörténeti  gyűjtemény az ERASMUS+ “Sustainability- Preserving Europe for the Future Generations” projekt keretében és eredményeként újult meg intézményünk 95. tanévében. Az ünnepélyes átadás 2022. november 9-én volt. A Landler-UMSZKI egykori diákja, később évtizedeken át itt tanító tanára, Urbán Kornél munkálkodott az intézmény eseményeinek nyomon követésén, az iskola történetének dokumentálásán, az iskolavezetés, az osztályfőnökök, a szaktanárok, az osztályok „feltérképezésén”. A kibővített múzeumban igyekeztünk megmutatni hagyatékának az iskolára vonatkozó jelentős részét. Ezért is választottunk a gyűjtemény méltó mottójaként az alábbi Ipolyi Arnold idézetet:<br>„Őrizzük emlékeinket, gyűjtsük össze töredékeinket, nehogy végleg elvesszenek,<br>s ezáltal is üresebb legyen a múlt, szegényebb a jelen, kétesebb a jövő.”'
    },
    //Híressegeink
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/96_hírességeink.png', dropCap: true,
        pocketTitle: 'Hírességeink',
        content:'A "Miből/kiből lesz a cserebogár?" ismert magyar szólás, amelyet arra a meglepő fejlődésre vagy átalakulásra használunk, amikor egy csendes ember, egy kisgyermek később nagy sikereket ér el, vagy komoly pályát fut be.<br>Fenyő Miklós -zenész<br>Zana József - színész<br>Janicsák Veca - énekesnő<br>Szőke Richárd - színész<br>Dietz Gusztáv - MMA harcos, karakterszínész<br>Magonyi László - DJ<br>Rónai Sándor - parlamenti képviselő<br>Molnár Tamás - zenész, dalszövegíró, énekes<br>Wintermantel Zsolt - Újpest egykori polgármestere'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek',
        header: 'Személyek - Hírességeink', title: 'Hírességeink',
        content: 'Csóka Gergely - világutazó<br>Oláh Viktor - British Telekom mérnöke<br>Kalydy Zoltán - ’83 – ’91 a női judo válogatott edzője<br>Berta Tamás - LGT gitárosa<br>Mihály László - az Ameriaki Fizikai Társaság tagja, az MTA tagja New York-i tanszékvezető<br>Bólyos Ibolya - manöken<br>Márk Iván - Balázs Béla-díjas operatőr <br>Kovács Antal - Máté Romano Drom ütőse<br>Csizmár Gábor - ’90-es évek munkaügyi minisztere<br>Halácsy Péter  - Budapest School, Kitchen BP., PREZI, MOKK megalkotója<br>Bagi László - grafikus (Philadelphia)<br>Baksa Attila - űrkutató, üstököskutató<br>Stubnya Béla - színész<br>Barabás Zoltán - rádióriporter, író<br>Virágh Csaba - UTE jégkorongozó, edző<br>Marton Tibor - MAC jégkorongozó és edző<br>Hermann Tivadar - maratonfutó, író<br>dr. Márton Tibor - Bánki Donát Főiskola egyetemi tanár, tanszékvezető, főigazgató-helyettes<br>'    
    },
    //kulturális örökség napja
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/97_kulturalis örökseg.JPG',
        pocketTitle: 'Kulturális örökség napja',
        gallery:[
            'KEPEK/97_kulturális örökség napja/97_kulturális örökség napja.JPG',
            'KEPEK/97_kulturális örökség napja/IMG_2441.JPG',
            'KEPEK/97_kulturális örökség napja/UMSZKI_KÖN_2024_2.JPG',
            'KEPEK/97_kulturális örökség napja/UMSZKI_KÖN_2024_3.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Kulturális örökség napja', title: 'Kulturális örökség napja', dropCap: true,
        content: 'Magyarország legnagyobb ingyenes műemléki fesztiválja a kulturális örökség napja, amelyet minden év szeptemberének harmadik hétvégéjén rendeznek meg. Az esemény az európai örökség napok - European Heritage Days - hazai programsorozata. Ingyenes épületséták, köztük iskolánk bejárása is elérhető ekkor. Az iskolatörténeti gyűjtemény, a kovácsműhely, a tanműhelyek szakszerű vezetés során kerülnek bemutatásra,  lehetőség nyílik az iskola történetének alapos feltárására, megismerésére ezen alkalmakkor.'
    },
    //Az iskolában forgatott filmek
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/98_film2.jpg',
        pocketTitle: 'Az iskolában forgatott filmek',
        gallery: [
            'KEPEK/98_film1.jpg',
            'KEPEK/98_film2.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – Filmek', title: 'Az iskolában forgatott filmek',
        content: 'FOMO - (FEAR OF MISSING OUT) 2019-ben bemutatott, provokatív magyar ifjúsági dráma, amelyet Hartung Attila rendezett. A film a Z-generáció életmódját, az online jelenlét kényszerét és a közösségi média sötét oldalát mutatja be. <br>MANGO MATERNICA - 2026-van bemutatott magyar film, Nagy Borbála rendezésében. Három nő gyermekvállalását mutatja be nemcsak az X-és Y-generáció szemszögéből közelítve meg az élet ezen fontos döntését.<br>Nemcsak az iskola egyes részeinek, részleteinek felismerése jelenthet élménytmindkét film esetében, hanem mert mondanivalójuk örökérvényű, mégha a XXI. század 10-es, 20-as éveiben játszódnak is.'
    },
    //100. tanév ünnep
    { 
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/99_100_unnep.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny',
        header: 'Történet – 100. tanév ünnep', title: '100. tanév ünnep', dropCap: true,
        content: 'Mikor ez az iskola megnyitotta a kapuit, még nem volt internet, nem volt okostelefon, és a diákok sem a TikTokon nézték a legújabb trendeket, hanem örültek, ha nem fagyott be a tintatartójuk. Egy 100 éves „szülinapost” köszöntünk, de ez az épület nem egy múzeum. Bár a falak már sokat láttak – rengeteg felelést, titokban tartott és lebuktatott puskázásokat, első szerelmeket és hatalmas világmegváltó beszélgetéseket a folyosókon –, az iskola valójában mi vagyunk. Mi, akik most ide járunk, és ők, akik látogatóba jönnek vissza, emlékeket kutatva, nosztalgiázva. Egy ilyen évfordulón mindenki hajlamos nagy szavakat használni a „tudás templomáról”, de legyünk őszinték: ez az iskola azért maradt fenn száz évig, mert mindig volt benne élet. Mert a tanárok nemcsak tanítottak, hanem többnyire végtelenül türelmesek voltak, a diákok pedig nemcsak tanultak, hanem közösséget is építettek, életre szóló barátságok köttettek. Ne úgy tekintsünk erre a 100 évre, mint egy poros történelemkönyvre! Legyen inkább mindez egy hatalmas családi album, amibe mindig újabb és újabb fotók és emlékek kerülnek. Kívánjuk az iskolának, hogy a következő száz évben is maradjon fiatalos, a diákoknak, hogy találják meg itt a hangjukat, a tanároknak pedig, hogy legyen még sok-sok generáció, akikre büszkék lehetnek. Boldog születésnapot, Landler, UMSZKI, százévesek csak egyszer vagyunk!'    
    },
    //A 100. tanév tantestületének tablója
    { 
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        header: 'Személyek - 100. tanév tantestületének tablója', title: 'A 100. tanév tantestületének tablója',
        content: 'Tanár nélkül nincs jövő. Ez a kijelentés a pedagógusok társadalmi alapkövét hangsúlyozza: ők azok, akik nemcsak tudást adnak át, hanem formálják a következő generációk kritikai gondolkodását, értékrendjét és alkalmazkodóképességét.  A technológia hiába teszi elérhetővé az információt, a tanár segít azt rendszerezni és értelmezni.  Az iskola a szocializáció helyszíne, ahol a tanár mintaként szolgál az együttműködéshez és a közösségi léthez. Minőségi oktatás nélkül nincs innováció, képzett munkaerő, így hosszú távú gazdasági fejlődés sem.<br>"Iskolák. Világítótornyok, barátom! A jövő fényjelei! Száz és száz kis magot tartalmazó gubók, belőlük fog megszületni az új, a jobb, a bölcsebb." (Sir Arthur Conan Doyle)'
    },
    //Szerkesztoseg
    { 
        type: 'impresszum', 
        eraCss: 'era-toc', 
        title: 'SZERKESZTŐSÉG',
        content:'Urbán Kornél<br>Gulyás Ildikó<br>Soósné Varga Lia<br>Kovács Péter<br>Kolonics Márk' 
    },
    { 
        type: 'impresszum', 
        eraCss: 'era-toc', 
        title: 'SZERKESZTŐSÉG',
        content:'Urbán Kornél<br>Gulyás Ildikó<br>Soósné Varga Lia<br>Kovács Péter<br>Kolonics Márk'
    },

    { type: 'back-cover', eraCss: 'era-cover' },
    { type: 'transparent', eraCss: 'era-transparent' }
];