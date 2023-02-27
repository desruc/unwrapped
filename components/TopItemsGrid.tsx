"use client";

import Image from "next/image";
import Link from "next/link";
import { getBlurDataUrl } from "utils/getBlurDataUrl";

export interface TopItem {
  id: string;
  title: string;
  subtitle?: string;
  imgSrc: string;
  href: string;
}

interface Props {
  items: TopItem[];
}

export function TopItemsGrid({ items }: Props) {
  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {items.map((i) => (
        <ImageCard
          key={i.id}
          title={i.title}
          subtitle={i.subtitle}
          imgSrc={i.imgSrc}
          href={i.href}
        />
      ))}
    </div>
  );
}

interface ImageCardProps {
  title: string;
  subtitle?: string;
  imgSrc: string;
  href: string;
}

function ImageCard({ title, subtitle, imgSrc, href }: ImageCardProps) {
  return (
    <Link className="relative !text-white" href={href}>
      <div className="absolute z-10 transition-all opacity-1 lg:opacity-0 hover:opacity-100 h-full w-full p-2 flex flex-col justify-end bg-black/60">
        <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
        {subtitle && (
          <h4 className="text-sm text-green-500 font-semibold tracking-wide">
            {subtitle}
          </h4>
        )}
      </div>
      <div className="h-[0px] pb-[100%] w-full">
        <div className="h-full w-full absolute">
          <Image
            alt={title}
            src={imgSrc}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            className="rounded-md"
            placeholder="blur"
            blurDataURL={getBlurDataUrl()}
          />
        </div>
      </div>
    </Link>
  );
}

export function TopItemsGridLoading({ items = 8 }: { items?: number }) {
  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {[...Array(items)].map((_, i) => (
        <div
          key={`loading-${i}`}
          className="h-[0px] pb-[100%] w-full bg-card-400 rounded-md"
        />
      ))}
    </div>
  );
}
