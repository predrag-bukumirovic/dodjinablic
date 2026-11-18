import { collections, type Collection } from "@/data/content";
import TLink from "@/components/motion/TLink";
import Gallery from "./Gallery";
import PageHero from "./PageHero";
import { ArrowLink, Media } from "@/components/ui/primitives";
import { ArrowRight } from "lucide-react";
import s from "./CollectionView.module.scss";

/** Stranica jedne kolekcije: naslov, naslovna fotografija, galerija i link ka sledećoj kolekciji. */
export default function CollectionView({ collection }: { collection: Collection }) {
  const idx = collections.findIndex((c) => c.slug === collection.slug);
  const next = collections[(idx + 1) % collections.length];
  const words = collection.headline.split(" ");
  const mid = Math.ceil(words.length / 2);

  return (
    <>
      <PageHero
        eyebrow={`Radovi / ${collection.title}`}
        lines={[words.slice(0, mid).join(" "), words.slice(mid).join(" ")]}
        intro={collection.description}
      >
        <ArrowLink href="/radovi" delay={0.6}>
          Sve kolekcije
        </ArrowLink>
      </PageHero>

      <section className={s.cover}>
        {collection.photos.slice(0, 3).map((ph, i) => (
          <div key={ph.src} className={s.coverItem} data-speed={i === 1 ? "-0.5" : "0.3"}>
            <Media
              src={ph.src}
              alt={ph.alt}
              ratio="4 / 5"
              sizes="(max-width: 760px) 50vw, 33vw"
              parallax={8}
              priority
              delay={i * 0.12}
            />
          </div>
        ))}
      </section>

      <section className="container section">
        <Gallery photos={collection.photos} />
      </section>

      <section className={`container ${s.nextWrap}`}>
        <TLink href={next.href} className={s.next} data-cursor="Sledeća">
          <span className={s.nextLabel}>Sledeća kolekcija</span>
          <span className={s.nextTitle}>
            {next.title}
            <ArrowRight />
          </span>
          <span className={s.nextImg} aria-hidden="true">
            <Media src={next.cover.src} alt="" ratio="4 / 5" sizes="240px" reveal={false} />
          </span>
        </TLink>
      </section>
    </>
  );
}
