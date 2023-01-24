"use client";

import { TopItemsGrid } from "@/components/TopItemsGrid";
import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import Link from "next/link";
import { useState } from "react";
import { transformToTopItem } from "utils/transformToTopItem";
import { TopItemsHeader } from "../TopItemsHeader";

interface Props {
  data: Record<TimeRange, SpotifyApi.ArtistObjectFull[]>;
}

export function TopArtistsSection({ data }: Props) {
  const [range, setTimeRange] = useState<TimeRange>("short");

  return (
    <section className="mb-12">
      <TopItemsHeader
        title="Top artists"
        timeRange={range}
        setTimeRange={setTimeRange}
      />
      <div className="rounded-lg bg-gray-800">
        <TopItemsGrid items={transformToTopItem(data[range])} />
      </div>
      <Link href="/u/top/artists">See more</Link>
    </section>
  );
}
