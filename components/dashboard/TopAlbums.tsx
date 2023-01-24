import { getAuthenticatedSpotifyApi } from "@/lib/getAuthenticatedSpotifyApi";
import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { Suspense } from "react";
import { getTopAlbumsFromTracks } from "utils/getTopAlbums";
import { transformToTopItem } from "utils/transformToTopItem";
import { TopItemsGrid } from "../TopItemsGrid";

async function getTopTracks(
  limit = 50
): Promise<Record<TimeRange, SpotifyApi.TrackObjectFull[]>> {
  const spotifyApi = await getAuthenticatedSpotifyApi();

  const longTermRequest = spotifyApi.getMyTopTracks({
    time_range: "long_term",
    limit
  });

  const mediumTermRequest = spotifyApi.getMyTopTracks({
    time_range: "medium_term",
    limit
  });

  const shortTermRequest = spotifyApi.getMyTopTracks({
    time_range: "short_term",
    limit
  });

  return {
    longTerm: (await longTermRequest).body.items,
    mediumTerm: (await mediumTermRequest).body.items,
    shortTerm: (await shortTermRequest).body.items
  };
}

interface Props {
  maxAlbums?: number;
  timeRange: TimeRange;
}

export async function TopAlbums({ maxAlbums, timeRange }: Props) {
  return (
    <Suspense fallback={<div>Loading</div>}>
      {/* @ts-expect-error Async Server Component */}
      <TopAlbumsInner maxAlbums={maxAlbums} timeRange={timeRange} />
    </Suspense>
  );
}

async function TopAlbumsInner({ maxAlbums, timeRange }: Props) {
  const data = await getTopTracks();

  const albums = getTopAlbumsFromTracks(data[timeRange]);

  return <TopItemsGrid items={transformToTopItem(albums.slice(0, maxAlbums))} />;
}
