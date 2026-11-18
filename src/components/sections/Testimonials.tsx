"use client";

import { useState } from "react";
import Image from "next/image";
import { cx } from "@/lib/cx";
import { series } from "@/data/content";
import { CircleLink } from "@/components/ui/primitives";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Instagram } from "@/components/ui/InstagramIcon";
import s from "./Testimonials.module.scss";

/** Slajder serija sa Instagrama: fotografija, naziv serije i kratak opis. */
export default function Testimonials() {
  const [state, setState] = useState({ i: 0, prev: -1, dir: 1 });
  const n = series.length;
  const go = (dir: 1 | -1) => setState((st) => ({ i: (st.i + dir + n) % n, prev: st.i, dir }));
  const t = series[state.i];

  return (
    <div className={s.wrap}>
      <div className={s.media} data-anim="fade">
        <div className={s.stack}>
          {series.map((item, idx) => (
            <div
              key={item.title}
              className={cx(
                s.layer,
                idx === state.i && s.on,
                idx === state.prev && s.prev,
                state.dir < 0 && s.back,
                state.prev === -1 && s.still,
              )}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 860px) 100vw, 40vw"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          ))}
        </div>
        <CircleLink href="/radovi" className={s.more}>
          Pogledaj više
        </CircleLink>
      </div>

      <div className={s.body} data-anim="fade" data-delay="0.15">
        <blockquote key={state.i} className={s.quote}>
          <span className="pill">{t.tag}</span>
          <p className={s.title}>{t.title}</p>
          <p>{t.text}</p>
          <footer>
            <span className={s.dash} />
            <a href={t.href} target="_blank" rel="noreferrer" className={s.igLink}>
              <Instagram /> Serija na Instagramu <ArrowUpRight />
            </a>
          </footer>
        </blockquote>

        <div className={s.nav}>
          <button className={s.btn} onClick={() => go(-1)} aria-label="Prethodna serija">
            <ArrowLeft />
          </button>
          <button className={cx(s.btn, s.btnSolid)} onClick={() => go(1)} aria-label="Sledeća serija">
            <ArrowRight />
          </button>
          <span className={s.counter} aria-live="polite">
            {state.i + 1} / {n}
          </span>
        </div>
      </div>
    </div>
  );
}
