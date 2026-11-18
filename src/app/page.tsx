import { site } from "@/data/site";
import { portreti, ulica, zivot } from "@/data/photos";
import { collections, highlights, homeFaq, services } from "@/data/content";
import { cx } from "@/lib/cx";
import TLink from "@/components/motion/TLink";
import { Badge, Lens } from "@/components/ui/brand";
import { ArrowLink, Eyebrow, Heading, Media, WordFill } from "@/components/ui/primitives";
import { Aperture, ArrowUpRight, Play, Sparkle } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import SpotlightGrid from "@/components/sections/SpotlightGrid";
import ProjectList from "@/components/sections/ProjectList";
import Testimonials from "@/components/sections/Testimonials";
import Accordion from "@/components/sections/Accordion";
import InstaAside from "@/components/sections/InstaAside";
import s from "./home.module.scss";

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className={s.hero}>
        <div className="container">
          <div className={s.heroTop}>
            <Heading as="h1" size="display" lines={["Portreti,", "ulica i", "arhiva života"]} className={s.heroTitle} />

            <div className={s.heroAside}>
              <div data-anim="fade" data-delay="0.5">
                <Badge id="hero-badge" text="Dođi na blic • Portreti • Ulica • Život • " />
              </div>
              <div className={s.heroNote} data-anim="fade" data-delay="0.7">
                <Sparkle className={s.spark} />
                <p>Fifty shades of street art &amp; portraits culture — urbani portreti, ulica i noćni život kroz moj objektiv.</p>
              </div>
            </div>
          </div>

          <div className={s.heroMedia}>
            <div className={s.heroLeft}>
              <ArrowLink href="/kontakt" delay={0.6}>
                Zakaži fotkanje
              </ArrowLink>
              <Media
                src={portreti[0].src}
                alt={portreti[0].alt}
                ratio="4 / 3"
                sizes="(max-width: 760px) 100vw, 42vw"
                parallax={8}
                priority
                delay={0.2}
                position="50% 45%"
              />
            </div>

            <TLink href="/radovi/arhiva-zivota" className={s.heroRight} data-cursor="Pogledaj">
              <Media
                src={zivot[0].src}
                alt={zivot[0].alt}
                ratio="5 / 4"
                sizes="(max-width: 760px) 100vw, 55vw"
                parallax={5}
                priority
                delay={0.35}
                position="50% 4%"
              />
              <span className={s.caption} data-anim="fade" data-delay="0.9">
                <span>Arhiva života</span>
                <ArrowUpRight />
              </span>
            </TLink>

            <div className={s.lensWrap} data-speed="-0.8">
              <div data-rotate="220">
                <Lens id="hero-lens" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- IZJAVA ---------------- */}
      <section className={cx("container", s.statementSec)}>
        <WordFill
          segments={[
            "Tvoje najluđe kreativne ideje",
            <Sparkle key="a" />,
            "kroz moj objektiv postaju stvarnost",
            <Aperture key="b" />,
            "— a kasnije i uspomene koje ćeš pamtiti.",
          ]}
        />
      </section>

      {/* ---------------- BROJKE ---------------- */}
      <section className={cx("container", s.metrics)}>
        <div className={s.mLeft}>
          <Eyebrow>U brojkama</Eyebrow>
          <a
            href={site.instagram.business.url}
            target="_blank"
            rel="noreferrer"
            className={s.mThumb}
            data-anim="fade"
            data-cursor="Instagram"
          >
            <Media src={ulica[1].src} alt={ulica[1].alt} ratio="1" sizes="180px" reveal={false} position="50% 60%" />
            <span className={s.play}>
              <Play fill="currentColor" />
            </span>
            <span className={s.mThumbLabel}>Pogledaj na Instagramu</span>
          </a>
        </div>

        <TLink href="/radovi/ulica" className={s.mCenter} data-cursor="Ulica">
          <Media src={ulica[9].src} alt={ulica[9].alt} ratio="16 / 11" sizes="(max-width: 900px) 100vw, 55vw" parallax={10} position="50% 40%" />
          <span className={s.caption} data-anim="fade">
            <span>Grad posle ponoći</span>
            <ArrowUpRight />
          </span>
        </TLink>

        <div className={s.mRight} data-anim="stagger">
          {site.stats.map((st) => (
            <div key={st.label} className={s.stat}>
              <p className={s.statValue}>
                <span data-count={st.value}>{st.value}</span>
                {st.suffix}
              </p>
              <p className={s.statLabel}>{st.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- USLUGE ---------------- */}
      <section className={cx("container", "section")}>
        <Heading lines={["Tvoja priča,", "moj kadar"]} center />
        <p className={cx("lead", s.centerLead)} data-anim="fade">
          Svaka fotografija mora da ima neku vrstu standarda. Ovde ga, zajedničkim idejama i energijom, kreiramo
          zajedno.
        </p>

        <SpotlightGrid className={s.cards}>
          {services.map((sv) => (
            <TLink key={sv.title} href="/usluge" className={s.card} data-spot>
              <span className={s.cardIcon}>
                <ServiceIcon name={sv.icon} />
              </span>
              <span className={s.cardBody}>
                <span className={s.cardTitle}>{sv.title}</span>
                <span className={s.cardText}>{sv.short}</span>
              </span>
            </TLink>
          ))}
        </SpotlightGrid>

        <div className={s.centerLink}>
          <ArrowLink href="/usluge">Sve usluge</ArrowLink>
        </div>
      </section>

      {/* ---------------- RADOVI ---------------- */}
      <section className={cx("container", "section", s.works)}>
        <Heading lines={["Priče ispričane", "kroz objektiv"]} center />

        <ul className={s.tags} data-anim="stagger">
          {highlights.map((h) => (
            <li key={h}>
              <Sparkle />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ProjectList items={collections} />
      </section>

      {/* ---------------- UTISCI ---------------- */}
      <section className={cx("container", "section")}>
        <Heading lines={["Priče iz", "kadra"]} className={s.leftHeading} />
        <Testimonials />
      </section>

      {/* ---------------- PITANJA ---------------- */}
      <section className={cx("container", "section")}>
        <Heading lines={["Tvoja pitanja,", "moji odgovori"]} center />
        <div className={s.centerLink}>
          <ArrowLink href="/pitanja">Sva pitanja</ArrowLink>
        </div>

        <div className={s.faq}>
          <Accordion items={homeFaq} />
          <InstaAside />
        </div>
      </section>
    </>
  );
}
