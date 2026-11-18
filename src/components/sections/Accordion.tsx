"use client";

import { useId, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { cx } from "@/lib/cx";
import type { Faq } from "@/data/content";
import { ArrowDownRight } from "lucide-react";
import s from "./Accordion.module.scss";

export default function Accordion({ items, defaultOpen = 0 }: { items: Faq[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();

  return (
    <div className={s.list} data-anim="stagger">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={cx(s.item, isOpen && s.open)}>
            <button
              className={s.q}
              aria-expanded={isOpen}
              aria-controls={`${uid}-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <ArrowDownRight className={s.icon} />
            </button>
            <div
              id={`${uid}-${i}`}
              role="region"
              className={s.panel}
              onTransitionEnd={(e) => {
                if (e.propertyName === "grid-template-rows") ScrollTrigger.refresh();
              }}
            >
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
