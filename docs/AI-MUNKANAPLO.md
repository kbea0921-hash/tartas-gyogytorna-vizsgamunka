# AI-munkanapló

## 2026. november 10. – Projektindítás és brief-elemzés

- **Használt AI-eszköz:** Codex, a tervezési skill alkalmazásával.
- **Kiindulási anyag:** [brief-2-gyogytorna.md](../brief-2-gyogytorna.md).
- **Elvégzett lépés:** projektindítás és brief-elemzés. A teljes forrás áttekintése után rögzítve lett az üzleti cél, a konverzió, a célcsoportok, a funkciók és a projekt keretei. A dokumentáció elkülöníti a megadott adatokat, a kitalálható elemeket, a nyitott kérdéseket és a kizárt állításokat.

### Létrehozott fájlok

- [PROJECT_STATUS.md](../PROJECT_STATUS.md)
- [docs/01-brief-lezaras.md](01-brief-lezaras.md)
- [docs/AI-MUNKANAPLO.md](AI-MUNKANAPLO.md)

### Emberi ellenőrzésre váró döntések

- A brieflezárás és a levezetett vizsgakritériumok jóváhagyása.
- A végleges oldalkör, a GYIK helye és a megszólítás.
- A fiktív árak, a csoportos alkalmak pontos napjai, a kapcsolati és parkolási részletek, valamint a bemutatkozás szakmai adatai.
- Az űrlap vizsgabemutatójának módja és a beküldés utáni visszajelzés.
- A vizuális részletek jóváhagyása a későbbi tervezési fázisban.

## 2026. november 10. – Emberi briefellenőrzés és jóváhagyás

