"use client";

import { TopItemsGrid } from "@/components/TopItemsGrid";
import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import Link from "next/link";
import { useState } from "react";
import { getTopAlbumsFromTracks } from "utils/getTopAlbums";
import { transformToTopItem } from "utils/transformToTopItem";
import { TopItemsHeader } from "../TopItemsHeader";

interface Props {
  data: Record<TimeRange, SpotifyApi.TrackObjectFull[]>;
}

export function TopAlbumsSection({ data }: Props) {
  const [range, setTimeRange] = useState<TimeRange>("short");

  const albums = getTopAlbumsFromTracks(data[range]);

  return (
    <section>
      <TopItemsHeader
        title="Top albums"
        timeRange={range}
        setTimeRange={setTimeRange}
      />
      <div className="rounded-lg bg-gray-800">
        <TopItemsGrid items={transformToTopItem(albums.slice(0, 8))} />
      </div>
      <Link href="/u/top/artists">See more</Link>
    </section>
  );
}
