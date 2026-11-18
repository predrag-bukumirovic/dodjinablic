/**
 * Osnovni podaci o sajtu (preuzeti sa Instagram profila @dodji.na.blic).
 * Sve što treba promeniti (email, brojke, tekstovi) nalazi se ovde i u ostalim fajlovima u src/data.
 */

export const site = {
  brand: "Dođi na blic",
  owner: "Nikola Knežević",
  tagline: "Portreti · Ulica · Arhiva života",
  motto: "Fifty shades of street art & portraits culture",
  description:
    "Nikola Knežević — fotograf urbanih portreta, ulice i noćnog života iz Beograda. Tvoje najluđe kreativne ideje kroz moj objektiv postaju stvarnost. Dođi na blic.",
  location: "Beograd",
  year: 2026,

  // Sa Instagram objava: „Zakažite svoj termin porukom u DM / 060 535 6000“
  phone: { label: "060 535 6000", href: "tel:+381605356000" },

  // Link iz Instagram bio-a
  booking: { label: "mojfotograf.com", url: "https://mojfotograf.com/fotograf/dodji.na.blic" },

  // TODO: upiši email ako postoji. Dok je prazno, kontakt forma šalje poruku preko Instagram DM-a.
  email: "",

  instagram: {
    business: {
      handle: "@dodji.na.blic",
      url: "https://www.instagram.com/dodji.na.blic/",
      dm: "https://ig.me/m/dodji.na.blic",
    },
    personal: {
      handle: "@_nikolaknezevic_",
      url: "https://www.instagram.com/_nikolaknezevic_/",
    },
    nightlife: {
      handle: "@after.blic",
      url: "https://www.instagram.com/after.blic/",
    },
  },

  nav: [
    { label: "O meni", href: "/o-meni" },
    { label: "Usluge", href: "/usluge" },
    { label: "Radovi", href: "/radovi" },
    { label: "Pitanja", href: "/pitanja" },
  ],
  cta: { label: "Kontakt", href: "/kontakt" },

  // Brojke sa profila (novembar 2026) — ažuriraj povremeno
  stats: [
    { value: 1700, suffix: "+", label: "Pratilaca na @dodji.na.blic" },
    { value: 50, suffix: "+", label: "Fotografija u portfoliju" },
  ],
} as const;

export type NavItem = { label: string; href: string };
