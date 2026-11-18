import Image from "next/image";
import { site } from "@/data/site";
import { portreti, ulica, zivot } from "@/data/photos";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import s from "./InstaAside.module.scss";

const grid = [ulica[0], portreti[6], zivot[8], ulica[3]];

/** Bočne kartice: Instagram, email/DM i lokacija. */
export default function InstaAside() {
  return (
    <aside className={s.aside} data-anim="stagger">
      <a href={site.instagram.business.url} target="_blank" rel="noreferrer" className={s.card} data-cursor="Prati">
        <span className={s.label}>
          <Instagram /> Instagram
        </span>
        <span className={s.grid}>
          {grid.map((p) => (
            <span key={p.src} className={s.cell}>
              <Image src={p.src} alt="" fill sizes="120px" />
            </span>
          ))}
        </span>
        <span className={s.text}>
          Portraits | Streets | Life archive — nove serije na <strong>{site.instagram.business.handle}</strong>
        </span>
      </a>

      <div className={s.row}>
        {site.email ? (
          <a href={`mailto:${site.email}`} className={s.small}>
            <span className={s.label}>
              <Mail /> Email
            </span>
            <span className={s.value}>{site.email}</span>
          </a>
        ) : (
          <a href={site.instagram.business.dm} target="_blank" rel="noreferrer" className={s.small}>
            <span className={s.label}>
              <Mail /> Poruka
            </span>
            <span className={s.value}>Piši u DM</span>
          </a>
        )}
        <a href={site.phone.href} className={s.small}>
          <span className={s.label}>
            <Phone /> Telefon
          </span>
          <span className={s.value}>{site.phone.label}</span>
        </a>
      </div>
      <div className={s.row}>
        <a href={site.booking.url} target="_blank" rel="noreferrer" className={s.small}>
          <span className={s.label}>
            <Calendar /> Zakazivanje
          </span>
          <span className={s.value}>{site.booking.label}</span>
        </a>
        <div className={s.small}>
          <span className={s.label}>
            <MapPin /> Lokacija
          </span>
          <span className={s.value}>{site.location}</span>
        </div>
      </div>
    </aside>
  );
}
