import { cx } from "@/lib/cx";

const STAR =
  "M50 0C52.5 32 68 47.5 100 50C68 52.5 52.5 68 50 100C47.5 68 32 52.5 0 50C32 47.5 47.5 32 50 0Z";

/** Znak "blica": četvorokraka zvezda presečena dijagonalama. id mora biti jedinstven na stranici. */
export function FlashMark({
  id,
  className,
  gradient = false,
  cut = 3.2,
}: {
  id: string;
  className?: string;
  gradient?: boolean;
  cut?: number;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <mask id={`${id}-m`} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="#fff" />
          <path d="M0 0 100 100M100 0 0 100" stroke="#000" strokeWidth={cut} />
        </mask>
        {gradient && (
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.45" stopColor="#b9b9b6" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        )}
      </defs>
      <path d={STAR} mask={`url(#${id}-m)`} fill={gradient ? `url(#${id}-g)` : "currentColor"} />
    </svg>
  );
}

/** Rotirajući kružni natpis sa znakom u sredini. */
export function Badge({ id, text, className }: { id: string; text: string; className?: string }) {
  return (
    <div className={cx("badge", className)} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="badge-ring">
        <defs>
          <path id={`${id}-c`} d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
        </defs>
        <text>
          <textPath href={`#${id}-c`} textLength="292" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="badge-core">
        <FlashMark id={`${id}-f`} cut={5} />
      </span>
    </div>
  );
}

/** Stilizovani objektiv (CSS) — zamena za 3D objekat iz reference. */
export function Lens({ id, className }: { id: string; className?: string }) {
  return (
    <div className={cx("lens", className)} aria-hidden="true">
      <div className="lens-spin">
        <div className="lens-knurl" />
        <div className="lens-ring">
          <svg viewBox="0 0 200 200">
            <defs>
              <path id={`${id}-t`} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href={`#${id}-t`} textLength="488" lengthAdjust="spacing">
                DOĐI NA BLIC · 35 mm 1:1.4 · Ø 52 · NIKOLA KNEŽEVIĆ ·
              </textPath>
            </text>
          </svg>
        </div>
        <div className="lens-glass" />
      </div>
      <div className="lens-shine" />
    </div>
  );
}
