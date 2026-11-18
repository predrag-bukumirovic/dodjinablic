"use client";

import type { PointerEvent, ReactNode } from "react";

/** Mreža kartica sa "svetlom" koje prati kursor (CSS promenljive --mx / --my). */
export default function SpotlightGrid({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>("[data-spot]");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div className={className} onPointerMove={onMove} data-anim="stagger">
      {children}
    </div>
  );
}
