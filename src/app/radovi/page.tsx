import type { Metadata } from "next";
import { allPhotos } from "@/data/photos";
import { collections } from "@/data/content";
import { cx } from "@/lib/cx";
import TLink from "@/components/motion/TLink";
import PageHero from "@/components/sections/PageHero";
import Gallery from "@/components/sections/Gallery";
import { Heading, Media, RoundArrow } from "@/components/ui/primitives";
import s from "./works.module.scss";

export const metadata: Metadata = {
  title: "Radovi",
  description: "Izabrani radovi: portreti, ulična fotografija i arhiva svakodnevnog života.",
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Radovi"
        lines={["Izabrani", "radovi"]}
        badge="Portreti • Ulica • Život • "
        intro="Tri kolekcije, jedan pogled na svet. Izaberi priču ili prelistaj sve fotografije ispod."
      />

      <section className={cx("container", s.collections)}>
        {collections.map((c, i) => (
          <TLink key={c.slug} href={c.href} className={cx(s.col, i === 0 && s.colWide)} data-cursor="Otvori">
            <Media
              src={c.cover.src}
              alt={c.cover.alt}
              ratio={i === 0 ? "3 / 2" : "4 / 5"}
              sizes={i === 0 ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"}
              parallax={8}
              position="50% 35%"
              delay={i * 0.12}
            />
            <span className={s.colBody} data-anim="fade">
              <span className={s.colTop}>
                <span className="pill">{c.tag}</span>
                <span className="muted">({c.photos.length})</span>
              </span>
              <span className={s.colTitle}>{c.headline}</span>
              <span className={s.colText}>{c.description}</span>
              <RoundArrow className={s.colArrow} />
            </span>
          </TLink>
        ))}
      </section>

      <section className={cx("container", "section")}>
        <div className={s.allHead}>
          <Heading lines={["Sve", "fotografije"]} />
          <p className="lead" data-anim="fade">
            Klikni na fotografiju da je pogledaš u punoj veličini. Strelicama na tastaturi listaš dalje.
          </p>
        </div>
        <Gallery photos={allPhotos} filters />
      </section>
    </>
  );
}
