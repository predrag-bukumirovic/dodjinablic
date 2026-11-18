import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import TLink from "@/components/motion/TLink";
import Magnetic from "@/components/motion/Magnetic";
import { ArrowUpRight } from "lucide-react";

/* ------------------------------------------------------------------ */

/** Linije naslova u maskama — animira ih data-anim="lines" na roditelju. */
export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span className="line-mask" key={i}>
          <span className="line">{l} </span>
        </span>
      ))}
    </>
  );
}

type HeadingProps = {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  size?: "display" | "h2";
  center?: boolean;
  className?: string;
  delay?: number;
};

export function Heading({ lines, as: Tag = "h2", size = "h2", center, className, delay }: HeadingProps) {
  return (
    <Tag
      className={cx(size, "heading", center && "is-center", className)}
      data-anim="lines"
      data-delay={delay}
      aria-label={lines.join(" ")}
    >
      <Lines lines={lines} />
    </Tag>
  );
}

/* ------------------------------------------------------------------ */

type MediaProps = {
  src: string;
  alt: string;
  ratio?: string;
  sizes: string;
  parallax?: number;
  priority?: boolean;
  reveal?: boolean;
  position?: string;
  className?: string;
  delay?: number;
};

/** Slika sa maskom za otkrivanje i opcionom paralaksom. */
export function Media({
  src,
  alt,
  ratio,
  sizes,
  parallax = 0,
  priority,
  reveal = true,
  position,
  className,
  delay,
}: MediaProps) {
  return (
    <div
      className={cx("media", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
      data-anim={reveal ? "img" : undefined}
      data-delay={delay}
    >
      <div
        className="media-inner"
        data-parallax={parallax || undefined}
        style={parallax ? { top: `-${parallax}%`, bottom: `-${parallax}%` } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

/** Tekst koji se "zarola" na hover roditeljskog linka. */
export function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span data-text={children}>{children}</span>
    </span>
  );
}

/** Mali link sa strelicom, npr. "Zakaži fotkanje ↗". */
export function ArrowLink({
  href,
  children,
  className,
  delay,
  anim = true,
}: {
  href: string;
  children: string;
  className?: string;
  delay?: number;
  anim?: boolean;
}) {
  const external = href.startsWith("http");
  const inner = (
    <>
      <Roll>{children}</Roll>
      <ArrowUpRight className="arrow" />
    </>
  );
  const props = {
    className: cx("arrow-link", className),
    "data-anim": anim ? "fade" : undefined,
    "data-delay": delay,
  };
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {inner}
    </a>
  ) : (
    <TLink href={href} {...props}>
      {inner}
    </TLink>
  );
}

/** Beli kružni dugmić (magnetni). */
export function CircleLink({
  href,
  children,
  className,
  size = "md",
}: {
  href: string;
  children: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const external = href.startsWith("http");
  const cls = cx("circle-btn", `circle-btn--${size}`);
  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight />
    </>
  );
  return (
    <Magnetic className={className}>
      {external ? (
        <a href={href} target="_blank" rel="noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <TLink href={href} className={cls}>
          {inner}
        </TLink>
      )}
    </Magnetic>
  );
}

/** Mali okrugli dugmić sa strelicom (outline). */
export function RoundArrow({ className }: { className?: string }) {
  return (
    <span className={cx("round-arrow", className)} aria-hidden="true">
      <ArrowUpRight />
    </span>
  );
}

/* ------------------------------------------------------------------ */

type Segment = string | ReactNode;

/** Pasus čije se reči "pale" pri skrolu. Stringovi se dele na reči, ostalo (ikone) ostaje kako jeste. */
export function WordFill({ segments, className }: { segments: Segment[]; className?: string }) {
  return (
    <p className={cx("statement", className)} data-anim="words">
      {segments.map((seg, i) =>
        typeof seg === "string" ? (
          <Fragment key={i}>
            {seg
              .split(" ")
              .filter(Boolean)
              .map((w, j) => (
                <Fragment key={j}>
                  <span className="w">{w}</span>{" "}
                </Fragment>
              ))}
          </Fragment>
        ) : (
          <Fragment key={i}>
            <span className="w w-icon">{seg}</span>{" "}
          </Fragment>
        ),
      )}
    </p>
  );
}

/** Mala oznaka / natpis iznad sekcije. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("eyebrow", className)} data-anim="fade">
      {children}
    </p>
  );
}
