import { getAuthenticatedSpotifyApi } from "@/lib/getAuthenticatedSpotifyApi";
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

  return <div>{JSON.stringify(data.items[0])}</div>;
}
