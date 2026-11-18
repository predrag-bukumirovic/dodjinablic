import { site } from "@/data/site";
import { portreti, ulica } from "@/data/photos";
import TLink from "@/components/motion/TLink";
import { FlashMark } from "@/components/ui/brand";
import { CircleLink, Heading, Media, Roll, RoundArrow } from "@/components/ui/primitives";
import { ArrowUpRight } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.spot} aria-label="Zakaži fotkanje">
        <div className={s.cardLeft} data-speed="0.6">
          <TLink href="/radovi/ulica" className={s.card} data-cursor="Ulica">
            <Media src={ulica[2].src} alt={ulica[2].alt} ratio="1" sizes="200px" position="50% 40%" />
            <span className={s.cardRow}>
              <RoundArrow />
              <span>Ulične priče</span>
            </span>
          </TLink>
        </div>

        <div className={s.cardRight} data-speed="-0.5">
          <TLink href="/radovi/portreti" className={s.card} data-cursor="Portreti">
            <Media src={portreti[4].src} alt={portreti[4].alt} ratio="1" sizes="220px" position="50% 25%" />
            <span className={s.cardRow}>
              <RoundArrow className={s.solid} />
              <span>Urbani portreti</span>
            </span>
          </TLink>
        </div>

        <div className={s.center}>
          <Heading lines={["Dođi", "na blic"]} center className={s.title} />
          <p className={s.sub} data-anim="fade">
            Javi se u DM ili na 060 535 6000 — kadar te čeka.
          </p>
          <div className={s.markWrap}>
            <div data-rotate="45">
              <FlashMark id="footer-flash" gradient cut={1.6} className={s.mark} />
            </div>
            <CircleLink href="/kontakt" size="lg" className={s.markCta}>
              Zakaži
            </CircleLink>
          </div>
        </div>
      </section>

      <div className={`container ${s.bottom}`}>
        <nav className={s.links} aria-label="Navigacija u podnožju">
          {site.nav.map((l) => (
            <TLink key={l.href} href={l.href} className={s.flink}>
              <Roll>{l.label}</Roll>
              <ArrowUpRight />
            </TLink>
          ))}
          <TLink href={site.cta.href} className={s.flink}>
            <Roll>{site.cta.label}</Roll>
            <ArrowUpRight />
          </TLink>
        </nav>
        <div className={s.meta}>
          <div className={s.socials}>
            <a href={site.instagram.business.url} target="_blank" rel="noreferrer">
              <Instagram /> {site.instagram.business.handle}
            </a>
            <a href={site.instagram.personal.url} target="_blank" rel="noreferrer">
              <Instagram /> {site.instagram.personal.handle}
            </a>
            <a href={site.phone.href}>{site.phone.label}</a>
          </div>
          <p>
            © {site.year} {site.brand} — {site.owner}. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
