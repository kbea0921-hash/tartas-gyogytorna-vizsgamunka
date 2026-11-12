# Tartás Gyógytorna Stúdió

Fiktív, portfóliócélú vizsgaprojekt. A többoldalas webhely statikus HTML-t, közös CSS-t és natív JavaScriptet használ. A buildhez Node.js és npm szükséges, külső csomagfüggőség nincs.

## Helyi indítás

```sh
npm run build
npm run preview
```

Az előnézet címe [http://localhost:4173/](http://localhost:4173/). A build a közzétehető fájlokat a `dist` mappába másolja. Az oldalak szerkesztése után futtassa újra a buildet. Az előnézet a `dist` aktuális tartalmát szolgálja ki.

| Oldal | Útvonal |
| --- | --- |
| Főoldal | `/` |
| Kezelések és árak | `/kezelesek-es-arak/` |
| Rólam | `/rolam/` |
| Kapcsolat és időpontkérés | `/kapcsolat/` |
| Adatkezelési tájékoztató | `/adatkezeles/` |
| Időpontkérés visszaigazolása | `/koszonjuk/` |

A webhely a négy jóváhagyott WebP-t tölti be. A build a jelöltarchívumot és a munkadokumentumokat nem csomagolja. [Képek, források és alt szövegek](docs/11-vegleges-kepforrasok.md)

## Közzététel és űrlap

A forrás a GitHub `main` ágán érhető el. A Netlify sikeresen közzétette a statikus `dist` mappát. [Élő weboldal](https://tartas-gyogytorna-vizsgamunka.netlify.app/) · [GitHub-repó](https://github.com/kbea0921-hash/tartas-gyogytorna-vizsgamunka)

A Netlify Forms űrlapfelismerése engedélyezve van. A Kapcsolat oldal statikus `idopontkeres` POST-űrlapja rejtett `form-name` mezőt és honeypotot használ, a sikeres beküldés célja a `/koszonjuk/`. Az emberi éles teszt fiktív adatokkal sikerült, a köszönőoldal megjelent és a Netlify e-mail-értesítés megérkezett. A helyi előnézet az adatokat eldobja.

Az öt indexelhető oldal önmagára mutató canonical URL-t kapott. A build tartalmazza a `sitemap.xml` és a `robots.txt` fájlt. A köszönőoldal `noindex`.

A vizsgabeadás fájljait a beadási lista sorolja fel. [Beadási ellenőrzőlista](Beadás/beadasi-ellenorzolista.md) · [Ellenőrzési jegyzőkönyv](docs/12-megvalositas-v1-ellenorzes.md)
