import type { Metadata } from "next";
import { site } from "@/data/site";
import { nikola } from "@/data/photos";
import { cx } from "@/lib/cx";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { Media } from "@/components/ui/primitives";
import { ArrowUpRight, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import s from "./contact.module.scss";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zakaži fotkanje: urbani portreti, ulica, noćna fotografija i događaji. Piši u DM na @dodji.na.blic ili pozovi 060 535 6000.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        lines={["Hajde da", "napravimo", "nešto"]}
        badge="Dođi na blic • Kadar te čeka • "
        intro="Zakaži svoj termin za fotografisanje po promotivnoj ceni — porukom u DM, pozivom ili kroz formu ispod. Ispričaj mi ideju, ostalo prepusti meni."
      />

      <section className={cx("container", s.layout)}>
        <div className={s.formCol}>
          <ContactForm />
        </div>

        <aside className={s.side} data-anim="stagger">
          <a href={site.instagram.business.dm} target="_blank" rel="noreferrer" className={s.big} data-cursor="Piši">
            <span className={s.label}>
              <Instagram /> Najbrže preko DM-a
            </span>
            <span className={s.handle}>
              {site.instagram.business.handle}
              <ArrowUpRight />
            </span>
          </a>

          <a href={site.phone.href} className={s.big}>
            <span className={s.label}>
              <Phone /> Poziv ili poruka
            </span>
            <span className={s.handle}>
              {site.phone.label}
              <ArrowUpRight />
            </span>
          </a>

          <a href={site.booking.url} target="_blank" rel="noreferrer" className={s.small}>
            <span className={s.label}>
              <Calendar /> Online zakazivanje
            </span>
            <span className={s.value}>{site.booking.label}/fotograf/dodji.na.blic</span>
          </a>

          {site.email && (
            <a href={`mailto:${site.email}`} className={s.small}>
              <span className={s.label}>
                <Mail /> Email
              </span>
              <span className={s.value}>{site.email}</span>
            </a>
          )}

          <div className={s.row}>
            <a href={site.instagram.personal.url} target="_blank" rel="noreferrer" className={s.small}>
              <span className={s.label}>
                <Instagram /> Lično
              </span>
              <span className={s.value}>{site.instagram.personal.handle}</span>
            </a>
            <a href={site.instagram.nightlife.url} target="_blank" rel="noreferrer" className={s.small}>
              <span className={s.label}>
                <Instagram /> Noćni život
              </span>
              <span className={s.value}>{site.instagram.nightlife.handle}</span>
            </a>
          </div>

          <div className={s.small}>
            <span className={s.label}>
              <MapPin /> Lokacija
            </span>
            <span className={s.value}>{site.location} — i gde god priča vodi</span>
          </div>

          <div className={s.photo}>
            <Media src={nikola[4].src} alt={nikola[4].alt} ratio="3 / 2" sizes="380px" reveal={false} position="50% 25%" />
          </div>
        </aside>
      </section>
    </>
  );
}
