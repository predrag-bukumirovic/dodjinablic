"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/runtime";
import { cx } from "@/lib/cx";
import { site } from "@/data/site";
import TLink from "@/components/motion/TLink";
import { FlashMark } from "@/components/ui/brand";
import { Roll } from "@/components/ui/primitives";
import { ArrowUpRight } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import s from "./Header.module.scss";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  // sakrij header kad se skroluje nadole, prikaži kad se skroluje nagore
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 160 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      if (!open) return;
      gsap.fromTo(
        "[data-menu-item]",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.06, delay: 0.25 },
      );
    },
    { scope: menuRef, dependencies: [open] },
  );

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  // skrol je zaključan dok je mobilni meni otvoren
  const close = () => {
    if (!open) return;
    setOpen(false);
    getLenis()?.start();
  };
  const toggle = () => {
    if (open) return close();
    setOpen(true);
    getLenis()?.stop();
  };

  return (
    <header className={cx(s.header, hidden && !open && s.hidden, scrolled && s.scrolled, open && s.isOpen)}>
      <div className={cx("container", s.inner)}>
        <TLink href="/" className={s.logo} aria-label="Dođi na blic — početna" onClick={close}>
          <FlashMark id="hdr" className={s.mark} />
          <span className={s.word}>
            dođi na blic
            <small>Nikola Knežević</small>
          </span>
        </TLink>

        <nav className={s.nav} aria-label="Glavna navigacija">
          <ul>
            {site.nav.map((l) => (
              <li key={l.href}>
                <TLink
                  href={l.href}
                  className={cx(s.link, isActive(l.href) && s.active)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  <Roll>{l.label}</Roll>
                </TLink>
              </li>
            ))}
          </ul>
          <span className={s.sep} aria-hidden="true" />
          <TLink href={site.cta.href} className={cx(s.link, s.cta, isActive(site.cta.href) && s.active)}>
            <Roll>{site.cta.label}</Roll>
            <ArrowUpRight />
          </TLink>
        </nav>

        <button
          className={s.burger}
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" ref={menuRef} className={cx(s.menu, open && s.menuOpen)} aria-hidden={!open}>
        <ul className={s.menuList}>
          {[{ label: "Početna", href: "/" }, ...site.nav, site.cta].map((l) => (
            <li key={l.href}>
              <span className={s.menuMask}>
                <TLink
                  href={l.href}
                  data-menu-item
                  className={cx(s.menuLink, pathname === l.href && s.active)}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                >
                  {l.label}
                </TLink>
              </span>
            </li>
          ))}
        </ul>
        <div className={s.menuFoot}>
          <a href={site.instagram.business.url} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
            <Instagram /> {site.instagram.business.handle}
          </a>
          <a href={site.instagram.personal.url} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
            <Instagram /> {site.instagram.personal.handle}
          </a>
        </div>
      </div>
    </header>
  );
}
