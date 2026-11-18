import type { Metadata } from "next";
import { site } from "@/data/site";
import { allPhotos, nikola, ulica, zivot } from "@/data/photos";
import { values } from "@/data/content";
import { cx } from "@/lib/cx";
import PageHero from "@/components/sections/PageHero";
import { PhotoMarquee, TextMarquee } from "@/components/sections/Marquee";
import { ArrowLink, Eyebrow, Heading, Media, WordFill } from "@/components/ui/primitives";
import { Aperture, ArrowUpRight, Sparkle } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import s from "./about.module.scss";

export const metadata: Metadata = {
  title: "O meni",
  description:
    "Nikola Knežević — fotograf iza projekta Dođi na blic. Urbani portreti, ulica i noćni život iz Beograda.",
};

const profiles = [
  {
    tag: "Portfolio",
    ...site.instagram.business,
    text: "Portraits | Streets | Life archive — glavna galerija radova.",
    image: ulica[0],
  },
  {
    tag: "Lično",
    ...site.instagram.personal,
    text: "Lični profil — iza kulisa, retro automobili i svakodnevica.",
    image: nikola[2],
  },
  {
    tag: "Noćni život",
    ...site.instagram.nightlife,
    text: "Žurke, izlasci i noćne priče kroz objektiv.",
    image: zivot[12],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O meni"
        lines={["Iza", "objektiva"]}
        badge="Nikola Knežević • Fotograf • "
        intro="Zovem se Nikola Knežević. Fotografišem urbane portrete, ulicu i noćni život — i sve to skupljam pod imenom Dođi na blic."
      />

      {/* ---------------- uvod ---------------- */}
      <section className={cx("container", s.intro)}>
        <div className={s.introMedia}>
          <Media
            src={nikola[0].src}
            alt={nikola[0].alt}
            ratio="4 / 5"
            sizes="(max-width: 860px) 100vw, 40vw"
            parallax={10}
            position="50% 30%"
          />
          <div className={s.introSmall} data-speed="0.8">
            <Media src={nikola[1].src} alt={nikola[1].alt} ratio="3 / 4" sizes="220px" delay={0.2} />
          </div>
        </div>

        <div className={s.introText}>
          <Eyebrow>Moja priča</Eyebrow>
          <h2 className={s.introTitle} data-anim="fade">
            Fifty shades of <em>street art</em> &amp; portraits culture.
          </h2>
          <div className={s.paras} data-anim="stagger">
            <p>
              Tvoje najbolje i najluđe kreativne ideje kroz moj objektiv postaju stvarnost — a kasnije i uspomene koje
              ćeš pamtiti. Svaka fotografija mora da ima neku vrstu standarda, a ovde ga, zajedničkim idejama i
              energijom, kreiramo zajedno.
            </p>
            <p>
              Grad mi je studio: stepeništa, betonski zidovi, Skadarlija, neonski natpisi i farovi mog retro
              automobila. Danju hvatam spontane kadrove na ulici, a noću portrete sa atmosferom koju dan ne može da da.
            </p>
            <p>
              Fotografija je tu da nas opomene da češće beležimo sebi bitne momente — jer događaji odlaze u prošlost,
              ali sa fotografijama oni ne padaju u zaborav. Kadar te čeka.
            </p>
          </div>
          <div className={s.sign} data-anim="fade">
            <span className={s.signName}>{site.owner}</span>
            <span className="muted">Fotograf · {site.location}</span>
          </div>
        </div>
      </section>

      {/* ---------------- traka teksta ---------------- */}
      <section className={s.marqueeSec}>
        <TextMarquee words={["Portraits", "Streets", "Life archive", "Dođi na blic"]} />
      </section>

      {/* ---------------- izjava ---------------- */}
      <section className={cx("container", s.statement)}>
        <WordFill
          segments={[
            "Događaji odlaze u prošlost",
            <Aperture key="a" />,
            "ali sa fotografijama oni ne padaju u zaborav. Zabeleži i ti svoj bitan momenat",
            <Sparkle key="b" />,
            "— kadar te čeka.",
          ]}
        />
      </section>

      {/* ---------------- vrednosti ---------------- */}
      <section className={cx("container", "section", s.values)}>
        <div className={s.valuesHead}>
          <Heading lines={["Kako", "radim"]} />
          <p className="lead" data-anim="fade">
            Četiri stvari koje se provlače kroz svaku fotografiju — bez obzira da li je portret, ulica ili noć.
          </p>
        </div>
        <div className={s.valueGrid} data-anim="stagger">
          {values.map((v) => (
            <article key={v.title} className={s.value}>
              <Sparkle className={s.valueIcon} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- traka fotografija ---------------- */}
      <section className={s.photoStrip}>
        <PhotoMarquee photos={allPhotos.filter((_, i) => i % 2 === 0)} />
        <PhotoMarquee photos={allPhotos.filter((_, i) => i % 2 === 1)} reverse />
      </section>

      {/* ---------------- profili ---------------- */}
      <section className={cx("container", "section")}>
        <Heading lines={["Prati", "priču"]} center />
        <div className={s.profiles} data-anim="stagger">
          {profiles.map((pr) => (
            <a key={pr.handle} href={pr.url} target="_blank" rel="noreferrer" className={s.profile} data-cursor="Prati">
              <Media src={pr.image.src} alt="" ratio="4 / 3" sizes="(max-width: 760px) 100vw, 30vw" reveal={false} position="50% 35%" />
              <span className={s.profileBody}>
                <span className={s.profileTop}>
                  <span className="pill">{pr.tag}</span>
                  <ArrowUpRight className={s.profileArrow} />
                </span>
                <span className={s.profileHandle}>
                  <Instagram /> {pr.handle}
                </span>
                <span className="muted">{pr.text}</span>
              </span>
            </a>
          ))}
        </div>
        <div className={s.center}>
          <ArrowLink href="/kontakt">Hajde da se upoznamo</ArrowLink>
        </div>
      </section>
    </>
  );
}
