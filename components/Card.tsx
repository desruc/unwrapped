"use client";

import Image from "next/image";
import Link from "next/link";
import { getBlurDataUrl } from "utils/getBlurDataUrl";

interface Props {
  image: SpotifyApi.ImageObject;
  title: string;
  description: string;
  href: string;
  roundImage?: boolean;
}

export function Card({ image, title, description, href, roundImage }: Props) {
  return (
    <Link href={href} title={title}>
      <div className="p-4 rounded-md bg-gray-800">
        <div className="relative pb-[100%] mb-2">
          <Image
            src={image.url}
            fill
            alt={title}
            className={roundImage ? "rounded-full" : "rounded-sm"}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={getBlurDataUrl()}
          />
        </div>
        <h3 className="font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
          {title}
        </h3>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}

interface CardLoadingProps {
  roundImage?: boolean;
}

export function CardLoading({ roundImage }: CardLoadingProps) {
  return (
    <div className="p-4 rounded-md bg-gray-800">
      <div
        className={`pb-[100%] mb-2 bg-gray-600 ${
          roundImage ? "rounded-full" : "rounded-sm"
        }`}
      />
      <div className="mb-1 bg-slate-600 h-[24px] rounded-sm" />
      <div className="mb- bg-slate-600 h-[16px] rounded-sm" />
    </div>
  );
}