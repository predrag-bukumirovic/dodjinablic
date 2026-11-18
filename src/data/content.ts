import { nikola, portreti, ulica, zivot, type Photo } from "./photos";

/* ------------------------------------------------------------------ */
/* Kolekcije (stranice /radovi/...) — prate bio: Portraits | Streets | Life archive */
/* ------------------------------------------------------------------ */

export type Collection = {
  slug: string;
  href: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  cover: Photo;
  photos: Photo[];
};

export const collections: Collection[] = [
  {
    slug: "portreti",
    href: "/radovi/portreti",
    tag: "Portreti",
    title: "Portreti",
    headline: "Urbani portreti",
    description:
      "Beton, kamen, vetar i pogled iza naočara. Urbani portreti u kojima grad nije pozadina — već deo priče.",
    cover: portreti[0],
    photos: portreti,
  },
  {
    slug: "ulica",
    href: "/radovi/ulica",
    tag: "Ulica",
    title: "Ulica",
    headline: "Grad posle ponoći",
    description:
      "Skadarlija, stare kapije, prolaznici i neonska svetla. Spontani kadrovi danju i atmosfera grada kad padne mrak.",
    cover: ulica[0],
    photos: ulica,
  },
  {
    slug: "arhiva-zivota",
    href: "/radovi/arhiva-zivota",
    tag: "Život",
    title: "Arhiva života",
    headline: "Noći, vožnje i ekipa",
    description:
      "Retro automobili, farovi u sumrak, noćne vožnje i žurke bez plana. Trenuci koji odlaze u prošlost — ali ne i u zaborav.",
    cover: zivot[0],
    photos: zivot,
  },
];

/* ------------------------------------------------------------------ */
/* Serije sa Instagrama (slajder na početnoj)                           */
/* ------------------------------------------------------------------ */

export const series = [
  {
    title: "Urban teksas",
    text: "Beton, teksas i sunčane naočare — urbani portret u punom smislu te reči.",
    tag: "Portret",
    image: portreti[2],
    href: "https://www.instagram.com/dodji.na.blic/p/Dfhpu-fjsxa/",
  },
  {
    title: "After hours",
    text: "Neon, crveno svetlo i grad posle ponoći. Portreti sa atmosferom koju dan ne može da da.",
    tag: "Noć",
    image: ulica[6],
    href: "https://www.instagram.com/dodji.na.blic/p/Df3J60HCLbE/",
  },
  {
    title: "Ride with me?",
    text: "Noćna vožnja, retro automobil i toplo svetlo instrument table.",
    tag: "Arhiva života",
    image: zivot[1],
    href: "https://www.instagram.com/dodji.na.blic/p/Dfu6GXxCA8b/",
  },
  {
    title: "Wind art",
    text: "Vetar, kosa i grad u pokretu — kadar koji se desi u sekundi.",
    tag: "Portret",
    image: portreti[10],
    href: "https://www.instagram.com/dodji.na.blic/p/DfreXJdDpyM/",
  },
  {
    title: "Spontanost",
    text: "Skadarlija, prolaznici i trenuci koje niko nije planirao.",
    tag: "Ulica",
    image: ulica[1],
    href: "https://www.instagram.com/dodji.na.blic/p/Dck4h8PiCTs/",
  },
];

/* ------------------------------------------------------------------ */
/* Usluge                                                              */
/* ------------------------------------------------------------------ */

export type ServiceIcon = "user" | "building" | "moon" | "sparkle" | "calendar" | "film";

export type Service = {
  icon: ServiceIcon;
  title: string;
  short: string;
  long: string;
  includes: string[];
  ideal: string;
  image: Photo;
};

