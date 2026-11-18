import type { Metadata } from "next";
import { services } from "@/data/content";
import { cx } from "@/lib/cx";
import PageHero from "@/components/sections/PageHero";
import ProcessScroller from "@/components/sections/ProcessScroller";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { ArrowLink, CircleLink, Heading, Media } from "@/components/ui/primitives";
import { Check } from "lucide-react";
import s from "./services.module.scss";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Portretne sesije, urbani portreti, noćna fotografija, lični brend, noćni život i editorijali — fotografisanje bez ukočenog poziranja.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Usluge"
        lines={["Šta mogu", "da uradim", "za tebe"]}
        badge="Portret • Brend • Događaj • "
        intro="Od opuštenog portreta u gradu do editorijala za brend — svaka sesija se pravi po meri tebe i priče koju želiš da ispričaš."
      >
        <ArrowLink href="/kontakt" delay={0.6}>
          Pošalji upit
        </ArrowLink>
      </PageHero>

      <section className={cx("container", s.list)}>
        {services.map((sv, i) => (
          <article key={sv.title} className={cx(s.item, i % 2 === 1 && s.flip)}>
            <div className={s.media}>
              <Media
                src={sv.image.src}
                alt={sv.image.alt}
                ratio="4 / 5"
                sizes="(max-width: 860px) 100vw, 42vw"
                parallax={10}
              />
            </div>

            <div className={s.body}>
              <div className={s.head} data-anim="fade">
                <span className={s.icon}>
                  <ServiceIcon name={sv.icon} />
                </span>
                <span className="pill">{sv.ideal}</span>
              </div>

              <Heading lines={[sv.title]} as="h2" className={s.title} />

              <p className={s.long} data-anim="fade">
                {sv.long}
              </p>

              <div className={s.includes} data-anim="fade">
                <p className={s.incTitle}>Šta dobijaš</p>
                <ul>
                  {sv.includes.map((inc) => (
                    <li key={inc}>
                      <Check />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={s.foot} data-anim="fade">
                <span className="muted">Cena po dogovoru, u zavisnosti od sesije.</span>
                <ArrowLink href="/kontakt" anim={false}>
                  Zakaži
                </ArrowLink>
              </div>
            </div>
          </article>
        ))}
      </section>

      <ProcessScroller />

      <section className={cx("container", "section", s.cta)}>
        <Heading lines={["Nije na listi?", "Pitaj slobodno"]} center />
        <p className="lead" data-anim="fade">
          Imaš ideju koja ne spada ni u jednu kategoriju? Još bolje. Piši mi i smislićemo nešto zajedno.
        </p>
        <CircleLink href="/kontakt" size="lg">
          Piši mi
        </CircleLink>
      </section>
    </>
  );
}
