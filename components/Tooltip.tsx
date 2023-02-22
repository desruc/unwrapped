import { memo } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  text: string;
}

export const Tooltip = memo(({ children, text }: Props) => {
  return (
    <span className="group relative">
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card-500 px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-gray-800 before:content-[''] group-hover:opacity-100">
        {text}
      </span>
      {children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";
