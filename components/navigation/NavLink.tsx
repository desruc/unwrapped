"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";

interface Props {
  href: string;
  icon: ReactElement;
  label: string;
  open: boolean;
}

export function NavLink({ href, icon, label, open }: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  const className = clsx(
    "flex items-center [&:not(:first-child)]:mt-2 pr-2 w-full rounded-lg transition-all hover:bg-body-500 hover:shadow-md hover:font-semibold hover:text-white",
    {
      "bg-body-500 shadow-md text-white": active
    }
  );

  const titleClassName = clsx("tracking-wide", {
    hidden: !open,
    "font-semibold": active
  });

  return (
    <Link href={href} className={className} title={label}>
      <div className="px-2 py-3 text-2xl">{icon}</div>
      <span className={titleClassName}>{label}</span>
    </Link>
  );
}
