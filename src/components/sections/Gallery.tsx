"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/runtime";
import { cx } from "@/lib/cx";
import type { Category, Photo } from "@/data/photos";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import s from "./Gallery.module.scss";

const FILTERS: { label: string; value: Category | "sve" }[] = [
  { label: "Sve", value: "sve" },
  { label: "Portreti", value: "portreti" },
  { label: "Ulica", value: "ulica" },
  { label: "Život", value: "zivot" },
];

export default function Gallery({ photos, filters = false }: { photos: Photo[]; filters?: boolean }) {
  const [filter, setFilter] = useState<Category | "sve">("sve");
  const [open, setOpen] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const shown = filter === "sve" ? photos : photos.filter((p) => p.cat === filter);

  // animacija pri promeni filtera
  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      gsap.fromTo(
        gridRef.current?.children ?? [],
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: "expo.out", stagger: 0.04, onComplete: () => ScrollTrigger.refresh() },
      );
    },
    { dependencies: [filter], scope: gridRef },
  );

  return (
    <div className={s.gallery}>
      {filters && (
        <div className={s.filters} role="tablist" aria-label="Filter kategorija" data-anim="fade">
          {FILTERS.map((f) => {
            const count = f.value === "sve" ? photos.length : photos.filter((p) => p.cat === f.value).length;
            return (
              <button
                key={f.value}
                role="tab"
                aria-selected={filter === f.value}
                className={cx(s.filter, filter === f.value && s.active)}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
                <sup>{count}</sup>
              </button>
            );
          })}
        </div>
      )}

      <div ref={gridRef} className={s.grid}>
        {shown.map((p, i) => (
          <button
            key={p.src}
            className={s.item}
            onClick={() => setOpen(i)}
            data-cursor="Uvećaj"
            data-anim="fade"
            aria-label={`Otvori fotografiju: ${p.alt}`}
          >
            <span className={s.frame} style={{ aspectRatio: `${p.w} / ${p.h}` }}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            </span>
          </button>
        ))}
      </div>

      {open !== null &&
        createPortal(
          <Lightbox
            photos={shown}
            index={open}
            onClose={() => setOpen(null)}
            onNav={(d) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length))}
          />,
          document.body,
        )}
    </div>
  );
}

function Lightbox({
  photos,
  index,
  onClose,
  onNav,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNav: (d: 1 | -1) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const p = photos[index];

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    getLenis()?.stop();
    return () => {
      getLenis()?.start();
      prevFocus?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  return (
    <div className={s.lb} role="dialog" aria-modal="true" aria-label="Pregled fotografije" data-lenis-prevent>
      <button className={s.lbBackdrop} onClick={onClose} aria-label="Zatvori" tabIndex={-1} />
      <figure key={p.src} className={s.lbFigure}>
        <div className={s.lbImg}>
          <Image src={p.src} alt={p.alt} fill sizes="90vw" quality={75} />
        </div>
        <figcaption>{p.alt}</figcaption>
      </figure>
      <div className={s.lbBar}>
        <span className={s.lbCount}>
          {index + 1} / {photos.length}
        </span>
        <div className={s.lbBtns}>
          <button onClick={() => onNav(-1)} aria-label="Prethodna fotografija">
            <ArrowLeft />
          </button>
          <button onClick={() => onNav(1)} aria-label="Sledeća fotografija">
            <ArrowRight />
          </button>
          <button ref={closeRef} onClick={onClose} aria-label="Zatvori pregled" className={s.lbClose}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
}
