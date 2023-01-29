import { getAuthenticatedSpotifyApi } from "@/lib/getAuthenticatedSpotifyApi";
import Image from "next/image";
import { Suspense } from "react";

async function getData() {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getMyTopArtists({ time_range: "long_term" });
  return body;
}

export async function Hero() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <HeroInner />
    </Suspense>
  );
}

async function HeroInner() {
  const data = await getData();

  const highestRes = Math.max.apply(
    Math,
    data.items[0].images.map(function (o) {
      return o.height ?? 0;
    })
  );

  const image = data.items[0].images.find((image) => image.height === highestRes);

  return (
    <div className="relative h-[500px]">
      <div className="h-full">
        {image && (
          <Image
            src={image.url}
            style={{ objectFit: "cover", objectPosition: "top center" }}
            fill
            alt="Artist"
          />
        )}
      </div>
    </div>
  );
}
