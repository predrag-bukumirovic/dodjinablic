import type Lenis from "lenis";
import { gsap } from "./gsap";

/* ---------------- Lenis instanca ---------------- */

let lenis: Lenis | null = null;
export const setLenis = (l: Lenis | null) => {
  lenis = l;
};
export const getLenis = () => lenis;

/* ---------------- Intro (preloader) ---------------- */

let introDone = false;
const introListeners = new Set<() => void>();

export const isIntroDone = () => introDone;

export function setIntroDone() {
  if (introDone) return;
  introDone = true;
  introListeners.forEach((fn) => fn());
  introListeners.clear();
}

/** Poziva cb kad se preloader završi (odmah, ako je već završen). Vraća funkciju za odjavu. */
export function onIntroDone(cb: () => void) {
  if (introDone) {
    cb();
    return () => {};
  }
  introListeners.add(cb);
  return () => {
    introListeners.delete(cb);
  };
}

/* ---------------- Zavesa za prelaz između stranica ---------------- */

let covering = false;
let fallback: ReturnType<typeof setTimeout> | undefined;

const curtainEl = () => document.getElementById("curtain");

export function curtainIn(): Promise<void> {
  const el = curtainEl();
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return Promise.resolve();
  }
  covering = true;
  lenis?.stop();
  return new Promise((resolve) => {
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { y: 0, yPercent: 100, visibility: "visible" },
      { y: 0, yPercent: 0, duration: 0.75, ease: "expo.inOut", onComplete: () => resolve() },
    );
    gsap.fromTo(
      el.querySelector("svg"),
      { rotate: -90, scale: 0.4, opacity: 0 },
      { rotate: 0, scale: 1, opacity: 1, duration: 0.9, ease: "expo.out", delay: 0.35 },
    );
    // sigurnosna mreža ako nova stranica ne javi da je spremna
    clearTimeout(fallback);
    fallback = setTimeout(() => curtainOut(), 4000);
  });
}

/** Skida zavesu ako je spuštena. Vraća true ako je prelaz bio aktivan. */
export function curtainOut(): boolean {
  clearTimeout(fallback);
  if (!covering) return false;
  covering = false;
  const el = curtainEl();
  if (!el) return true;
  gsap.to(el, {
    y: 0,
    yPercent: -100,
    duration: 0.9,
    ease: "expo.inOut",
    delay: 0.15,
    onComplete: () => {
      gsap.set(el, { visibility: "hidden" });
      lenis?.start();
    },
  });
  return true;
}
