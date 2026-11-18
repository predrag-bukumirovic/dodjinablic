/**
 * Sve fotografije sajta — preuzete sa Instagram profila @dodji.na.blic i @_nikolaknezevic_.
 * Za dodavanje/zamenu: snimi sliku u public/foto/<kategorija>/ i dodaj red ispod
 * (širina, visina i kratak opis za čitače ekrana i pretraživače).
 */

export type Category = "portreti" | "ulica" | "zivot";

export type Photo = {
  src: string;
  w: number;
  h: number;
  alt: string;
  cat?: Category;
};

const p = (cat: Category, n: number, w: number, h: number, alt: string): Photo => ({
  src: `/foto/${cat}/${String(n).padStart(2, "0")}.jpg`,
  w,
  h,
  alt,
  cat,
});

export const portreti: Photo[] = [
  p("portreti", 1, 1440, 1800, "Devojka sa naočarima naslonjena na ogradu ispred staklene fasade"),
  p("portreti", 2, 1440, 1802, "Crno-beli urbani portret uz kameni zid — serija Urban teksas"),
  p("portreti", 3, 1440, 1802, "Portret sa sunčanim naočarima uz kameni zid"),
  p("portreti", 4, 1440, 1802, "Crno-beli portret, poza uz zid — serija Urban teksas"),
  p("portreti", 5, 1440, 1802, "Crno-beli profil devojke duge kose"),
  p("portreti", 6, 1440, 1802, "Crno-beli portret iz gornjeg rakursa"),
  p("portreti", 7, 1440, 1800, "Crno-beli portret na stepenicama"),
  p("portreti", 8, 1440, 1800, "Crno-beli portret uz ogradu"),
  p("portreti", 9, 1440, 1800, "Portret u čučnju ispred betonskog zida"),
  p("portreti", 10, 1440, 1800, "Crno-beli portret, ruka u kosi"),
  p("portreti", 11, 1440, 1801, "Kosa na vetru na gradskom trgu — serija Wind art"),
  p("portreti", 12, 1440, 1801, "Portret uz banderu na trgu — serija Wind art"),
  p("portreti", 13, 1440, 1800, "Portret na vetru u centru grada — serija Wind art"),
  p("portreti", 14, 1440, 1920, "Devojka u beloj haljini na kamenim stepenicama"),
  p("portreti", 15, 1440, 1920, "Portret izbliza u beloj haljini, toplo svetlo"),
  p("portreti", 16, 1440, 1921, "Bela haljina, snimak iz gornjeg rakursa"),
  p("portreti", 17, 1440, 1920, "Portret u ležećem položaju na kamenu"),
  p("portreti", 18, 1440, 1862, "Mladić u fudbalskom dresu ispred grafita"),
  p("portreti", 19, 1440, 1863, "Portret mladića u polusenci"),
  p("portreti", 20, 1440, 1799, "Portret sa naočarima, ruke uz lice"),
];

export const ulica: Photo[] = [
  p("ulica", 1, 1440, 1800, "Neonski natpis i silueta u crvenom svetlu — serija After hours"),
  p("ulica", 2, 1440, 1800, "Stariji gospodin u crvenoj majici na klupi, Skadarlija"),
  p("ulica", 3, 1440, 1800, "Plava kovana kapija sa kućnim brojem 27"),
  p("ulica", 4, 1440, 1919, "Ukrašeni Sebilj, detalj stare arhitekture"),
  p("ulica", 5, 1440, 1799, "Prolaznik sa telefonom na zidiću, spontani kadar"),
  p("ulica", 6, 1440, 1799, "Skuter u dvorištu kroz grane, Skadarlija"),
  p("ulica", 7, 1440, 1800, "Portret u narandžastom neonskom svetlu"),
  p("ulica", 8, 1440, 1800, "Crvena kosa u neonskom svetlu"),
  p("ulica", 9, 1440, 1800, "Noćni portret uz crveni stub"),
  p("ulica", 10, 1440, 1800, "Neonski natpisi tattoo studija noću"),
  p("ulica", 11, 1440, 1800, "Noćni portret u oversized majici sa zmajem"),
  p("ulica", 12, 1440, 1800, "Portret u polumraku, naočare i šiška"),
  p("ulica", 13, 1440, 1800, "Noćni portret uz crvene merdevine"),
];

export const zivot: Photo[] = [
  p("zivot", 1, 1365, 1706, "Devojka na haubi retro automobila sa upaljenim farovima — Future past fashion"),
  p("zivot", 2, 1365, 1706, "Noćna vožnja, devojka u otvorenim vratima automobila — Ride with me?"),
  p("zivot", 3, 1365, 1706, "Za volanom sa crvenom maramom"),
  p("zivot", 4, 1440, 1800, "Detalj iz automobila, crvena marama"),
  p("zivot", 5, 1365, 1706, "Na sedištu retro automobila noću"),
  p("zivot", 6, 1440, 1800, "Profil za volanom u toplom svetlu"),
  p("zivot", 7, 1288, 1610, "Riđa devojka uz retro automobil u sumrak"),
  p("zivot", 8, 1325, 1657, "Kosa preko lica, retro automobil u pozadini"),
  p("zivot", 9, 1288, 1610, "Na haubi automobila, farovi upaljeni"),
  p("zivot", 10, 1365, 1706, "Portret uz farove automobila"),
  p("zivot", 11, 1338, 1673, "Osmeh uz ljubičasti automobil"),
  p("zivot", 12, 1365, 1820, "Selfi iz kolica za kupovinu noću"),
  p("zivot", 13, 1365, 1820, "Limenka i osmeh, noćna žurka u kolicima"),
  p("zivot", 14, 1365, 1820, "U kolicima za kupovinu sa limenkom"),
  p("zivot", 15, 1365, 1820, "Bandana, naočare i kolica — noćna zabava"),
  p("zivot", 16, 1365, 1820, "Kolica za kupovinu na praznom parkingu noću"),
  p("zivot", 17, 1440, 1800, "Noćni portret uz ogradu"),
  p("zivot", 18, 1440, 1800, "Portret u polumraku, ulični zid"),
];

/** Fotografije Nikole (sa ličnog profila) — za stranicu O meni. */
export const nikola: Photo[] = [
  { src: "/foto/nikola/01.jpg", w: 1440, h: 1919, alt: "Nikola Knežević u kožnoj jakni, portret u pokretu" },
  { src: "/foto/nikola/02.jpg", w: 1440, h: 1800, alt: "Nikola ispred svog retro automobila noću" },
  { src: "/foto/nikola/03.jpg", w: 1440, h: 1920, alt: "Nikola sa sunčanim naočarima, portret izbliza" },
  { src: "/foto/nikola/04.jpg", w: 1440, h: 1800, alt: "Nikola čita strip Zagor" },
  { src: "/foto/nikola/05.jpg", w: 1440, h: 1920, alt: "Nikola u kožnoj jakni sa naočarima" },
  { src: "/foto/nikola/06.jpg", w: 1440, h: 1800, alt: "Nikola uz upaljene farove automobila" },
  { src: "/foto/nikola/07.jpg", w: 1440, h: 1920, alt: "Nikola u crvenoj jakni razgovara telefonom" },
];

/** Sve fotografije, izmešane po kategorijama (za galeriju „Sve“). */
export const allPhotos: Photo[] = Array.from({ length: Math.max(portreti.length, ulica.length, zivot.length) }).flatMap(
  (_, i) => [portreti[i], ulica[i], zivot[i]].filter((x): x is Photo => Boolean(x)),
);
