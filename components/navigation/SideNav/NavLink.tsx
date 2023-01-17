import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";

interface Props {
  href: string;
  icon: ReactElement;
  label: string;
}

export function NavLink({ href, icon, label }: Props) {
  const pathname = usePathname();

  const className = clsx(
    "flex items-center mt-2 pr-2 w-full rounded-lg transition-all hover:bg-gray-900 hover:shadow-md",
    {
      "bg-gray-900 shadow-md": pathname === href
    }
  );

  return (
    <Link href={href} className={className}>
      <div className="px-2 py-3 text-2xl">{icon}</div>
      {label}
    </Link>
  );
}
