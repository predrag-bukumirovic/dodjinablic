import { gsap, ScrollTrigger } from "./gsap";

/**
 * Deklarativne animacije: server komponente samo dodaju data-atribute,
 * a ova funkcija ih pokreće kad se stranica učita.
 *
 *  data-anim="lines"   naslov podeljen na .line elemente — linije izlaze iz maske
 *  data-anim="fade"    blago pojavljivanje odozdo
 *  data-anim="stagger" deca se pojavljuju jedno za drugim
 *  data-anim="img"     slika se otkriva odozdo (clip-path) uz blagi zoom
 *  data-anim="words"   reči se "pale" dok skroluješ (.w elementi)
 *  data-anim="line-x"  linija se širi sleva nadesno
 *  data-count="250"    broj odbrojava do vrednosti
 *  data-parallax="8"   unutrašnjost .media se pomera (procenat visine)
 *  data-speed="0.5"    element se pomera sporije/brže od skrola
 *  data-rotate="180"   element se rotira dok skroluješ
 *  data-delay="0.3"    dodatno kašnjenje
 */
export function setupAnimations(root: HTMLElement, introDelay = 0) {
  const all = (sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));
  const vh = window.innerHeight;
  const delayOf = (el: HTMLElement) =>
    (el.getBoundingClientRect().top < vh ? introDelay : 0) + Number(el.dataset.delay || 0);
  const once = (el: Element, start = "top 88%"): ScrollTrigger.Vars => ({ trigger: el, start, once: true });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.querySelectorAll("[data-anim], .line, .w").forEach((el) => {
      gsap.set(el, { clearProps: "all", opacity: 1 });
    });
    return;
  }

  all('[data-anim="lines"]').forEach((el) => {
    gsap.fromTo(
      el.querySelectorAll(".line"),
      { y: 0, yPercent: 115, rotate: 2.5 },
      {
        y: 0,
        yPercent: 0,
        rotate: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.1,
        delay: delayOf(el),
        scrollTrigger: once(el, "top 92%"),
      },
    );
  });

  all('[data-anim="fade"]').forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: "expo.out", delay: delayOf(el), scrollTrigger: once(el) },
    );
  });

  all('[data-anim="stagger"]').forEach((el) => {
    gsap.fromTo(
      el.children,
      { autoAlpha: 0, y: 36 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        delay: delayOf(el),
        scrollTrigger: once(el),
      },
    );
  });

  all('[data-anim="img"]').forEach((el) => {
    const d = delayOf(el);
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut", delay: d, scrollTrigger: once(el, "top 92%") },
    );
    const img = el.querySelector("img");
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.3 },
        { scale: 1, duration: 2, ease: "expo.out", delay: d + 0.15, scrollTrigger: once(el, "top 92%") },
      );
    }
  });

  all('[data-anim="words"]').forEach((el) => {
    gsap.fromTo(
      el.querySelectorAll(".w"),
      { opacity: 0.14 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: true },
      },
    );
  });

  all('[data-anim="line-x"]').forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left center", duration: 1.6, ease: "expo.inOut", delay: delayOf(el), scrollTrigger: once(el) },
    );
  });

  all("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count);
    const counter = { v: 0 };
    el.textContent = "0";
    gsap.to(counter, {
      v: end,
      duration: 2.2,
      ease: "power3.out",
      delay: delayOf(el),
      scrollTrigger: once(el),
      onUpdate: () => {
        el.textContent = String(Math.round(counter.v));
      },
    });
  });

  all("[data-parallax]").forEach((el) => {
    const amount = Number(el.dataset.parallax) / 100;
    const host = el.parentElement ?? el;
    gsap.fromTo(
      el,
      { y: () => -host.offsetHeight * amount },
      {
        y: () => host.offsetHeight * amount,
        ease: "none",
        scrollTrigger: { trigger: host, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
      },
    );
  });

  all("[data-speed]").forEach((el) => {
    const s = Number(el.dataset.speed);
    gsap.fromTo(
      el,
      { y: () => -s * 60 },
      {
        y: () => s * 60,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
      },
    );
  });

  all("[data-rotate]").forEach((el) => {
    gsap.fromTo(
      el,
      { rotate: 0 },
      {
        rotate: Number(el.dataset.rotate),
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
      },
    );
  });

  requestAnimationFrame(() => ScrollTrigger.refresh());
}
