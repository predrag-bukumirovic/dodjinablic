# Dođi na blic — sajt fotografa Nikole Kneževića

Next.js 16 sajt sa animacijama (GSAP + ScrollTrigger), smooth skrolom (Lenis), ikonicama iz `lucide-react` i fontom Plus Jakarta Sans.

Instagram ikonica je napravljena preko `createLucideIcon` (`src/components/ui/InstagramIcon.ts`), jer je lucide uklonio brend ikonice.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Stranice

| Ruta | Sadržaj |
| --- | --- |
| `/` | Početna (hero, izjava, brojke, usluge, radovi, serije, pitanja) |
| `/o-meni` | O fotografu, način rada, Instagram profili |
| `/usluge` | Šest usluga + horizontalni skrol kroz proces rada |
| `/radovi` | Kolekcije + cela galerija sa filterom i lightbox-om |
| `/radovi/portreti`, `/radovi/ulica`, `/radovi/arhiva-zivota` | Pojedinačne kolekcije |
| `/pitanja` | Česta pitanja po grupama |
| `/kontakt` | Kontakt forma, DM, telefon i online zakazivanje |

## Sadržaj

Fotografije i tekstovi su preuzeti sa Instagram profila **@dodji.na.blic** (radovi, opisi serija, telefon,
link za zakazivanje) i **@_nikolaknezevic_** (Nikoline fotografije za stranicu „O meni“).

- **Fotografije** — `public/foto/portreti`, `public/foto/ulica`, `public/foto/zivot`, `public/foto/nikola`.
  Za novu fotografiju snimi je u odgovarajući folder i dodaj red u `src/data/photos.ts` (širina, visina, opis).
- **Kontakt podaci** — `src/data/site.ts` (telefon, mojfotograf.com, Instagram profili, email).
  Email je prazan — dok je tako, forma kopira poruku i otvara Instagram DM.
- **Brojke** — `src/data/site.ts` → `stats` (pratioci sa profila iz novembra 2026).
- **Serije, usluge, proces i pitanja** — `src/data/content.ts`; tekst „O meni“ je u `src/app/o-meni/page.tsx`.

## Animacije

Server komponente dodaju `data-anim` atribute, a `src/lib/animations.ts` ih pokreće
(linije naslova, otkrivanje slika, reči koje se „pale“, brojači, paralaksa, rotacija).
Prelaz između stranica je zavesa iz `src/lib/runtime.ts`, a koristi se kroz `TLink` umesto `next/link`.
Sve animacije poštuju `prefers-reduced-motion`.
