const EXHIBITS = [
  {
    "id": 1,
    "title": "Tükrös galvanométer",
    "meta": "Dr. B. Lange cég, német gyártmány, 1930-as évek",
    "category": "elektrotechnika",
    "description": "A tükrös galvanométer a nagyon kis elektromos áramok kimutatására szolgáló érzékeny műszer. A skálát nem közvetlen mutató, hanem egy apró tükörről visszaverődő fénysugár teszi leolvashatóvá, ezért a kitérés sokkal pontosabban érzékelhető. Ilyen eszközökkel a diákok az elektromos mérés alapjait, az áramerősség és a mágneses tér kapcsolatát tanulmányozhatták.",
    "qr": "assets/qrcodes/targy-01.png",
    "anchor": "targy-01"
  },
  {
    "id": 2,
    "title": "Többfunkciós elektromos mérőműszer",
    "meta": "Német gyártmány, 1930-as évek",
    "category": "elektrotechnika",
    "description": "A többfunkciós mérőműszer a villamos laborok egyik alapdarabja volt: többféle mérési feladatra lehetett használni, például feszültség, áramerősség vagy ellenállás vizsgálatára. Oktatási értéke abban rejlett, hogy egyetlen készüléken keresztül mutatta meg a méréshatárok, csatlakozások és skálák helyes használatát.",
    "qr": "assets/qrcodes/targy-02.png",
    "anchor": "targy-02"
  },
  {
    "id": 3,
    "title": "Működőképes stabil gőzgépmodell",
    "meta": "Vizsgamunka, 1957–1958",
    "category": "gépészet",
    "description": "A gőzgépmodell a hőenergia mechanikai munkává alakítását szemlélteti. A dugattyú, hajtókar és lendkerék mozgása jól láthatóvá teszi a gépek működésének alapelvét. Mivel vizsgamunkaként készült, egyszerre ipartörténeti emlék és bizonyítéka annak, milyen magas szintű gyakorlati tudást vártak el a tanulóktól.",
    "qr": "assets/qrcodes/targy-03.png",
    "anchor": "targy-03"
  },
  {
    "id": 4,
    "title": "Precíziós laboratóriumi kétkarú mérleg",
    "meta": "Zier Károly, Budapest, 1930-as évek",
    "category": "fizika",
    "description": "A kétkarú mérleg pontos tömegmérésre szolgáló laboratóriumi eszköz. Működése az egyensúly elvén alapul: az ismeretlen tömeget ismert súlyokkal hasonlítják össze. A tárgy jól bemutatja, hogyan kapcsolódott össze a fizikai alapelv, a kézügyesség és a pontos laboratóriumi munkafegyelem.",
    "qr": "assets/qrcodes/targy-04.png",
    "anchor": "targy-04"
  },
  {
    "id": 5,
    "title": "HG 5 KCC iskolai rádióamatőr klub emléke",
    "meta": "Iskolai rádióamatőr klub emléktárgya",
    "category": "rádiótechnika",
    "description": "A rádióamatőr klub emléke az iskola közösségi és műszaki életének fontos darabja. A rádióamatőr tevékenységben a diákok nemcsak készülékeket használtak, hanem antennákkal, adó-vevőkkel, frekvenciákkal és nemzetközi kapcsolatokkal is foglalkoztak. Ez a tárgy egy olyan korszakot idéz, amikor a rádiózás egyszerre volt technika, hobbi és közösségépítés.",
    "qr": "assets/qrcodes/targy-05.png",
    "anchor": "targy-05"
  },
  {
    "id": 6,
    "title": "Fizikakísérleti katódsugárcső",
    "meta": "1960-as évek",
    "category": "fizika",
    "description": "A katódsugárcső a vákuumban mozgó elektronnyaláb viselkedését mutatja be. Segítségével szemléltethető az elektronok eltérítése elektromos vagy mágneses térben, valamint az elektronika alapelve. Az ilyen bemutatóeszközök látványos módon tették érthetővé a modern fizika és a híradástechnika alapjait.",
    "qr": "assets/qrcodes/targy-06.png",
    "anchor": "targy-06"
  },
  {
    "id": 7,
    "title": "Iskolai műhelygyakorlaton gyártott rádiócsövek",
    "meta": "Vákuumcsövek, iskolai gyakorlat emlékei",
    "category": "rádiótechnika",
    "description": "A rádiócső, más néven vákuumcső, az elektronika korai korszakának meghatározó alkatrésze volt. Erősítésre, egyenirányításra és jelalakításra használták rádiókban, mérőműszerekben és erősítőkben. A megmaradt darabok különösen értékesek, mert az iskolai műhelygyakorlatok kézzelfogható eredményei.",
    "qr": "assets/qrcodes/targy-07.png",
    "anchor": "targy-07"
  },
  {
    "id": 8,
    "title": "Műszer katódsugárcső",
    "meta": "1960-as évek",
    "category": "elektronika",
    "description": "A műszer katódsugárcső az oszcilloszkópok és különféle kijelzők egyik központi eleme volt. A képernyőn megjelenő fénypont vagy görbe elektromos jelek időbeli változását tette láthatóvá. A diákok ezen keresztül érthették meg, hogy a láthatatlan elektromos jel hogyan alakítható át vizuális információvá.",
    "qr": "assets/qrcodes/targy-08.png",
    "anchor": "targy-08"
  },
  {
    "id": 9,
    "title": "Univeka hordozható szervizműszer",
    "meta": "Hazai gyártmány, 1960",
    "category": "elektrotechnika",
    "description": "Az Univeka hordozható szervizműszer a terepi hibakeresés és javítás eszköze volt. Kompakt kialakítása miatt műhelyen kívül is használható lehetett, például rádiók, erősítők vagy más elektromos berendezések vizsgálatánál. A tárgy jól mutatja, milyen eszközökkel tanulták a tanulók a gyakorlati diagnosztikát.",
    "qr": "assets/qrcodes/targy-09.png",
    "anchor": "targy-09"
  },
  {
    "id": 10,
    "title": "Unavo laboratóriumi csővoltmérő",
    "meta": "Laboratóriumi elektronikus mérőműszer",
    "category": "elektrotechnika",
    "description": "A csővoltmérő nagy bemeneti ellenállású feszültségmérő, amely elektroncsöves erősítéssel segítette a pontosabb mérést. Főleg olyan áramköröknél volt hasznos, ahol a mérőműszernek nem szabadott jelentősen megterhelnie a vizsgált kapcsolást. Oktatási szempontból az analóg elektronika egyik fontos átmeneti korszakát képviseli.",
    "qr": "assets/qrcodes/targy-10.png",
    "anchor": "targy-10"
  },
  {
    "id": 11,
    "title": "Asztali fadobozos labor-feszültségmérő",
    "meta": "1930-as évek",
    "category": "elektrotechnika",
    "description": "A fadobozos labor-feszültségmérő az elektromos mérések korai, masszív kivitelű eszköze. A fa burkolat a korszak műszerépítési stílusát idézi, amikor a mechanikai kialakítás és az elektromos pontosság egyaránt fontos volt. A tárgy alkalmas a régi laboratóriumi mérési kultúra bemutatására.",
    "qr": "assets/qrcodes/targy-11.png",
    "anchor": "targy-11"
  },
  {
    "id": 12,
    "title": "ORION-EMG Servotest Signal Generator",
    "meta": "1950–1970 között elterjedt laboratóriumi műszer",
    "category": "elektronika",
    "description": "A jelgenerátor szabályozható elektromos jelek előállítására szolgál. Oktatásban és javításban egyaránt fontos volt, mert segítségével erősítők, vevőkészülékek és mérőrendszerek viselkedését lehetett vizsgálni. A Servotest típus a magyar műszeripar és az iskolai elektrotechnikai oktatás kapcsolatát is jelzi.",
    "qr": "assets/qrcodes/targy-12.png",
    "anchor": "targy-12"
  },
  {
    "id": 13,
    "title": "V.T. voltmérő",
    "meta": "Elektromos feszültségmérő",
    "category": "elektrotechnika",
    "description": "A voltmérő a feszültség mérésére szolgáló alapműszer. A tanulók ezen keresztül gyakorolhatták a párhuzamos kapcsolású mérés, a polaritás és a méréshatár kiválasztásának szabályait. Egyszerűnek tűnő eszköz, de a villamos méréstechnika egyik legfontosabb alapja.",
    "qr": "assets/qrcodes/targy-13.png",
    "anchor": "targy-13"
  },
  {
    "id": 14,
    "title": "Orivohm II. voltmérő",
    "meta": "Laboratóriumi elektromos mérőműszer",
    "category": "elektrotechnika",
    "description": "Az Orivohm II. voltmérő a feszültségmérés oktatási és műhelyhasználatú eszköze lehetett. A skálás műszerek használata figyelmet, pontos leolvasást és méréstechnikai fegyelmet igényelt. A tárgy jól szemlélteti, hogyan tanulták a diákok az analóg mérőműszerek kezelését.",
    "qr": "assets/qrcodes/targy-14.png",
    "anchor": "targy-14"
  },
  {
    "id": 15,
    "title": "Servotest oscilloscope",
    "meta": "ORION-EMG jelvizsgáló műszer",
    "category": "elektronika",
    "description": "Az oszcilloszkóp az elektromos jelek időbeli változását jeleníti meg. A képernyőn látható görbékből következtetni lehet a frekvenciára, amplitúdóra, torzításra vagy hibákra. A Servotest oszcilloszkóp a műszeres hibakeresés, a híradástechnikai oktatás és az elektronikai kísérletezés alapvető eszköze volt.",
    "qr": "assets/qrcodes/targy-15.png",
    "anchor": "targy-15"
  },
  {
    "id": 16,
    "title": "Unimeter univerzális hordozható mérőkészülék",
    "meta": "Magyar gyártmány, 1950-es évek",
    "category": "elektrotechnika",
    "description": "Az Unimeter univerzális mérőkészülék több mérési feladatot egyesített egy hordozható fadobozos műszerben. A tanulók megtanulhatták vele, hogyan kell helyesen választani méréshatárt, hogyan kell bekötni a műszert és hogyan kell értelmezni az analóg skálát. A tárgy a korabeli magyar műszerkészítés jó példája.",
    "qr": "assets/qrcodes/targy-16.png",
    "anchor": "targy-16"
  },
  {
    "id": 17,
    "title": "Szovjet hordozható univerzális mérőműszer",
    "meta": "Hordozható elektromos mérőműszer",
    "category": "elektrotechnika",
    "description": "A szovjet gyártmányú univerzális mérőműszer a korszakban gyakran használt oktatási és szervizeszközök közé tartozott. Többféle villamos mennyiség mérésére szolgált, ezért alkalmas volt alapmérések és hibakeresési feladatok gyakorlására. A tárgy a korabeli műszaki oktatás nemzetközi eszközvilágát is megmutatja.",
    "qr": "assets/qrcodes/targy-17.png",
    "anchor": "targy-17"
  },
  {
    "id": 18,
    "title": "Isoleka Megaohm szigetelésmérő",
    "meta": "Megger, induktoros mérőműszer",
    "category": "elektrotechnika",
    "description": "A szigetelésmérő nagy ellenállások vizsgálatára szolgál, például kábelek, tekercsek vagy elektromos berendezések szigetelési állapotának ellenőrzésére. A megger kézi meghajtású induktorral állít elő mérőfeszültséget. Oktatási jelentősége, hogy a biztonságos villamos üzem egyik alapvető ellenőrzési módszerét mutatja be.",
    "qr": "assets/qrcodes/targy-18.png",
    "anchor": "targy-18"
  },
  {
    "id": 19,
    "title": "UHF-voltmeter",
    "meta": "Rohde & Schwarz, 1948, nagyfrekvenciás feszültségmérő",
    "category": "rádiótechnika",
    "description": "Az UHF-voltmérő nagyfrekvenciás jelek mérésére alkalmas speciális műszer. A hagyományos voltmérők nem minden esetben használhatók rádiófrekvenciás tartományban, ezért külön mérési megoldásokra volt szükség. A tárgy a rádiótechnika és a precíziós laboratóriumi mérés magasabb szintjét képviseli.",
    "qr": "assets/qrcodes/targy-19.png",
    "anchor": "targy-19"
  },
  {
    "id": 20,
    "title": "Szovjet ellenállásszekrény",
    "meta": "1950-es évek",
    "category": "elektrotechnika",
    "description": "Az ellenállásszekrény ismert értékű ellenállások kapcsolható készlete. Segítségével áramkörök pontos beállítását, mérési összehasonlításokat és kísérleti kapcsolások vizsgálatát lehetett elvégezni. A diákok ezzel tanulhatták meg az ellenállás szerepét, a soros és párhuzamos kapcsolások hatását, valamint a precíz beállítás fontosságát.",
    "qr": "assets/qrcodes/targy-20.png",
    "anchor": "targy-20"
  },
  {
    "id": 21,
    "title": "TV-Wobblerscope szerviz/laborműszer",
    "meta": "Híradástechnikai Szövetkezet, 1965",
    "category": "rádiótechnika",
    "description": "A wobblerscope televíziós és rádiófrekvenciás áramkörök vizsgálatára szolgáló műszer. A frekvenciamenet megjelenítésével segítette a hangoló- és szűrőkörök beállítását. A tárgy különösen jól kapcsolódik ahhoz a korszakhoz, amikor a televíziótechnika és a híradástechnika gyorsan fejlődött.",
    "qr": "assets/qrcodes/targy-21.png",
    "anchor": "targy-21"
  },
  {
    "id": 22,
    "title": "Kézi tekercselő számláló művel",
    "meta": "Iskolai elektrotechnikai gyakorlat, 1960–1970-es évek",
    "category": "műhely",
    "description": "A kézi tekercselő tekercsek, elektromágnesek vagy transzformátor-alkatrészek készítésénél használható. A számláló segítette a menetszám pontos követését, ami alapvető a tekercs elektromos tulajdonságai szempontjából. A tárgy a műhelygyakorlat kézi, precíz munkafolyamatait idézi meg.",
    "qr": "assets/qrcodes/targy-22.png",
    "anchor": "targy-22"
  },
  {
    "id": 23,
    "title": "Bemutató háromcsöves rádiókészülék",
    "meta": "1964, Transzvill, Mosonyi László",
    "category": "rádiótechnika",
    "description": "A háromcsöves rádiókészülék oktatási célú bemutatóeszköz lehetett, amelyen jól követhetők a rádióvevő fő egységei. Az elektroncsöves felépítés segít megérteni az erősítés, hangolás és jelátalakítás folyamatát. A tárgy egyszerre technikatörténeti emlék és szemléletes oktatási modell.",
    "qr": "assets/qrcodes/targy-23.png",
    "anchor": "targy-23"
  },
  {
    "id": 24,
    "title": "Áramváltó EKM-gyártmány",
    "meta": "Elektromos Készülékek és Mérőműszerek Gyára, Kispest, 1950-es évek",
    "category": "elektrotechnika",
    "description": "Az áramváltó nagyobb áramok biztonságosabb mérését teszi lehetővé úgy, hogy arányosan kisebb mérőáramot állít elő. Ilyen eszközök nélkül a nagyáramú rendszerek közvetlen mérése veszélyes vagy nehézkes lenne. Oktatási szerepe a mérőváltók és az ipari villamos mérések bemutatása.",
    "qr": "assets/qrcodes/targy-24.png",
    "anchor": "targy-24"
  },
  {
    "id": 25,
    "title": "Kereszt- vagy szorzótekercses teljesítménymérő",
    "meta": "Bemutató wattmérő",
    "category": "elektrotechnika",
    "description": "A wattmérő az elektromos teljesítmény mérésére szolgál. A kereszt- vagy szorzótekercses elrendezés azt szemlélteti, hogy a teljesítmény nem csupán feszültség vagy áram, hanem ezek kapcsolata. A tárgy kiválóan alkalmas az energiafogyasztás, terhelés és mérési elvek magyarázatára.",
    "qr": "assets/qrcodes/targy-25.png",
    "anchor": "targy-25"
  },
  {
    "id": 26,
    "title": "Bourdon-csöves nyomásmérő",
    "meta": "Marx és Mérei, Budapest, 1940-es évek",
    "category": "gépészet",
    "description": "A Bourdon-csöves nyomásmérő a folyadékok vagy gázok nyomását méri. A belső ívelt cső nyomás hatására kissé kiegyenesedik, ezt a mozgást mutató jelzi a skálán. A műszer egyszerű, mégis szemléletes példája annak, hogyan alakítható át egy fizikai hatás mérhető mechanikai elmozdulássá.",
    "qr": "assets/qrcodes/targy-26.png",
    "anchor": "targy-26"
  },
  {
    "id": 27,
    "title": "Anyagvizsgáló vagy fizikalabor-spektroszkóp alapkészülék",
    "meta": "Laboratóriumi optikai/anyagvizsgáló eszköz",
    "category": "optika",
    "description": "A spektroszkóp a fény összetevőinek vizsgálatára szolgál. Segítségével megfigyelhető, hogy a különböző anyagok vagy fényforrások eltérő színképet adnak. A tárgy a fizika, a kémia és az anyagvizsgálat határterületét mutatja be, ahol a fény elemzése információt ad az anyagról.",
    "qr": "assets/qrcodes/targy-27.png",
    "anchor": "targy-27"
  },
  {
    "id": 28,
    "title": "Egykarú, ellensúlyos mérleg",
    "meta": "Bemutató mérleg",
    "category": "fizika",
    "description": "Az egykarú mérleg a mechanikai egyensúly és az emelőelv szemléltetésére alkalmas. Az ellensúly helyzete és a mérendő tömeg kapcsolata jól mutatja, hogyan működik a nyomaték fogalma a gyakorlatban. A tárgy egyszerűsége miatt kiváló oktatási eszköz.",
    "qr": "assets/qrcodes/targy-28.png",
    "anchor": "targy-28"
  },
  {
    "id": 29,
    "title": "Szobai légnyomásmérő, barométer",
    "meta": "Erdély és Szabó Műszergyár, Budapest, 1930-as évek",
    "category": "fizika",
    "description": "A barométer a légnyomás mérésére szolgál. A légnyomás változása összefügg az időjárási folyamatokkal, ezért a műszer meteorológiai megfigyelésekhez is használható. A tárgy a mindennapi környezet és a fizikai mérés kapcsolatát mutatja meg.",
    "qr": "assets/qrcodes/targy-29.png",
    "anchor": "targy-29"
  },
  {
    "id": 30,
    "title": "Hidrosztatikai kísérleti készlet",
    "meta": "Fizika laboratóriumi eszköz, 1930-as évek",
    "category": "fizika",
    "description": "A hidrosztatikai készlet a folyadékok nyomásával, felhajtóerejével és egyensúlyával kapcsolatos kísérletekhez használható. Segítségével a tanulók nemcsak képleteket tanultak, hanem láthatták is a folyadékok viselkedését. A tárgy a klasszikus fizikaoktatás egyik szemléletes eszköze.",
    "qr": "assets/qrcodes/targy-30.png",
    "anchor": "targy-30"
  },
  {
    "id": 31,
    "title": "Állandómágneses váltakozó feszültségű generátormodell",
    "meta": "Induktor modell",
    "category": "elektrotechnika",
    "description": "A generátormodell az elektromágneses indukció elvét mutatja be: mozgás hatására elektromos feszültség keletkezik. A modell segítségével szemléltethető az energiaátalakítás, amely az erőművektől a dinamókig számos technikai rendszer alapja. Oktatási értéke különösen nagy, mert mozgás közben mutatja meg a fizikai jelenséget.",
    "qr": "assets/qrcodes/targy-31.png",
    "anchor": "targy-31"
  },
  {
    "id": 32,
    "title": "Szeletelt CSEPEL kétütemű motorkerékpár-motor",
    "meta": "Egyhengeres motor, 1950-es évek",
    "category": "gépészet",
    "description": "A szeletelt motor olyan oktatási bemutatóeszköz, amelyen a belső szerkezet is látható. A henger, dugattyú, forgattyús mechanizmus és csatornák elrendezése segít megérteni a kétütemű motor működését. A tárgy a gépészeti oktatás egyik leglátványosabb darabja lehet.",
    "qr": "assets/qrcodes/targy-32.png",
    "anchor": "targy-32"
  },
  {
    "id": 33,
    "title": "Optikai kísérleti eszközkészlet",
    "meta": "Calderoni, Budapest, 1930-as évek",
    "category": "optika",
    "description": "Az optikai készlet lencsékkel, tükrökkel és fényút-vizsgálatokkal kapcsolatos kísérletekhez használható. A tanulók megfigyelhették a fénytörést, visszaverődést, képalkotást és nagyítást. A Calderoni név a magyar oktatási szemléltetőeszközök történetében is jelentős.",
    "qr": "assets/qrcodes/targy-33.png",
    "anchor": "targy-33"
  },
  {
    "id": 34,
    "title": "Szeletelt egyhengeres légsűrítő",
    "meta": "Bemutató gépészeti modell",
    "category": "gépészet",
    "description": "A szeletelt légsűrítő a kompresszor belső működését teszi láthatóvá. A mozgó alkatrészek, szelepek és henger elrendezése segít megérteni, hogyan lehet levegőt összenyomni és technikai célokra felhasználni. A tárgy ipari gépek működésének tanítására alkalmas.",
    "qr": "assets/qrcodes/targy-34.png",
    "anchor": "targy-34"
  },
  {
    "id": 35,
    "title": "„Ajax” rugós kalapács modell",
    "meta": "Gépgyártástechnológiai szerszámgépmodell",
    "category": "műhely",
    "description": "Az Ajax rugós kalapács modell a kovácsolás és alakítás gépi segítését szemlélteti. A működőképes modell megmutatja, hogyan továbbítható és szabályozható az ütőmozgás. A tárgy a gépgyártástechnológiai oktatásban a munkagépek felépítésének és működésének megértését segítette.",
    "qr": "assets/qrcodes/targy-35.png",
    "anchor": "targy-35"
  },
  {
    "id": 36,
    "title": "Asztali fúrógép modell",
    "meta": "Szerszámgépmodell",
    "category": "műhely",
    "description": "Az asztali fúrógép modell a forgácsoló megmunkálás egyik alapgépét mutatja be. A fúróorsó, hajtás és munkadarab-rögzítés elve a műhelymunka alapjaihoz tartozik. A modell segítségével biztonságosan lehetett beszélni a géphasználat rendjéről és a munkafolyamatokról.",
    "qr": "assets/qrcodes/targy-36.png",
    "anchor": "targy-36"
  },
  {
    "id": 37,
    "title": "Vésőgép modell",
    "meta": "Szerszámgépmodell",
    "category": "műhely",
    "description": "A vésőgép a síkfelületek, hornyok és belső alakzatok megmunkálásához kapcsolódó szerszámgép. A modell a váltakozó irányú mozgást és a forgácsolás elvét teszi érthetővé. A tárgy jól illeszkedik a gépészeti műhelygyakorlat történeti bemutatásába.",
    "qr": "assets/qrcodes/targy-37.png",
    "anchor": "targy-37"
  },
  {
    "id": 38,
    "title": "Stroboszkóp hatást szemléltető hajtómű",
    "meta": "Vizsgamunka",
    "category": "fizika",
    "description": "A stroboszkóp hatás lényege, hogy gyorsan ismétlődő megvilágítás mellett a mozgás lelassultnak vagy állónak tűnhet. A hajtómű ennek a jelenségnek a bemutatására készült. A tárgy különleges, mert egyszerre kapcsolódik a mechanikához, az optikához és a tanulói alkotómunkához.",
    "qr": "assets/qrcodes/targy-38.png",
    "anchor": "targy-38"
  },
  {
    "id": 39,
    "title": "Festo FPC 101 programozható vezérlő",
    "meta": "1980-as évek",
    "category": "automatika",
    "description": "A Festo FPC 101 a programozható vezérlők korai oktatási példája. Ilyen eszközökkel a tanulók logikai vezérléseket, ipari folyamatok irányítását és automatizálási feladatokat gyakorolhattak. A tárgy a klasszikus elektrotechnikai oktatásból az automatizálás felé vezető átmenetet jelzi.",
    "qr": "assets/qrcodes/targy-39.png",
    "anchor": "targy-39"
  },
  {
    "id": 40,
    "title": "Működőképes gőzkazán modell",
    "meta": "1950-es évek",
    "category": "gépészet",
    "description": "A gőzkazán modell a gőz előállításának és technikai felhasználásának alapelvét mutatja be. A kazán a gőzgépek és számos ipari berendezés történeti alapegysége. Oktatási tárgyként a hőtan, a nyomás és a gépészeti biztonság témáihoz is kapcsolható.",
    "qr": "assets/qrcodes/targy-40.png",
    "anchor": "targy-40"
  },
  {
    "id": 41,
    "title": "Carl Zeiss Jena univerzális műhelymikroszkóp",
    "meta": "NDK gyártmány, 1960-as évek",
    "category": "méréstechnika",
    "description": "A műhelymikroszkóp kis méretek, felületek és alkatrészek pontos vizsgálatára szolgál. A gépgyártásban és minőségellenőrzésben fontos, mert a szemmel nehezen látható részleteket is mérhetővé teszi. A Carl Zeiss Jena név a precíziós optika egyik ismert gyártói hagyományához kapcsolódik.",
    "qr": "assets/qrcodes/targy-41.png",
    "anchor": "targy-41"
  },
  {
    "id": 42,
    "title": "Schmaltz-Linnih felületi minőségmérő mikroszkóp",
    "meta": "Ferde fényélű mikroszkóp, 1960-as évek",
    "category": "méréstechnika",
    "description": "A felületi minőségmérő mikroszkóp a megmunkált felületek vizsgálatára használható. A ferde fényél segítségével a felület egyenetlenségei jobban megfigyelhetők. A tárgy a gépgyártásban fontos minőségellenőrzési szemléletet mutatja be.",
    "qr": "assets/qrcodes/targy-42.png",
    "anchor": "targy-42"
  },
  {
    "id": 43,
    "title": "Sorozatmérő acélmérce",
    "meta": "Schuchardt & Schütte, 1920-as évek",
    "category": "méréstechnika",
    "description": "A sorozatmérő acélmérce pontos hossz- és méretellenőrzésre szolgáló műhelyeszköz. A gépészeti gyártásban a mérés nem kiegészítő feladat, hanem a minőség alapja. Ez a régi mérce jól érzékelteti, hogy a pontosság iránti igény már a korai műhelyoktatásban is fontos volt.",
    "qr": "assets/qrcodes/targy-43.png",
    "anchor": "targy-43"
  },
  {
    "id": 44,
    "title": "Klasszikus tanári fénymutató",
    "meta": "Oktatási szemléltetőeszköz",
    "category": "fizika",
    "description": "A fénymutató a tanári bemutatók eszköze volt, amellyel táblán, vetített képen vagy kísérleti elrendezésen lehetett pontosan rámutatni egy részletre. Bár egyszerű tárgy, jól felidézi a régi tantermi demonstrációk hangulatát. A múzeumban az oktatás módszertani történetét képviseli.",
    "qr": "assets/qrcodes/targy-44.png",
    "anchor": "targy-44"
  },
  {
    "id": 45,
    "title": "Kísérleti röntgensugárcső",
    "meta": "1930-as évek",
    "category": "fizika",
    "description": "A kísérleti röntgensugárcső a nagyfeszültségű fizikai kísérletek és a sugárzások vizsgálatának történeti eszköze. Oktatási bemutatáskor elsősorban a cső felépítése, a vákuumtechnika és az elektromágneses sugárzás elve lehetett fontos. A tárgy különleges, ezért bemutatásánál a történeti és biztonsági háttér is lényeges.",
    "qr": "assets/qrcodes/targy-45.png",
    "anchor": "targy-45"
  },
  {
    "id": 46,
    "title": "Iskolai csengetési rendet vezérlő ingaóra",
    "meta": "Csehszlovák gyártmány, 1960-as évek",
    "category": "iskolatörténet",
    "description": "Az ingaóra nemcsak időmérő szerkezet, hanem az iskola napi rendjének vezérlője is volt. A csengetések pontos időzítése a tanítás szervezésének alapja. A tárgy különlegessége, hogy egyszerre technikai eszköz és az iskolai mindennapok emléke.",
    "qr": "assets/qrcodes/targy-46.png",
    "anchor": "targy-46"
  },
  {
    "id": 47,
    "title": "Fizikalaboratóriumi vákuumtechnikai kísérleti alaplap",
    "meta": "Laboratóriumi kísérleti eszköz",
    "category": "fizika",
    "description": "A vákuumtechnikai alaplap különféle csöves, nyomás- és gázfizikai kísérletek összeállítására szolgálhatott. A vákuum előállítása és kezelése fontos szerepet játszik a katódsugárcsövek, röntgencsövek és sok laboratóriumi vizsgálat működésében. A tárgy jól összeköti a fizikai elméletet a kísérleti technikával.",
    "qr": "assets/qrcodes/targy-47.png",
    "anchor": "targy-47"
  }
];