- **Használt AI-eszköz:** Codex.
- **Elvégzett lépés:** az emberi ellenőrzés döntéseinek dokumentálása és a brieflezárás jóváhagyott állapotának rögzítése.
- **Jóváhagyott oldalkör:** Főoldal, Kezelések és árak, Rólam, Kapcsolat és időpontkérés, valamint a kiegészítő Adatkezelési tájékoztató.
- **GYIK helye:** teljes GYIK a Kapcsolat és időpontkérés oldalon, az űrlap előtt. A Főoldalon rövid „Első alkalom” tájékoztató és továbbvezető hivatkozás szerepel.
- **Kommunikáció:** udvarias, közvetlen, alapvetően magázó, merev hivataloskodás nélkül. A bemutatkozás a brief szakmai tényeire korlátozódik. A nyilvános oldalon diszkrét jelzés mutatja a projekt fiktív jellegét.
- **Űrlap-adatminimalizálás:** előre megadott kapcsolatfelvételi kategóriák, opcionális e-mail-cím, visszahívási elérhetőség és adatkezelési hozzájárulás. Az űrlap nem kér részletes egészségügyi adatot, diagnózist vagy leletet. Az űrlap melletti tájékoztatás kéri a valós egészségügyi adatok és leletek mellőzését.
- **Vizsgakövetelmények:** a kötelező, vállalt ajánlott és opcionális elemek bekerültek a [projektállapotba](../PROJECT_STATUS.md#vizsgakövetelmények).
- **Későbbre ütemezve:** árjóváhagyás aktuális debreceni árszint alapján, a fiktív kapcsolati, parkolási és csoportos időpontadatok kiválasztása.
- **Következő lépés:** az oldaltérkép és a főoldal szakaszsorrendjének elkészítése.

## 2026. november 10. – Oldaltérkép, felhasználói utak és oldalstruktúra

- **Használt AI-eszköz:** Codex, a tervezési skill alkalmazásával.
- **Kiindulási anyagok:** az eredeti brief, a jóváhagyott brieflezárás és a projektállapot.
- **Elvégzett lépés:** az öt jóváhagyott oldal hierarchiája, a négy fő oldal szakaszsorrendje és a CTA-térkép megtervezése. Az időpontkérés minden belépési pontja a Kapcsolat oldal egyetlen űrlapjához vezet.
- **Kritikai felülvizsgálat:** az első alkalommal érkező, a mobilról időpontot kérő és a műtét utáni páciensnek segítő hozzátartozó útjának ellenőrzése. A Főoldal hat szakaszra tömörült, az árak közös szakaszt kaptak, a műtét utáni út külön alcímmel vált kereshetővé.
- **Létrehozott dokumentum:** [02-oldalterkep-es-oldalstruktura.md](02-oldalterkep-es-oldalstruktura.md).
- **Emberi ellenőrzésre vár:** szakaszsorrend, CTA-feliratok és célok, a GYIK és az űrlap mobilos szerkezete, valamint a megközelítési adatok elhelyezése.

## 2026. november 10. – Designer- és konverziós felülvizsgálat

- **Használt AI-eszköz:** Codex.
- **Főoldal:** nyolcszakaszos sorrend, rövid bizalmi sávval és korábbra hozott szolgáltatás-összehasonlítással. Az „Első alkalom” a felmérés és a visszahívás menetét, a rövid Rólam-előnézet a szakembert és szemléletét mutatja be.
- **Záró műveletek:** külön időpontkérő CTA a Főoldalon, a Kezelések és árak oldalon és a Rólam oldalon. Az adatkezelési oldalon közös fejléc, lábléc, portfóliójelzés és visszatérő link szerepel.
- **Űrlapútvonal:** minden időpontkérő CTA tervezett célja a `/kapcsolat/#idopontkeres`. A Kapcsolat nyitóblokkjából az űrlap egy ugrással elérhető, a teljes, lenyitható GYIK továbbra is előtte van.
- **Állapot:** a frissített szerkezet emberi jóváhagyásra vár.

## 2026. november 10. – Tervezési összefoglaló a vizsgabeadáshoz

- Codex a jóváhagyott oldaltérkép és oldalstruktúra alapján elkészítette az önálló [HTML-összefoglalót](03-vizsga-tervezesi-attekintes.html). A dokumentum az ötlapos hierarchiát, a főoldal nyolc szakaszát és az időpontkérés útját mutatja be.
- A struktúrakapu emberi ellenőrzés és jóváhagyás után lezárult.
- A Chrome-os ellenőrzés során 1440 × 900 px-en minden tartalom görgetés és levágás nélkül látszott. 360 × 800 px-en a dokumentum függőlegesen görgethető, vízszintes túlcsordulás nélkül.
- A következő munkafázis a weboldal végleges szövegeinek elkészítése.

## 2026. november 10. – Tartalmi döntések és első szövegváltozat

- Codex a jóváhagyott brief és oldalstruktúra alapján megírta a négy fő oldal első szövegváltozatát, a címsoroktól a CTA-kon át a GYIK-ig és az űrlap visszajelzéséig.
- A [tartalmi döntések](04-tartalmi-dontesek.md) rögzítik a négy megadott árat és időtartamot, a keddi és csütörtöki csoportos alkalmakat, valamint a fiktív címet, elérhetőségeket és megközelítési adatokat.
- Az űrlapszöveg a jóváhagyott kategóriákra épül, a sikerüzenet próbaküldést igazol. A tényleges fogadó címet élesítéskor állítjuk be.
- Az [első szövegváltozat](05-szovegek-v1.md) emberi szerkesztői ellenőrzésre vár. Az adatkezelési tájékoztató az űrlap tényleges működéséhez igazodva készül majd el.

## 2026. november 10. – A második szövegváltozat felülvizsgálata

- Az emberi ellenőrzés elfogadta az első változat szerkezetét. Codex a négy fő oldal teljes szövegét átdolgozta. [Második szövegváltozat](06-szovegek-v2.md)
- A főcím az egyéni felmérést és a debreceni helyszínt emeli ki. A szolgáltatásoknál egyértelműbb a jelentkezés első lépése, a bemutatkozás első személyben, a jóváhagyott tényekből épül fel.
- Az időpontkérő gombok közös célja a `/kapcsolat/#idopontkeres`. Az árak, a gyakorlati adatok, az űrlapmezők és a kategóriák az elfogadott döntéseket követik.
- A teljes második változat emberi szerkesztői ellenőrzésre vár. A hozzájárulás és a sikerüzenet véglegesítése az űrlapműködés ellenőrzéséhez és az adatkezelési tájékoztató elkészítéséhez kötött.

## 2026. november 10. – A végleges szövegek szerkesztői ellenőrzése

- A második változat tartalmi elfogadása után Codex átvezette a kért főcímet, a szolgáltatási szakasz címét és az első alkalom leírásának és a Rólam oldal bevezetőjének javítását. A teljes szöveget helyesírás, központozás, magázó hangnem és ismétlések szempontjából ellenőrizte. [Végleges szövegváltozat](07-szovegek-vegleges.md)
- Az árak és időtartamok egyeznek a tartalmi döntésekkel. A szakaszsorrend, az űrlapmezők, a kapcsolatfelvételi kategóriák és a CTA-célpontok egyeznek a második változattal.
- A végleges szöveg emberi ellenőrzésre vár. A következő munkafázis az arculati irány és a design system elkészítése.

## 2026. november 10. – Három arculati irány

- A végleges szövegek emberi ellenőrzése lezárult.
- Codex a tervezési skill és a jóváhagyott projektanyagok alapján kidolgozta a meleg természetes, a letisztult szakmai és a dinamikusabb kék irányt. [Arculati irányok](08-arculati-iranyok.md)
- A vizuális összehasonlító azonos címsorral, gombokkal és szolgáltatáskártyával mutatja be a koncepciókat. A fotóstílust szöveg és semleges helyőrző jelzi. [Vizuális összehasonlító](08-arculati-iranyok.html)
- A tervezett szöveg- és gombpárok számított kontrasztaránya 6,15:1 és 14,59:1 közé esik. A Chrome asztali és keskeny nézetében is ellenőriztük az elrendezést.
- A három arculati irány emberi összehasonlításra és kiválasztásra vár. Codex szakmai ajánlása a B irány.

## 2026. november 10. – B irány és design system

- Az emberi összehasonlítás a B – Csendes szakmaiság irányt választotta.
- A design system megőrzi a szürkészöld alapot és a Segoe UI tipográfiát. A kártyák sarka 16 px, a gomboké 9 px. A meleg neutrális kiegészítő #F1E8DC, az elsődleges CTA zöldje #205E53. [Design system](../design-system.md)
- A böngészős mintatábla a jóváhagyott szövegekből mutat be komponenseket és állapotokat. A fotóstílust helyőrző jelöli. [Előnézet](09-design-system-preview.html)
- A szövegpárok legkisebb számított kontrasztaránya 5,68:1. A Chrome-próba 320, 390, 768 és 1440 px-es keretben ellenőrizte a vízszintes túlcsordulást, a GYIK és a menü nyithatóságát, valamint a mező fókuszálhatóságát.
- A design system emberi ellenőrzésre vár. A következő feladat ezután a stockfotók kiválasztása és optimalizálása.

## 2026. november 10. – Stockfotó-jelöltek

- A B – Csendes szakmaiság design system emberi jóváhagyást kapott, az arculati szakasz lezárult.
- Négy felhasználási helyhez két-két Pexels-jelölt készült helyi JPEG-előnézettel. A dokumentáció rögzíti a forrást, a fotóst, a javasolt alt szöveget, a kivágást és a kockázatokat. [Képválasztási javaslat](10-kepvalasztasi-javaslat.md)
- Az ajánlott készlet a hero-01, az egyeni-01, a csoport-01 és a portre-01. A csoportkép a foglalkozás hangulatát illusztrálja, a portré fiktív szereplőhöz tartozó illusztrációként jelölendő.
- A Chrome-próbában 1440 és 390 px-es keretben mind a nyolc kép betöltődött. A kivágások megtartották a képarányt, vízszintes túlcsordulás nem jelentkezett. [Jelöltgaléria](10-kepvalasztas.html)
- A következő lépés a stockfotó-jelöltek emberi kiválasztása, majd a jóváhagyott képek WebP-optimalizálása.
- Emberi képbírálat: a portre-02 jelölt kizárva. A portre-01 jóváhagyásra vár.

- A felhasználó preferált összeállítása a hero-01, egyeni-01, csoport-02 és portre-01. Az öt WebP a helyi JPEG-előnézetekből készült, beleértve a csoport-01 alternatívát is. [WebP-munkakészlet](10-kepvalasztasi-javaslat.md#korábbi-webp-készlet)
- A végleges fotókészlet rögzítve: hero-01, egyeni-01, csoport-02, portre-01. A csoport-02 általános csoportos mozgásillusztráció.

## 2026. november 10. – Második csoport- és portréválogatás

- A designer-ellenőrzés jóváhagyta a hero-01 és egyeni-01 képet. A csoport-02 és portre-01 korábbi jelöltként marad a galériában.
- Codex két új csoport- és két portréjelöltet készített elő Pexels-forrásból, helyi JPEG-előnézettel. A csoportképek a jóga-, illetve fitneszkörnyezet miatt összehasonlítási jelöltek. [Válogatás](10-kepvalasztasi-javaslat.md#második-válogatás--2026-november-10)
- A jóváhagyott fotók JPEG- és WebP-fájljainak ellenőrzőösszege egyezik a kiinduló értékkel. Az új jelöltek emberi ellenőrzésre várnak.

## 2026. november 10. – A jóváhagyott képek végleges WebP-exportja

- Az emberi képellenőrzés a hero-01, egyeni-01, csoport-03 és portre-03 képet hagyta jóvá.
- A hero és az egyéni kép bájtpontos másolatként került a végleges helyére. A csoportkép és a portré 0,80-as WebP-minőségi beállítással készült, felnagyítás nélkül.
- A négy kép összesen 228 664 bájt. A felbontást, a képarányt, a kivágást és az EXIF- és XMP-adatok hiányát ellenőriztük. [Végleges fájlok, alt szövegek és források](11-vegleges-kepforrasok.md)
- A következő lépés az első működő weboldalváltozat elkészítése a jóváhagyott struktúra, szövegek, design system és végleges képkészlet alapján.

## 2026. november 12. – Az első működő weboldalváltozat

- Elkészült hat statikus HTML-oldal a jóváhagyott szövegekkel, a B irányú design systemmel és a négy végleges WebP-képpel.
- A build sikeres, a helyi előnézet a localhost 4173-as portján fut. A négy kért szélességen ellenőriztük az oldalakat, a belső linkeket, a CTA-kat, a képeket és a metaadatokat.
- A billentyűzetes mobilmenü és GYIK működött. Az űrlap az első hibás mezőre fókuszált, érvényes fiktív adatokkal pedig helyben elérte a visszaigazoló oldalt. A Netlify-os fogadás külön élesítési ellenőrzés.
- A webhely emberi vizuális ellenőrzésre vár. [Megvalósítás és ellenőrzés](12-megvalositas-v1-ellenorzes.md)

## 2026. november 12. – Célzott szövegjavítások a V1-en

- A Kapcsolat oldalon rövid, háttér nélküli információs mondat került az űrlap elé. A felesleges bevezető mondat és a Név segédszövege kikerült. A Telefonszám segédszövege rövidebb lett.
- Az adatkezelési oldal a technikai próbaküldés célját rögzíti. A helyi figyelmeztetés és az e-mail-helyőrző kikerült. A meta leírások az oldalak tartalmára és a szolgáltatásokra összpontosítanak.
- Az új build sikeres. Chrome-ban 390 és 1440 px-en a hat oldal vízszintes túlcsordulás nélkül jelent meg. Az időpontkérő célpontok, az űrlap hibajelzése és a helyi próbaküldés ellenőrzése sikeres. A javított változat emberi vizuális ellenőrzésre vár.

## 2026. november 12. – V1-jóváhagyás és helyi Git-verziókövetés

- A felhasználó jóváhagyta a V1 asztali és mobilnézetét.
- A helyi Git-verziókövetés a main ágon indul. A forrás, a buildszkriptek, a dokumentáció, a négy végleges WebP és a Beadás mappa vizsgabizonyítékai kerülnek az első commitba.
- A generált build, a helyi csomagok és munkafájlok, a stockfotó-jelöltek és a korábbi exportok a Git figyelmen kívül hagyott fájljai. A jelöltgaléria képei az eredeti munkamappában érhetők el.

## 2026. november 12. – Élesítés és vizsgabeadás

- A jóváhagyott V1 main ága felkerült GitHubra. A Netlify-telepítés sikeres, a weboldal nyilvános. [Élő weboldal](https://tartas-gyogytorna-vizsgamunka.netlify.app/) · [GitHub-repó](https://github.com/kbea0921-hash/tartas-gyogytorna-vizsgamunka)
- Emberi teszt igazolta az engedélyezett Netlify Forms felismerést, az `idopontkeres` űrlap fiktív adatokkal végzett sikeres éles beküldését, a köszönőoldalt és az e-mail-értesítés megérkezését.
- Codex véglegesítette a látogatói űrlapszöveget, a köszönőoldalt, az öt canonical URL-t, a sitemapot és a robots.txt-t. A dokumentált munkafolyamatból egyoldalas AI-használati leírás és beadási ellenőrzőlista készült. [Beadási ellenőrzőlista](../Beadás/beadasi-ellenorzolista.md)
