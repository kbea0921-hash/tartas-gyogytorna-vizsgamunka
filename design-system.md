# Tartás Gyógytorna Stúdió – design system

**Jóváhagyott arculati alap:** B – Csendes szakmaiság. A design system emberi ellenőrzésre vár. [Arculati irányok](docs/08-arculati-iranyok.md) · [Böngészős mintatábla](docs/09-design-system-preview.html)

Világos felületek, szürkészöld szakaszok és egy jól felismerhető mélyzöld elsődleges művelet. A kerekebb formák és a kis felületen használt meleg neutrális árnyalat oldják a klinikai hatást. A vizuális ritmust a tipográfia, a térközök és a fotók adják. Levélmintát, wellnessmotívumot, sportos grafikát és orvosi ikonhalmazt nem használunk.

**Hangulat** Nyugodt, tiszta, szakmai, emberközeli, közérthető.

## Színek és szerepek

| Token | HEX | Szerep |
| --- | --- | --- |
| `--color-primary` | `#205E53` | Elsődleges CTA és szöveges link |
| `--color-primary-hover` | `#174B42` | CTA és link hover |
| `--color-primary-active` | `#103D36` | Lenyomott CTA és link |
| `--color-focus` | `#205E53` | Külső fókuszgyűrű |
| `--color-focus-gap` | `#FFFFFF` | Belső fókuszelválasztás |
| `--color-ink` | `#1D302D` | Címsor és törzsszöveg |
| `--color-muted` | `#465D58` | Kísérőszöveg és helyőrző |
| `--color-section` | `#EAF2F0` | Halvány szürkészöld szakasz |
| `--color-surface` | `#FFFFFF` | Fehér felület és telt gombfelirat |
| `--color-page` | `#F7FAF9` | Általános oldalháttér |
| `--color-border` | `#C5D3CE` | Kártya és elválasztó |
| `--color-control-border` | `#647D76` | Mezőkontúr és letiltott gombkeret |
| `--color-warm` | `#F1E8DC` | Meleg neutrális címkehátterek és kis részletek |
| `--color-disabled` | `#E0E8E5` | Letiltott gomb és mező |
| `--color-error` | `#9A3434` | Hibaüzenet és hibás mezőkeret |

A meleg neutrális címkéken és kis dekoratív részleteken jelenhet meg, fő szövegszínnel. Az elsődleges műveletet a zöld jelöli. A világos keret tagolásra szolgál, az interaktív mezőket a sötétebb mezőkontúr határolja.

### Kontraszt

