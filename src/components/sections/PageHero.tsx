import type { ReactNode } from "react";
import { Badge } from "@/components/ui/brand";
import { Heading } from "@/components/ui/primitives";
import s from "./PageHero.module.scss";

/** Zaglavlje podstranice: oznaka, veliki naslov i uvodni tekst. */
export default function PageHero({
  eyebrow,
  lines,
  intro,
  badge,
  children,
}: {
  eyebrow: string;
  lines: string[];
  intro?: string;
  badge?: string;
  children?: ReactNode;
}) {
  return (
    <section className={s.hero}>
      <div className="container">
        <p className="eyebrow" data-anim="fade">
          {eyebrow}
        </p>
        <div className={s.titleRow}>
          <Heading as="h1" size="display" lines={lines} />
          {badge && (
            <div data-anim="fade" data-delay="0.5" className={s.badge}>
              <Badge id="page-badge" text={badge} />
            </div>
          )}
        </div>
        {(intro || children) && (
          <div className={s.bottom}>
            <span className={s.rule} data-anim="line-x" data-delay="0.3" />
            {intro && (
              <p className="lead" data-anim="fade" data-delay="0.5">
                {intro}
              </p>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
