"use client";

import Image from "next/image";
import { getBlurDataUrl } from "utils/getBlurDataUrl";

interface Props {
  artist: string;
  image: string;
}

export function ArtistItem({ artist, image }: Props) {
  return (
    <li>
      <div className="grid gap-2 grid-cols-[auto_1fr_max-content] cursor-pointer rounded-md p-2 hover:bg-card-400 transition-colors duration-200">
        <div className="relative w-[50px] h-[50px]">
          <Image
            alt={artist}
            src={image}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            className="rounded-full"
            placeholder="blur"
            blurDataURL={getBlurDataUrl()}
          />
        </div>
        <div className="overflow-hidden flex items-center align-center">
          <p className="text-white font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
            {artist}
          </p>
        </div>
      </div>
    </li>
  );
}
