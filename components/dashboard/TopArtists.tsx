import { getAuthenticatedSpotifyApi } from "@/lib/getAuthenticatedSpotifyApi";
import { Suspense } from "react";
import { transformToTopItem } from "utils/transformToTopItem";
import { TopItemsGrid } from "../TopItemsGrid";

async function getTopArtists(limit = 50) {
  const spotifyApi = await getAuthenticatedSpotifyApi();

  const longTermRequest = spotifyApi.getMyTopArtists({
    time_range: "long_term",
    limit
  });

  const mediumTermRequest = spotifyApi.getMyTopArtists({
    time_range: "medium_term",
    limit
  });

  const shortTermRequest = spotifyApi.getMyTopArtists({
    time_range: "short_term",
    limit
  });

  return {
    longTerm: (await longTermRequest).body.items,
    mediumTerm: (await mediumTermRequest).body.items,
    shortTerm: (await shortTermRequest).body.items
  };
}

export async function TopArtists() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      {/* @ts-expect-error Async Server Component */}
      <TopArtistsInner />
    </Suspense>
  );
}

async function TopArtistsInner() {
  const data = await getTopArtists(8);

  return <TopItemsGrid items={transformToTopItem(data.longTerm)} />;
}