export const services: Service[] = [
  {
    icon: "user",
    title: "Portretne sesije",
    short: "Tvoje najluđe kreativne ideje kroz moj objektiv postaju stvarnost — a kasnije i uspomene.",
    long: "Svaka fotografija mora da ima neku vrstu standarda. Ovde ga, zajedničkim idejama i energijom, kreiramo zajedno — od ideje i lokacije do poslednjeg kadra.",
    includes: ["Dogovor oko ideje, lokacije i stila", "Vođenje kroz celu sesiju", "Pažljivo odabrane i obrađene fotografije"],
    ideal: "Za tebe, za profil, za uspomenu",
    image: portreti[9],
  },
  {
    icon: "building",
    title: "Urbani portreti",
    short: "Grad kao studio: beton, kamen, stepenice i ulično svetlo kao kulisa tvoje priče.",
    long: "Fasade, prolazi, trgovi i stepeništa postaju scenografija. Urbani portret ima energiju koju studio ne može da napravi — sirovu, živu i autentičnu.",
    includes: ["Izbor lokacija po gradu unapred", "Crno-bela ili kolor obrada", "Kadrovi spremni za Instagram i štampu"],
    ideal: "Za modele, umetnike i sve koji vole uličnu estetiku",
    image: portreti[3],
  },
  {
    icon: "moon",
    title: "Noćna fotografija",
    short: "Neon, farovi i grad posle ponoći — portreti sa atmosferom koju dan ne može da da.",
    long: "Kad padne mrak, grad dobija drugu boju. Neonski natpisi, ulične svetiljke i farovi postaju svetlo za portret koji izgleda kao kadar iz filma.",
    includes: ["Planiranje lokacija sa dobrim svetlom", "Rad sa neonom i uličnim svetlom", "Filmska, atmosferična obrada"],
    ideal: "Za one koji žele nešto drugačije od klasičnog portreta",
    image: ulica[7],
  },
  {
    icon: "sparkle",
    title: "Lični brend",
    short: "Portreti za profil, sajt i mreže — profesionalno, a i dalje lično.",
    long: "Ljudi prate ljude. Portreti za lični brend pokazuju ko stoji iza imena — u gradu, na mestu koje te opisuje ili u stilu koji je samo tvoj.",
    includes: ["Plan kadrova prema tvojim potrebama", "Portreti i detalji", "Formati za Instagram, sajt i LinkedIn"],
    ideal: "Za kreativce, preduzetnike i influensere",
    image: portreti[11],
  },
  {
    icon: "calendar",
    title: "Noćni život i događaji",
    short: "Žurke, izlasci i okupljanja — dokumentarno, nenametljivo i bez poziranja na silu.",
    long: "Noćne priče pratim i na profilu @after.blic. Krećem se kroz prostor tiho i hvatam ono što se zaista dešava — energiju, ljude i atmosferu.",
    includes: ["Dokumentarni pristup", "Atmosfera, detalji i ljudi", "Brza selekcija najboljih trenutaka"],
    ideal: "Za žurke, klubove i privatne proslave",
    image: zivot[12],
  },
  {
    icon: "film",
    title: "Editorijal i retro",
    short: "Modne i kreativne priče — od ideje do finalnog kadra, uz retro automobil ako treba.",
    long: "Future past fashion: spoj mode, retro automobila i filmskog svetla. Zajedno gradimo vizuelnu priču koja ima ritam, karakter i prepoznatljiv stil.",
    includes: ["Razrada koncepta i mudborda", "Retro automobil kao rekvizit", "Konzistentna obrada cele serije"],
    ideal: "Za brendove odeće, modele i kreativne projekte",
    image: zivot[6],
  },
];

/* ------------------------------------------------------------------ */
/* Proces rada (bez numerisanja)                                        */
/* ------------------------------------------------------------------ */

export const process = [
  {
    title: "Upoznavanje",
    text: "Pišeš mi u DM ili pozoveš. Pričamo o ideji, raspoloženju i tome šta želiš da fotografije kažu.",
    image: nikola[3],
  },
  {
    title: "Plan",
    text: "Biramo lokaciju, termin i svetlo — dan, zlatni sat ili noć. Dobijaš savete za stajling i sve što ti treba.",
    image: ulica[2],
  },
  {
    title: "Fotkanje",
    text: "Šetamo, pričamo, smejemo se. Vodim te kroz sesiju tako da zaboraviš na objektiv — tu nastaju najbolji kadrovi.",
    image: portreti[6],
  },
  {
    title: "Isporuka",
    text: "Biram najbolje fotografije i obrađujem ih ručno, jednu po jednu. Dobijaš ih spremne za mreže i štampu.",
    image: zivot[9],
  },
];

