"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { cx } from "@/lib/cx";
import type { Collection } from "@/data/content";
import TLink from "@/components/motion/TLink";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import s from "./ProjectList.module.scss";

/** Redovi kolekcija; na hover se pojavljuje slika koja prati kursor. */
export default function ProjectList({ items }: { items: Collection[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const el = previewRef.current;
      if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      gsap.set(el, { xPercent: -50, yPercent: -50 });
      const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" });
      const rTo = gsap.quickTo(el, "rotation", { duration: 0.9, ease: "power3" });
      let lastX = 0;
      const move = (e: PointerEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
        rTo(gsap.utils.clamp(-12, 12, (e.clientX - lastX) * 0.6));
        lastX = e.clientX;
      };
      window.addEventListener("pointermove", move);
      return () => window.removeEventListener("pointermove", move);
    },
    { scope: listRef },
  );

  return (
    <div ref={listRef} className={s.list} onPointerLeave={() => setActive(null)}>
      <div data-anim="stagger">
      {items.map((it, i) => (
        <TLink
          key={it.slug}
          href={it.href}
          className={cx(s.row, active === i && s.on)}
          onPointerEnter={() => setActive(i)}
        >
          <span className={s.left}>
            <span className="pill">{it.tag}</span>
            <span className={s.title}>{it.headline}</span>
            <span className={s.count}>({it.photos.length})</span>
          </span>
          <span className={s.thumb} aria-hidden="true">
            <Image src={it.cover.src} alt="" fill sizes="120px" />
          </span>
          <span className={s.icon} aria-hidden="true">
            <ArrowDownRight className={s.iconA} />
            <ArrowUpRight className={s.iconB} />
          </span>
        </TLink>
      ))}
      </div>

      <div ref={previewRef} className={cx(s.preview, active !== null && s.show)} aria-hidden="true">
        {items.map((it, i) => (
          <div key={it.slug} className={cx(s.pimg, active === i && s.pimgOn)}>
            <Image src={it.cover.src} alt="" fill sizes="280px" />
          </div>
        ))}
        <span className={s.pLabel}>Otvori</span>
      </div>
    </div>
  );
}