A számítás a HEX-értékek sRGB relatív fénysűrűségén alapul. Normál szövegnél a WCAG 2.2 AA célértéke 4,5:1. A számított minimum **5,68:1**. A letiltott gombot is olvasható szövegszínnel terveztük. [W3C – WCAG 2.2 szövegkontraszt](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

| Használat | Előtér | Háttér és kontraszt |
| --- | --- | --- |
| Fő szöveg a fő felületeken | `ink` | `page` 13,22:1 · `section` 12,20:1 · `surface` 13,88:1 · `warm` 11,45:1 |
| Kísérőszöveg és helyőrző | `muted` | `page` 6,74:1 · `section` 6,22:1 · `surface` 7,08:1 · `warm` 5,84:1 · `disabled` 5,68:1 |
| Telt gombfelirat | `surface` | `primary` 7,53:1 · `primary-hover` 9,90:1 · `primary-active` 12,05:1 |
| Link és másodlagos gombfelirat | `primary` | `surface` 7,53:1 · `page` 7,17:1 · `section` 6,62:1 |
| Másodlagos gomb és link hover | `primary-hover` | `surface` 9,90:1 · `section` 8,70:1 |
| Másodlagos gomb aktív felirata | `primary-active` | `surface` 12,05:1 · `section` 10,59:1 |
| Hibaüzenet | `error` | `surface` 7,20:1 · `page` 6,86:1 · `section` 6,33:1 |

A mezőkontúr és a fókuszjelzés a használati felületeken legalább 3:1 kontrasztot ér el.

| Jelzés | Szín | Háttér | Kontraszt |
| --- | --- | --- | --- |
| Mezőkeret | `control-border` | `surface` | 4,43:1 |
| Mezőkeret | `control-border` | `page` | 4,22:1 |
| Mezőkeret | `control-border` | `section` | 3,90:1 |
| Fókusz | `focus` | `surface` | 7,53:1 |
| Fókusz | `focus` | `page` | 7,17:1 |
| Fókusz | `focus` | `section` | 6,62:1 |
| Hibakeret | `error` | `surface` | 7,20:1 |

## Szöveges logó és tipográfia

A logó két sorból áll. Felül **Tartás** 26 px, 600-as súly, 1,1-es sormagasság. Alatta **Gyógytorna Stúdió** 14 px, 400-as súly, 1,45-ös sormagasság. A logó főszövegszínű, a linkje a Főoldalra vezet. Mobilon a felső sor 24 px. A két sor között 2 px, a logó körül legalább 12 px szabad tér marad.

A `--font-family` értéke `"Segoe UI", Arial, sans-serif`. A címsorok ugyanebből a családból kapnak 600-as súlyt. A köznyelvi mondatok maradnak természetes írásmódban. A bekezdések célzott olvasási szélessége legfeljebb 66 karakter.

| Elem | Mérettoken | Mobilméret | Méret 1024 px-től | Súlytoken és érték | Sormagasság-token és érték |
| --- | --- | --- | --- | --- | --- |
| H1 | `--font-size-h1` | 36 px | 52 px | `--font-weight-h1` 600 | `--line-height-h1` 1.12 |
| H2 | `--font-size-h2` | 28 px | 36 px | `--font-weight-h2` 600 | `--line-height-h2` 1.2 |
| H3 | `--font-size-h3` | 22 px | 24 px | `--font-weight-h3` 600 | `--line-height-h3` 1.3 |
| Törzsszöveg | `--font-size-body` | 16 px | 18 px | `--font-weight-body` 400 | `--line-height-body` 1.55 |
| Kis szöveg | `--font-size-small` | 14 px | 14 px | `--font-weight-small` 400 | `--line-height-small` 1.45 |
| Navigáció | `--font-size-nav` | 16 px | 16 px | `--font-weight-nav` 600 | `--line-height-nav` 1.35 |
| Gomb | `--font-size-button` | 16 px | 16 px | `--font-weight-button` 600 | `--line-height-button` 1.25 |

Az oldalankénti H1-et H2 szakaszcímek követik. A H3 a kártyák és a szakaszokon belüli alcímek szintje. A sormagasság értékei mértékegység nélküli szorzók.

## Térköz és elrendezés

| Token | Érték | Használat |
| --- | --- | --- |
| `--space-1` – `--space-8` | 4, 8, 12, 16, 24, 32, 48, 64 px | Egyre nagyobb belső és külső térközök. |
| `--content-max` | 1200 px | Középre igazított maximális tartalomszélesség. |
| `--gutter` | 16 / 24 / 32 px | Oldalmargó mobilon, 768 px-től és 1024 px-től. |
| `--section-space` | 48 / 64 px | Függőleges szakasztér mobilon és 1024 px-től. |
| `--radius-card` | 16 px | Kártyák és fotók. |
| `--radius-control` | 9 px | Gombok és mezők. |
| `--touch-target` | 44 px | Interaktív elemek minimális szélessége és magassága. |

- **0–767 px.** Egy oszlop, 16 px oldalmargó, összecsukható menü. A hero fő művelete a kép előtt jelenik meg.
- **768–1023 px.** 24 px oldalmargó. A rendelkezésre álló hely szerint két oszlop, az űrlap továbbra is egy oszlopos.
- **1024 px-től.** 32 px oldalmargó és teljes navigáció. Három szolgáltatáskártya egymás mellett, a hero szövege és fotója külön oszlopban. A tartalom 1200 px-nél megáll.

A dokumentációs mintatábla saját rácsa két oszlopos 768 px-től. Az oldalszintű alkalmazáshoz a fenti töréspontok az irányadók.

## Gombok, linkek és fókusz

A gombok felirata 600-as súlyú, a belső tér 12 × 18 px, a sarok 9 px. Az elsődleges időpontkérés a `/kapcsolat/#idopontkeres` célra mutat. A kapcsolaton belüli űrlap beküldése gombművelet. Az oldalak és szakaszok közötti navigáció link.

| Állapot | Elsődleges gomb | Másodlagos gomb |
| --- | --- | --- |
| Alap | Fehér felirat, `primary` háttér és keret | `primary` felirat és keret, fehér felület |
| Hover | Fehér felirat, `primary-hover` háttér és keret | `primary-hover` felirat és keret, `section` háttér |
| Aktív, lenyomott | Fehér felirat, `primary-active` háttér és keret | `primary-active` felirat és keret, `section` háttér, erősebb belső kontúr |
| Billentyűzetfókusz | Alapszínek, közös fókuszgyűrű | Alapszínek, közös fókuszgyűrű |
| Letiltott | `muted` felirat, `disabled` háttér, `control-border` keret | Ugyanaz a letiltott megjelenés |

A szöveges link zöld és aláhúzott. Hover és lenyomás alatt a sötétebb állapotszínre vált, az aláhúzás megmarad. A navigáció aktuális oldalát aláhúzás és `aria-current="page"` jelöli. Az önálló linkek, menüpontok, gombok, mezők és a GYIK fejlécei legalább 44 × 44 CSS px-es célfelületet kapnak. A folyó szövegben előforduló hivatkozásokat lehetőség szerint külön sorban helyezzük el.

A közös `--focus-width` 2 px, a `--focus-offset` 2 px. A fókuszgyűrű `focus` színű, a köztes sáv `focus-gap`. A Tab az olvasási sorrendet követi, a Shift+Tab visszafelé halad. Enter aktiválja a linkeket, Enter és Szóköz a gombokat, a mobilmenüt és a GYIK-nyitóelemeket. A fókuszgyűrűt a környező elemek nem takarhatják el.

## Kártyák, árak és bizalmi elemek

- A szolgáltatáskártya fehér, 16 px-es sarokkal és 1 px-es `border` kerettel. A belső tér mobilon 16 px, nagyobb nézetben 24 px. A cím, leírás és esetleges művelet között 8–12 px legyen. A teljes kártya nem kap linkként működő felületet.
- Az árak táblázatban jelennek meg. A szolgáltatás balra, az ár jobbra igazított. Az ár és a mértékegység egyben marad, a szolgáltatás neve mobilon törhet.
- A bizalmi sáv rövid, ellenőrzött tényeket közöl. Egy meleg neutrális címke kiemelhet egy tényt, fő szövegszínnel. A bizalmi elem nem versenyez a CTA-val.

## Űrlap és GYIK

Minden mezőnek látható címkéje van. A címke után 8 px, a mező és a segítő szöveg között 4 px, a mezőcsoportok között 16 px térköz legyen. A szöveges mezők és a választó legalább 44 px magasak, 9 px-es sarokkal, fehér felülettel és 1 px-es `control-border` kerettel. A jelölőnégyzet kattintható címkéje legalább 44 × 44 px.

| Mezőállapot | Megjelenés és működés |
| --- | --- |
| Alap | Látható címke és mezőkontúr, a segítő szöveg külön sorban. |
| Hover | Zöld kontúr, változatlan címke. |
| Fókusz | Zöld kontúr és közös fókuszgyűrű. |
| Kitöltött | Fő szövegszín, megmaradó címke. |
| Hiba | `error` keret és konkrét hibaüzenet a mező alatt, `aria-invalid` és `aria-describedby`. A szín mellett szöveg jelzi a hibát. |
| Letiltott | `disabled` felület, `muted` szöveg és natív letiltott állapot. |

Az adatminimalizált mezők és a figyelmeztetés forrása a végleges szövegdokumentum. A GYIK a Kapcsolat oldalon az űrlap előtt áll. A kérdéssor legalább 44 px magas. Natív lenyitható elemnél a kérdés és a nyitásjelző ugyanahhoz a vezérlőhöz tartozik. A nyitott választ 12–16 px belső tér és világos felület különíti el. [Végleges weboldalszövegek](docs/07-szovegek-vegleges.md)

## Fejléc, mobilmenü és lábléc

A fejléc fehér felület, finom alsó kerettel. A logó, a navigáció és a kiemelt művelet az oldalszerkezet szerint jelenik meg. Mobilon a menü egy jól látható „Menü” gombbal nyitható. A nyitott menü függőlegesen sorolja a linkeket. A nyitottság legyen gépileg is érzékelhető. A menü becsukása után a fókusz a nyitógombon maradjon. A lábléc halvány szürkészöld, rajta a stúdiónév, az adatkezelési link és a portfóliójelzés.

## Képek

Hero fotó desktopon 4:3, mobilon 3:2. Kártyafotó, ahol a szerkezet igényli, 3:2. A bemutatkozó portré 4:5. A sarkok 16 px-esek. Képkivágáskor maradjon látható az arc és a bemutatott mozdulat. A fotóstílus természetes fényű, emberközeli, meleg neutrális, hétköznapi környezettel. A jelentéssel bíró fotóhoz rövid magyar alternatív szöveg tartozik, a dekoratív kép üres alt attribútumot kap.

