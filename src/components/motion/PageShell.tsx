"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@/lib/gsap";
import { setupAnimations } from "@/lib/animations";
import { curtainOut, getLenis, onIntroDone } from "@/lib/runtime";

/** Obavija sadržaj stranice i pokreće animacije pri svakoj promeni rute. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    (_ctx, contextSafe) => {
      const fromCurtain = curtainOut();
      if (fromCurtain) {
        window.scrollTo(0, 0);
        getLenis()?.scrollTo(0, { immediate: true, force: true });
      }

      let raf = 0;
      const run = contextSafe!(() => {
        if (ref.current) setupAnimations(ref.current, fromCurtain ? 0.55 : 0.1);
      });
      const off = onIntroDone(() => {
        raf = requestAnimationFrame(run);
      });

      return () => {
        off();
        cancelAnimationFrame(raf);
      };
    },
    { scope: ref, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={ref} className="shell">
      {children}
    </div>
  );
}
