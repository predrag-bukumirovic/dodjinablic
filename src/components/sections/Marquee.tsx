import Image from "next/image";
import { Sparkle } from "lucide-react";
import type { Photo } from "@/data/photos";
import { cx } from "@/lib/cx";
import s from "./Marquee.module.scss";

/** Beskonačna traka fotografija. */
export function PhotoMarquee({ photos, reverse, className }: { photos: Photo[]; reverse?: boolean; className?: string }) {
  const items = [...photos, ...photos];
  return (
    <div className={cx(s.marquee, reverse && s.reverse, className)} aria-hidden="true">
      <div className={s.track}>
        {items.map((p, i) => (
          <div key={i} className={s.item} style={{ aspectRatio: `${p.w} / ${p.h}` }}>
            <Image src={p.src} alt="" fill sizes="300px" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Beskonačna traka velikog teksta. */
export function TextMarquee({ words, className }: { words: string[]; className?: string }) {
  const items = [...words, ...words, ...words, ...words];
  return (
    <div className={cx(s.marquee, s.text, className)} aria-hidden="true">
      <div className={s.track}>
        {items.map((w, i) => (
          <span key={i} className={s.word}>
            {w}
            <Sparkle className={s.star} fill="currentColor" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
