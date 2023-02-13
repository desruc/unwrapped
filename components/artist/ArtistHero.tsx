"use client";

import Image from "next/image";
import { getBlurDataUrl } from "utils/getBlurDataUrl";

interface Props {
  artist: SpotifyApi.ArtistObjectFull;
}

export function ArtistHero({ artist }: Props) {
  const highestRes = Math.max.apply(
    Math,
    artist.images.map(function (o) {
      return o.height ?? 0;
    })
  );

  const image = artist.images.find((image) => image.height === highestRes);

  return (
    <section className="grid grid-cols-[auto_1fr] gap-6 mb-8">
      {image && (
        <Image
          src={image.url}
          width={300}
          height={300}
          alt="Artist cover"
          placeholder="blur"
          blurDataURL={getBlurDataUrl()}
        />
      )}
      <div className="flex flex-col justify-end">
        <h2 className="text-2xl xl:text-6xl font-bold mb-6">{artist.name}</h2>
        <div className="text-sm mb-2">
          <span className="uppercase">
            {artist.followers.total.toLocaleString()} followers{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
