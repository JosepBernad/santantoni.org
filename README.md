# Sant Antoni d'Artà

Arxiu obert de vídeos i materials de les festes de Sant Antoni d'Artà (Mallorca), que se celebren cada **16 i 17 de gener**.

Lloc públic: [santantoni.org](https://santantoni.org)

## Contingut

- **Pel·lícules** — recopilatoris sencers de cada any.
- **Clips** — moments destacats: balls dels dimonis, beneïdes, foguerons, entrevistes i altres escenes curtes.
- **Lletra** — text dels cants tradicionals.
- **Info** — informació pràctica sobre les festes.

## Estructura del projecte

```
santantoni.org/
├── index.html              Portada (pel·lícules + clips)
├── info/index.html         Informació de les festes
├── lletra/index.html       Lletres dels cants
├── videos/index.html       Cercador i reproductor ampliat
├── data.json               Catàleg de vídeos i metadades
├── components/             Web components compartits
├── styles/fonts.css        Sistema de tipografies
├── version.json            Versió desplegada (pública)
└── CHANGELOG.md
```

El lloc és HTML/CSS/JS estàtic, sense framework ni build. Les dades es carreguen en runtime des de `data.json`.

## Desenvolupament

```
npm run dev
```

Aixeca un servidor estàtic local a `http://localhost:3000` amb `npx serve`.

## Afegir vídeos

Edita `data.json`. Cada any pot tenir una pel·lícula completa i diversos clips.

**Pel·lícula:**

```json
{
  "year": 2026,
  "videoId": "XXXXXXXXXXX",
  "coverUrl": "https://img.youtube.com/vi/XXXXXXXXXXX/hqdefault.jpg",
  "duration": "30 min",
  "creator": "Nom del creador"
}
```

`videoId` també pot ser un array de strings o d'objectes `{ "id": "...", "start": 13 }` per encadenar diverses parts en autoplay. `coverScale` permet ajustar l'enquadrament de la miniatura.

**Clip:**

```json
{
  "year": 2026,
  "title": "Nom del clip",
  "videoId": "XXXXXXXXXXX"
}
```

Els clips hereten `coverScale` de la pel·lícula del mateix any quan no se n'especifica un de propi.

## Versionat

La versió viu a `package.json`, `version.json` i als peus de pàgina. `version.json` es serveix públicament perquè monitors externs puguin llegir la versió desplegada. Les notes de cada versió queden a `CHANGELOG.md`.

## Col·laborar

Si tens vídeos de Sant Antoni d'Artà i vols afegir-los a l'arxiu, envia'ls a través del [formulari de col·laboració](https://docs.google.com/forms/d/1h6vbYXmCvvxjFR4umYMbLnveB5PMXL6miGIOKThD0Og/preview).

## Crèdits

Mantingut per **Josep Bernad** — [Enginyeria de Software i Projectes](https://josepbernad.com).
