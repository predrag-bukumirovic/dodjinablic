"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { setIntroDone } from "@/lib/runtime";
import { FlashMark } from "@/components/ui/brand";

const WORDS = ["Dođi", "na", "blic"];

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(root, { autoAlpha: 0, display: "none" });
        setIntroDone();
        return;
      }

      const counter = { v: 0 };
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(".pre-mark", { scale: 0, rotate: -180 }, { scale: 1, rotate: 0, duration: 1.4 }, 0.1)
        .fromTo(".pre-word > span", { yPercent: 110 }, { yPercent: 0, duration: 1.2, stagger: 0.08 }, 0.25)
        .to(
          counter,
          {
            v: 100,
            duration: 1.9,
            ease: "power2.inOut",
            onUpdate: () => {
              if (countRef.current) countRef.current.textContent = String(Math.round(counter.v));
            },
          },
          0.1,
        )
        .fromTo(".pre-bar span", { scaleX: 0 }, { scaleX: 1, duration: 1.9, ease: "power2.inOut" }, 0.1)
        .to(".pre-word > span, .pre-count, .pre-mark", { yPercent: -110, opacity: 0, duration: 0.7, ease: "expo.in", stagger: 0.03 }, "+=0.15")
        .to(root, { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, "-=0.25")
        .call(setIntroDone, [], "-=0.75")
        .set(root, { display: "none" });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="preloader" aria-hidden="true">
      <div className="pre-center">
        <FlashMark id="pre" className="pre-mark" />
        <p className="pre-brand">
          {WORDS.map((w) => (
            <span className="pre-word" key={w}>
              <span>{w}</span>
            </span>
          ))}
        </p>
      </div>
      <div className="pre-foot">
        <span className="pre-label">Portreti · Ulica · Arhiva života</span>
        <span className="pre-count-wrap">
          <span ref={countRef} className="pre-count">
            0
          </span>
        </span>
      </div>
      <div className="pre-bar">
        <span />
      </div>
    </div>
  );
}
