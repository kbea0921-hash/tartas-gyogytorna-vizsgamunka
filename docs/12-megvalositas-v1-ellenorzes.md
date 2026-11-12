# Első működő változat – helyi ellenőrzés

Ellenőrzés dátuma: 2026. november 12.  
Helyi előnézet: [http://localhost:4173/](http://localhost:4173/).

## Oldalak és technikai megoldás

| Oldal | Útvonal | Forrás |
| --- | --- | --- |
| Főoldal | `/` | `index.html` |
| Kezelések és árak | `/kezelesek-es-arak/` | `kezelesek-es-arak/index.html` |
| Rólam | `/rolam/` | `rolam/index.html` |
| Kapcsolat és időpontkérés | `/kapcsolat/` | `kapcsolat/index.html` |
| Adatkezelési tájékoztató | `/adatkezeles/` | `adatkezeles/index.html` |
| Sikeres próbaküldés | `/koszonjuk/` | `koszonjuk/index.html` |

Statikus HTML-oldalak, közös CSS és natív JavaScript. A Node.js csak a buildhez és a helyi előnézethez szükséges. Az `npm run build` sikeresen lefutott, 14 fájl került a `dist` mappába. Az `npm run preview` a buildet szolgálja ki. A csomag külső függőséget nem igényel. [Indítás és élesítési ellenőrzőlista](../README.md)

## Ellenőrzések

| Terület | Eredmény |
| --- | --- |
| Méretek és elrendezés | Mind a hat oldal ellenőrizve Chrome-ban 390, 768, 1024 és 1440 px-en. Nincs vízszintes túlcsordulás. A desktop szolgáltatáskártyák egyforma magasságúak, az árlista elfér, az űrlap egyoszlopos. A 390 px-es hero CTA a kép előtt, az első képernyőn látható. |
| Linkek és CTA | 19 egyedi belső hivatkozás, célpont és favicon ellenőrizve. Az összes „Időpontot kérek” link a `/kapcsolat/#idopontkeres` célra vezet. Mind a négy kezelési ugrópont és a három kapcsolati azonosító elérhető. |
| Képek | Mind a négy jóváhagyott WebP betöltődött. Az alt szöveg és a width/height attribútum mindegyiknél jelen van. A hero kiemelt prioritással töltődik, a többi fotó lusta betöltésű. |
| Űrlap | Egyetlen aktív űrlap, a Kapcsolat oldalon. Ellenőrzött a POST, a Netlify-jelölés, a formnév, a honeypot és a `/koszonjuk/` cél. Mind az öt kötelező mező és a hat kategória szerepel. |
| Hiba és próbaküldés | Üres űrlapnál megjelennek a magyar hibaüzenetek, az első hibás mező fókuszt kap. Érvényes fiktív adatokkal a helyi POST elérte a visszaigazoló oldalt. A helyi kiszolgáló eldobja a próbaadatokat. |
| SEO | Hat egyedi title és meta description, oldalanként egy H1, lépcsőzetes címsorok, magyar nyelv, favicon és szemantikus oldalterületek. A canonical URL a végleges domain ismeretében kerül be. |
| Hozzáférhetőség | A látható fókusz, a tartalomugró, a 44 × 44 px-es célméretek, az aktív navigáció és a menü állapota ellenőrizve. A mobilmenü Enterrel nyílik, Escape bezárja és visszaadja a fókuszt. A GYIK Enterrel és Szóközzel működik. JavaScript nélkül a menüpontok elérhetők, az űrlap natív ellenőrzése aktív. |

## A helyi V1 után ütemezett feladatok

- Emberi vizuális ellenőrzés a helyi előnézeten.
- A próbaűrlap adatkezelési tájékoztatójának ellenőrzése a tényleges Netlify Forms-beállítások alapján.
- Netlify-környezetben az űrlapfelismerés, a fiktív próbaüzenet tényleges fogadása és a szükséges értesítés ellenőrzése. A helyi teszt a beküldési utat szimulálta. [Netlify Forms](https://docs.netlify.com/manage/forms/setup/)
- Canonical URL-ek megadása a végleges domain ismeretében.

## A célzott szövegjavítások ellenőrzése

Az új build sikeres. A hat oldalt Chrome-ban 390 és 1440 px szélességen ellenőriztük. Az űrlap előtti mondat háttér nélküli, kisebb szövegként jelenik meg. A két segédszöveg a kért módon változott. Az adatkezelési oldal a technikai próbaküldés célját írja le. A meta leírások az oldalak tartalmát mutatják be.

A két nézetben a lapok vízszintes túlcsordulás nélkül jelentek meg, az időpontkérő linkek a `/kapcsolat/#idopontkeres` célra mutattak. A helyi tesztben a magyar hibajelzés az első hibás mezőre irányította a fókuszt, az érvényes fiktív POST pedig elérte a visszaigazoló oldalt.

## 2026. november 12. – Élesítés és véglegesítés

- A GitHub-repó elkészült, a main ág felkerült. A Netlify-telepítés sikeres, a nyilvános főoldal HTTP 200 választ adott. [GitHub](https://github.com/kbea0921-hash/tartas-gyogytorna-vizsgamunka) · [Netlify](https://tartas-gyogytorna-vizsgamunka.netlify.app/)
- Emberi ellenőrzés igazolta az engedélyezett Netlify Forms-űrlapfelismerést és az `idopontkeres` űrlap fiktív adatokkal végzett éles beküldését. A köszönőoldal megjelent és az e-mail-értesítés megérkezett.
- A véglegesítés a köszönőoldal szövegét, a látogatói űrlapnyelvet és az SEO technikai elemeit érinti. Az öt indexelhető oldal saját canonical URL-t kapott, a sitemap öt címet tartalmaz, a robots.txt erre hivatkozik. A köszönőoldal noindex.

A végleges `npm run build` sikeres, a `dist` 16 fájlt tartalmaz. Chrome-ban mind a hat oldal ellenőrizve 390 és 1440 px-en, vízszintes túlcsordulás nélkül. A buildből ellenőriztünk 26 belső hivatkozást és erőforrást, mind a négy kép betöltését, a CTA-kat, a canonical URL-eket, a sitemapot és a robots.txt-t. A Netlify-űrlap HTML-je egyezik a korábban tesztelt változattal. A véglegesítés során éles űrlapbeküldés nem történt.

Az AI-használati leírás nyomtatott változata egy A4-es oldal. Az oldalméretet, az oldalszámot és a megjelenést ellenőriztük. [Beadási ellenőrzőlista](../Beadás/beadasi-ellenorzolista.md)
