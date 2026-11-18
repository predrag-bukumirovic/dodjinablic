"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { curtainIn, getLenis } from "@/lib/runtime";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** Link sa animiranim prelazom (zavesa) između stranica. */
export default function TLink({ href, onClick, children, ...rest }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return;

    e.preventDefault();
    if (href === pathname) {
      getLenis()?.scrollTo(0, { duration: 1.4 });
      return;
    }
    curtainIn().then(() => router.push(href, { scroll: true }));
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
