"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { process } from "@/data/content";
import { Heading } from "@/components/ui/primitives";
import s from "./ProcessScroller.module.scss";

/** Horizontalni skrol kroz korake procesa (na desktopu je sekcija "zakačena"). */
export default function ProcessScroller() {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const wrap = wrapRef.current;
        if (!track || !wrap) return;
        const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".js-step-img", track).forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.25 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                containerAnimation: tween,
                start: "left right",
                end: "center center",
                scrub: true,
              },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: wrapRef },
  );

  return (
    <section ref={wrapRef} className={s.wrap} aria-label="Kako izgleda fotkanje">
      <div className={s.head}>
        <Heading lines={["Kako izgleda", "fotkanje"]} />
        <p className="lead" data-anim="fade">
          Od prve poruke do gotovih fotografija — jednostavno, opušteno i bez stresa.
        </p>
      </div>
      <div ref={trackRef} className={s.track}>
        {process.map((step) => (
          <article key={step.title} className={s.step}>
            <div className={s.img}>
              <Image className="js-step-img" src={step.image.src} alt={step.image.alt} fill sizes="(max-width: 900px) 90vw, 34vw" />
            </div>
            <div className={s.text}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
