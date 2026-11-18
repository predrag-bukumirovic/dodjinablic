import type { Metadata } from "next";
import { faqGroups } from "@/data/content";
import { portreti } from "@/data/photos";
import { cx } from "@/lib/cx";
import PageHero from "@/components/sections/PageHero";
import Accordion from "@/components/sections/Accordion";
import InstaAside from "@/components/sections/InstaAside";
import { CircleLink, Media } from "@/components/ui/primitives";
import s from "./faq.module.scss";

export const metadata: Metadata = {
  title: "Pitanja",
  description: "Odgovori na najčešća pitanja o fotkanju: priprema, lokacija, garderoba, trajanje i isporuka fotografija.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Česta pitanja"
        lines={["Tvoja pitanja,", "moji odgovori"]}
        intro="Sve što te zanima pre, tokom i posle fotkanja. Ako ne nađeš odgovor — slobodno pitaj."
      />

      <section className={cx("container", s.layout)}>
        <div className={s.groups}>
          {faqGroups.map((g, gi) => (
            <div key={g.title} className={s.group}>
              <h2 className={s.groupTitle} data-anim="fade">
                {g.title}
              </h2>
              <Accordion items={g.items} defaultOpen={gi === 0 ? 0 : null} />
            </div>
          ))}
        </div>

        <div className={s.side}>
          <div className={s.sticky}>
            <div className={s.ask} data-anim="fade">
              <Media src={portreti[12].src} alt={portreti[12].alt} ratio="4 / 3" sizes="340px" reveal={false} position="50% 30%" />
              <div className={s.askBody}>
                <p className={s.askTitle}>Nisi našao/la odgovor?</p>
                <p className="muted">Piši mi — odgovaram na svaku poruku.</p>
              </div>
              <CircleLink href="/kontakt" size="sm" className={s.askBtn}>
                Pitaj
              </CircleLink>
            </div>
            <InstaAside />
          </div>
        </div>
      </section>
    </>
  );
}
