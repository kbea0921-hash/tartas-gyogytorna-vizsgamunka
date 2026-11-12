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
| Próbaüzenet visszaigazolása | `/koszonjuk/` |

A webhely a négy jóváhagyott WebP-t tölti be. A build a jelöltarchívumot és a munkadokumentumokat nem csomagolja. [Képek, források és alt szövegek](docs/11-vegleges-kepforrasok.md)

## Próbaűrlap és Netlify

A Kapcsolat oldal statikus `idopontkeres` POST-űrlapja rejtett `form-name` értéket és honeypotot tartalmaz. Érvényes próbaküldéskor a cél a `/koszonjuk/`. A helyi szerver a fiktív próbaadatokkal szimulálja a választ, az űrlapadatokat eldobja. Netlify-on a statikus `dist` mappát kell közzétenni. [Netlify Forms beállítása](https://docs.netlify.com/manage/forms/setup/)

## Élesítés előtt

- Ellenőrizze vizuálisan az oldalakat mobilon és asztali nézetben.
- Ellenőrizze az adatkezelési tájékoztatót a tényleges Netlify Forms-beállítások alapján.
- Kapcsolja be a Netlify Forms űrlapfelismerést, ellenőrizze a beküldést a Netlify felületén, és szükség esetén állítsa be az értesítési címet a szolgáltatásban. A próba csak fiktív adatokkal történjen.
- A végleges domain ismeretében állítsa be a canonical URL-eket.
