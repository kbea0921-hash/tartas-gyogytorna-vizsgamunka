# Projektállapot

| Tétel | Állapot |
| --- | --- |
| Projekt | Tartás Gyógytorna Stúdió |
| Vizsgamunka célja | Portfólióban bemutatható webdesignmunka egy fiktív debreceni gyógytorna-stúdió számára. |
| Üzleti cél a fiktív projektben | Többen kérjenek időpontot az első felmérésre. |
| Elsődleges konverzió | Az első, 60 perces felmérésre szóló időpontkérés beküldése. A konkrét időpontot Bálint visszahívással egyezteti. |
| Jelenlegi munkafázis | A V1 desktop- és mobilnézetének emberi vizuális ellenőrzése lezárult, a változat jóváhagyott. A helyi Git-verziókövetés alapja a main ágon készült el. |
| Legutóbbi frissítés | 2026. november 12. |

## Jóváhagyott oldalkör és funkciók

- Főoldal
- Kezelések és árak
- Rólam
- Kapcsolat és időpontkérés
- Adatkezelési tájékoztató (kiegészítő jogi oldal)

A teljes GYIK a Kapcsolat és időpontkérés oldalon, az űrlap előtt kap helyet. A Főoldalon rövid „Első alkalom” tájékoztató és a GYIK-hez vagy kapcsolatfelvételhez vezető hivatkozás lesz.

Az időpont egyeztetése telefonos visszahívással történik. Az [űrlap tervezett mezőit és adatminimalizálási szabályait](docs/01-brief-lezaras.md#időpontkérő-űrlap) a jóváhagyott brieflezárás rögzíti. A nyilvános oldalon diszkrét jelzés mutatja, hogy a vállalkozás és az elérhetőségek fiktívek.

## Bizonyítottan kész elemek

- A kiinduló brief teljes áttekintése, az emberi ellenőrzés és a döntések rögzítése.
- A státuszlap, a [jóváhagyott brieflezárás](docs/01-brief-lezaras.md) és az [AI-munkanapló](docs/AI-MUNKANAPLO.md).
- Az [oldaltérkép és oldalstruktúra](docs/02-oldalterkep-es-oldalstruktura.md), a felhasználói utak és a CTA-térkép emberi jóváhagyást kaptak.
- Elkészült a [vizsgához készült tervezési összefoglaló](docs/03-vizsga-tervezesi-attekintes.html). Chrome-ban 1440 × 900 px-es nézetben egy képernyőn látható.

- A [tartalmi döntések](docs/04-tartalmi-dontesek.md) rögzítik az árakat, az órarendet és a fiktív gyakorlati adatokat.
- Elkészült az [első teljes szövegváltozat](docs/05-szovegek-v1.md), amelynek szerkezetét az emberi ellenőrzés elfogadta.
- Elkészült a [teljes második szövegváltozat](docs/06-szovegek-v2.md) az átdolgozott főcímmel, szolgáltatásszövegekkel, bemutatkozással és egységes útvonalakkal.
- A [végleges szövegváltozat](docs/07-szovegek-vegleges.md) emberi ellenőrzése megtörtént. A szöveges szakasz lezárult.
- Elkészült a [három arculati irány leírása](docs/08-arculati-iranyok.md) és a [vizuális összehasonlító](docs/08-arculati-iranyok.html).
- Elkészült a kiválasztott B irányra épülő [design system](design-system.md) és a [reszponzív mintatábla](docs/09-design-system-preview.html).
- Elkészült a [képválasztási javaslat](docs/10-kepvalasztasi-javaslat.md) és a [jelöltgaléria](docs/10-kepvalasztas.html), nyolc helyi Pexels-előnézettel.
- A hero-01, egyeni-01, csoport-03 és portre-03 végleges WebP-exportja elkészült. [Végleges képforrások](docs/11-vegleges-kepforrasok.md)
- A hat statikus oldal helyben elérhető a [localhost:4173 címen](http://localhost:4173/). [Megvalósítás és helyi ellenőrzés](docs/12-megvalositas-v1-ellenorzes.md)

## Vizsgakövetelmények

### Kötelező

- Statikus HTML/CSS alapú weboldal.
- Legalább három különböző oldal vagy szekció.
- Mobil- és asztali reszponzív megjelenés.
- Legalább egy egyértelmű CTA.
- Saját, lorem ipsum nélküli tartalom.
- Következetes arculat.
- A tervezési folyamatot igazoló képernyőkép.
- Élő publikus URL.
- Maximum egyoldalas AI-használati leírás.

### A projektben vállalt ajánlott elemek

- GitHub-verziókövetés.
- Netlify-élesítés.
- Működő, éles próbaüzenettel ellenőrzött űrlap.
- SEO-alapok.
- Megfelelő címsorhierarchia.
- Optimalizált WebP-képek és alt szövegek.
- Adatkezelési oldal.
- Teljes mobil- és desktop-QA.

### Opcionális későbbi bővítések

- Google Analytics 4.
- Search Console.
- Cookie banner.
- Saját domain.
- Külön portfólió-esettanulmány.

## Nyitott döntések

- A teljes adatkezelési tájékoztató az űrlap működéséhez igazodik. A hozzájárulást és a sikerüzenetet az űrlap működésének ellenőrzése és a tájékoztató elkészítése után véglegesítjük. A fogadó címet az élesítéskor kell beállítani.

## Következő pontos lépés

GitHub-repó létrehozása és a jóváhagyott main ág első feltöltése külön jóváhagyás után.