/* ------------------------------------------------------------------ */
/* Vrednosti / stil                                                     */
/* ------------------------------------------------------------------ */

export const values = [
  { title: "Spontano", text: "Najbolji kadrovi se dese između dva poziranja — kad se nasmeješ, okreneš ili zamisliš." },
  { title: "Urbano", text: "Ulica, beton, grafiti i neon. Grad je moj studio i deo svake priče." },
  { title: "Atmosferično", text: "Svetlo, senke, noć i farovi — atmosfera je jednako važna kao i lice u kadru." },
  { title: "Bezvremeno", text: "Događaji odlaze u prošlost, ali sa fotografijama oni ne padaju u zaborav." },
];

/** Istaknute priče sa Instagrama — oznake iznad liste radova. */
export const highlights = ["Dark", "Sun prints", "Photowalk", "Granulacija"];

/* ------------------------------------------------------------------ */
/* Česta pitanja                                                        */
/* ------------------------------------------------------------------ */

export type Faq = { q: string; a: string };

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: "Pre fotkanja",
    items: [
      {
        q: "Kako da zakažem fotkanje?",
        a: "Porukom u DM na @dodji.na.blic, pozivom ili porukom na 060 535 6000, ili preko profila na mojfotograf.com. Trenutno važi promotivna cena — piši za detalje.",
      },
      {
        q: "Nikad se nisam fotografisao/la. Da li je to problem?",
        a: "Uopšte ne. Vodim te kroz celu sesiju, dajem jednostavne smernice i pričamo dok ne zaboraviš na objektiv.",
      },
      {
        q: "Kako biramo lokaciju?",
        a: "Zajedno. Ulica, Skadarlija, stepeništa, betonski zidovi, neonski natpisi ili mesto koje tebi nešto znači — biramo prema atmosferi koju želiš.",
      },
      {
        q: "Šta da obučem?",
        a: "Ono u čemu se osećaš kao ti. Urbani stil, naočare, jakna, teksas — sve što ima karakter. Pre sesije ti šaljem kratke savete za stajling.",
      },
    ],
  },
  {
    title: "Na fotkanju",
    items: [
      {
        q: "Da li fotografišeš i noću?",
        a: "Da — noćna fotografija je jedna od mojih omiljenih. Neon, ulična svetla i farovi daju portretima filmsku atmosferu.",
      },
      {
        q: "Mogu li da donesem svoju ideju?",
        a: "Naravno, to je i poenta. Tvoje najluđe kreativne ideje kroz moj objektiv postaju stvarnost — zajedno ih razradimo pre fotkanja.",
      },
      {
        q: "Da li fotografišeš crno-belo ili u boji?",
        a: "Oba. Neke priče traže kontrast crno-bele fotografije, a neke toplinu i boje noći. Pristup prilagođavam tebi i ideji.",
      },
    ],
  },
  {
    title: "Posle fotkanja",
    items: [
      {
        q: "Koliko fotografija dobijam?",
        a: "Zavisi od sesije. Ne šaljem stotine sličnih fotki, već pažljivo odabrane i ručno obrađene fotografije koje stvarno vrede.",
      },
      {
        q: "Kada stižu fotografije?",
        a: "Rok dogovaramo pre fotkanja i držim ga se. Usput te obaveštavam dokle sam stigao.",
      },
      {
        q: "Mogu li da objavim fotke na mrežama?",
        a: "Naravno! Samo označi @dodji.na.blic kada ih objaviš.",
      },
    ],
  },
];

export const homeFaq: Faq[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[1],
  faqGroups[1].items[0],
  faqGroups[1].items[1],
  faqGroups[2].items[0],
];
