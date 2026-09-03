const pages = [
    { type: 'transparent', eraCss: 'era-transparent' },
    { type: 'front-cover', eraCss: 'era-cover', image: 'KEPEK/0_címlap.jpg' },

    // --- TARTALOMJEGYZÉK (ToC SPREAD) ---
    {
        type: 'toc-left',
        eraCss: 'era-toc',
        title: 'TARTALOMJEGYZÉK'
    },
    {
        type: 'toc-right',
        eraCss: 'era-toc',
        title: 'TARTALOMJEGYZÉK'
    },

    // --- 0. Csak kepek (Alap - Fehér) ---
    {
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/1_oldal elé_balra.jpg',
    },
    {
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/1_oldal elé_jobbra.jpg',
    },

    // --- 1. BEVEZETÉS (Alap - Fehér) ---
    {
        type: 'image', eraCss: 'era-uniform',
        pocketTitle: 'ANTRÉ 75 éves jubileumi',
        gallery: [
            'KEPEK/1_magyar állami/1.jpg',
            'KEPEK/1_magyar állami/2.jpg',
            'KEPEK/1_magyar állami/3.jpg',
            'KEPEK/1_magyar állami/4.jpg',
            'KEPEK/1_magyar állami/5.jpg',
            'KEPEK/1_magyar állami/6.jpg',
            'KEPEK/1_magyar állami/7.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        title: 'Az újpesti magyar állami fa- és fémipari szakiskola',
        content: 'Újpest ikonikus épülete és kultikus oktatási intézménye - ahová újpesti fiatalok nemzedékei jártak és járnak - az LANDLER/UMSZKI. Az intézmény épülete, eredeti nevén a Magyar Királyi Állami Fa- és Fémipari Szakiskola, 1926-ban épült fel. Klebelsberg Kunó kultuszminiszternek és Semsey Aladár polgármesternek kiemelt szerepe volt a létrehozásában.<br>A születésnap tehát egyrészt a gyönyörű épület 1927-es átadásához, valamint az ekkor beinduló fémipari szakiskolai képzéshez kötődik. Az első tanévnek az 1927/28-as tanévet tekinthetjük. A helyzet mégis árnyaltabb. Volt egy jogelőd iskola - az Újpesti Faipari Szakiskola -, mely 1895-ben kezdte meg működését. Ez az iskola költözött át - Blockner Gyula igazgatása mellett - 1927-ben, fémipari szakiskolai tagozattal bővülve az új épületbe.<br><a href="https://www.youtube.com/watch?v=-0KIu1-IwSE&list=PLiROlxlxPFLIVTnwUDQTPqc8g4Epfhs03&index=5" target="_blank">1926-os építkezési videó</a><br><br>Az 1928-tól kiadott iskolai Értesítők, melyek 1940-től az Évkönyv nevet kapták, a születésnapnak az 1895/96-os tanévet tekintették. Az utolsó írásos anyag erről az időszámításról, az 1945/46-os évkönyv, ami kiadásra nem került, de gépelt kézirat formájában fennmaradt.<br>1951-ben az iskola kettévált. Létrejött az 1 sz. Faipari Technikum és a 2 sz. Gépipari Technikum, melyek más-más főhatóság irányítás alá kerültek, de mindkettő továbbra is ugyanabban az épületben működött tovább. A szétváláskor a faipar a Corvin utcai szárnyat kapta. (A születésnap kérdése mindkét iskolánál szinte egyszerre az 1958/59-es tanévben bukkan elő. Meglepő módon mindkét iskola egymástól eltérő és a korábbival nem egyező születésnapot jelölt.)<br>Az iskola már alapításakor a korabeli szakmai oktatás jelentős intézménye volt, és hosszú története során képes volt a szakoktatás élvonalában maradni. A tartalmilag folyamatosan megújuló fémipari gépészképzés - a kezdetektől napjainkig - korszerű ismeretekkel rendelkező szakemberek bázisa. Az újra és újrafogalmazott híradástechnikai, elektrotechnikai, informatikai és mechatronikai képzés teszi teljessé a mai arculatot.<br>75. Jubileumi évkönyv, 6-28.<br>Biró Endre: Újpest, Egy százéves város emlékei, 88-94.<br><a href="https://edir.umszki.hu/rolunk/tortenet" target="_blank">https://edir.umszki.hu/rolunk/tortenet</a>'
    },

    // --- 2. Foerk Ernő (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/2_FoerkErno.jpg',
        pocketTitle: 'Foerk-tervek',
        gallery: [
            'KEPEK/2_Foerk tervek/1.jpg',
            'KEPEK/2_Foerk tervek/2.jpg',
            'KEPEK/2_Foerk tervek/G.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222..4.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.10.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.12.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.2.5.jpg',
            'KEPEK/2_Foerk tervek/ÉGy 69.222.6-.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Foerk Ernő', subtitle: '(1868 Temesvár –1934 Budapest)',
        content: 'Iskolánk tervezője, Foerk Ernő [ejtsd: \'förk\'] a magyar késő historizmus egyik legjelentősebb építésze, iparművésze és műemlékvédelmi szakembere volt.<br>Legismertebb alkotása a Szegedi Dóm, amelynek terveit Schulek Frigyes eredeti elképzeléseinek átdolgozásával készítette el. Temesvárott született, eredetileg szobrásznak készült, majd a bécsi Képzőművészeti Akadémián tanult építészetet. Hazatérése után Steindl Imre tanársegédje volt a Műegyetemen, ahol részt vett az Országház belső tereinek kialakításában. Emléktáblája egykori óbudai lakóházán és a Szegedi Dóm altemplomában is megtalálható, ahol nyugszik. 1907-ben nyerte el a Ferenc József-rend lovagkeresztjét, 1931-ben a Corvin-koszorút.<br>Foerk Ernő 1911-ben ezt írta magáról: „Két lény lakozik bennem, az egyik az alkotó művész, a másik a búvárkodó, tanulmányozó tudós ember."'
    },

    // --- 3. Zsolnay csempék (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/3_Zsolnay-csempék.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Zsolnay-csempék',
        content: 'Az iskola folyosóin látható eredeti falicsempék az 1920-as évekre jellemző - a szecesszió és az art deco határán álló - építészeti stílushoz illeszkednek. A korszak hasonló középületeiben - például hentesüzletekben, más iskolákban - gyakran használtak mázas pirogránit alapanyagú, fagyálló és könnyen tisztítható csempéket, melyek közül a legnevesebbek a pécsi Zsolnay-gyárból kerültek ki.<br>A pirogránit a Zsolnay-gyárban az 1880-as évek elején kifejlesztett, rendkívül tartós építészeti és díszítő kerámiafajta. Neve a görög "tűz" (pyro) és a "gránit" szóból ered, utalva arra, hogy ez az anyag fagy- és saválló, valamint ellenáll az időjárás viszontagságainak. Mesterségesen készített, a gránithoz hasonló kő. Könnyen olvadó agyagból készül. Az agyagot égetik, porrá őrölik, nyers, nehezen olvadó agyaggal keverik, vízgőzzel gyengén megnedvesítik és nagy nyomás mellett préselik, azután újraégetik. Igen kemény, szívós és ellenálló, végül különböző színű és típusú mázakkal vonják be.<br>Falakat raknak ki vele, valamint például folyosók burkolására is használják.'
    },

    // --- 4. Iskolanevek, korszakok (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/4_korszakok.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Iskolanevek, korszakok',
        content: '1926 óta a XX. és XXI. század minden nehézségének, fordulatának lenyomatát adják az elmúlt 100 év névváltoztatásai, névváltozatai:<br><br>1927 - 1941 Újpesti Magyar Királyi Állami Fa- és Fémipari Szakiskola<br>1941 - 1943 Gépészeti Tagozattal Működő Felsőipariskola<br>1943 - 1946 Felsőipariskola Gépészeti- és Faipari Tagozatokkal<br>1946 - 1947 2. Számú Vas- és Fémipari Felsőipariskola Faipari Tagozattal<br>1947 Újpesti Magyar Állami Felsőipariskola<br>1947 - 1948 Állami Műszaki Középiskola<br>1948 - 1949 Általános Gépészeti Állami Műszaki Szakközépiskola Általános Faipari Tagozattal<br>1950 - 1951 6. Számú Ipari Gimnázium Vas-, Fém-, Gép- és Faipari Tagozattal<br>1951 januárjától Általános Gépészeti Technikum Faipari Tagozattal<br>1951 szeptemberétől - 1955 2. Számú Általános Gépészeti Technikum Faipari Tagozattal<br>1955 - 1958 Landler Jenő Gépipari Technikum<br>1958 - 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 - 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 - 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 - 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 - 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola<br>1990 - 1995 Újpesti Műszaki Szakközépiskola<br>1995 - 1998 Újpesti Műszaki Szakközépiskola és Gimnázium<br>1999 - 2001 Újpesti Kéttannyelvű Műszaki Szakközépiskola és Gimnázium<br>2001 - 2005 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola és Gimnázium<br>2005 - 2012 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola, Szakiskola és Gimnázium<br>2012 - 2015 Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskola és Szakiskola<br>2015 - 2017 Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Szakközépiskolája és Szakiskolája<br>2017 - 2019 Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Szakgimnáziuma és Szakközépiskolája<br>2020 - Budapesti Műszaki Szakképzési Centrum Újpesti Két Tanítási Nyelvű Műszaki Technikum'
    },

    // --- 5. Blockner Gyula (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/5_Blockner.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Blockner Gyula', subtitle: '(1877 Székesfehérvár – 1941 Újpest)',
        content: 'Blockner Gyula neves újpesti pedagógus, szakiskolai igazgató és helytörténeti kutató volt. Gépészmérnökként végzett. Tagja volt a nagy múltú Magyar Mérnök- és Építészegyletnek (ahogy egyébként Hajós Alfréd is).<br>Munkássága leginkább az ipari szakoktatáshoz kötődik. Másfél évtizeden át - 1924 és 1939 között - tevékenykedett az Újpesti Magyar Királyi Állami Fa- és Fémipari Szakiskola igazgatójaként. Nevéhez fűződik az intézmény több évkönyvének és értesítőjének kiadása az 1930-as években. Újpest közéletének aktív tagja volt, különböző egyesületi tisztségeket is betöltött az Újpesti Helytörténeti Értesítő szerint.<br>Mindemellett Erdély történelméhez is vonzódott. Különösen foglalkoztatta Déva vára. 1905-ben az Erdélyi Múzeumban tett közzé tanulmányt a dévai várról, melyet saját rajzaival illusztrált. Kutatásait 1826-ból származó bécsi katonai tervrajzokra alapozta.<br>Blockner Gyula testvére az a hirdetőiroda-alapító Blockner Izidor, kinek veje Hajós Alfréd volt, hiszen lányát, Blockner Vilmát vette feleségül. Blockner Gyula felesége a neves bőrgyáros családból származó Mauthner Ilona volt.'
    },

    // --- 6. Laurencsik Béla (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/6_Laurencsik.jpg',
        pocketTitle: 'Laurencsik Béla',
        gallery: [
            'KEPEK/6_Laurencsik/1931_három igazgató.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Laurencsik Béla', subtitle: '(1888 Fülek – 1972 Budapest)',
        content: 'Laurencsik Béla 1912-ben szerzett műszaki oklevelet. De a Képzőművészeti Főiskolán is tanult. Az I. világháborúban szibériai hadifogságba került Vlagyivosztokban. Több, ekkor született rajza maradt fent.<br>A világháború után Újpestre költözött felesége családjához. Így lett az újpesti faipari technikum rajztanára. 1922-ben nevezték ki az iskola műhelyfőnökének. 1929-től igazgatóhelyettes. Blockner Gyula után ő vette át az igazgatói feladatokat egy tanéven át: 1939-től 1940-ig.<br>Az iskola 1940 - 41-es évkönyvében a következőket olvashatjuk: "Laurencsik Béla iskolánk faipari tagozatán 18 éven át működött mint műhelyfőnök tanár, majd helyettes, illetve megbízott igazgató. Ez idő alatt szaktudásával, szervező képességével feljebbvalóinak teljes elismerését, kartársainak és művezetőinek megbecsülését, az ifjúságnak pedig osztatlan szeretetét érdemelte ki."<br>Festőművészként mesterei: Révész Imre, Hegedűs László, Edvi Illés Aladár, Szentiványi Gyula voltak. A képzőművészeten belül több műfajban is kipróbálta magát.'
    },

    // --- 7. Kovácsműhely (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/7_kovácsműhely.JPG',
        pocketTitle: 'Kovácsműhely',
        gallery: [
            'KEPEK/7_kovácsműhely/1.jpg',
            'KEPEK/7_kovácsműhely/2.jpg',
            'KEPEK/7_kovácsműhely/3.jpg',
            'KEPEK/7_kovácsműhely/4.jpg',
            'KEPEK/7_kovácsműhely/5.jpg',
            'KEPEK/7_kovácsműhely/6.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Kovácsműhely',
        content: 'A kovácsműhely igazi kuriózum, hiszen az egyetlen olyan helyisége az épületnek, ahol zömében az eredeti berendezések és eszközök maradtak fenn.<br>2022 óta újra teljes pompájában tündököl, amennyiben ez a kifejezés egy kovácsműhely kapcsán helytálló.'
    },

    // --- 8. Az első tabló (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/8_az első tabló.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Az első tabló',
        content: 'Mivel az első hároméves fémipari képzés 1927-ben indult, így 1930-ban végzett az első osztály. Nyolc tanuló tett vizsgát.<br>A tablóhoz érdekes módon jutott hozzá az iskola. 1977-ben lett az intézmény 50 éves. Az ötvenéves évforduló ünnepléséhez kapcsolódó eseményeket az újságban is meghirdették. Erre jelentkezett Somlyai (Staufer) Endre. Ő ajándékozta saját tablóját az iskolának. A tablón Blockner Gyula, Szabó Béla s Király Endre is látható, akik meghatározó személyiségei voltak az intézménynek.'
    },

    // --- 9. A főbejárat feletti címer szimbolikája (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/9_a főbejárat feletti címer szimbolikája.jpg',
        pocketTitle: 'A főbejárat feletti címer szimbolikája',
        gallery: [
            'KEPEK/9_címer szimbolika/9_bejárat.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'A főbejárat feletti címer szimbolikája',
        content: 'A főbejárat kovácsoltvas díszítésének tervrajzán pajzs alakú magyar címer stilizált változata látható.<br>A szimbolika a következő: a kettős kereszt a magyar államiság és a keresztény hagyomány egyik legfontosabb jelképe. A kettős kereszt a középkor óta a magyar címer része, és a keresztény hitre, valamint a történelmi Magyar Királyságra utal. A vízszintes sávok az Árpád-házi uralkodók vörös-ezüst sávozására emlékeztetnek. A címertanban ez a magyar államiság történelmi folytonosságát jelképezi. A kör alakú keret, vagyis a címer kör alakú medalionba foglalása gyakori szecessziós és historizáló épületdíszítési megoldás, amely kiemeli a nemzeti jelképet. A babér- vagy tölgyágak hagyományosan a dicsőség, a tudomány, a siker vagy az erő, állhatatosság, kitartás jelképei. A négy irányban elhelyezett virágmotívumok elsősorban dekoratív szerepűek, de a szimmetriát és a teljességet is hangsúlyozzák. A szecessziós növényi indák, azaz az ornamentika, az életet, a fejlődést és a folytonosságot szimbolizálják.<br>A magyar címer alkalmazása az intézmény állami jellegét és nemzeti kötődését hangsúlyozza, míg a növényi ornamentika az épület historizáló-szecessziós díszítőstílusához igazodik.'
    },

    // --- 10. Szabó Béla (Személyek - Kék) ---
    {
        eraCss: 'era-szemelyek', type: 'image',
        image: 'KEPEK/10_Szabó Béla.jpg',
        pocketTitle: 'Szabó Béla',
        gallery: [
            'KEPEK/10_Szabó/bA.jpg',
            'KEPEK/10_Szabó/Szabó gúnyrajz.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Szabó Béla', subtitle: '(1899 Józseffalva - ?)',
        content: 'Szabó Béla 1925-ben szerzett gépészmérnöki oklevelet a Királyi József Műegyetemen, mely a mai Budapesti Műszaki Egyetem jogelődje.<br>1927-től műhelyfőnöke az iskolának. Berendezte a fémipari tanműhelyeket, a gépházat és a szertárakat. Majd megbízott igazgató lett 1940-től. A II. világháború frontjának közeledtével 1944 októberében megkezdte az iskola gépi berendezéseinek mentését, részben elásatta, részben befalaztatta azokat. A tanítás 1944. november 17-én megszakadt, és csak 1945. május 7-én indult újra. 1948 januárjában Szabó Bélát felmentették igazgatói állásából.<br>Az őt ábrázoló gúnyrajzzal szemléltették az akkor kialakult helyzetet: A "fémipart a tenyerén hordozza", a faipar meg a "kalapács súlya alatt nyög".'
    },

    // --- 11. Lépcsőház (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/11_LÉPCSŐHÁZ.JPG',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Lépcsőház',
        content: 'A lépcsőházi gondolat (franciául esprit d\'escalier) arra a helyzetre utal, amikor a tökéletes válasz, éles elméjű visszavágás vagy okos gondolat csak akkor jut eszünkbe, amikor már véget ért a beszélgetés, és elhagytuk a helyszínt.<br>A kifejezés a híres 18. századi francia filozófustól és írótól, Denis Diderot-tól ered. E fogalmat A színészparadoxon című esszéjében írta le először.<br>Történt egyszer, hogy Diderot hivatalos volt egy vacsorára. A társasági eseményen valaki egy olyan megjegyzést vagy érvet szegezett neki, amely teljesen váratlanul érte és elnémította a filozófust. „A magamfajta érzékeny ember, akit teljesen letaglóz a vele szembeállított érv, elveszíti a fejét, és csak a lépcső alján tér magához.”<br>Amikor Diderot-nak végre eszébe jutott a tökéletes, megsemmisítő válasz, már fizikailag is elhagyta a társaságot: elköszönt, kilépett a szalonból, és a lépcsőn gyalogolt lefelé a földszintre. Ekkor már késő volt visszafordulni, a pillanat végérvényesen elveszett.<br>Így született meg a kifejezés, amely a mai napig tökéletesen leírja a bosszantó fáziskésést, s amely azt is bizonyítja, hogy az ember élethosszig tanul.'
    },

    // --- 12. Lépcsőházi ólomüvegablak (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/12_lépcsőházi ólomüvegablak.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Lépcsőházi ólomüvegablak',
        content: 'Ez az ólomüveg a kőművesek és kőfaragók céhének jelképét ábrázolja. A szimbólum elemei a mesterség alapvető szerszámai, amelyek gyakran megjelennek céhes címereken és szabadkőműves jelképrendszerben is:<br>- a körző és a derékszög a pontosság és a mértéktartás szimbólumai,<br>- a gyalu és a vésők a megmunkálás és a finomítás eszközei.<br>A vörös háttér gyakran használt szín a történelmi céhes üvegablakokon. Hasonló ólomüveg alkotások Európa-szerte megtalálhatók régi városházákon vagy céhházakban. Például a németországi Stade városházáján látható egy, a XVIII. századból származó kőműves céhpecsét, amely szinte azonos elrendezésű.<br>Ezek a "medálok" az adott mesterség tiszteletére és a szakmai közösség összetartozásának jeléül készültek.'
    },

    // --- 13. Az igazgatóság helytörténete (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/13_igazgatóság helytörténete.JPG',
        pocketTitle: 'Az igazgatóság helytörténete',
        gallery: [
            'KEPEK/13_igazgatói előtt/K.JPG',
            'KEPEK/13_igazgatói előtt/L.jpg',
            'KEPEK/13_igazgatói előtt/M.jpg',
            'KEPEK/13_igazgatói előtt/N.jpg',
            'KEPEK/13_igazgatói előtt/O.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Az igazgatóság helytörténete',
        content: 'Íme, az egykori igazgatói lakás hallja. Ma az igazgatóság előtere.<br>Dr. Szentirmay János az 1951/52-es tanév elején lett az iskola igazgatója. Ő volt az első igazgató, aki nem költözött be a szolgálati lakásba, viszont készült átalakíttatni a teret. Egy tervezőiroda elkészítette a terveket, de a következő tanévben a szegedi technikum ottani igazgatóhelyettese, Badár Gábor lett az igazgató, és családjával beköltözött a lakásba, az átalakítás így elmaradt.<br>1957 szeptemberétől Bartos Lívia lett az új igazgató. A korábbi igazgató, Badár Gábor 1962-ig még bent lakott az iskolában. Miután Bartos Lívia nem vette igénybe a szolgálati lakás lehetőségét, így az átépítés után itt alakították ki - első ütemben - az igazgatói irodát és később a teljes irodai blokkot.<br>Érdemes végigböngészni az eredeti Foerk-tervrajzon, hogy melyik helyiség miként szolgált a kezdetekkor.'
    },

    // --- 14. Korabeli filmhíradó (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/14_1950_kisfilm.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Korabeli filmhíradó',
        content: '„Így határozta el Sásdi Mária, hogy a szovjet minta nyomán szervezett gépészeti technikumban tanul tovább.” – az 1950-es tanévnyitó ünnepséget és jó pár, kordokumentumként is nagyra értékelhető pillanatot eleveníti meg a kisfilm az 1950-es évből.<br><a href="https://www.youtube.com/watch?v=ayaf8uwFNB8" target="_blank">1950-es tanévnyitó kisfilm megtekintése</a>'
    },

    // --- 15. Az iskola egykori körterme (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/15_az iskola egykori körterme.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Az iskola egykori körterme',
        content: 'Az Auditorium Maximum (röviden Aud Max) latin kifejezés, amely a legnagyobb előadótermet jelöli egy oktatási intézményben.<br>A körterem a főépület jobboldali sarokpavilonjában volt. Ez a nagyterem 300 fő feletti befogadó képességével évtizedeken keresztül kiváló színtere volt az iskola teljes közösségét mozgató programoknak.<br>A ’60-as évek elején az iskola akkori teljes létszámának már a fele sem fért be, így a körterem eredeti funkcióját elvesztette. A felfutó létszám és a beindult híradástechnikai képzés gyakorlati oktatása, infrastruktúrájának megteremtése krónikus helyiséghiányt eredményezett. Ezen valamennyit segített a kollégium 1960-ban történt kiköltöztetése, de nem oldott meg minden problémát.<br>Ezért döntés született a körterem megszüntetéséről és oktatótermekre történő átépítéséről, ami 1962-ben meg is kezdődött. Elsőként öt, később hét tantermet alakítottak ki itt.'
    },

    // --- 16. Műszaki véna (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/16_műszaki véna.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Műszaki véna',
        content: 'A „műszaki véna” kifejezés a technikai érzékre, a gépek, szerkezetek működésének gyors átlátására és a gyakorlati problémamegoldó képességre utal. Ez egy olyan tehetség vagy készség, amely lehetővé teszi valakinek a technikai eszközök intuitív megértését, javítását vagy tervezését.<br>Jellemzői a logikus gondolkodás; az ok-okozati összefüggések átlátása; a gyakorlatiasság: a „hogyan működik?” kérdés cselekvéssel egybefonódva megválaszolása; a térlátás; a szerkezeti elemek vizualizálása; a kreativitás; az új megoldások keresése technikai problémákra.<br>Mind a faipari, mind a fémipari részlegben nagy jelentőséget tulajdonítottak a rajzkészségnek is. Ez nemcsak a diákok művészi érzékét fejlesztette, de nélkülözhetetlen volt mindennapi munkájuk elvégzéséhez is. Meg kellett tervezni és le kellett rajzolni az elkészítendő bútort, a kovácsoltvas alkotásokat, de éppen úgy műszaki rajzot kellett készíteni egyes gépalkatrészekről, mégpedig nagyon nagy pontossággal, hiszen ettől is függhetett egy-egy gép működése, felhasználhatósága.<br>A növendékek rajzaiból, munkáiból, alkotásaiból minden évben kiállítás nyílt. Itt tudták bemutatni mindazokat, amiket tanulmányaik idején készítettek.<br>A műszaki vénával megáldott technikusok egyfajta hidat jelentenek, képeznek a szakmunkások és a mérnökök között.'
    },

    // --- 17. Iskola egyensapka (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/17_iskolai egyensapka.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Iskolai egyensapka',
        content: 'Az 1960-as években kötelező volt az iskolai egyenruha viselése.<br>A korszak technikumaira és szakiskoláira jellemző módon a diákok kötelező jelleggel sötétkék sapkát viseltek, amelynek az elején vagy oldalán az iskola egyedi, zománcozott fém sapkajelvénye vagy iskolajelvénye szerepelt.<br>Az 1961/65-ben iskolánkba járt évfolyam egy diákjának visszaemlékezése szerint: „Az iskolához kapcsolódó külsőségek közül talán a legnépszerűtlenebb a diáksapka volt. Ezt némi visszafordíthatatlan átalakítással kabátzsebben hordhatóvá tettük, és csak közvetlenül az iskola kapuja előtt raktuk a fejünkre.”. Viselői közül többen viszont szívesen emlékeznek vissza az iskolai egyensapkára.'
    },

    // --- 18. Az udvar platánjai (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/18_platánok.jpg',
        pocketTitle: 'Az udvar platánjai',
        gallery: [
            'KEPEK/18_platánfák/1.jpg',
            'KEPEK/18_platánfák/2.JPG',
            'KEPEK/18_platánfák/3.jpg',
            'KEPEK/18_platánfák/4.jpg',
            'KEPEK/18_platánfák/5.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Az udvar platánjai',
        content: 'A platánfa az egyik legrobusztusabb, leghosszabb életű és legnagyobb termetű városi díszfa, amely akár a 30-40 méteres magasságot és a több száz éves kort is elérheti. Jellegzetes, foltokban leváló kérge és hatalmas, árnyékot adó koronája miatt a magyar parkok és szélesebb sugárutak ikonikus növénye.<br>Rendkívüli módon bírja a szennyezett városi levegőt, és jól tolerálja, ha a gyökérzete burkolt felületek (aszfalt, térkő) közé van szorítva.<br><br><b>Ady Endre: A platánfa álma</b><br><br>A Nap huga, zöld szemü lány,<br>(Kit imádnak álom-vitézek)<br>Megszánt egy holdas éjjelen<br>És megigézett.<br><br>Két lábam elhült s szétbomolt<br>Gyökerekként a mélybe szállva<br>S itt állok a fehér mezőn,<br>Mint árva platánfa.<br><br>Girhes, szomorú derekam<br>Szökkenve büszke lombot ontott,<br>Lombom a felhőket veri<br>S elhagytak a gondok.<br><br>Állok: várom a Nap hugát<br>Némán a nagy, éji mezőben<br>S koronámról hull a levél<br>Zörgőn, búsan, rőten.'
    },

    // --- 19. Rádióamatőr URH-állomás (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/19_rádióamatőrök_1957 Galyatető.jpg',
        pocketTitle: 'Rádióamatőr album',
        gallery: [
            'KEPEK/19_rádióamatőr_ALBUM/A.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/B.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/C.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/E.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/F.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/H.jpg',
            'KEPEK/19_rádióamatőr_ALBUM/I.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Rádióamatőr URH-állomás HG5KCC',
        content: 'A HG5KCC rádióamatőr URH kollektív állomás 1954/55-ben indult.<br>Vajda György pedagógus felismerte, hogy új szak sikeres indításához kevés a tárgyi és személyi feltételekkel foglalkozni. Szükség van a tanulók köréből egy olyan csoport szervezésére, mely a szakirány összes diákja számára mintául szolgál és az érdeklődők számára a tananyagon túlmutató ismeretanyag elsajátítását teszi lehetővé. 1954-ben szakkört alapított, melynek célja a rádióamatőr-tevékenység elterjesztése volt.<br>Az akkor még a rádióamatőrök körében is fehér foltnak számító URH-sávot választotta, mindehhez az adót, vevőt és antennát - más lehetőség nem lévén - házilag kellett előállítani. A tevékenység súlypontja így a készülékek, eszközök megépítésén volt, ami nagyon jól támogatta az iskola képzési céljainak megvalósulását. A rádióamatőr tevékenység sokak számára élethosszig tartó hobbivá vált.<br>1955-ben Vajda György rádióamatőr-vizsgát tett, és adóengedélyt kapott URH kollektív rádióamatőr-adóállomás működtetetésére. Az országban ekkor kevesebb mint tíz ilyen állomás működött. 1956-ban már két nemzetközi URH-versenyen indultak a landleres diákok.<br><a href="https://www.youtube.com/watch?v=_Ba6nP37G2c" target="_blank">Videó 1</a><br><a href="https://www.youtube.com/watch?v=UlsbM1RyCFA" target="_blank">Videó 2</a><br><a href="https://www.youtube.com/watch?v=sMVTM5Jjqj0" target="_blank">Videó 3</a>'
    },

    // --- 20. Jegesmedve-relikvia (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/20_jegesmedve relikvia.JPG',
        pocketTitle: 'Jegesmedve-relikvia',
        gallery: [
            'KEPEK/20_jegesmedve/20_jegesmedve átadás 1945_46.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Jegesmedve-relikvia',
        content: 'A jegesmedve szobor felirata szerint az 1945/46. évi középiskolás labdarúgó-bajnokságot a Landler akkori csapata nyerte meg. A győztesek neve a réztábláról leolvasható.<br>A jegesmedve tehát több mint 80 éve lakik az iskola falai között. Tanáriból múzeumba, múzeumból a 114-es terembe cammogott át, és őrzi az iskolatörténeti gyűjteményt társaival együtt.'
    },

    // --- 21. Tornaterem (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/21_tornaterem.jpg',
        pocketTitle: 'Tornaterem képei',
        gallery: [
            'KEPEK/21_tornaterem/1.jpg',
            'KEPEK/21_tornaterem/2.jpg',
            'KEPEK/21_tornaterem/3.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Tornaterem',
        content: 'A tornaterem az épület méreteihez, adottságaihoz képest aránytalanul kicsi.<br>Ez a tény arra késztette Bartos Lívia igazgatót, hogy nagyot álmodjon. Új tornatermet és híradástechnikai tanműhelyblokkot képzelt el. Tervéhez elnyerte az iskolafenntartó - a KGM - támogatását. 1965-ben el is készíttették a terveket.<br>Az elképzelés lényege a következő volt: megszüntetni a Corvin utcát és erre a területre építeni az új tornacsarnokot. A Corvin utca ekkoriban forgalom nélküli földes út volt. Járda csak a mi oldalunkon létezett. A Pamutgyárnak erre az utcára nem volt kapuja.<br><br>A terv végül meghiúsult. Az utca megszüntetés mindenféle hatósági engedélyeztetési procedúrákon ment keresztül. Eközben valamelyik hatóság rájött, hogy az iskola a mozgósítási tervekben tartalék laktanyaként (!) szerepel. Ilyenkor pedig fontos a körkörös védhetőség.<br>Így a testnevelés órák zömmel a szabadban zajlanak. Az udvaron röplabdapálya, kézilabdapálya, kosárlabdapálya, tengópálya került kialakításra az idők során. Az épület körül futópálya, távolugrópálya található. Az osztályok olykor a Semsey Aladár park adottságait is kihasználják a tanórákon.<br>Időnként a szemközti Faipari Technikum tornatermét kérjük és kapjuk kölcsön, például a szalagavató keringőpróbáinak lebonyolításához.<br>A pici tornaterem maradt, nem veszett el, de a 100. évfordulóra megújul.'
    },

    // --- 22. Dr. Radnai László (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/22_Radnai László.jpg',
        pocketTitle: 'Dr. Radnai László',
        gallery: [
            'KEPEK/22_Radnai László/1.jpg',
            'KEPEK/22_Radnai László/2.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Dr. Radnai László', subtitle: '(1912–2008)',
        content: 'Az iskola rádióműhelyének első tanára Dr. Radnai László volt. Az első rádióadó-engedélyesek közül ő volt a HA4SA. Továbbá: HA053RS, HAF3RL, HAF3HI, HA4EA, HA7PD, VE2AZQ, WA1FHU. 96 éves korában, 2008-ban hunyt el az Egyesült Államokban. Halálával az amatőr rádiózás elvesztette "nagy öregjeinek" meghatározó egyéniségét, tanítómesterét: Dr. HEAVISIDE-ot, aki ezen a néven, 1947-től, az egyes rádiótechnikai újságok hasábjain ismertette meg többekkel az amatőr rádiózás rejtelmeit, érdekességeit.<br>Aradon született, de Szolnokon nevelkedett. Középiskolásként találkozott az amatőr rádiózással. Otthon kristálydetektoros vevőkészülék építésébe fogott. 1928-ban belépett a magyar SWL mozgalom tagjai közé, ahol a HA053RS azonosító jelet kapta. A sávban hallott morzejelek arra ösztönözték, hogy gyorsan megtanulja a jelek vételét, adását a maga által készített "billentyűvel". A II. világháború után a Honvédelmi Minisztérium rádiós munkatársaként Debrecenben, Budapesten régi katonai rádiók felkutatásával foglalkozott. Operátorkodott a Bólyai Honvéd Műszaki Akadémia HA9F amatőr rádióállomásán.<br>A Falk Miksa utcai lakása és a Honvéd utcában lévő HM között kiépített ex-Hertz (ma Windom) antennára rövid időn belül már egy RL12P35 csővel felépített adó kapcsolódott, és megjelent a sávokban a HA4EA amatőr állomás. Az 1948 februárjában a megalakuló Magyar Rövidhullámú Rádióamatőrök Egyesülete (MRRE) titkárjává választotta. 1949-ben átadták az első kilenc darab hivatalos rádióamatőradó-engedélyt, ezek között a HA4SA engedélyét is. 1954-55-ben rövid ideig a Központi Rádióklub RH szakosztályának vezetője volt és szerkesztette a Klub Híradót.<br>1956-ban családostól elhagyta az országot és előbb Kanadában (VE2AZQ), majd az Egyesült Államokban (WA1FHU) talált új otthonra, munkára és vissza a rádióamatőrséghez, az amatőr rádiós barátokra és szervezetre, az ARRL-re, akiktől érdemeiért a W1PL hívójelet is megkapja.<br>Munkájában a katonai hírrendszerek fejlesztésével, majd az elektromágneses interferencia kérdéseivel foglalkozott. Ezen a téren elért eredményeiért a New York-i Tudományos Akadémia tagjai sorába fogadta.<br>Hosszú idő után 1990-ben látogatott ismét haza mint az általa megalakított Nemzetközi Magyar Amatőr Rádióklub tagja és Örökös Tiszteletbeli Elnöke. A VI. Határmenti Rádióamatőr Találkozó alkalmából a magyar Old Timer Kör közfelkiáltással megválasztotta - elismerve a 70 éves rádióamatőrök érdekében végzett tevékenysége érdemeit - örökös díszelnökének.<br><a href="https://www.youtube.com/watch?v=et5lfmGm4R4" target="_blank">https://www.youtube.com/watch?v=et5lfmGm4R4</a>'
    },

    // --- 23. Egy 1943-as kirándulás emléke (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/23_1943-as kirándulás emléke.jpg',
        pocketTitle: 'Egy 1943-as kirándulás emléke',
        gallery: [
            'KEPEK/23_1943-as kirándulás emléke/A..jpg',
            'KEPEK/23_1943-as kirándulás emléke/B..jpg',
            'KEPEK/23_1943-as kirándulás emléke/C..jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Egy 1943-as kirándulás emléke',
        content: 'Kezdetben szokás volt, hogy a tantestület és a diákság minden évben közösen kirándult.<br>Az 1943-as év júniusi kirándulása Visegrádon volt, ahol sor került egy focimeccsre az elméleti és gyakorlati tanárok között. Az elméletiek 3:1-re győztek.<br>A képen Szabó Béla, az iskola akkori igazgatója őrzi a kaput nemcsak vigyázó szemeivel.'
    },

    // --- 24. Tanműhelyek (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/24_tanműhelyek.jpg',
        pocketTitle: 'Tanműhely',
        gallery: [
            'KEPEK/24_tanműhelyek/E1.jpg',
            'KEPEK/24_tanműhelyek/E2.jpg',
            'KEPEK/24_tanműhelyek/E3.jpg',
            'KEPEK/24_tanműhelyek/G3.jpg',
            'KEPEK/24_tanműhelyek/G4.jpg',
            'KEPEK/24_tanműhelyek/G5.jpg',
            'KEPEK/24_tanműhelyek/G6.jpg',
            'KEPEK/24_tanműhelyek/G7.jpg',
            'KEPEK/24_tanműhelyek/G8.jpg',
            'KEPEK/24_tanműhelyek/H1.jpg',
            'KEPEK/24_tanműhelyek/R1.jpg',
            'KEPEK/24_tanműhelyek/R2.jpg',
            'KEPEK/24_tanműhelyek/R3.jpg',
            'KEPEK/24_tanműhelyek/R4.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Tanműhelyek',
        content: 'Megannyi tanműhelytípus a gyakorlati oktatás központi helyszíne, ahol a diákok a valós ipari környezetet modellező körülmények között sajátíthatják el szakmájuk alapjait:<br>kovácstanműhely, lánghegesztő műhely, öntöde, távbeszélőműhely, vezérlőszoba, gépműhely, rádióműhely, belsőégésű motorok gépterme, daraboló, lakatosműhely, forgácsoló műhely, ívhegesztő műhely, elektronikai műhelyek, informatikatermek, számítógéptermek váltották, váltják egymást a hosszú évtizedek alatt.<br>A műhelygyakorlatokon elsődleges cél és feladat a gépek, szerszámok biztonságos kezelésének elsajátítása, a biztonsági előírások és rutinszerű alkalmazásuk rögzítése, valódi termékek vagy makettek önálló legyártása, projektek megvalósítása.'
    },

    // --- 25. Autómodellező és gépjármű szakkör (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/25_autómodellező és gépjármű szakkör.jpg',
        pocketTitle: 'Autómodellező és gépjármű szakkör',
        gallery: [
            'KEPEK/25_autómodellező/1.jpg',
            'KEPEK/25_autómodellező/2.jpg',
            'KEPEK/25_autómodellező/3.jpg',
            'KEPEK/25_autómodellező/4.jpg',
            'KEPEK/25_autómodellező/5.jpg',
            'KEPEK/25_autómodellező/6.jpg',
            'KEPEK/25_autómodellező/7.jpg',
            'KEPEK/25_autómodellező/8.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Autómodellező és gépjármű szakkör',
        content: 'A műhelyben Fekete Gyula tanár úr vezetésével működött az autómodellező és gépjármű szakkör. A tanár úr volt diákja, Halász Erika (1953-57) segítségével elérte, hogy annak munkahelye - a Csepel Motorkerékpárgyár - egy Pannónia motorkerékpárt adományozott az iskolának alkatrészekben, amik zömükben hibásak voltak. Felújításuk és az összeszerelés 1959 őszétől a szakkörben történt. A munkába bekapcsolódott az 1959/60. tanév III.B osztályának néhány lelkes tanulója is.<br>Fekete Gyula tanár úr 1934 és 1967 között oktatott az iskolában fémforgácsolás gyakorlatot, ezen belül zömében esztergálást. Hobbiját a gépjárművek jelentették. Nyugdíjasként 1968 és 1974 között az iskola gépkocsiját vezette.<br>A reprezentatív fotón sóvárgó tekintetek követik a "száguldó" Mucsi Ferencet, aki egyike volt az összeszerelést végző diákoknak. A képen jól látszik, hogy ekkor az udvarnak még nem volt szilárd burkolata.<br>Egy, az ecseri piacon beszerzett Mercedes személygépjármű is így került a szakkörbe járó diákok kezei közé.'
    },

    // --- 26. Az iskola „helyrajza” (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/26_az iskola helyrajza.jpg',
        pocketTitle: 'Az iskola „helyrajza” ',
        gallery: [
            'KEPEK/26_az iskola helyrajza/1.JPG',
            'KEPEK/26_az iskola helyrajza/2 (2).jpg',
            'KEPEK/26_az iskola helyrajza/3.jpg',
            'KEPEK/26_az iskola helyrajza/4.jpg',
            'KEPEK/26_az iskola helyrajza/5.jpg',
            'KEPEK/26_az iskola helyrajza/6.jpg',
            'KEPEK/26_az iskola helyrajza/7.jpg',
            'KEPEK/26_az iskola helyrajza/8.jpg',
            'KEPEK/26_az iskola helyrajza/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Az iskola „helyrajza” ',
        content: 'Iskolánk mögött egykor egy csodaszép park - a Hősök ligete - állt. 1935-ben adták át. A mellékelt térképen is látható, hogy a Szent Imre út, Leiningen Károly utca, Munkácsy Mihály utca és Bajza János utca által határolt területen feküdt.<br>Volt ott egy halastó, melynek két oldalát egy szép fahíd kötötte össze. Középtájon egy mesterségesen kialakított kis dombon vezetett át a sétány. Innen teljes pompájában lehetett áttekinteni a bokrokkal, fákkal és virágokkal díszített parkot. Körben kerítés volt, bejáratként a Corvin utca - akkor Revízió utca - magasságában kialakított díszes kovácsoltvas kapu szolgált.<br>Erre a részre építették az Országzászló nevet viselő I. világháborús emlékművet az elhunyt hősök tiszteletére. A ’30-as évektől Újpest itt rendezte a nemzeti ünnepek megemlékezéseit ünnepélyes zászlófelvonással.<br>A II. világháború alatt a környéken élők szükségből a fákat kivágták és eltüzelték, majd a háború után az emlékmű is lebontásra került. Erre a területre épült nem sokkal később a Szent Imre út vonalában egy lakóépület, mögötte óvoda, bölcsőde és a Bajza József Általános Iskola. Mindezek ma is működnek.<br>Míg a park létezett, diákjaink - különösen a kollégisták - alkalomadtán el-eljártak oda, kedvelt találkahelyük volt.'
    },

    // --- 27. Az orosz nyelv oktatása (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/27_orosz nyelv.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Az orosz nyelv oktatása',
        content: 'Az érettségivel záruló képzések tantervében mindig szerepel az idegen nyelv.<br>Idegen nyelvi képzés nálunk az 1943/44-es tanévben a dolgozók tagozatán indult. Külsős óraadó tanárral oldották meg a német nyelv tanítását. Ez az osztály az 1946/47-es tanévben végzett.<br>A nappali tagozaton az 1947/48-as tanévben indult az érettségit adó képzés. Az első három évben németet tanultak a diákok a Könyves Gimnáziumból átjárt óraadó tanár, Kalavszky István irányításával. Negyedikben át kellett térniük az orosz nyelvre. Az 1948/49-es tanévtől a fenntartó az orosz nyelv oktatását írta elő annak ellenére, hogy erre képzett tanár akkor még nem állt rendelkezésre.<br>"Ki tud többet a Szovjetunióról?" - ez volt a vetélkedő címe, mely évtizedekig meghatározta az orosz nyelvtanuláshoz kötődő tudás irányvonalát.'
    },

    // --- 28. Major Tamás színművész a Landlerben (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/28_MAJOR TAMÁS.jpg',
        pocketTitle: 'Major Tamás színművész a Landlerben',
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
        title: 'Major Tamás színművész a Landlerben',
        content: 'Major Tamás színművész a diákklub vendége volt 1972-ben.<br>Az iskolai diákszervezet - az akkori KISZ - szervezésében a diákok láthatták a Nemzeti Színház akkori stúdiószínházában, a Katona József Színházban Peter Weiss: A luzitán szörny című drámáját.<br>Az előadás egy sajátos és emlékezetes színházi produkció volt, melynek hatástörténetéhez iskolánk is kapcsolódik oly módon, hogy az előadást követően Major Tamás, a színház főrendezője - kiemelkedő színészegyéniség - meglátogatta az iskolát, és a diákklubban élményt jelentő beszélgetést folytatott az érdeklődő diákokkal.'
    },

    // --- 29. Bartos Lívia (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/29_Bartos Lívia.jpg',
        pocketTitle: 'Bartos Lívia',
        gallery: [
            'KEPEK/29_Bartos/I - Cs2.jpg',
            'KEPEK/29_Bartos/K-Szines-Szöllősiné, Mika, Bartos-1957.10.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Bartos Lívia', subtitle: '(1923 Budapest – 1999 Budapest)',
        content: 'Bartos Lívia diplomáját a Budapesti Műszaki Egyetem Gépészmérnöki Karának gazdaságmérnöki szakán, gépipari ágazaton szerezte. 23 éven át látta el az iskola igazgatói teendőit 1957 és 1980 között.<br>Neki köszönhető, hogy a mi iskolánkat bízták meg az országban először számítástechnikai oktatás bevezetésével.'
    },

    // --- 30. Az iskola első nemzetközi cserekapcsolata (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/30_az iskola első nemzetközi.jpg',
        pocketTitle: 'Jugoszláv kapcsolatok',
        gallery: [
            'KEPEK/30_az iskola első nemzetközi/1.jpg',
            'KEPEK/30_az iskola első nemzetközi/10.jpg',
            'KEPEK/30_az iskola első nemzetközi/2.jpg',
            'KEPEK/30_az iskola első nemzetközi/3.jpg',
            'KEPEK/30_az iskola első nemzetközi/4.jpg',
            'KEPEK/30_az iskola első nemzetközi/5.jpg',
            'KEPEK/30_az iskola első nemzetközi/6.jpg',
            'KEPEK/30_az iskola első nemzetközi/7.jpg',
            'KEPEK/30_az iskola első nemzetközi/8.jpg',
            'KEPEK/30_az iskola első nemzetközi/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Az iskola első nemzetközi cserekapcsolata', subtitle: 'Kranj, Ljubljana',
        content: 'Tudvalevő, hogy a szocializmus időszakában a külföldre utazás nem alapjog, hanem korlátozott kiváltság volt, amelyet a pártállam szigorú rendőrségi és politikai ellenőrzés alatt tartott. Az állampolgárok utazási lehetőségeit élesen kettéválasztotta a „keleti” és a „nyugati” országok világába.<br>Mivel a ’60-as évek közepére csökkent a feszültség Magyarország és Jugoszlávia között, politikai nyomásra a KGM Oktatási Osztálya kapcsolatfelvételt szervezett. Mint kiemelkedően jó iskola, az akkori Landler lett kijelölve a projektre. Az útra 1964 szeptemberében került sor. A vendéglátó iskola egy Ljubljánában működő szakképző intézmény volt.<br>Ez volt tehát az első külföldi kapcsolata az iskolának még a rendszerváltást megelőző korszakban.'
    },

    // --- 31. Naplók, ellenőrzők, bizonyítványok (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/31_naplók_bizonyítványok.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Naplók, ellenőrzők, bizonyítványok',
        content: 'Digitális bizonyítvány, Kréta-értesítő, Kréta-napló sem volt egészen a 2000-es évekig, így az ellenőrzők, bizonyítványok, tanári naplók megléte és bejegyzései mutatták az adott tanévek eredményeit, szolgáltak az oktatás eredményekben mérhető lenyomataként.<br>A kézzel ékesen írt bizonyítványok, az érdemjegyekkel teletűzdelt ellenőrzők és naplók mára kordokumentumként is szolgálnak, vagy az iskola irattárában vagy otthon, a fiókban lapulva őrzik a múltbéli eredményeket.'
    },

    // --- 32. Udvarátalakítás (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/32_udvarátalakítás.JPG',
        pocketTitle: 'Udvarátalakítás',
        gallery: [
            'KEPEK/32_udvarátalakítás/1.jpg',
            'KEPEK/32_udvarátalakítás/2.jpg',
            'KEPEK/32_udvarátalakítás/3.jpg',
            'KEPEK/32_udvarátalakítás/4.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Udvarátalakítás',
        content: 'Eredetileg belső parkja volt az iskola épületének.<br>Azt is kevesen tudják, hogy az udvaron volt egy medence a mai tengópálya helyén (kb. 4x8 méteres és 1,2 méter mélységű). Egyáltalán nem sportolási vagy fürdőzési célokat szolgált. A háború előtt építették tűzoltó víz tárolásának céljára. Az udvar "burkolata" ekkor még pormentesített, döngölt föld volt.<br>1966-ban - a stílustörő toldaléképület elkészülte után - került sor az udvar felújítására. Ekkor tüntették el a medencét és készítették el alapozás nélkül a teljes udvaron az aszfaltozott burkolatot, a toldaléképülettel pedig bővült a tantermek száma.'
    },

    // --- 33. Szalagavatók, szalagtűzők (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/33_szalagavatók.jpg',
        pocketTitle: 'Szalagavatók, szalagtűzők',
        gallery: [
            'KEPEK/33_szalagavatók/1.jpg',
            'KEPEK/33_szalagavatók/10.jpg',
            'KEPEK/33_szalagavatók/11.jpg',
            'KEPEK/33_szalagavatók/12.jpg',
            'KEPEK/33_szalagavatók/13.jpg',
            'KEPEK/33_szalagavatók/14.jpg',
            'KEPEK/33_szalagavatók/15.jpg',
            'KEPEK/33_szalagavatók/2.jpg',
            'KEPEK/33_szalagavatók/3.jpg',
            'KEPEK/33_szalagavatók/4.jpg',
            'KEPEK/33_szalagavatók/5.JPG',
            'KEPEK/33_szalagavatók/6.JPG',
            'KEPEK/33_szalagavatók/7.JPG',
            'KEPEK/33_szalagavatók/8.JPG',
            'KEPEK/33_szalagavatók/9.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Szalagavatók és szalagtűzők',
        content: 'Iskolánkban a nappali tagozaton az első érettséginek is megfelelő végbizonyítványt 1950-ben kapta egy ipari gimnáziumi, gépészeti osztály. Elvileg ekkor lehetett volna az első szalagtűzés. Az első ismert szalagtűzés viszont 1957-ben történt.<br>Az 1953/57-es B osztály az iskolában tartott egy szűk körű rendezvényt, ahol az osztályfőnök, Németh László feltűzte a szalagokat.<br>Az 1954/58-as évfolyam a farsangi mulatsággal kötötte egybe a szalagtűzést.<br>1959-től külső helyszínen, a Vasas Kultúrházban a farsangi időszakban technikus bálokra került sor. Arra vonatkozóan azonban nincs adat, hogy a szalagtűzés is az esemény része lett volna. 1961-ben sajátos módon - az igazgatóság tiltásának ellenére - külső helyszínen szerveződött a bál.<br><br>Nyilvánvalóan kuriózumnak számított a Gellért Szálló márványcsarnokában tartott szalagavató bál 1964-ben és 1965-ben.<br>Bizonyos, hogy a \'80-as években a Dallos Ida Művelődési Ház adott otthont ennek az iskolai ünnepségnek. A \'90-es években a Petőfi Csarnok volt a helyszín, és arra is volt példa, hogy a Kanizsay Dorottya Egészségügyi Szakiskola leányaival közösen táncolták a keringőt umszkis fiaink.<br>Egy ideig a zuglói Körcsarnok, majd a káposztásmegyeri Jégcsarnok vált helyszínévé a szalagavatóknak.<br><br><a href="https://www.youtube.com/watch?v=63URkrkH2UU" target="_blank">Íme, a 2002-es szalagavató tanári tánca</a>'
    },

    // --- 34. Tanácsterem (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/34_tanacsterem.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Tanácsterem',
        content: 'A tanácsterem. Összetett szó.<br>A tanács tapasztaltabb egyén segítő szándékú javaslatát jelenti. Ahol az alaptő a tan, mely uráli eredetű szótő, jelentése kezdetben a látással, észleléssel és a belső tudással volt kapcsolatos. Feltehetőleg a tanít ige tan- szótövének olyan deverbális képzéssel létrejött származéka, mint ahogy a forgat igének a forgács.<br>A tanácskozás, vagyis valaminek együtt történő megvitatásához helyszínül szolgáló helyiség maga a tanácsterem.'
    },

    // --- 35. Dinasztiák (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/35_dinasztiák.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Dinasztiák',
        content: '„Itt végzett az édesapám.” „Ide járt a nagyapám.” „Járt ide a családból több mindenki.” „Anyu is itt végzett.” Az iskolánkba beiratkozó kilencedikesek esetében legtöbbször már a beiratkozáskor kiderül, hogy a család az iskolához valamilyen módon kötődik, kapcsolódik.<br>Egy iskola értékének talán egyik legnagyobb fokmérője az, amikor az egykori diákok ide hozzák, ide íratják be gyermekeiket, mert itt látják biztosítva fejlődésüket, jövőjüket.<br>A 75. Jubileumi évkönyv 64. és 65. oldalán olvasható három család generációinak története a Landlerhez/Umszkihoz fűződően.'
    },

    // --- 36. Évkönyvek, honlapok (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/36_évkönyvek.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Évkönyvek, honlapok',
        content: 'A kezdet kezdetén évenként megjelentetett iskolai Értesítők tájékoztattak a tanév eseményeiről, adatairól összegzőleg.<br>Ezeket váltották 1940-től az Évkönyvek. Az utolsó évkönyv 1980-ban került kiadásra. A középiskolák és szakiskolák évkönyvei, köztük az újpesti Landleré is elsősorban digitális archívumokban, antikváriumokban és helytörténeti gyűjteményekben érhetők el. Fontos szempont az évkönyvek közti keresésnél, hogy Landler Jenő nevét több szakiskola és középiskola viselte a XX. század második felében: Budapesten, Debrecenben és Nagykanizsán is volt „Landler”. Sok landleres diák relikviaként gyűjti ezeket az évkönyveket.<br><br>A \'80-as évek vége és a \'90-es évek eleje az eseményeknek ilyen módon történő rögzítéséről nem gondoskodott.<br>Az iskola első internetes bejegyzése 1998-ból való, és ettől az évtől kezdve honlapok ismertetik az érdeklődőkkel az iskola adatait, sikereit, eredményeit:<br><a href="https://old.umszki.hu/" target="_blank">Iskolánk elavult honlapja</a><br><a href="https://edir.umszki.hu/" target="_blank">Iskolánk jelenlegi honlapja</a>'
    },

    // --- 37. Híradástechnikai képzés (Alap - Fehér) ---
    {
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/37_híradás.jpg',
        pocketTitle: 'Híradástechnikai képzés',
        gallery: [
            'KEPEK/37_híradástechnikai képzés/1.jpg',
            'KEPEK/37_híradástechnikai képzés/2.jpg',
            'KEPEK/37_híradástechnikai képzés/3.jpg',
            'KEPEK/37_híradástechnikai képzés/4.jpg',
            'KEPEK/37_híradástechnikai képzés/5.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        title: 'Híradástechnikai képzés',
        content: 'Szerencsésen egészült ki az iskola profilja az \'50-es években az akkor újdonságnak számító híradásipari tagozattal. Ebben az időszakban vált az iskola a főváros egyik legnagyobb oktatási intézményévé.<br>A híradástechnikai technikusképzés az 1953/54-es tanévben - az országban másodikként - indult be. Vajda György műhelyfőnök az akkor kihasználatlan és akkorra meglehetősen elhanyagolt öntödei szárnyban tervezte a gyakorlati képzést egy rádió és egy távbeszélő műhely létrehozásával.'
    },

    // --- 38. Sportélet, sportsikerek (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/38_sportélet.jpg',
        pocketTitle: 'Sportélet album',
        gallery: [
            'KEPEK/38_sportélet/0.jpg',
            'KEPEK/38_sportélet/1.jpg',
            'KEPEK/38_sportélet/10.jpg',
            'KEPEK/38_sportélet/11.jpg',
            'KEPEK/38_sportélet/12.jpg',
            'KEPEK/38_sportélet/13.jpg',
            'KEPEK/38_sportélet/14.jpg',
            'KEPEK/38_sportélet/15.jpg',
            'KEPEK/38_sportélet/16.jpg',
            'KEPEK/38_sportélet/2.jpg',
            'KEPEK/38_sportélet/3.jpg',
            'KEPEK/38_sportélet/4.jpg',
            'KEPEK/38_sportélet/5.jpg',
            'KEPEK/38_sportélet/6.jpg',
            'KEPEK/38_sportélet/7.jpg',
            'KEPEK/38_sportélet/8.jpg',
            'KEPEK/38_sportélet/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Sportélet, sportsikerek',
        content: 'Szinte lehetetlen vállalkozás a 100 év minden sporttal kapcsolatos eseményét, említésre érdemes személyét hiánytalanul felsorakoztatni.<br>Szöllősi Antal, iskolánk legendás testnevelő tanára a \'40-es évek végén kinevelt egy kitűnő tornász csapatot. Versenyeken is indultak. Szöllősi a torna mellett az atlétikával, sőt a labdarúgással is kiemelten foglalkozott.<br>Sete Vilmos tanár úr jóvoltából az UMSZKI egyik sikersportága évtizedeken keresztül a kézilabda volt.<br>Kis Alajos labdarúgóedző csapatával országos nagypályás bajnokságon is részt vett.<br>Szenczi László tanár úr az UTE, majd a Honvéd atlétikaedzője, és korábban Molnár Imréné testnevelő tanár országos és fővárosi atlétikai versenyekre vitte a diákokat.<br><br>Andorfer János - iskolánk volt diákja, jelenlegi tanára - 1993-tól vette át a kispályás labdarúgócsapatot, és 2018-ig nevezte, vitte, kísérte rendszeresen a diákokat kerületi, városi labdarúgó tornákra. A Budapesti Diáksport Szövetség középiskolák részére a kispályás Pesti Srác Kupát hirdette meg, melyen diákjaink rendszeresen vettek részt. A tanár urat 2015-ben felkérték a kerületi középiskolás válogatott vezetésére. Umszkis diákjaink az ifjúsági országos curling bajnokságon 6. helyezést értek el. Országos floorball-bajnokságon is szerepeltek. Diákolimpiai eredmények, az Amatőr Teremlabdarúgó Bajnokság eredményei, kosárlabda, sportlövészet, röplabda, tollaslabda, judo színesítik a palettát, és a kör így sem teljes.<br><br><b>Neves sportolóink, a teljesség igénye nélkül:</b><div style="column-count: 3; column-gap: 1.5vw; font-size: 1.3vh; line-height: 1.4; margin-top: 1vh;">Hagya István - magasugró<br>Gáll Mária - tornász<br>Bakos István - kézilabdázó<br>Jakab István - kézilabdázó<br>Sütő József - atléta, maratoni<br>Fekete Sándor - atléta<br>Tóth Zoltán - labdarúgó<br>Nyirádi György - kajakozó<br>Mózes András - atléta, maratoni<br>Brabant Béla - gyeplabda<br>Tóth Zoltán - hajómodellező<br>Ancsin János - jégkorongozó<br>Brockhauser István - labdarúgó<br>Sztankó Éva - röplabdázó<br>Szűcs Lajos - labdarúgó<br>Hoboth Sándor - röplabdázó<br>Giczy Csaba - kajakozó<br>Füzesi Zsolt - labdarúgó<br>Kovács Zoltán - vízilabdázó<br>Vass Sándor - kézilabdázó<br>Móró Endre - thai-boxoló<br>Spránitz Gábor - sportlövő<br>Vass Károly - kézilabdázó<br>Monostori Attila - vízilabdázó<br>Lange Péter - Sail Racing Team<br>Battlay Krisztina - röplabdázó<br>Lőw Zsolt - labdarúgó<br>Nyerges Krisztián - labdarúgó<br>Czingli László - tornász<br>Szirányi Bence - jégkorongozó<br>Németh Zsanett - birkózó<br>Guczoghy György - tornász<br>Ágh György - vízilabdázó<br>Farkas János - kalapácsvető<br>Nagy Tibor - labdarúgó<br>Sebeők Mátyás - jiu-jitsu<br>Kolonics Márk - karatéka</div>'
    },

    // --- 39. Csizmadia Ferenc (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/39_Csizmadia.jpg',
        pocketTitle: 'Csizmadia Ferenc',
        gallery: [
            'KEPEK/39_Csizmadia/C.jpg',
            'KEPEK/39_Csizmadia/D.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Csizmadia Ferenc',
        content: 'Csizmadia Ferenc 1962-ben szerzett hőerőgépész-diplomát a Budapesti Műszaki Egyetem Gépészmérnöki Karán.<br>Pályája kezdetén a Ganz-Mávagnál Diesel-motorok turbófeltöltőinek és levegőhűtőinek fejlesztésével foglalkozott. A mérnöki munka mellett gépipari technikumokban is tanított esti tagozaton. Az itt szerzett élmények vitték egyre közelebb a pedagógusi pályához.<br>1980 és 2000 között volt iskolánk igazgatója, nyugdíjazása után is tevékenykedett óraadóként, tankönyvszerzőként.'
    },

    // --- 40. Művésztanáraik, képzőművészeink (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/40_művésztanáraink_képzőm.jpg',
        pocketTitle: 'Képzőművészeink',
        gallery: [
            'KEPEK/40_művésztanáraink/1_LAURENCSIK/A.jpg',
            'KEPEK/40_művésztanáraink/1_LAURENCSIK/B.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/0.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/1.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/10.JPG',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/11.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/12.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/13.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/2.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/3.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/4.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/5.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/6.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/7.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/8.jpg',
            'KEPEK/40_művésztanáraink/2_KIRÁLY ENDRE/9.jpg',
            'KEPEK/40_művésztanáraink/3_BÓTOS SÁNDOR/A.jpg',
            'KEPEK/40_művésztanáraink/3_BÓTOS SÁNDOR/B.jpg',
            'KEPEK/40_művésztanáraink/3_BÓTOS SÁNDOR/C.jpg',
            'KEPEK/40_művésztanáraink/3_BÓTOS SÁNDOR/D.jpg',
            'KEPEK/40_művésztanáraink/3_BÓTOS SÁNDOR/E.jpg',
            'KEPEK/40_művésztanáraink/3_BÓTOS SÁNDOR/F.jpg',
            'KEPEK/40_művésztanáraink/3_BÓTOS SÁNDOR/G.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Művésztanáraik, Képzőművészeink',
        content: 'A reprezentatív kép alkotója a szignó alapján Guzsváry János, aki testnevelő tanár, gerelyhajító atléta és képzőművész volt egy személyben.<br>Laurencsik Béla mindamellett, hogy mérnök, mérnöktanár volt, Képzőművészeti Főiskolát is végzett.<br><br>Király Endre az iskola kimagasló tanáregyénisége volt. Kohóipari mérnöki végzettségével kiváló és kreatív öntőipari mérnökként - melyet több szabadalma sok gyakorlati tapasztalata is alátámaszt - pályázta meg a tanári állást, amit elnyert, és 1928-ban megkezdte tanári pályafutását. Sokoldalú ember volt. A festészethez való vonzódása végigkísérte életét. Több kiállítása volt: 1917-ben Szibériában, hadifogsága idején, 1934-ben Budapesten a Műcsarnokban, 1952-ben Vácon és 1960-ban időskora lakhelyén a svájci Lausanne-ban.<br>Bótos Sándor 1959 és 1981 között volt az iskola tanára. Szabadkézi rajzot és ábrázoló geometriát tanított. Csendes, visszahúzódó szuverén egyéniség volt. Diákjai nagyon kedvelték: tudása, tanítási módszere és egyénisége okán is. A tantestületben nagy tisztelet övezte. Szerénységére jellemző, hogy festőművészi tevékenységéről, sikereiről az iskolában soha nem beszélt.'
    },

    // --- 41. Gépészet (Alap - Fehér) ---
    {
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/41_gépész.jpg',
        pocketTitle: 'Gépészet',
        gallery: [
            'KEPEK/41_gépészet/1.jpg',
            'KEPEK/41_gépészet/2.jpg',
            'KEPEK/41_gépészet/3.jpg',
            'KEPEK/41_gépészet/4.jpg',
            'KEPEK/41_gépészet/5.jpg',
            'KEPEK/41_gépészet/6.jpg',
            'KEPEK/41_gépészet/7.jpg',
            'KEPEK/41_gépészet/8.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        title: 'Gépészet',
        content: 'A gépészeti ágazatot bemutató kisfilm:<br><a href="https://www.youtube.com/watch?v=F3HLp9LxE8o" target="_blank">Ide kattintva megtekintheti a kisfilmet</a><br><br>A gépészeti ágazati képzés technikus szintű szakképzettség megszerzésével zárul. Választható szakmairányok: CAD-CAM szakmairány, ipar szakmairány, vegyipar szakmairány.<br>A CAD-CAM szakmairányon végzett gépésztechnikus ipari termékeket modellez számítógéppel. Mérnöki felkészültséget nem igénylő szinten részt vesz a gépelemek és azok gyártásának tervezésében. Elvégzi a forgácsolással gyártható termékek CNC (számítógép által vezérelt) gépeken való megmunkálásának előkészítését.<br><br>Az ipar és a vegyipar szakmairányon végzett gépésztechnikus mérnöki felkészültséget nem igénylő gépészeti jellegű fejlesztő, tervező, irányító és ellenőrző feladatokat lát el. Megszervezi a gépek, berendezések biztonságos üzemeltetését. Hibás működés esetén feltárja a hiba okát, elvégzi, illetve irányítja a javítási, karbantartási, szerelési folyamatokat. Részt vesz a gépelemek, gépegységek tervezési munkálataiban, az új technológiák bevezetésében és alkalmazásában. Méréseket, elemzéseket folytat a gyártóeszközök optimális működésének biztosítása érdekében.<br>A gépgyártás-technológiai technikus önállóan vagy mérnöki irányítással részt vesz gépalkatrészek gyártásának tervezésében, gyártásában, gépek, géprendszerek, mechanikus berendezések működtetésében, szerelésében, karbantartásában és javításában.<br><br>A gépgyártás-technológiai technikus meghatározza a gyártás technológiai adatait, biztosítja a gyártóeszközök üzemeltetési feltételeit. Irányítja az általa tervezett gyártási folyamatot. Gyártás közben méréseket, ellenőrzéseket végez, azok eredményét dokumentálja. Megtervezi a gépek karbantartási folyamatait, és részt vesz azok végrehajtásában. Robotokat üzemeltet, azok működését felügyeli.'
    },

    // --- 42. Elektronika (Alap - Fehér) ---
    {
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/42_elektronika.jpg',
        pocketTitle: 'Elektronika',
        gallery: [
            'KEPEK/42_elektronika/1.jpg',
            'KEPEK/42_elektronika/2.jpg',
            'KEPEK/42_elektronika/3.jpg',
            'KEPEK/42_elektronika/4.jpg',
            'KEPEK/42_elektronika/5.jpg',
            'KEPEK/42_elektronika/6.jpg',
            'KEPEK/42_elektronika/7.jpg',
            'KEPEK/42_elektronika/8.jpg',
            'KEPEK/42_elektronika/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        title: 'Elektronika',
        content: 'Az elektronikai ágazatot bemutató kisfilm:<br><a href="https://www.youtube.com/watch?v=0yaMR7XflqQ" target="_blank">Ide kattintva megtekintheti a kisfilmet</a><br><br>Az elektronikai technikus a gyártó és a kiszolgáló ágazatok elektronikai és elektrotechnikai szakembere. Alapvető feladatai közé tartozik az elektromos, valamint az elektronikus berendezések, műszerek tervezése, gyártása, összeszerelése, mérése, javítása és karbantartása. Együtt dolgozik a mérnökségi területekkel.<br><br>Ismeri és alkalmazza a villamos-biztonságtechnikai, illetőleg a korszerű ESD (elektrosztatikus kisülés elleni) védelmi előírásokat.<br>A reprezentatív képen az elkészült áramkör működésének ellenőrzése zajlik a képen.<br><br><a href="https://edir.umszki.hu/p/elektronikai-projektek-mp-3-lejatszo" target="_blank">MP3 lejátszó</a><br><a href="https://edir.umszki.hu/p/elektronikai-projektek-robotkar" target="_blank">Robotkar</a>'
    },

    // --- 43. Informatika (Alap - Fehér) ---
    {
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/43_informatika.jpg',
        pocketTitle: 'Informatika',
        gallery: [
            'KEPEK/43_informatika/1.jpg',
            'KEPEK/43_informatika/3.jpg',
            'KEPEK/43_informatika/4.jpg',
            'KEPEK/43_informatika/5.jpg',
            'KEPEK/43_informatika/6.jpg',
            'KEPEK/43_informatika/7.jpg',
            'KEPEK/43_informatika/8.jpg',
            'KEPEK/43_informatika/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        title: 'Informatika',
        content: 'Szakmai szempontból igen jelentős az 1971-es tanév, hiszen ekkor indult az országban elsőként itt a számítástechnikai képzés. Azóta számtalan számítógéptípus került használatba és került ki a használatból. A teljes géppark metszetét Nagy Imre tanár úr követhette végig, aki 1971-től 2026-ig informatikustanárként tevékenykedett az intézményben.<br><br>Amit ma kínálunk: az informatikai rendszer- és alkalmazás-üzemeltető technikus adott cég munkatársaként helyben telepített, illetve felhő szolgáltatásként igénybe vett hálózati eszközök, szerverek, valamint alkalmazások összehangolt működését biztosítja.<br>A szoftverfejlesztő és -tesztelő technikus olyan szakember, aki képes webes és asztali alkalmazást (szoftvert) tervezni, fejleszteni, tesztelni és dokumentálni. A programozási feladatokon túl adatbázisok tervezését és kezelését is elvégzi. Csapatban dolgozva együttműködik a szoftverfejlesztési projektben résztvevő többi munkatársával, képes a csoportmunkát támogató fejlesztői eszközök hatékony használatára.'
    },

    // --- 44. Műhelyfőnökök (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/44_műhelyfőnökök.jpg',
        pocketTitle: 'Műhelyfőnökök',
        gallery: [
            'KEPEK/44_ műhelyfőnökök  (2002)/Barabás Gábor.jpg',
            'KEPEK/44_ műhelyfőnökök  (2002)/Műhelyfőnökök-2002.12.10-2.jpg',
            'KEPEK/44_ műhelyfőnökök  (2002)/Urbán Kornél.jpg',
            'KEPEK/44_ műhelyfőnökök  (2002)/Garai József.jpg',
            'KEPEK/44_ műhelyfőnökök  (2002)/Vajda György.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Műhelyfőnökök',
        content: 'Laurencsik Béla a kezdetektől közel két évtizeden át volt az iskola műhelyfőnöke.<br>A következő ismert gépész műhelyfőnök: Csányi István volt, majd Jegyernik Pál mérnöktanár.<br>Vajda György 1953-tól a villamos tanműhely főnöke volt.<br>Garai József 1983-tól gépész műhelyfőnök volt.<br>Urbán Kornél 1985-től vette át először a villamos, majd 1996-ban a gépész tanműhely vezetését is.<br>Barabás Gábor 2000-től kapta meg a műhelyfőnöki feladatokat. 2013-ban a szakképzési törvény módosításakor megszüntették ezt a feladatkört.<br><br>A fotón négy műhelyfőnök, de három generáció. Balról jobbra: Vajda György, Garai József, Urbán Kornél, Barabás Gábor látható a képen. Vajda György tanította Urbán Kornélt, aki pedig Barabás Gábornak volt tanára.'
    },

    // --- 45. Tanári szobák (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/45_tanári szoba.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Tanári szobák',
        content: 'Ennek az épületnek nincs hagyományos értelemben vett nagy, közös tanári szobája. Helyette tanári szobái vannak, ahol kettő-három-négy-öt oktató kap közösen helyet, munkateret. A diákok ezekben a tanári szobákban érik el, érik utol tanáraikat a szünetekben, tanórák előtt és után.<br>S amikor a \'60-as években ezek a tanári szobaajtók összenyíltak, tantestületi vacsorák tették emlékezetessé az akkori tantestület mindennapjait:<br><br>Egy tantestületi vacsora emlékei 1967-ből:<br><a href="https://www.youtube.com/watch?v=Qsb-9d8y3Ag" target="_blank">Videó 1</a><br><a href="https://www.youtube.com/watch?v=2s-FGVlW1LI" target="_blank">Videó 2</a><br><a href="https://www.youtube.com/watch?v=LAmmof_LS1c" target="_blank">Videó 3</a><br><a href="https://www.youtube.com/watch?v=dtbWKrULnJI" target="_blank">Videó 4</a><br><a href="https://www.youtube.com/watch?v=5XwYrA2MT7Y" target="_blank">Videó 5</a><br><br>Egy tantestületi vacsora emlékei 1969-ből:<br><a href="https://www.youtube.com/watch?v=5BZI6spfChk" target="_blank">Videó 1</a><br><a href="https://www.youtube.com/watch?v=fMfLYrT76IE" target="_blank">Videó 2</a><br><a href="https://www.youtube.com/watch?v=PFtCYstWymM" target="_blank">Videó 3</a><br><a href="https://www.youtube.com/watch?v=iqbgCSvFWgU" target="_blank">Videó 4</a>'
    },

    // --- 46. Diák voltam, tanár lettem (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/46_diák voltam, tanár lettem.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Diák voltam, tanár lettem',
        content: 'Amikor iskolánk hagyományairól, megtartó erejéről beszélünk, akkor nem feledkezhetünk meg arról a cseppet sem elhanyagolható jelenségről, amikor diákjaink közül néhányan egyetemi, főiskolai tanulmányaik után visszatérnek ide tanítani.<br>Ki mindenkire igaz, hogy diák volt, majd tanár lett a Landlerben/Umszkiban?<br><br>Ambrus István, Andorfer János, Barabás Gábor, Bogdán János, Dési Imre, Kékesi István, Kovács János, Kovács Mihály, Suri András, Szegő János, dr. Tolnai János, Urbán Kornél, Wittine Mária és Zombori Béla. 2002-ben egy délutánon az iskola könyvtárában gyűltek össze beszélgetésre, régi emlékek felelevenítésére a „volt diák” tanárok. Ennek a beszélgetésnek több kedves momentumát őrzi a 75. Jubileumi évkönyv 61-63. oldala.<br>Azóta további nevekkel bővült a lista: Szever László, Kluka Norbert, Takács Lilien, Barabás Botond, Szabó Zoltán, Deák László, Fresz Péter, Giczy Gergely, Prófusz Ádám, Vezsenyi Lujza, Sári Péter, Tősér Tamás is rablóból pandúrrá vált.'
    },

    // --- 47. Ballagások (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/47_ballagás.JPG',
        pocketTitle: 'Ballagások',
        gallery: [
            'KEPEK/47_ballagás/1.JPG',
            'KEPEK/47_ballagás/10.jpg',
            'KEPEK/47_ballagás/11.jpg',
            'KEPEK/47_ballagás/12.jpg',
            'KEPEK/47_ballagás/13.JPG',
            'KEPEK/47_ballagás/14.jpg',
            'KEPEK/47_ballagás/15.jpg',
            'KEPEK/47_ballagás/16.jpg',
            'KEPEK/47_ballagás/17.JPG',
            'KEPEK/47_ballagás/2.jpg',
            'KEPEK/47_ballagás/3.jpg',
            'KEPEK/47_ballagás/4.jpg',
            'KEPEK/47_ballagás/5.jpg',
            'KEPEK/47_ballagás/6.jpg',
            'KEPEK/47_ballagás/7.jpg',
            'KEPEK/47_ballagás/8.jpg',
            'KEPEK/47_ballagás/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Ballagások',
        content: 'Most búcsúzunk és elmegyünk, a mi időnk lejárt.<br>Itt hagyjuk kedves iskolánk, indulunk messze már.<br>Tanáraink diáktársak, a szívünk nem feled,<br>Te kedves osztály, víg tanyánk, immár isten veled, immár isten veled!<br><br>Az élet szólít, menni kell, de válni oly nehéz,<br>A küszöbről a vén diák még egyszer visszanéz.<br>Sok kedves emlék fűz ide, amely most megszakad,<br>De az élet szólít, menni kell, csüggedni nem szabad, csüggedni nem szabad.<br><br>Szétszór a sors, mint szél a port, ki tudja, merre vet.<br>De szívünk egyszer visszahoz ölelni titeket.<br>Ne fájjon hát a búcsúzás, ne sirass hű barát!<br>Még visszatér a vén diák, viszontlátásra hát! Viszontlátásra hát!<br><br><a href="https://www.youtube.com/watch?v=4uezzqbeYOs&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=27" target="_blank">Az 1968-as ballagás felvételei</a>'
    },

    // --- 48. A zsibongó (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/48_a zsibongó.jpg',
        pocketTitle: 'A zsibongó',
        gallery: [
            'KEPEK/48_zsibongó/2.jpg',
            'KEPEK/48_zsibongó/3.jpg',
            'KEPEK/48_zsibongó/4.jpg',
            'KEPEK/48_zsibongó/5.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'A zsibongó',
        content: 'Foerk Ernő tervei a Corvin utcai oldalon, két szinten, a fő- és műhelyépület között átjárást biztosítottak. A műhelyépület földszintjét a főépület alagsorával ajtók betervezésével kapcsolta össze. A műhelyépület emeletét a főépület földszintjével az eredeti tervek szerint kőoszlopokon álló, kőpárkányos pergolával, a szintkülönbséget lépcsők beiktatásával oldotta meg.<br>Egy diákklub kialakításának terve kapcsán, az 1983 áprilisában íródott talajmechanikai szakvéleményben a következő olvasható:<br><br>„A raktárhelyiség kb. 40 évvel ezelőtt készült a gépműhely és a szomszédos épületszárny között. Eredetileg a két épület között az udvar felőli oldalon csak egy keskeny átjáró volt, alul árkádos megoldással. Később ezt bővítették újabb pillérsor és íves falazat építésével. A bővítés során a pillérekre és a falazatra acéltartókat helyeztek, és közöttük téglaboltozatot alakítottak ki.” Így alakult ki a zárt raktárépület, melynek födémét leaszfaltozták. Az emeleten az átjárási funkciót megtartották. A Corvin utca felé a kijárat viszont megszűnt. Ennek az átalakításnak feltehetően egyik célja az volt, hogy a szűkös koksztárolási kapacitást így valamivel növelni tudták a \'30-as évek legvégén.<br>A \'80-as években zajló átalakítás két lépcsőben történt. Először 1983-ban a kihasználatlan raktárhelyiségből diákklub létesült. Majd 1987 után - a különállóan működő faipari iskola kiköltözése kapcsán - az átjáró, melyet Sóhajok hídjaként emlegettek a landleres diákok, beépítésre került, így jött létre az aula.<br>A 2000-es években sok éven át üldögélt az aulában egy tárlóban egy óriási plüssgorilla, ami mára az iskolatörténeti gyűjteményt őrzi nagy erőkkel.'
    },

    // --- 49. Zombori Béla (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/49_Zombori Béla.jpg',
        pocketTitle: 'Zombori Béla',
        gallery: [
            'KEPEK/49_Zombori/1.jpg',
            'KEPEK/49_Zombori/2.jpg',
            'KEPEK/49_Zombori/3.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Zombori Béla',
        content: 'Zombori Béla középiskolai tanulmányait iskolánkban végezte. 1970-ben érettségizett. 1977-ben szerzett villamosmérnöki oklevelet.<br>Az egyetem elvégzése után iskolánkban kezdte el tanári pályafutását. Elektronikát, elektrotechnikát, villamos méréseket, számítástechnikát és digitális számítógépek tantárgyakat tanított. A tanítás mellett folyamatosan képezte magát. Sorra jelentek meg a műszaki oktatást segítő tankönyvei.<br>1986-tól műszaki igazgatóhelyettese volt az iskolának, majd 2000-től 2010-ig igazgatója.<br>2022-ben Nyárs Csaba-díjat kapott.'
    },

    // --- 50. 50 éves az iskola (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/50_jubileum.jpg',
        pocketTitle: '50. évforduló',
        gallery: [
            'KEPEK/50_évforduló/1.jpg',
            'KEPEK/50_évforduló/10.jpg',
            'KEPEK/50_évforduló/11.jpg',
            'KEPEK/50_évforduló/12.jpg',
            'KEPEK/50_évforduló/13.jpg',
            'KEPEK/50_évforduló/2.jpg',
            'KEPEK/50_évforduló/3.jpg',
            'KEPEK/50_évforduló/4.jpg',
            'KEPEK/50_évforduló/5.jpg',
            'KEPEK/50_évforduló/6.jpg',
            'KEPEK/50_évforduló/7.jpg',
            'KEPEK/50_évforduló/8.jpg',
            'KEPEK/50_évforduló/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: '50 éves az iskola',
        content: '1977-ben került sor az 50 éves évforduló ünneplésére. Az akkori iskolavezetés a három napos "Landler Napok" rendezvénysorozatába - május 5-6-7. - illesztette és a ballagási ünnepséggel vonta össze az eseményt.<br>A rendezvénysorozatban:<br>a kispesti Landler Gimnázium részvételével politikai vetélkedő,<br>zászlóavatás,<br>emléktábla-avatás,<br>iskolatörténet-kiállítási megnyitó,<br>kézilabdatorna,<br>a Landler Gimnázium és a kassai testvériskola részvételével Ady Endre szavalóverseny,<br>irodalmi pályázat szerepelt a programok között.<br>Az esti majálison a P. Mobil együttes lépett fel az iskolaudvaron.'
    },

    // --- 51. Zsolnay-relikvia (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/51_Zsolnay relikvia.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Zsolnay-relikvia',
        content: 'A „KGM - TECHNIKUMOK AZ IPAROKTATÁSÉRT 1952–1972” felirat szerepel a jubileumi eozinmázas Zsolnay porcelánvázán és emlékplaketten. A tárgyakat feltehetően Gazder Antal iparművész tervezte 1972-ben a minisztérium alá tartozó szakoktatási hálózat fennállásának 20. évfordulójára.<br><br>A KGM: a Kohó- és Gépipari Minisztérium rövidítése, amely a szocialista Magyarország egyik legfontosabb ipari szervezete volt 1950 és 1980 között.<br><br>1952–1972: a két évszám az adott oktatási struktúra vagy az önálló minisztériumi szintű technikumi hálózat megalakulásának 20 éves jubileumát jelöli.'
    },

    // --- 52. Tantestületi kirándulások (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/52_tantestületi kir.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Tantestületi kirándulások',
        content: 'A tanári kirándulások az \'50-es évektől kezdődtek. Helyszíneket felidézni erről az időszakról ezidáig nem sikerült. Viszont egy 1968-as kirándulás felvételei négy összeállításban megtekinthetők:<br><br><a href="https://www.youtube.com/watch?v=HIjiH655OWs" target="_blank">Videó 1</a><br><a href="https://www.youtube.com/watch?v=OdiwdCWJprM" target="_blank">Videó 2</a><br><a href="https://www.youtube.com/watch?v=xxCfwaUGvKk" target="_blank">Videó 3</a><br><a href="https://www.youtube.com/watch?v=Bxi_Y7eihE0" target="_blank">Videó 4</a><br><br>A \'70-es, \'80-as években biztosan tudott, hogy Kassán is megfordult a tantestület. Éveken át Meldorf városának ottani intézményével ápolt igazán szoros baráti kapcsolatot a Landler tantestülete. Erről az időszakról remek hangulatú tanári focimeccsek fotói maradtak fenn.<br><br>A \'90-es években Balatonszentgyörgy-Vörs, Firenze, Róma, Nápoly, Párizs volt úti cél.<br><br>Míg a 2000-es években Bécsben fordultak meg a tantestület tagjai.<br><br>A 2020-as évekből ezidáig kellemes csapatépítő túra emlékei Egerből és Kiskunmajsáról maradtak fenn.'
    },

    // --- 53. Madártávlatból (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/53_madártávlat.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Madártávlatból',
        content: 'Iskolánk és annak környéke madártávlatból:<br><br><a href="https://www.youtube.com/watch?v=5wylxrdFFBI" target="_blank">A videó megtekintéséhez kattintson ide</a>'
    },

    // --- 54. Tankönyvszerzőink (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/54_ tankönyvszerzőink.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Tankönyvszerzőink',
        content: 'A Landler/Umszki tanárainak, oktatóinak megjelent tankönyvei:<br><br>dr. Podhorányi Györgyné: Kémiai kísérletgyűjtemény (1984)<br>Horváth Z. - Juhász R. - Masa L.: Ipari elektronika (2000)<br>Kovács János: Irányítástechnikai alapismeretek (2000)<br>Hámori Zoltán: Az elektrotechnika alapjai (2000)<br>Hámori Zoltán: Villamosgépek (2000)<br>Hámori Zoltán: Alapmérések - Villamos mérések (2001)<br>Nagy Imre: Szakmai alapismeretek I. (1988)<br>Nagy Imre: Minőségbiztosítás (2006)<br>Horváthné Tőkei Zsuzsanna: Számítógép rendszertechnika 1., 2. (2005, 2006)<br>Horváth József: Munka- és környezetvédelem (2010)<br>Zombori Béla: Elektronika (2020)<br>Zombori Béla: Digitális elektronika (2020)<br>Zombori Béla: Elektronikai feladatgyűjtemény (2020)'
    },

    // --- 55. Landler Jenő (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/55_Landler Jenő.jpg',
        pocketTitle: 'Landler Jenő',
        gallery: [
            'KEPEK/55_Landler Jenő/101061967_3242993852401541_2394157664352337920_n.jpg',
            'KEPEK/55_Landler Jenő/55_Landler.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Landler Jenő',
        content: 'Landler Jenő (1875–1928) magyar szociáldemokrata politikus, jogász, a 20. századi magyar munkásmozgalom egyik kulcsfigurája. A kommün bukása után emigrált. A Kommunisták Magyarországi Pártja egyik vezetője maradt haláláig.<br><br>Az intézmény nevében 35 éven át szerepelt a neve:<br><br>1955 – 1958 Landler Jenő Gépipari Technikum<br>1958 – 1965 Landler Jenő Híradásipari és Közlekedésgépészeti Technikum<br>1965 – 1970 Landler Jenő Gép- és Híradásipari Technikum<br>1970 – 1974 Landler Jenő Gép- és Híradásipari Technikum és Szakközépiskola<br>1974 – 1977 Landler Jenő Híradástechnikai és Gépészeti Szakközépiskola<br>1977 – 1990 Landler Jenő Gép- és Híradásipari Szakközépiskola'
    },

    // --- 56. Tanulmányi versenyek (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/56_tanulmányi versen.jpg',
        pocketTitle: 'Tanulmányi versenyek',
        gallery: [
            'KEPEK/56_tanulmányi versenyek/1.jpg',
            'KEPEK/56_tanulmányi versenyek/2.jpg',
            'KEPEK/56_tanulmányi versenyek/3.jpg',
            'KEPEK/56_tanulmányi versenyek/4.jpg',
            'KEPEK/56_tanulmányi versenyek/5.jpg',
            'KEPEK/56_tanulmányi versenyek/6.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Tanulmányi versenyek',
        content: 'Az OSZTV, az Országos Szakmai Tanulmányi Verseny a hazai szakképzés egyik legfontosabb megmérettetése.<br>A versenyen történő sikeres részvétel legfontosabb előnyei közt szerepel a vizsgák alóli mentesség és az esetleges karrierlehetőség. Ugyanis az országos szintű helyezés komoly szakmai elismerést és előnyt jelent a munkaerőpiacon. Területi előválogatók, középdöntők előzik meg az országos döntőt. A legmagasabb pontszámot elérő tanulók a budapesti Szakma Sztár Fesztivál keretein belül mérkőznek meg a végső helyezésekért.<br>Minden tanévben számos tanulónk indul ezen a megmérettetésen több-kevesebb sikerrel.'
    },

    // --- 57. Iskolazászló (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/57_iskolazászló.JPG',
        pocketTitle: 'Iskolazászló',
        gallery: [
            'KEPEK/57_iskolazászló/1.jpg',
            'KEPEK/57_iskolazászló/1B.jpg',
            'KEPEK/57_iskolazászló/2.jpg',
            'KEPEK/57_iskolazászló/3.jpg',
            'KEPEK/57_iskolazászló/4.JPG',
            'KEPEK/57_iskolazászló/6.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Iskolazászló',
        content: 'Az 1977-es ballagáson, az 50 éves ünnepség napján a ballagók már az előző napon felavatott zászló mögött vonultak. Az egyik oldala nemzeti színű volt, a másik oldalon egyszínű piros mezőben az akkori iskolacímer volt látható. Valószínűsíthető, hogy ettől az időponttól minden ballagáson elöl ezt az iskolazászlót vitték. A kezdeti időszakból az 1977-es, az 1980-as és az 1986-os ballagásról maradt fenn „zászlós fotó”. A 2002-es múzeum avatóünnepségén az 1977-ben felavatott iskolazászló ott díszelgett a falon.<br>Ugyanis az iskola fennállásának 75. évfordulóján, a fenntartó képviselője új zászlót adott át. Ennek egyik oldalán a magyar címer, másik oldalán az iskolacímer volt látható. Azóta minden ballagási menet élén ez haladt.<br>A zászlót az igazgatói iroda előterében helyezték el. A rendszerváltás után új címeres zászló készült, hiszen akkor már nem volt aktuális önmagában a vörös szín, és a névváltozás miatt a rajta lévő iskolacímer sem.'
    },

    // --- 58. Iskolai ünnepségek (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/58_iskolai ünnep.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Iskolai ünnepségek',
        content: 'Az iskolai ünnepségek és rendezvények nem csupán kötelező programok a tanév naptárában, hanem az intézményi kultúra, a közösségépítés és az értékteremtés pillérei is.<br>Ezeknek az alkalmaknak évről évre visszatérő ritmusa a tulajdonképpeni hagyományteremtés. Bár a modern világban az iskolai ünnepségek formája változik - a merev, statikus ünnepélyeket egyre inkább felváltják a diákokhoz jobban alkalmazkodó, interaktív vagy drámapedagógiai megoldások -, a lényegük változatlan marad. Az iskolai ünnepségek hidat képeznek a múlt és a jövő, az egyén és a közösség között.<br>Az ünnepi műsorok elkészítése komoly csapatmunkát igényel.<br><br>Vegyük sorra a pontos dátumokhoz kötődő iskolai ünnepségeket, megemlékezéseket listaszerűen:<br><br>évnyitó<br>aradi vértanúk emléknapja (október 6.)<br>az 1956-os forradalom emléknapja (október 23.)<br>a magyar nyelv napja (november 13.)<br>a magyar kultúra napja (január 22.)<br>kommunista diktatúrák áldozatainak emléknapja (február 25.)<br>az 1848–49-es forradalom emléknapja (március 15.)<br>a holokauszt áldozatainak emléknapja (április 16.)<br>nemzeti összetartozás napja (június 4.)<br>évzáró'
    },

    // --- 59. Elektroncső (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/59_elektroncső.jpg',
        pocketTitle: 'Elektroncső',
        gallery: [
            'KEPEK/59_elektroncső/1.JPG',
            'KEPEK/59_elektroncső/2.jpg',
            'KEPEK/59_elektroncső/3.jpg',
            'KEPEK/59_elektroncső/4.jpg',
            'KEPEK/59_elektroncső/5.jpg',
            'KEPEK/59_elektroncső/6.JPG',
            'KEPEK/59_elektroncső/7.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Elektroncső',
        content: 'Az 1961/62-es tanévben az iskola tanműhelyében – a mai raktár helyén – alakítottak ki a Tungsram Gyár jóvoltából egy vákuumtechnikai műhelyt. Ebben az időszakban a gyárnak egyre több technikusra volt szüksége, hiszen a hagyományos izzólámpakészítés mellett felfutott a fénycsőgyártás. Az elektroncsőgyártás volumene pedig a növekedő Orion, Videoton televíziógyártás miatt nőtt jelentősen. Telepítettek ponthegesztő gépet és vákuumszivattyút is.<br>Az iskolában az izzólámpa- és elektroncsőgyártás befejező műveleteire került sor. A tanulók először a gázlánggal felhevített üveg megmunkálását – hajlítást, összeforrasztást – gyakorolták. Ezt követte az izzólámpakészítés néhány művelete, majd következett az EL 84 elektroncső gyártása.<br>A műveletek a következők voltak: a gyárban előszerelt komplett szerelvényt ponthegesztéssel a kivezetéssel ellátott üvegtalphoz rögzítették; a vákuumcsonkkal ellátott búrát a szerelvényezett üvegtalppal összeolvasztották gázláng segítségével; majd következett a vákuumszivattyúzás, a getterezés és a funkcionális működés vizsgálata.<br>A vákuumtechnikai műhely működtetése az 1971/72-es tanévben fejeződött be. Ennek oka, hogy a híradástechnikai profilt a számítástechnikai képzés váltotta fel.'
    },

    // --- 60. Sikerek közismereti tantárgyakból (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/60_sikerek közismereti.jpg',
        pocketTitle: 'Sikerek közismereti tantárgyakból',
        gallery: [
            'KEPEK/60_sikerek közismereti tárgyakból/1.jpg',
            'KEPEK/60_sikerek közismereti tárgyakból/2.jpg',
            'KEPEK/60_sikerek közismereti tárgyakból/3.jpg',
            'KEPEK/60_sikerek közismereti tárgyakból/4.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Sikerek közismereti tantárgyakból',
        content: 'A \'70-es, \'80-as években a Landler Művészeti Stúdió – LMS – tevékenysége sok diákot megmozgatott. Versmondó versenyek, színházi előadások kerültek megrendezésre.<br>2005-ben – a 100 éves József Attila évfordulón - 24 órás felolvasást szerveztek az akkori humán munkaközösség tagjai a méltó ünnepléshez.<br>A Szép magyar beszéd, az Implom József Középiskolai Helyesírási Verseny, az Édes anyanyelvünk, a Bolyai Anyanyelvi Csapatverseny, a költészet napjához közel eső Hatágú síp vers- és prózamondó verseny, az Újpesti Helytörténeti Vetélkedő, az Újpesti Akadémikusok Vetélkedője tették és teszik mozgalmassá és még tartalmasabbá diákjaink nagy részének iskolaéveit évtizedek óta.<br>A matematika munkaközösség is évről-évre változatos lehetőségeket kínál a tanulóknak, hiszen a Zrínyi Ilona Matematikaverseny, a Kenguru Nemzetközi Matematikaverseny, a Gordiusz Matematikaverseny, a Bolyai Matematika Csapatverseny, az Arany Dániel Matematikaverseny mind-mind újabb és újabb esélyt nyújt a megmérettetésekhez, tudásfelméréshez.'
    },

    // --- 61. A Magyar Köztársaság Ezüst Érdemkeresztje (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/61_kovács mihály.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'A Magyar Köztársaság Ezüst Érdemkeresztje',
        content: 'Az iskola történetének eddigi legmagasabb szintű kitüntetését Kovács Mihály kapta. 1995-ben Göncz Árpád köztársasági elnöktől vehette át a Magyar Köztársaság Ezüst Érdemkereszt kitüntetést. A Magyar Ezüst Érdemkereszt a független és demokratikus Magyarország érdekeinek előmozdítása, valamint a nemzet szolgálata terén végzett kimagasló, példamutató tevékenység elismerésére adományozható állami kitüntetés.<br>Kovács Mihály tanár úr emlékét az alábbi videófilm is őrzi:<br><a href="https://www.youtube.com/watch?v=2X9oa6YFFCs&list=PLgQbRN68uStpzHCOXW7TFELVJ9sJX1HoZ&index=13" target="_blank">Videó</a>'
    },

    // --- 62. Az első számítógép (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/62_ELSŐ SZÁMÍTÓGÉP.jpg',
        pocketTitle: 'Az első számítógép',
        gallery: [
            'KEPEK/62_első számítógép/1.jpg',
            'KEPEK/62_első számítógép/10.jpg',
            'KEPEK/62_első számítógép/11.jpg',
            'KEPEK/62_első számítógép/12.jpg',
            'KEPEK/62_első számítógép/13.jpg',
            'KEPEK/62_első számítógép/2.jpg',
            'KEPEK/62_első számítógép/3.jpg',
            'KEPEK/62_első számítógép/4.jpg',
            'KEPEK/62_első számítógép/5.jpg',
            'KEPEK/62_első számítógép/6.JPG',
            'KEPEK/62_első számítógép/7.jpg',
            'KEPEK/62_első számítógép/8.jpg',
            'KEPEK/62_első számítógép/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Az első számítógép',
        content: 'Érdemes áttekintenünk az előzményeket. A félvezetők megjelenése az ötvenes évek végétől - elsősorban az Egyesült Államokban - ugrásszerű fejlődést hozott a számítástechnikában.<br>A KGST-ben 1969-ben zajlott az áttörés, az országok között kiosztották a gyártási feladatokat. Magyarország a rendszer legkisebb gépének (R10) gyártását kapta. A Kohó- és Gépipari Minisztériumnak, az iskola akkori fenntartójának feladata egyrészt a gyártás megszervezése, másrészt az ehhez és a legyártott gépek üzemeltetéséhez szükséges középfokú végzettségű munkaerő képzésének biztosítása volt.<br>A középfokú szakemberképzésre a Landlert találták legalkalmasabbnak, hiszen az elektronikához kapcsolódó színvonalas technikusképzés itt zajlott. Később a koncepció annyiban megváltozott, hogy a gyártás Székesfehérváron valósult meg.<br>Iskolánkban az 1971/72-es tanévben indult a számítástechnikai műszerészképzés, mely a híradástechnikai technikus képzésünket váltotta fel. Akkor a 3.A és C osztályban történt az átállás, valamint mindhárom újonnan beiskolázott első osztályban.<br>Ennek a projektnek a megvalósításához kapcsolódóan kaptuk a KFKI által gyártott TPA 1001 nevű számítógépet. Ebben az időben az országban mindössze 170 darab számítógép volt. Mi voltunk az első középiskola, amely számítógéppel rendelkezett.<br>A TPA 1001 1971. szeptember 8-án lett üzembe helyezve. Az elméleti képzés megszervezését Nagy Imre tanár úr, a gyakorlati képzését Urbán Kornél tanár úr kapta feladatul. A gép a 9.B jelű helyiségben kapott helyet a földszinten. A kábeleknek álmennyezetet és -padlót alakítottak ki.'
    },

    // --- 63. Görgey Artúr utca 26. (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/63_Görgey szobor koszorúzás.jpg',
        pocketTitle: 'Görgey 26',
        gallery: [
            'KEPEK/63_Görgey 26/1.JPG',
            'KEPEK/63_Görgey 26/2.JPG',
            'KEPEK/63_Görgey 26/3.JPG',
            'KEPEK/63_Görgey 26/4.jpg',
            'KEPEK/63_Görgey 26/5.jpg',
            'KEPEK/63_Görgey 26/6.jpg',
            'KEPEK/63_Görgey 26/7.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Görgey Artúr utca 26.',
        content: 'Az 1880-as években Vasút utca volt, majd 1926-tól Horthy Miklós utca, 1945-től Dózsa György utca, 1991-től Görgey Artúr utca lett. A végleges elnevezés arra utal, hogy 1849 januárjában itt vonult át Görgey Artúr hadserege.<br>Görgey Artúr (1818–1916), az 1848–49-es forradalom és szabadságharc honvéd tábornokának mellszobra Újpesten a róla elnevezett utcában, pontosabban a Görgey és Corvin utca sarkán áll. A mellszobor egy 150 cm magas talapzaton nyugszik. Alkotója Gömbös László szobrászművész. Alkotását 1998-ban állították fel.<br>Az utóbbi évtizedekben iskolánk az 1848–49-es forradalom és szabadságharc kapcsán megrendezett megemlékezéseken évről évre képviselteti magát a szobor megkoszorúzásakor.'
    },

    // --- 64. Hackné Nyerges Rita (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/64_Hackné Nyerges Rita.jpg',
        pocketTitle: 'Hackné Nyerges Rita',
        gallery: [
            'KEPEK/64_Hackné Nyerges Rita/1.JPG',
            'KEPEK/64_Hackné Nyerges Rita/2.JPG',
            'KEPEK/64_Hackné Nyerges Rita/3.JPG',
            'KEPEK/64_Hackné Nyerges Rita/4.JPG',
            'KEPEK/64_Hackné Nyerges Rita/5.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Hackné Nyerges Rita',
        content: 'Hackné Nyerges Rita 1989-ben végzett az Eötvös Loránd Tudományegyetem Természettudományi Karán okleveles matematika szakos középiskolai tanárként, majd Kecskeméten, Szegeden, és a Corvinus Egyetemen tett további szakvizsgákat.<br>Volt az iskola matematikát angol nyelven oktató tanára, mérési csoportjának vezetője, reál-szakterületének vezetője, igazgatóhelyettese és igazgatója 2012 és 2018 között.'
    },

    // --- 65. Szakmai sikerek (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/65_tanulmányi verseny.jpg',
        pocketTitle: 'Szakmai sikerek',
        gallery: [
            'KEPEK/65_szakmai sikerek/0.jpg',
            'KEPEK/65_szakmai sikerek/1.jpg',
            'KEPEK/65_szakmai sikerek/2.jpg',
            'KEPEK/65_szakmai sikerek/3.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Szakmai sikerek',
        content: 'Az intézmény minden korszakának megvoltak a maga szakmai sikerei. Az évkönyvek után az internetes weboldal vált hivatottá ezen események rögzítésére. Bár 2024-ben honlapunk is megújult, de feltétlenül érdemes végigböngészni a régi weboldal idevonatkozó bejegyzéseit is, hiszen az elmúlt évtizedek sikerei ott is sorakoznak:<br><a href="https://old.umszki.hu/eredmenyeink/szakmai-eredmenyek.html" target="_blank">Szakmai eredményeik</a><br><br>Mind közül talán az egyik legékesebb a Szakma Sztár FANUC Ipari Robotika Verseny I. helyezése, ahol két diákunk megnyerte az ipari robotika versenyt.'
    },

    // --- 66. Szakmák éjszakája (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/66 _szakmák éjszakája.jpg',
        pocketTitle: 'Szakmák éjszakája',
        gallery: [
            'KEPEK/66_szakmák éjszakája/1.jpg',
            'KEPEK/66_szakmák éjszakája/2.jpg',
            'KEPEK/66_szakmák éjszakája/3.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Szakmák Éjszakája',
        content: '2016. április 15-én került első ízben a Szakmák Éjszakájának megrendezésére az UMSZKI-ban. Ez az interaktív bemutatókra épülő program igen komoly érdeklődésre tartott számot.<br>Látogathatóak voltak a műhelyek és a szaktantermek, ahol különlegesen érdekes programokkal, bemutatókkal várták az érdeklődőket. Gyerekek, szüleik és a kollégák lelkesen próbálták ki a rendelkezésükre álló eszközöket.<br>Az umszkis diákok és tanárok éjszakába nyúlóan dolgoztak, fáradhatatlanul beszéltek, be- és megmutatták az iskola fő profiljait a látogatóknak.'
    },

    // --- 67. Könyvtár (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/67_könyvtár.jpg',
        pocketTitle: 'Könyvtár',
        gallery: [
            'KEPEK/67_könyvtár/1.jpg',
            'KEPEK/67_könyvtár/2.jpg',
            'KEPEK/67_könyvtár/3.jpg',
            'KEPEK/67_könyvtár/4.jpg',
            'KEPEK/67_könyvtár/5.jpg',
            'KEPEK/67_könyvtár/6.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Könyvtár',
        content: 'Az \'50-es évektől a korábbi igazgatói lakrész cselédszobájából lett könyvraktár. Ez a helyiség kezdetleges könyvtárként is üzemelt, később itt alakították ki a biliárdszobát a szomszédságában tanári dohányzóval, melyekből végül igazgatóhelyettesi irodák lettek.<br>A faipari iskola átköltözésével ránk maradt könyvekkel bővült a fémiparisok könyvállománya. Ebben az időben a mai 43-as teremben tárolták az úgynevezett kötelező olvasmányokat.<br>Az 1974-es könyvtárügyi törvény nagy változást eredményezett a közintézmények könyvtárállományának sorsát illetően. A Landlerban Mille Éva és Bosnyák Sándorné mint megbízott könyvtárosok tevékenykedtek a \'70-es években. Majd 1982-ben került a tantestületbe Seres József. Az ő szíves közlésének köszönhetően olvashatjuk most ezeket a sorokat is, hiszen az ő emlékezete idézte fel a könyvtár történetét. Harminc éven át, nyugdíjazásáig, 2012-ig volt az iskola könyvtárosa. Évekig Zombori Béla igazgató úr kitartóan támogatta a könyvtárfejlesztésért tett mindennemű törekvését. Így az első lépést is, hogy a mai 211-es és 212-es terembe kerüljön fel az addigi állomány.<br>A 2008-ban megszűnő Bay Zoltán Elektronikai Szakközépiskola és Műszeripari Szakiskola megörökölt könyvállományával már a mai helyén bővült a könyvtár: kialakítására a folyosó leválasztásával, ablakok befalazásával, esetleges cseréjével került sor. A tantermek helyén tágas olvasóterem létesült. Az Iskolai Mintakönyvtár program komoly lendületet adott a fejlesztéseknek. Idővel másodkönyvtárosra is szükség volt, így bízták meg Gál Katalint ezzel a feladattal. Sőt könyvtáros-asszisztens felvételét is lehetővé tette a program. A papíralapú katalógust felváltotta a Szirén Intergált Könyvtári Rendszer, melyet a tantestület számára is elérhetővé tettek.<br>Mint kulturális tér számos közösségi program helyszínéül szolgált és szolgál a könyvtár. Szép magyar beszéd versenyek, versmondó versenyek, filmvetítések, beszélgetések zajlanak falai közt. Sipos Lajos Széchenyi-díjas irodalomtörténész, Babits-kutató, a Könyves Gimnázium volt tanára is meghívott vendége volt iskolánknak.<br>Fanyar igazság, hogy a megrendelt sokkötetes Magyar Nagylexikon példányonként érkezésének idején terjedtek el a személyi számítógépek. Az internet mindennapos használatával a lexikon elavult formátummá kezdett válni a mindennapokban.<br>A könyvtár nem vész el, csak átalakul. Ebben a reményben újul meg ez a közösségi pontja az iskolának.'
    },

    // --- 68. Újpesti Középiskolai Börze (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/68_újpesti iskolák börzéje.JPG',
        pocketTitle: 'Újpesti Középiskolai Börze',
        gallery: [
            'KEPEK/68_középiskolai börze/1.JPG',
            'KEPEK/68_középiskolai börze/10.jpg',
            'KEPEK/68_középiskolai börze/2.JPG',
            'KEPEK/68_középiskolai börze/3.JPG',
            'KEPEK/68_középiskolai börze/4.JPG',
            'KEPEK/68_középiskolai börze/5.JPG',
            'KEPEK/68_középiskolai börze/6.JPG',
            'KEPEK/68_középiskolai börze/7.JPG',
            'KEPEK/68_középiskolai börze/8.jpg',
            'KEPEK/68_középiskolai börze/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Újpesti Középiskolai Börze',
        content: 'Az eseménynek évről évre az Újpesti Ifjúsági Ház ad otthont. A többnapos rendezvényen a pályaválasztás előtt álló diákok és szüleik segítséget kapnak a továbbtanulási lehetőségek feltérképezésében - akár budapesti vagy Budapest környéki iskolaválasztásban gondolkodnak.<br>Az iskolák bemutatkozása mellett, a helyszínen lehetőséget biztosítanak pályaorientációs szolgáltatás igénybe vételére is, hogy a diákok célirányosabban tájékozódjanak az iskolák képzési kínálatából.'
    },

    // --- 69. Diákszáj (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/69_diákszáj.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Diákszáj',
        content: 'Az emberek nagy része vizuális típus. A tanári pálya egyik öröm- és egyszerre kudarcforrása, ha egy-egy kevésbé jól sikerült módon megfogalmazott mondat kapcsán elindult a belső képalkotás. Mára ez a mentális műfaj élővé a meme-k által vált.<br>„Amikor Julianus barát meghozta a tatát veszedelem hírét, IV. Béla várromokat építtetett.”<br>„Szulejmán szultán Szigetvár alatt tehetetlen haragjában megütötte a gutát.”<br>„Dugonics Titusz fenekét a falnak támasztotta és azon felmászott a bástyára.”<br>„Vörösmarty Mihály az MTK tagja volt.”<br>A 75. Jubileumi évkönyv 81-84. oldalán olvasható a félrefogalmazások gyűjteménye.'
    },

    // --- 70. 24 órás angol óra – Guinness rekord – uniós csatlakozás (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/70_uniós csatlakozás, guinness.jpg',
        pocketTitle: '24 órás angol óra',
        gallery: [
            'KEPEK/70_uniós csatlakozás_Guinness/1.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: '24 órás angol óra – Guinness rekord – uniós csatlakozás',
        content: 'Hogyan ünnepeltük az UMSZKI-ban uniós csatlakozásunkat?<br>Az akkor érettségi előtt álló 13.H osztálynak angolórákat tartottak "Nyelvtudással lépünk Európába" címszóval. Matematika, informatika, testnevelés, irodalom, fizika, zene szerepelt a programban, és minden angolul izgalmas, szórakoztató feladatokkal.<br>Összefogtak a tanárok és a szülők, és hozzásegítették a csapatot a Guinness-rekord felállításához. Az akkori Oktatási Minisztérium volt az egyik támogató.<br>A fotó azt a pillanatot örökíti meg, amikor 24 óra elteltével John Lennon Imagine című dalának felcsendülésével zárult a rekordkísérlet: sikerrel. Szép emlék!'
    },

    // --- 71. Gólyatábor, gólyanap (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/71_gólyatábor_gólyanap.jpg',
        pocketTitle: 'Gólyatábor, gólyanap',
        gallery: [
            'KEPEK/71_gólyatábor, gólyanap/1.jpg',
            'KEPEK/71_gólyatábor, gólyanap/2.jpg',
            'KEPEK/71_gólyatábor, gólyanap/3.jpg',
            'KEPEK/71_gólyatábor, gólyanap/4.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Gólyatábor, gólyanap',
        content: 'A gólyatábor/gólyanap az első és legfontosabb közösségi esemény a középiskolai évek megkezdése előtt.<br>Ez a rendezvény segít abban, hogy a frissen felvett diákok, a gólyák még a tanévkezdés előtt megismerjék egymást, az évfolyamukat, az osztálytársaikat, az osztályfőnöküket, a felsőbb éveseket és az adott intézmény működését. Napközbeni csapatjátékok, sportversenyek, ismerkedős játékok, pontszerző versenyek és ügyességi feladatok teszik emlékezetessé ezt az első találkozót. Az eskütétel szimbolikus beavatás.<br>De hivatalos tájékoztatókkal is segítik a szervezők a kezdeti nehézségek leküzdésében a diákokat.'
    },

    // --- 72. Újpesti fáklyás ballagás (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/72_újpesti fáklyás menet.jpg',
        pocketTitle: 'Fáklyás ballagás',
        gallery: [
            'KEPEK/72_újpesti fáklyás ballagás/1.jpg',
            'KEPEK/72_újpesti fáklyás ballagás/2.jpg',
            'KEPEK/72_újpesti fáklyás ballagás/3.jpg',
            'KEPEK/72_újpesti fáklyás ballagás/4.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Újpesti fáklyás ballagás',
        content: 'Évről évre ismétlődő, hagyományként tisztelt esemény volt a 2000-es évek első évtizedeiben az újpesti középiskolák ballagóinak fáklyás felvonulása.<br>Kedves emlékként idézhetjük fel, hogy a ballagók ezzel az estébe nyúló közös sétával köszöntötték a város lakosságát. A Trombita térről Újpest főterére haladt a diáksereg, láttatva magát az újpesti lakosok előtt.<br>A fáklyás ballagás programját minden évben más-más iskola szervezte. 2015-ben a rendezvény záróakkordjaként a diákok egy látványos élőképet mutattak be, megjelenítve Újpest címerét.'
    },

    // --- 73. Technikai dolgozók (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/73_technikai dolgozók.JPG',
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Technikai dolgozók',
        content: 'A tanárokon, oktatókon, a vezetőségen és a diákokon túl ki mindenki járul még hozzá egy iskola mindennapjaihoz?<br>A titkárság, a tanulmányi osztály, a munkaügyi felelős, a gazdasági felelős, a portások, a gondnok, a karbantartók, az udvaros, a konyhai alkalmazottak, a takarítók, a kertész, a raktáros, az árubeszerző.<br>Legtöbbször ők leginkább a "backstage"-ben teszik a dolgukat, de nélkülük egyetlen közintézmény sem tudna működni sehogy. Ha ez a működés olajozott és zökkenőmentes, ahhoz ők is hozzájárulnak nap mint nap.<br>Ismét egy érdekesség az épület eredeti állapotát illetően, hogy kezdetben nem volt portásfülke. A mai 121-es tanári szoba volt a portás tartózkodási helye. Innen egy ablakon keresztül - ez ma is létezik - lehetett rálátni a nagykapura. Ebből a helyiségből egy vas csigalépcső vezetett le a portáslakásba.'
    },

    // --- 74. 75 éves az iskola (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/74_75 éves az umszki.jpg',
        pocketTitle: '75 éves az iskola',
        gallery: [
            'KEPEK/74_75 éves az iskola/1.jpg',
            'KEPEK/74_75 éves az iskola/10.jpg',
            'KEPEK/74_75 éves az iskola/2.jpg',
            'KEPEK/74_75 éves az iskola/3.jpg',
            'KEPEK/74_75 éves az iskola/4.jpg',
            'KEPEK/74_75 éves az iskola/5.jpg',
            'KEPEK/74_75 éves az iskola/6.jpg',
            'KEPEK/74_75 éves az iskola/7.jpg',
            'KEPEK/74_75 éves az iskola/8.jpg',
            'KEPEK/74_75 éves az iskola/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: '75 éves az iskola',
        content: 'A teljes 2002/2003-as tanév a hetvenöt éves intézmény ünneplésének jegyében zajlott. A hivatalos ünnepség nyitánya a 2002. szeptember 1-jei tanévnyitó volt.<br>Emlékezetessé az tette ezt a napot, hogy eljött nagyon sok régi diákunk és tanárunk. Az iskolavezetés és az alapítvány közösen szervezte az eseményt. November elején avatták az iskolatörténeti állandó kiállítást, és ezidőtájt került sor az öregdiák-találkozóra is.<br>A 75. Jubileumi évkönyv kiadása az ünnepségsorozat fontos eleme volt. Az évkönyvet Gál Katalin könyvtárvezető tanárnő szerkesztette.<br>A helytörténeti vetélkedő az Újpesthez kötődő, elhunyt akadémikusok márványtábláján szereplő személyek életútjának, tevékenységének alapos ismeretéről szólt. A vetélkedőre 2002 novemberének közepén - több kerületi középiskola részvételével - került sor.<br>A jubileumi év utolsó eseménye 2003 júniusában a technikusi oklevélosztó ünnepségen történt. Ekkor került sor - iskolánk történetében először - Arany Technikusi Oklevél átadására.'
    },

    // --- 75. A régi múzeum (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/75_75 éves műzeum.JPG',
        pocketTitle: 'A régi múzeum',
        gallery: [
            'KEPEK/75_75 éves iskolamúzeum/1.jpg',
            'KEPEK/75_75 éves iskolamúzeum/10.jpg',
            'KEPEK/75_75 éves iskolamúzeum/11.jpg',
            'KEPEK/75_75 éves iskolamúzeum/12.jpg',
            'KEPEK/75_75 éves iskolamúzeum/13.jpg',
            'KEPEK/75_75 éves iskolamúzeum/14.jpg',
            'KEPEK/75_75 éves iskolamúzeum/15.jpg',
            'KEPEK/75_75 éves iskolamúzeum/16.jpg',
            'KEPEK/75_75 éves iskolamúzeum/17.jpg',
            'KEPEK/75_75 éves iskolamúzeum/18.jpg',
            'KEPEK/75_75 éves iskolamúzeum/19.jpg',
            'KEPEK/75_75 éves iskolamúzeum/2.jpg',
            'KEPEK/75_75 éves iskolamúzeum/20.jpg',
            'KEPEK/75_75 éves iskolamúzeum/3.jpg',
            'KEPEK/75_75 éves iskolamúzeum/4.jpg',
            'KEPEK/75_75 éves iskolamúzeum/5.jpg',
            'KEPEK/75_75 éves iskolamúzeum/6.jpg',
            'KEPEK/75_75 éves iskolamúzeum/7.jpg',
            'KEPEK/75_75 éves iskolamúzeum/8.jpg',
            'KEPEK/75_75 éves iskolamúzeum/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'A régi múzeum',
        content: 'Az ezredforduló után a korábbi lánghegesztő műhely felszámolásával és a kovácsműhely korhű felújításával iskolamúzeum kialakítására került sor.<br>A múzeum, melynek pontos megnevezése iskolatörténeti állandó kiállítás, átadására 2002. november 8-án a tantestület jelenlétében került sor. Másnap a jubileumi öregdiák találkozón a megjelentek körében is hatalmas sikert aratott. Azóta is sok-sok látogatója volt.<br>Tehát a 75. jubileumi tanév egyik fő attrakciója az iskolamúzeum létrehozása volt. A munka már az előző tanévben elkezdődött: egyrészt a helyszín kialakításával, másrészt a tárlók elkészítésével, valamint a kiállítás anyagának összeszedésével.<br>A múzeum szerves része volt a kovácsműhely is, mely az épület egyetlen olyan helyisége, ahol zömében az eredeti berendezés és eszközök maradtak fenn.'
    },

    // --- 76. Osztálytablók, osztálytalálkozók (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/76_osztálytalálkozók.jpg',
        pocketTitle: 'Osztálytablók, osztálytalálkozók',
        gallery: [
            'KEPEK/76_ osztálytalálkozók/1.jpg',
            'KEPEK/76_ osztálytalálkozók/2.JPG',
            'KEPEK/76_ osztálytalálkozók/3.JPG',
            'KEPEK/76_ osztálytalálkozók/4.JPG',
            'KEPEK/76_ osztálytalálkozók/5.JPG',
            'KEPEK/76_ osztálytalálkozók/6.jpg',
            'KEPEK/76_ osztálytalálkozók/7.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Osztálytablók, osztálytalálkozók',
        content: 'Az osztálytablókról az adott korra, korszakra jellemző hangulat sugárzik. A tablók kivitelezése is az adott kor stílusát tükrözi.<br>Urbán Kornélnak köszönhetően az elmúlt száz év tablóinak zöme fellelhető az iskolatörténeti gyűjteményben időrendbe sorakoztatva.<br>"Találkozzunk öt év múlva!" Ez az idézet, felirat szerepel hagyományosan a legtöbb tablón az 1960-as évektől. Ennek a cselekvésre felszólító mondatnak eredményeképpen öt-, tíz-, húsz-, huszonöt, harminc-, negyven-, ötven-, sőt hatvanéves osztálytalálkozók szerveződtek és szerveződnek folyamatosan.<br>Hagyomány az iskolában, hogy az egybegyűltek megemlékeznek megboldogult osztálytársaikról, tanáraikról, és emléktáblát is avatnak az osztálytalálkozókon a főbejárat mellett az újratalálkozás emlékét őrzendő.<br><br><a href="http://umszki100.guest.umszki.intra/tablo/" target="_blank">Virtuális Tabló Archívum</a>'
    },

    // --- 77. Újpesti akadémikusok emléktábláinak koszorúzása (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/77_újpesti akadémikusok emléktáblái.jpg',
        pocketTitle: 'Koszorúzás',
        gallery: [
            'KEPEK/77_akadémikusok/1.jpg',
            'KEPEK/77_akadémikusok/2.jpg',
            'KEPEK/77_akadémikusok/77_AKADÉMIKUSOK EMLÉKTÁBLÁI.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Újpesti akadémikusok emléktábláinak koszorúzása',
        content: 'A magyar tudomány ünnepe november 3-a, arra emlékezve, hogy Széchenyi István gróf 1825-ben ezen a napon ajánlotta fel birtokainak jövedelmét a Magyar Tudós Társaság, a mai MTA megalapítására. A hivatalosan 2003 óta megtartott ünnep célja a tudományos élet eredményeinek bemutatása és a társadalommal való megismertetése.<br>A magyar tudomány napja alkalmából 2008 óta tartanak megemlékezést az iskola kertjében az emlékezetünkben élő újpesti akadémikusok márványtáblája, később márványtáblái előtt. Az akadémikusokra emlékezve fontos, hogy az utókor méltó legyen nagy elődeihez, és emlékezzen újpesti kötődésű tudósaira.<br><br><a href="https://www.youtube.com/watch?v=0RxP8TP5OtA&list=PLRBjWMbjjxPrQ4qAmQNh75SSORMQ6QbIc&index=24" target="_blank">Megállapodás ÚKTV Híradó</a>'
    },

    // --- 78. Angol kéttannyelvűség (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/78_angol kéttannyelvűség.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Angol kéttannyelvűség',
        content: 'Iskolánkban az 1997/98-as tanévben indult a két tanítási nyelvű képzés. Az iskola története alapján a két tannyelvű képzés kialakulása és fejlődése több mérföldkövön keresztül valósult meg. A két tanítási nyelvű képzést a gimnáziumi oktatás előzte meg. Az 1995/1996-os tanévben elindult az első gimnáziumi osztály. Ez teremtette meg a keretet a komolyabb nyelvi képzéshez, így két évvel később, 1997-ben megkezdődött a két tanítási nyelvű osztályok oktatása. A képzés kezdetben angol, majd két évvel később német nyelven is elérhetővé vált.<br>Kasza Gyuláné Bánó Kacskovics Judit sokat tett azért, hogy 1995-ben elindulhasson a gimnáziumi képzés nálunk. Neki köszönhetjük azt is, hogy - országosan az elsők közt - itt kezdődött meg a két tanítási nyelvű oktatás, s ehhez kapcsolódóan 2002-től intézményünk nyelvvizsgaközponttá is válhatott.<br><br>A diákokat emelt szintű érettségi vizsgára, B2-C1 szintű nyelvvizsgára készítjük fel. A két tanítási nyelvű osztályokban az előkészítő év után több tantárgyat idegen nyelven oktatunk: matematika, történelem/fizika, illetve az egyébként is célnyelven tartott civilizáció tantárgy. Ezekből a tantárgyakból az érettségin az oktatott nyelven zajlik a vizsga, valamint idegen nyelvből emelt szintű érettségit tesznek le a diákok. Az emelt szintű érettségi, valamint az idegen nyelven tanult tárgyak felsőfokú nyelvvizsgaként jelennek meg az érettségi bizonyítványban.<br>Sok értékes programba vonják be diákjaikat az angol munkaközösség tanárai: iskolai versmondó versenyek a könyvtárban, két tannyelvű iskolák versenye, Creative Writing, angol nyelvű színjátszó verseny.<br><br><a href="https://www.youtube.com/watch?v=Z5lxTw0C_7I" target="_blank">Angolul szavaltak a diákok az UMSZKI-ban</a>'
    },

    // --- 79. Német kéttannyelvűség (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/79_német kéttannyelvű.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Német kéttannyelvűség',
        content: '1997-ben megkezdődött a két tanítási nyelvű osztályok oktatása. A képzés kezdetben angol, majd két évvel később német nyelven is elérhetővé vált.<br>A német nyelv mellett a célnyelvi civilizáció (Zivilisation der deutschsprachigen Länder) tantárgyat, a történelmet is és a matematikát is idegen nyelven tanulják a diákok.<br>A 2000-es évek elejétől megvolt a törekvés, hogy a tanulók anyanyelvi környezetben gyakorolhassák a német nyelvet. A német két tanítási nyelvű gépész osztályok minden évben egy hetet Németországban vagy Ausztriában tölthettek, így nemcsak nyelvtudásukat bővíthették, hanem a német nyelvterületen lévő országok történelmét és az ott élő emberek kultúráját, szokásait és hagyományait is tapasztalhatták.<br><br>A tanulmányi kirándulások során az alábbi tartományokat és városokat, nevezetességeket fedezhették fel: Németországban Bayern (München, Dachau, Passau, Landshut, Nürnberg, Dingolfing), Berlin, Potsdam, Dresden; Ausztriában Kärnten (Obervellach, Villach, Gmünd, Maltatal, Möltaler Gletscher, Ragaschlucht/Tschepaschlucht), Salzburg als Bundesland und Salzburg als Stadt, Steiermark/Graz, Bärenschützklamm, Wien volt az úticél.<br>A német nyelvű iskolai események, a vers- és prózamondó versenyek, a Martinstag in der Bibliothek, "Gewinne einen Sprachkurs" is évről évre megmozgatták az érdeklődőket.<br><br>Diákjaink német nyelvű civilizációs versenyen is képviselték iskolánkat:<br><a href="https://edir.umszki.hu/hirek/orszagos-nemet-nyelvu-civilizacio-verseny-2024" target="_blank">Országos német nyelvű civilizációs verseny (2024)</a><br><br>Íme, egy osztálykirándulás hangulatos, képes videóalbuma:<br><a href="https://drive.google.com/file/d/1v2HdVGEqLC4O_AOD_j2MSUKqqJ5LjKPB/view" target="_blank">Kattints ide a videóalbum megtekintéséhez</a>'
    },

    // --- 80. Urbán Kornél (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/80_Urbán Kornél.JPG',
        pocketTitle: 'Urbán Kornél',
        gallery: [
            'KEPEK/80_Urbán Kornél/1.jpg',
            'KEPEK/80_Urbán Kornél/2.jpg',
            'KEPEK/80_Urbán Kornél/3.jpg',
            'KEPEK/80_Urbán Kornél/4.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Urbán Kornél', subtitle: '(1940-2020)',
        content: 'Urbán Kornél (1940-2020) villamosmérnök, mérnöktanár.<br>Iskolánkban érettségizett, és az egyetem után 49 éven át volt az iskola pedagógusa. Újpestért Díjas tanár. Az Újpesti Városvédő Egyesület alapítótagja. Az Újpesti Közművelődési Kör tagja és az Újpest Internetes Lexikon főszerkesztő-helyettese is volt.<br>2022-ben emléktáblát avattak a tiszteletére. Az iskolatörténeti gyűjteménynek jelentős része az ő jóvoltából kerülhetett az érdeklődők elé.<br><br>Szöllősy Marianne helytörténész, az Újpesti Városvédő Egyesület elnöke, az Újpesti Helytörténeti Gyűjtemény vezetője életút-interjút készített vele, mely az Újpesti Helytörténeti Értesítő 2020. szeptemberi számában olvasható:<br><a href="http://www.ujpest.hu/galeria/dokumentumok/helytorteneti_ertesito/uhe-202009.pdf" target="_blank">Újpesti Helytörténeti Értesítő 2020. szeptember (29-31. oldal)</a><br><br>Ennek a virtuálisan lapozható emlékkönyvnek az összeállításánál is Urbán Kornél az iskolával kapcsolatos, évtizedek alatt összegyűjtött anyagai szolgáltak alapul csakúgy, mint az iskolatörténeti gyűjtemény esetében.'
    },

    // --- 81. A stúdió (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/81_stúdiósok.jpg',
        pocketTitle: 'A stúdió',
        gallery: [
            'KEPEK/81_stúdiósok/81_stúdió.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'A stúdió',
        content: 'Mint minden oktatási intézményben, az Umszkiban is fontos eleme minden tanteremnek a fali hangszóró. Itt a regionális nyelvváltozat szerint az ezekből elhangzó rádiós megemlékezéseket "dobozos műsorként" emlegetik, tartják számon az iskola polgárai.<br>A stúdió az a hely, ahol a kreativitás találkozik a fizikával és a technika ördögével. A mindenkori stúdiósok felelnek az iskolai ünnepségek, előadások teljes technikai hátteréért.<br><br>Nemcsak kezelik a keverőpultokat, a mikrofonokat és a hangfalakat, de igazi csapatként oldják meg a hirtelen jött színpadi helyzeteket is. A "backstage"-ben zajló munka a technikai felszerelés előkészítésén, karbantartásán, üzemeltetésén túl a műsorok hangfelvételének szerkesztéséig terjed.<br>A mindenkori stúdiósok idejüket, energiájukat áldozzák egy-egy iskolai rendezvény minél zavartalanabb lebonyolításához.'
    },

    // --- 82. Építőtáborok (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/82_építőtabor.jpg',
        pocketTitle: 'Építőtáborok',
        gallery: [
            'KEPEK/82_építőtáborok/1.jpg',
            'KEPEK/82_építőtáborok/10.jpg',
            'KEPEK/82_építőtáborok/2.jpg',
            'KEPEK/82_építőtáborok/3.jpg',
            'KEPEK/82_építőtáborok/4.jpg',
            'KEPEK/82_építőtáborok/5.jpg',
            'KEPEK/82_építőtáborok/6.jpg',
            'KEPEK/82_építőtáborok/7.jpg',
            'KEPEK/82_építőtáborok/8.jpg',
            'KEPEK/82_építőtáborok/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Építőtáborok',
        content: 'Építőtáborokat a gazdasági és nevelési célok mellett propaganda célokból már az ötvenes évektől szerveztek. Bizonyos iskolákban elvárás volt a diákoktól néhány heti önkéntes munka felajánlása, ám ezek a táborok a résztvevőket illetően nem ekkor érték el csúcspontjukat, hanem a hetvenes évek második felében, a klasszikus kádári pangás időszakában.<br>Míg 1960-ban 22.000 fiú és lány dolgozott nyáron önkéntes munkán, 1982-re mintegy 54.000-re nőtt a nyári munkára érkezett fiatalok száma a huszonegy felállított KISZ-táborban.<br><br>A nagyberuházásokra létrejött táborok mellett számos olyan építőtábor is létezett, amelyekben elsősorban mezőgazdasági munkát végeztek a diákok, például gyümölcs- és zöldségbetakarítást: szőlőszüret, kukoricacímerezés, paradicsomszedés. Vagy a betakarított termény feldolgozása volt az elvégzendő munka.<br>A landleres diákok a Pécs melletti Szilágypusztán gyümölcsszedéssel foglalkozhattak például. A \'70-es évektől a Kiskunhalasi Állami Gazdaságnál őszi mezőgazdasági munkákon és nyári építőtáborokban vettek részt egészen a rendszerváltásig.'
    },

    // --- 83. Nyelvi táborok (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/83_nyelvi táborok.JPG',
        pocketTitle: 'Nyelvi táborok',
        gallery: [
            'KEPEK/83_nyelvi táborok/1.JPG',
            'KEPEK/83_nyelvi táborok/2.JPG',
            'KEPEK/83_nyelvi táborok/3.JPG',
            'KEPEK/83_nyelvi táborok/4.JPG',
            'KEPEK/83_nyelvi táborok/5.JPG',
            'KEPEK/83_nyelvi táborok/6.JPG',
            'KEPEK/83_nyelvi táborok/7.JPG',
            'KEPEK/83_nyelvi táborok/8.JPG',
            'KEPEK/83_nyelvi táborok/9.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Nyelvi táborok',
        content: 'Pályázattal indultak útjukra nyelvtanárok kezdeményezésére a nyelvi táborok is a \'90-es évek végén, 1996-ban Tiszapüspökiben volt az első. Ezt az emlékezetes tábort 2018-ig balatoni táborok követték, ahol az angol és német munkaközösség tagjai szerveztek szórakoztató, közösségépítő programokban gazdag táborokat a leendő két tanítási nyelvű osztályoknak.'
    },

    // --- 84. Pályázati sikerek: Erasmus +, VELUX-alapítvány (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/84_erasmus.JPG',
        pocketTitle: 'Pályázati sikerek',
        gallery: [
            'KEPEK/84_pályázati sikerek/1.jpg',
            'KEPEK/84_pályázati sikerek/2.jpg',
            'KEPEK/84_pályázati sikerek/3.jpg',
            'KEPEK/84_pályázati sikerek/4.jpg',
            'KEPEK/84_pályázati sikerek/5.jpg',
            'KEPEK/84_pályázati sikerek/6.jpg',
            'KEPEK/84_pályázati sikerek/7.jpg',
            'KEPEK/84_pályázati sikerek/8.jpg',
            'KEPEK/84_pályázati sikerek/9.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Pályázati sikerek: Erasmus +, VELUX-alapítvány',
        content: 'A két tannyelvű képzés kapcsán az egyik célkitűzés, hogy tanulóink alkalmassá váljanak arra, hogy tanulmányaikat akár magyarul, akár idegen nyelven folytassák, illetve szakmájukat mind a két nyelven gyakorolják. E cél elérése érdekében elengedhetetlenek a nemzetközi kapcsolatok és az együttműködések.<br>A rendszerváltás és az Unióhoz való csatlakozás után lehetőségünk nyílt a nemzetközi kapcsolatok kiépítésére, így pályázatok útján különböző projekteket valósítunk meg. Az iskola 2001 óta vesz részt uniós pályázatokban. Részesei voltunk a Leonardo, a Comenius, az Erasmus és jelenleg is az Erasmus+ projekteknek.<br>Az Erasmus+ az Európai Unió átfogó programja. Kiemelt figyelmet fordítanak a társadalmi befogadásra, a zöld és digitális átállásra, valamint a fiatalok demokratikus életben való részvételének ösztönzésére.<br><br>A partneriskolák listája folyamatosan változik. Az évente elnyert támogatásból legjobban teljesítő diákjaink egyhónapos külföldi gyakorlaton vehetnek részt, oktatóink pedig szakmai látogatásokon, külföldi intézményekben vagy továbbképző tanfolyamokon bővíthetik ismereteiket és szerezhetnek új tapasztalatokat.<br>Az igazgatóság előtti folyosórészen létrehozott Erasmus-fal jól szemlélteti a kapcsolathálót.<br>2018-ban a Velux Fundation program igazgatója kereste fel iskolánkat, pályázati lehetőséget ajánlva egy jelentős pénzügyi támogatáshoz. Ez a szervezet a dán Velux gyár alapítványa, amely több pályázatot hirdet minden évben, és nemcsak a hazai, de a közép-európai oktatást is támogatja.<br>A sikeres pályázat eredményeként 2019-ben elindulhatott az a projekt, amelyben másfél millió eurót kaptunk az iskola műszaki parkjának fejlesztésére. A projekt öt éve alatt a legmodernebb eszközöket szerezhettük be szakmai képzésünk minden területére. A támogatás jelentős fejlődést biztosított.<br><br><a href="https://edir.umszki.hu/p/erasmus" target="_blank">Erasmus+</a>'
    },

    // --- 85. BMSZC (Alap - Fehér) ---
    {
        type: 'image', eraCss: 'era-uniform',
        image: 'KEPEK/85_szakmaszerkezet_technikum.jpg',
    },
    {
        type: 'chapter', eraCss: 'era-uniform', dropCap: true,
        title: 'Budapesti Műszaki Szakképzési Centrum',
        content: 'A 2010-es évek elejétől a magyar köznevelés és szakképzés gyökeresen átalakult. Az iskolák állami fenntartásba vételével - a Klebelsberg Központtal, majd a Szakképzési Centrumok megalakulásával - a klasszikus önkormányzati TISZK-társulások (Térségi Integrált Szakképző Központ) megszűntek vagy beolvadtak a mai centralizált szakképzési struktúrába.<br><br>Napjainkban Magyarországon a szakképzés gerincét a negyvennégy állami fenntartású szakképzési centrum alkotja, amelyek összesen 365 szakképző iskolát integrálnak. Ezek az intézmények fogják össze a térségi szakképzést azzal a szándékkal, hogy biztosítsák a technikai hátteret és a munkaerőpiaci kapcsolatokat a tanulók számára. A BMSZC tizenkét nagy múltú iskolát tömörít, a modern technológia oktatására fókuszálva.'
    },

    // --- 86. World Scholar's Cup 2018 (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/86_World Schcolar\'s Cup 2018.jpg',
        pocketTitle: 'World Scholar\'s Cup 2018',
        gallery: [
            'KEPEK/86_World Scholar\'s Cup 2018/1.jpg',
            'KEPEK/86_World Scholar\'s Cup 2018/2.jpg',
            'KEPEK/86_World Scholar\'s Cup 2018/3.jpg',
            'KEPEK/86_World Scholar\'s Cup 2018/4.jpg',
            'KEPEK/86_World Scholar\'s Cup 2018/5.jpg',
            'KEPEK/86_World Scholar\'s Cup 2018/6.jpg',
            'KEPEK/86_World Scholar\'s Cup 2018/7.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'World Scholar\'s Cup 2018',
        content: 'A World Scholar\'s Cup 2006-ban alapított amerikai szervezésű, évente megrendezett versenysorozat. Három szakasza van. A regionális, a globális-nemzetközi és a döntő. A versenyen háromfős csapatok indulhatnak. A sikeres szerepléshez a magas szintű nyelvtudás csak alapfeltétel. A versenyzőknek nagyfokú intelligenciával, széleskörű általános műveltséggel, kreatív gondolkodással kell rendelkezniük.<br>A helyi fordulókon több mint 30.000 résztvevő indult, ez összesen 10.000 csapat, hat kontinens 58 országából 120 regionális fordulóból. Az egyik regionális verseny Budapesten volt. Csapatunk a senior kategóriában a 2. helyet szerezte meg, így kvalifikálta magát a nemzetközi barcelonai fordulóra, ahol kiválóan szerepelt és továbbjutott. A döntőre a Yale Egyetem kampuszán került sor 760 csapattal.<br><br>2018-ban az Innovációs és Technológiai Minisztérium és fenntartónk, a BMSZC felvállalta a részvételhez szükséges költségeket. Csapatban két ezüst-, egyéniben négy ezüst- és négy aranyérmet szerzett. Felkészítő és kísérőtanáraik Fekete Katalin és Karácsony Éva voltak.<br>A tematika Egy összegabalyodott világ (An Entangled World) volt, mely fordulónként a következő tudományterületeket érintette:<br>- természettudomány: A memória tudománya (Science: The Science of Memory);<br>- irodalom: Az elválaszthatatlanság hangjai (Literature: Voices of the Inseparable);<br>- művészetek és zene: Öleld át a távolságot (Art & Music: Braving the Distance);<br>- történelem: Diplomáciatörténet (History: The History of Diplomacy);<br>- speciális terület: Emberi kapcsolatok (Special area: Human Relationships).'
    },

    // --- 87. Lányok a Landlerben/Umszkiban (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/87_lányok.jpg',
        pocketTitle: 'Lányok a Landlerben/Umszkiban',
        gallery: [
            'KEPEK/87_lányok az umszkiban/1.jpg',
            'KEPEK/87_lányok az umszkiban/2.jpg',
            'KEPEK/87_lányok az umszkiban/3.jpg',
            'KEPEK/87_lányok az umszkiban/4.jpg',
            'KEPEK/87_lányok az umszkiban/5.jpg',
            'KEPEK/87_lányok az umszkiban/6.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Lányok a Landlerben/Umszkiban',
        content: '1945-ben az iparügyi miniszter rendelete tette lehetővé, hogy középfokú iparoktatási intézmények nappali tagozatos tanulói közé lányok is felvehetők legyenek. Egy későbbi kormányrendelet műszaki középiskolák létesítéséről rendelkezett, és megerősítette a lányok ilyen intézményben való továbbtanulási jogát.<br>Iskolánkba az 1949/50-es tanévben két leány vettek fel. Ők voltak az "első fecskék". Közülük egy fő, Svéd Mariann tett három évvel később képesítő vizsgát a IV. B osztályban. Vele indult tehát a történet.<br>A következő, az 1950/51-es tanévben tizenegy leányt vettek fel, közöttük volt az 1950-es filmhíradóban szereplő Sásdi Mária is. Az országos tanévnyitóra iskolánkban került sor. Darvas József miniszter tartotta az ünnepélyes tanévnyitót akkori körtermünkben. A filmhíradóban Sásdi Mária történetével üzentek a fiatal lányoknak, hogy várja Őket az iparoktatás.<br><br>A \'80-as években gépszerkesztői szakon sok lány került az iskolába. A tanulói létszámokat az 1951 és 1980 közötti időintervallumban vizsgálva láthatjuk, hogy a 10%-ot is meghaladta a lánytanulók aránya ebben az időszakban.<br>Az iskola életében jelentős változást hozott a gimnáziumi képzés, hiszen a gimnáziumi osztályokba addig soha nem tapasztalt mértékben jelentkeztek lányok. Ez az arány a technikusi képzés újragondolásával nagyon visszaesett. A 2020-as években már 30 fő alatt volt a nappali tagozaton tanuló lányok összlétszáma.<br>A 2026/27-es tanévre felvétel nyertek között két lány szerepel, akárcsak 1949/50-ben.'
    },

    // --- 88. Iskolavezetés (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/88_iskolavezetés.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Iskolavezetés',
        content: 'Intézményünk 100 éve alatt számos nagyszerű pedagógus vezette az iskolát, akiknek szakmai elhivatottsága, közösségépítő munkája és fejlesztő törekvései formálták az itt tanuló generációkat. Különböző történelmi és társadalmi kihívások közepette álltak helyt, biztosítva az oktatás magas színvonalát.<br><br>Intézményünk 100 éve alatt az alábbi személyek töltötték be az igazgatói pozíciót:<br>BLOCKNER GYULA 1924 – 1939<br>LAURENCSIK BÉLA 1939 – 1940<br>SZABÓ BÉLA 1940 – 1948<br>BOLGÁR MIKLÓS 1948 – 1950<br>DR. TEMESI ALFRÉD 1950 – 1951<br>DR. SZENTIRMAY JÁNOS 1951 – 1952<br>BADÁR GÁBOR 1952 – 1957<br>BARTOS LÍVIA 1957 – 1980<br>CSIZMADIA FERENC 1980 – 2000<br>ZOMBORI BÉLA 2000 – 2011<br>KASZA GYULÁNÉ 2011 – 2012<br>HACKNÉ NYERGES RITA 2012 – 2018<br>VÁRKONYI ATTILA 2018 – 2019<br>SZEVER LÁSZLÓ 2019 – 2021<br>ZIEGLER TÜNDE EDIT 2021 –'
    },

    // --- 89. Dr. Nyárs Csaba-díj, Czellér András-díj (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/89_nyárs csaba díj.JPG',
        pocketTitle: 'Dr. Nyárs Csaba-díj',
        gallery: [
            'KEPEK/89_nyárs csaba díj/1.JPG',
            'KEPEK/89_nyárs csaba díj/2.JPG',
            'KEPEK/89_nyárs csaba díj/3.JPG',
            'KEPEK/89_nyárs csaba díj/4.JPG',
            'KEPEK/89_nyárs csaba díj/5.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Dr. Nyárs Csaba-díj, Czellér András-díj',
        content: '2016 decemberében került sor először a Nyárs Csaba-díj átadására. A díjat Dr. Nyárs Csaba, a jeles újpesti lokálpatrióta alapította azzal a céllal, hogy az újpesti technikusképző intézmény, az UMSZKI két diákja és két tanára részesüljön minden évben az elismerésben. A díjak átadására az iskolai karácsonyi ünnepségen kerül sor.<br>Dr. Nyárs Csaba a közjegyzőnél hitelesített díj alapítóokirata alapján az iskolai alapítványnál három millió forintot helyezett el a finanszírozásra.<br><br>A mindenkori díjazott diákok az 50.000 forintos pénzjutalom mellé egy, az épületünket ábrázoló ezüst kitűzőt kapnak díszdobozban, valamint egy díszes oklevelet.<br><br>Czellér S. András iskolánk diákja volt. Számos tapasztalattal rendelkezik az energiaipar, a nemzetközi kereskedelem, az üzleti és a szoftverfejlesztés területén. Az iskolatörténeti gyűjteményt látva 50 éves osztálytalálkozójuk alkalmával, 2024-ben ajánlott fel jutalmazás céljára és az iskola új múzeumának fejlesztésére felhasználható jelentős pénzösszeget.'
    },

    // --- 90. 90. tanév (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/90_ünnep.JPG',
        pocketTitle: '90. tanév',
        gallery: [
            'KEPEK/90_szülinap/1.jpg',
            'KEPEK/90_szülinap/10.jpg',
            'KEPEK/90_szülinap/11.jpg',
            'KEPEK/90_szülinap/12.JPG',
            'KEPEK/90_szülinap/13.jpg',
            'KEPEK/90_szülinap/14.jpg',
            'KEPEK/90_szülinap/15.JPG',
            'KEPEK/90_szülinap/16.JPG',
            'KEPEK/90_szülinap/17.jpg',
            'KEPEK/90_szülinap/18.JPG',
            'KEPEK/90_szülinap/19.jpg',
            'KEPEK/90_szülinap/19b.jpg',
            'KEPEK/90_szülinap/2.jpg',
            'KEPEK/90_szülinap/20.jpg',
            'KEPEK/90_szülinap/21.jpg',
            'KEPEK/90_szülinap/3.JPG',
            'KEPEK/90_szülinap/4.JPG',
            'KEPEK/90_szülinap/5.JPG',
            'KEPEK/90_szülinap/6.JPG',
            'KEPEK/90_szülinap/7.JPG',
            'KEPEK/90_szülinap/7b.jpg',
            'KEPEK/90_szülinap/8.JPG',
            'KEPEK/90_szülinap/9.JPG'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: '90. tanév',
        content: '"Miénk a Landler/UMSZKI" néven indult a programsorozat a 2017/2018-as tanévben.<br>2017 szeptemberében a tanévnyitó ünnepélyességét a tanári kórus teremtette meg:<br><a href="https://www.youtube.com/watch?v=zDaICws4dzE" target="_blank">Tanári kórus videó</a><br><br>A tanárok kórusa A Pál utcai fiúk című musical ikonikussá vált betétdalát adta elő.<br>A következő programok szerepeltek a délutáni események sorában: sikeres, régi diákok bemutatkozó előadásai a tantermekben, judo-bemutató, divatbemutató, néptánc az udvari színpadon. A rendezvény ideje alatt a műhely helyiségeiben és a szaktantermekben az ott tanító tanárok különféle bemutatókkal várták az érdeklődőket. Az udvaron kürtőskalácssütés zajlott, az irodai előtérben működött az UMSZKI-shop, ahol feliratos ajándéktárgyakat árusítottak. A bevétel az alapítványhoz folyt be diákjóléti célokra történő felhasználásra.<br><br>18 órakor indult a hivatalos ünnepség. A tanári kórus ismételt. Érdekes színfoltja volt az ünnepségnek, hogy az iskola legrégebbi diákja Környei (Kühnel) Ernő - aki 1939 és 1942 között tanult az iskolánkban - e jeles alkalommal Platina Oklevelet vett át.<br>Az ünnepély után kitűnő zenei produkciókkal léptek fel öregdiákjaink az udvari színpadon.<br>A jubileumi ünnepség csúcspontja, az esti látványos tűzijáték, méltó lezárása volt a jeles napnak.<br>Ez az alkalom is bizonyította, hogy az iskolai közösségek nemcsak osztályszinten működnek, az ilyen események nagyszerű keretet adnak a közösségek találkozóinak, bár ritkán adódnak.<br><br>Az Újpesti Közösségi Televízió (ÚKTV) Körkép extra műsora:<br><a href="https://www.youtube.com/watch?v=8c-27xbCUrk" target="_blank">Videó 1</a><br><a href="https://youtu.be/SnNSlBIvgEQ" target="_blank">Videó 2</a>'
    },

    // --- 91. Címerrekonstrukció (Emléktárgyak - Sárga) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/91_címer .jpg',
        pocketTitle: 'Címerrekonstrukció',
        gallery: [
            'KEPEK/91_címerrekonstrukció/1.jpg',
            'KEPEK/91_címerrekonstrukció/2.jpg',
            'KEPEK/91_címerrekonstrukció/3.jpg',
            'KEPEK/91_címerrekonstrukció/5.jpg',
            'KEPEK/91_címerrekonstrukció/6.jpg',
            'KEPEK/91_címerrekonstrukció/7.jpg',
            'KEPEK/91_címerrekonstrukció/8.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Címerrekonstrukció',
        content: 'Az 1950/51-es tanévben az akkori hatalom eltávolította az iskola homlokzatát díszítő magyar címert. Helyére, évtizedekre a vörös csillag került. A rendszerváltás után ugyan a csillag lekerült, de közel 30 éven át semmi nem történt a homlokzattal.<br>2018 júniusának végén került vissza az építő, Foerk Ernő eredeti tervei alapján az iskola homlokzatára a címer rekonstrukciója. A projekt megvalósulásának támogatói között köszönthettük Újpest legjelentősebb civil szervezeteit, jónéhány volt diákunkat, újpesti lokálpatriótákat és több újpesti vállalkozót.<br><br>Az eseményen az igazgatóasszony összefoglalta a címer történetét, és méltatta azt a széleskörű társadalmi összefogást, ami lehetővé tette a megvalósítást. Ugyanakkor készült egy gránittábla is, mely emléket állít a jeles eseménynek, és tiszteleg a megvalósítók és támogatók előtt.<br>A reprezentatív képen a bejárati vaskapun látható iskolajelvény is látszik. Érdekesség, hogy ez az 1949/50-es tanévben került oda, tehát néhány hónappal a homlokzati címer eltávolítása előtt. Diákok készítették Durkó László tanár úr irányításával.<br><br>Szabó Tamás által készített videó:<br><a href="https://youtu.be/jlxM2OHSKsk" target="_blank">Videó</a>'
    },

    // --- 92. Az iskolakert (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/92_iskolakert.jpg',
        pocketTitle: 'Az iskolakert',
        gallery: [
            'KEPEK/92_iskolakert/1.jpg',
            'KEPEK/92_iskolakert/2.jpg',
            'KEPEK/92_iskolakert/3.jpg',
            'KEPEK/92_iskolakert/4.jpg',
            'KEPEK/92_iskolakert/508113658_24373468288906396_3354828008535129465_n.jpg',
            'KEPEK/92_iskolakert/60219770_10156830053839821_841068988715761664_n.jpg',
            'KEPEK/92_iskolakert/G.JPG',
            'KEPEK/92_iskolakert/H.JPG',
            'KEPEK/92_iskolakert/NYÁR_1.jpg',
            'KEPEK/92_iskolakert/NYÁR_2.jpg',
            'KEPEK/92_iskolakert/P1011977.JPG',
            'KEPEK/92_iskolakert/P1011982.JPG',
            'KEPEK/92_iskolakert/TAVASZ_2.jpg',
            'KEPEK/92_iskolakert/TAVASZ_3.jpg',
            'KEPEK/92_iskolakert/TAVASZ_4.jpg',
            'KEPEK/92_iskolakert/TÉL_1.jpg',
            'KEPEK/92_iskolakert/TÉL_3.jpg',
            'KEPEK/92_iskolakert/TÉL_4.jpg',
            'KEPEK/92_iskolakert/umszki_004.jpg',
            'KEPEK/92_iskolakert/ŐSZ_1.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Az iskolakert',
        content: 'Az udvar platánfái és hársfája mellett az épületet körül ölelő területnek is megvannak a szemet gyönyörködtető kertészeti csodái.<br>Előkertünk eredendően újpesti közpark volt. Amikor az épület 1927-ben elkészült még nem volt kerítése. 1932-ben a város megállapodott a tulajdonosi jogokat gyakorló Kereskedelemügyi Minisztériummal, hogy az előkert nyilvános park legyen, vállalva ekkor a park kialakítását és fenntartását.<br>Később egy 1957-ben kelt levélből kiderül, hogy 1948-ban Döbrentei Károlyné polgármester "kérte az iskola körüli park közterület céljára való átengedését, arra való hivatkozással, hogy Újpest a közterületi parkokat erősen nélkülözi". Igaz, ekkor még a Hősök ligete létezett, de már elhanyagoltan, feltehetően ekkor már építési területként gondoltak rá.<br><br>A levélből az is kiderül, hogy az iskola igazgatója Bartos Lívia - forráshiányra hivatkozva - szerette volna továbbra is város gondozására bízni az előkertünket, sikerültelenül.<br>A jellegzetes jegenyesor elöregedett, egyik-másik ki is dőlt, megrongálva a kerítést, a villamos felsővezetékét. 2003 és 2007 között vágták ki - egy kivételével - az előkert fáit. Helyükre juharfák kerültek. A kivágás és ültetés az önkormányzat segítségével történt. 2005-ben történt egy teljes kertészeti felújítás. A kertgondozás azóta is folyamatos.<br>Az iskola parkfenntartói feladatát kitűnően teljesíti, hiszen az iskolakert manapság is gondos kezekben van: a Görgey utca felőli fasor mentén bokrok, virágágyások színesítik az összképet.'
    },

    // --- 93. UMSZKI Diákdíj (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/93_umszki diákdíj.JPG'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'UMSZKI Diákdíj',
        content: '2004 óta minden évben sor kerül az UMSZKI Diákdíj átadására, melyet mindig az adott tanév legkiválóbbjai kapnak. A tanulmányi eredmény, a tanulmányi versenyeken való részvétel és elért eredmény, az iskola diákközösségének szervezésében végzett munka, az iskolai rendezvényeken történő aktív és színvonalas részvétel, a jó sportteljesítmény képezik - egyebek mellett - a kiválasztás szempontjait.<br>Az UMSZKI Diákdíjasok neveit megörökítő tablók az irodák előtti folyosó átjárójában olvashatók.'
    },

    // --- 94. Korszerű gyártástechnológiák (Események - Bézs / era-targyak) ---
    {
        type: 'image', eraCss: 'era-targyak',
        image: 'KEPEK/94_korszerű gyártás.jpg',
        pocketTitle: 'Korszerű gyártástechnológiák',
        gallery: [
            'KEPEK/94_korszerű gyártástechnológiák/3c477d76-e2fc-428f-8b99-7285bbb65e69.jpg',
            'KEPEK/94_korszerű gyártástechnológiák/88b7348d-1f5f-4a64-9f7e-f9b79c2af188.jpg',
            'KEPEK/94_korszerű gyártástechnológiák/9a3d9b61-22d5-4cd3-ab56-41c8256ab3aa.jpg',
            'KEPEK/94_korszerű gyártástechnológiák/9f56b681-071c-46eb-8bd9-a306dbad5cf1.jpg',
            'KEPEK/94_korszerű gyártástechnológiák/b103e630-7725-45e2-a26e-5989d08754dd.jpg',
            'KEPEK/94_korszerű gyártástechnológiák/be8b8bd9-0cda-4926-9ca0-0be490c8cbdc.jpg',
            'KEPEK/94_korszerű gyártástechnológiák/c12b1bc4-ba74-4afa-a7fd-ce39f5e63aeb.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-targyak', dropCap: true,
        title: 'Korszerű gyártástechnológiák',
        content: 'Az 1980-as évek közepétől vette kezdetét az ismerkedés a CNC-technikával, melynek előzménye az osztrák gyártmányú asztali CNC-gép, az EMCO volt. Ezeket követték a \'90-es évek elején a magyar gyártmányú Miniturn esztergagépek, melyek szintén oktatógépek voltak. Itt jelent meg a magyar Hunor programozástechnológia. Ennek továbbfejlesztése lett az ún. NCT programozási formula.<br>Ennek a folyamatnak óriási lendületet adott a 2008-ban külső telephelyen kialakított gyártórendszerekkel rendelkező géppark, itt már ipari termelésre alkalmas CNC, maró- és esztergagépek álltak rendelkezésre, kiegészítve mindezeket robottechnikával.<br>2018-ban a Velux Fundation program igazgatója kereste fel iskolánkat, pályázati lehetőséget ajánlva egy jelentős pénzügyi támogatáshoz. Ez a szervezet a dán Velux gyár alapítványa, amely több pályázatot hirdet minden évben, és nemcsak a hazai, de a közép-európai oktatást is támogatja.<br>A sikeres pályázat eredményeként 2019-ben elindulhatott az a projekt, amelyben másfél millió eurót kaptunk az iskola műszaki parkjának fejlesztésére. A projekt öt éve alatt a legmodernebb eszközöket szerezhettük be szakmai képzésünk minden területére. A támogatás jelentős fejlődést biztosított. Itt jelentek meg az új programozási nyelven alkalmazható, korszerű CNC-gépek (lézervágó, marógép, robotok), és 3D nyomtatórendszerek, melyek azóta is részét képezik az oktatásnak.<br>A lézergravírozás egy modern, érintésmentes anyagmegmunkálási eljárás, amely során egy nagy intenzitású lézersugár az anyag felületét felhevíti, elégeti vagy elpárologtatja, így hozva létre a tartós mintát vagy feliratot. Ez a technológia rendkívül precíz, gyors és tiszta, mivel nincs szükség a munkadarab mechanikus rögzítésére. Iskolánkba két lézervágógép található: egy CO2 lézervágógép, kisebb 100 W-os teljesítménnyel és egy Fiber lézervágógép 1000 W-os lézerteljesítménnyel. A kisebb teljesítményű géppel alapvetően fa- és plexilemezeket vágunk. Az 1000 W-os géppel fémlemezeket is meg tudunk munkálni. Nagy hasznát vesszük fémburkolatok készítésénél.<br>3D-s nyomtatás: sokféle eljárás létezik. Alapvetően egy alapanyagból (műanyag szál, folyékony gyanta, fémpor) kívánt geometriájú 3D-s testet állítunk elő. Ez egy gyors prototípusgyártó technológia. Ez egy nagyon kreatív gyártástechnológiáról van szó, ami felkelti a tanulók érdeklődését.<br><a href="https://www.facebook.com/reel/537165151381445" target="_blank">3D nyomtatás videó 1</a> <a href="https://www.facebook.com/reel/445166807643279" target="_blank">3D nyomtatás videó 2</a> <a href="https://www.facebook.com/reel/316719927319749" target="_blank">3D nyomtatás videó 3</a><br><a href="https://www.facebook.com/reel/632347194734573" target="_blank">3D nyomtatás videó 4</a> <a href="https://www.facebook.com/reel/3629050570493301" target="_blank">3D nyomtatás videó 5</a> <a href="https://www.youtube.com/channel/UCXyNFstcN_FktZI2tk61TvA" target="_blank">YouTube Csatorna</a>'
    },

    // --- 95. Iskolatörténeti gyűjtemény - a megújult iskolamúzeum (Helyszínek - Zöld) ---
    {
        type: 'image', eraCss: 'era-helyiseg',
        image: 'KEPEK/95_ÚJMÚZEUM.JPG',
        pocketTitle: 'Iskolatörténeti gyűjtemény',
        gallery: [
            'KEPEK/95_új_múzeum/1.jpg',
            'KEPEK/95_új_múzeum/2.JPG',
            'KEPEK/95_új_múzeum/3.JPG',
            'KEPEK/95_új_múzeum/4.JPG',
            'KEPEK/95_új_múzeum/5.JPG',
            'KEPEK/95_új_múzeum/6.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-helyiseg', dropCap: true,
        title: 'Iskolatörténeti gyűjtemény - a megújult iskolamúzeum',
        content: '1927 óta működő intézményünk 114-es termében, korábban naplószobájában, kapott helyett 2022 novemberében a megújult iskolatörténeti gyűjtemény.<br>Ennek a gyűjteménynek alapjául az iskola alagsorában 20 éven át működő múzeum anyaga és Urbán Kornélnak - iskolánk egykori diákjának és későbbi mérnöktanárának - hagyatéka szolgált. Az ajtón elhelyezett táblán szereplő felirat: "Iskolatörténeti gyűjtemény Urbán Kornél emlékére" is ezt hirdeti. Más szóval az iskolánk fennállásának 75. évfordulójára alapított Iskola- és technikatörténeti gyűjtemény az ERASMUS+ "Sustainability- Preserving Europe for the Future Generations" projekt keretében és eredményeként tudott megújulni, kibővülni intézményünk 95. tanévében.<br><br>Az ünnepélyes átadás 2022. november 9-én volt.<br>A Landler/UMSZKI egykori diákja, később évtizedeken át itt tanító tanára, Urbán Kornél munkálkodott az intézmény eseményeinek nyomon követésén, az iskola történetének dokumentálásán, az iskolavezetés, az osztályfőnökök, a szaktanárok, az osztályok "feltérképezésén". A kibővített múzeumban igyekszünk megmutatni hagyatékának az iskolára vonatkozó jelentős részét.<br>Ezért is választottuk a gyűjtemény méltó mottójaként az alábbi Ipolyi Arnold idézetet:<br><br>„Őrizzük emlékeinket, gyűjtsük össze töredékeinket, nehogy végleg elvesszenek, s ezáltal is üresebb legyen a múlt, szegényebb a jelen, kétesebb a jövő.”'
    },

    // --- 96. Hírességeink (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/96_hírességeink.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'Hírességeink',
        content: 'A "Miből/kiből lesz a cserebogár?" szólás, amelyet arra a meglepő fejlődésre vagy átalakulásra használunk, amikor egy csendes ember, egy kisgyermek később nagy sikereket ér el, komoly pályát fut be.<br><br><table style="width: 100%; font-size: 1.70vh; line-height: 1.45; margin-top: 1vh; border: none; text-align: left;"><tr><td style="width: 50%; vertical-align: top; padding-right: 1vw;">Fenyő Miklós - zenész, énekes<br>Zana József - színművész<br>Janicsák Veca - énekesnő<br>Szőke Richárd - színész<br>Dietz Gusztáv - MMA harcos, színész<br>Magonyi László - DJ<br>Rónai Sándor - parlamenti képviselő<br>Molnár Tamás - zenész, énekes<br>Wintermantel Zsolt - polgármester<br>Bartók Béla - önkormányzati képviselő<br>Gáti József - egyetemi docens<br>Sinóros-Szabó Botond - egyetemi professzor<br>Csóka Gergely - világutazó<br>Oláh Viktor - British Telekom mérnöke<br>Kalydy Zoltán - judo válogatott edzője<br>Berta Tamás - az LGT gitárosa<br>Mihály László - MTA tag, tanszékvezető</td><td style="width: 50%; vertical-align: top;">Bólyos Ibolya - manöken<br>Márk Iván - Balázs Béla-díjas operatőr<br>Kovács Antal Máté - a Romano Drom ütőse<br>Csizmár Gábor - munkaügyi miniszter<br>Halácsy Péter - PREZI, MOKK megalkotója<br>Bagi László - grafikus (Philadelphia)<br>Baksa Attila - űrkutató, üstököskutató<br>Stubnya Béla - színész<br>Barabás Zoltán - rádióriporter, író<br>Virágh Csaba - UTE jégkorongozó, edző<br>Marton Tibor - MAC jégkorongozó, edző<br>Hermann Tivadar - maratonfutó, író<br>dr. Márton Tibor - egyetemi tanár, tanszékvezető</td></tr></table>'
    },

    // --- 97. Kulturális örökség napja (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/97_kulturalis örökseg.JPG',
        pocketTitle: 'Kulturális örökség napja',
        gallery: [
            'KEPEK/97_kulturális örökség napja/1.jpg',
            'KEPEK/97_kulturális örökség napja/2.jpg',
            'KEPEK/97_kulturális örökség napja/3.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Kulturális örökség napja',
        content: 'Magyarország legnagyobb ingyenes műemléki fesztiválja a kulturális örökség napja, amelyet minden év szeptemberének harmadik hétvégéjén rendeznek meg.<br>Az esemény az európai örökség napok (European Heritage Days) hazai programsorozata.<br>Ingyenes épületséták, köztük iskolánk bejárása is elérhető ekkor. Az iskolatörténeti gyűjtemény, a kovácsműhely, a tanműhelyek szakszerű vezetés során kerülnek bemutatásra, lehetőség nyílik az iskola történetének alapos feltárására, megismerésére ezen alkalmakkor.<br><br>Ez az esemény sokakat vonz nemcsak a kerületben, de városszerte, az országban, Európában.'
    },

    // --- 98. Az iskolában forgatott filmek (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/98_film.jpg',
        pocketTitle: 'Az iskolában forgatott filmek',
        gallery: [
            'KEPEK/98 filmek/98_film_1.jpg',
            'KEPEK/98 filmek/98_film_2.jpg',
            'KEPEK/98 filmek/98_film_3.jpg'
        ]
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: 'Az iskolában forgatott filmek',
        content: 'A MÁSIK EMBER - 1988-ban bemutatott, Kósa Ferenc rendezte kétrészes magyar tévéfilm/dráma. A történet a Bojtár család két generációján keresztül mutat be sorsokat, és a magyar történelem olyan súlyos fordulópontjaihoz köti az eseményeket, mint 1944 és 1956.<br><br>FOMO /FEAR OF MISSING OUT/ - 2019-ben bemutatott, provokatív magyar ifjúsági dráma, amelyet Hartung Attila rendezett. A film a Z-generáció életmódját, az online jelenlét kényszerét és a közösségi média sötét oldalát mutatja be.<br><br>MANGO MATERNICA - 2026-ban bemutatott magyar film, Nagy Borbála rendezésében. Három nő gyermekvállalását mutatja be nemcsak az X- és Y-generáció szemszögéből közelítve meg az élet ezen fontos döntését.<br><br>Nemcsak az iskola egyes helyszíneinek, részleteinek felismerése jelenthet élményt a filmek esetében, hanem az is, hogy mondanivalójuk örökérvényű, emberi és igaz.'
    },

    // --- 99. 100. tanév ünnep (Események - Bézs) ---
    {
        type: 'image', eraCss: 'era-esemeny',
        image: 'KEPEK/99_100_unnep.jpg'
    },
    {
        type: 'chapter', eraCss: 'era-esemeny', dropCap: true,
        title: '100. tanév ünnep',
        content: 'Mikor ez az iskola megnyitotta a kapuit, még nem volt internet, nem volt okostelefon, és a diákok sem a TikTokon nézték a legújabb trendeket, hanem örültek, ha nem fagyott be a tintatartójuk.<br>Egy 100 éves "szülinapost" köszöntünk, de ez az épület nem egy múzeum. Bár a falak már sokat láttak - rengeteg felelést, titokban tartott és lebuktatott puskázásokat, első szerelmeket és hatalmas világmegváltó beszélgetéseket a folyosókon -, az iskola valójában mi vagyunk. Mi, akik most ide járunk, és ők, akik látogatóba jönnek vissza, emlékeket kutatva, nosztalgiázva. Egy ilyen évfordulón mindenki hajlamos nagy szavakat használni a "tudás templomáról", de legyünk őszinték: ez az iskola azért maradt fenn száz évig, mert mindig volt benne élet.<br><br>Mert a tanárok nemcsak tanítottak, hanem többnyire végtelenül türelmesek voltak, a diákok pedig nemcsak tanultak, hanem közösséget is építettek, életre szóló barátságok köttettek. Ne úgy tekintsünk erre a 100 évre, mint egy poros történelemkönyvre! Legyen inkább mindez egy hatalmas családi album, amibe mindig újabb és újabb fotók és emlékek kerülnek.<br>Kívánjuk az iskolának, hogy a következő száz évben is maradjon fiatalos; a diákoknak, hogy találják meg itt a hangjukat; a tanároknak pedig, hogy legyen még sok-sok generáció, akikre büszkék lehetnek.<br><br>Boldog születésnapot, Landler, UMSZKI! Százévesek is csak egyszer vagyunk.'
    },

    // --- 100. Tanár nélkül nincs jövő (Személyek - Kék) ---
    {
        type: 'image', eraCss: 'era-szemelyek',
        image: 'KEPEK/'
    },
    {
        type: 'chapter', eraCss: 'era-szemelyek', dropCap: true,
        title: 'A 100. tanév tantestületének tablója',
        content: 'Tanár nélkül nincs jövő. Ez a kijelentés a pedagógusok társadalmi alapkövét hangsúlyozza: ők azok, akik nemcsak tudást adnak át, hanem formálják a következő generációk kritikai gondolkodását, értékrendjét és alkalmazkodóképességét.  A technológia hiába teszi elérhetővé az információt, a tanár segít azt rendszerezni és értelmezni.<br>Az iskola a szocializáció helyszíne, ahol a tanár mintaként szolgál az együttműködéshez és a közösségi léthez. Minőségi oktatás nélkül nincs innováció, képzett munkaerő, így hosszú távú gazdasági fejlődés sem.<br><br><br><br>„Iskolák. Világítótornyok, barátom! A jövő fényjelei! Száz és száz kis magot tartalmazó gubók, belőlük fog megszületni az új, a jobb, a bölcsebb.”<br>(Sir Arthur Conan Doyle)'
    },

    // --- SZERKESZTŐSÉG ÉS ZÁRÓ OLDALAK ---
    { 
        type: 'impresszum', 
        eraCss: 'era-toc', 
        title: 'IMPRESSZUM',
        content: '<div style="text-align: center; font-size: 2vh; line-height: 1.8; margin-top: 5vh;"><b>A SZÖVEGEKET ÉS A FOTÓKAT ÖSSZEÁLLÍTOTTA:</b><br><span style="border: 3px solid black; padding: 0.1vh 0.5vw;">Urbán Kornél</span><br>Gulyás Ildikó<br><br><b>AZ UMSZKI100 EMLÉKKÖNYV SEGÉDSZERKESZTŐI:</b><br>Andorfer János<br>Braun Éva<br>Hegyiné Závori Szilvia<br>Kovács János<br>Kluka Norbert<br>Seres József<br>Soósné Varga Lia<br>Zabari Tibor<br><br><b>AZ EMLÉKKÖNYVET ÖSSZEÁLLÍTOTTA ÉS GONDOZTA:</b><br>Gulyás Ildikó</div>' 
    },
    { 
        type: 'impresszum', 
        eraCss: 'era-toc', 
        content: '<div style="text-align: center; font-size: 2vh; line-height: 1.8; margin-top: 5vh;"><b>A KIADVÁNYT SZERKESZTETTE:</b><br>Kolonics Márk<br><br><b>A KIADVÁNYT LEKTORÁLTA:</b><br>Widder László<br><br><b>FELELŐS KIADÓ:</b><br>Ziegler Tünde Edit</div>'
    },

    { type: 'back-cover', eraCss: 'era-cover' },
    { type: 'transparent', eraCss: 'era-transparent' }
];