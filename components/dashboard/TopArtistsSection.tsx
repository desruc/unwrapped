"use client";

import { TopItemsGrid } from "@/components/TopItemsGrid";
import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import Link from "next/link";
import { useState } from "react";
import { transformArtistsToTopItems } from "utils/transformToTopItem";
import { TopItemsHeader } from "../TopItemsHeader";

interface Props {
  data: Record<TimeRange, SpotifyApi.ArtistObjectFull[]>;
  hideFooter?: boolean;
}

export function TopArtistsSection({ data, hideFooter }: Props) {
  const [range, setTimeRange] = useState<TimeRange>("short");

  return (
    <section className="mb-12">
      <TopItemsHeader
        title="Top artists"
        timeRange={range}
        setTimeRange={setTimeRange}
      />
      <div className="rounded-lg bg-gray-800">
        <TopItemsGrid items={transformArtistsToTopItems(data[range])} />
      </div>
      {!hideFooter && (
        <div className="flex justify-end my-4">
          <Link href="/u/top/artists">See more →</Link>
        </div>
      )}
    </section>
  );
}
