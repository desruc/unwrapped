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

  return (
    <div className="relative">
      <div className="relative w-full h-[0px] pb-[200px]">
        <div className="absolute h-full w-full max-h-[200px]">
          <Image
            src={data.items[0].images[0].url}
            style={{ objectFit: "cover", objectPosition: "top" }}
            fill
            alt="Artist"
          />
        </div>
      </div>
      <span>hello</span>
    </div>
  );
}
