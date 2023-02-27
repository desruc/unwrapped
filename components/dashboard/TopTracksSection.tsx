"use client";

import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { useState } from "react";
import { TopItemsHeader } from "../TopItemsHeader";
import { Track } from "@/components/Track";
import Link from "next/link";

interface Props {
  data: Record<TimeRange, SpotifyApi.TrackObjectFull[]>;
  hideFooter?: boolean;
}

export function TopTrackSection({ data, hideFooter }: Props) {
  const [range, setTimeRange] = useState<TimeRange>("short");

  return (
    <section className="col-span-2 mb-12">
      <TopItemsHeader
        title="Top tracks"
        timeRange={range}
        setTimeRange={setTimeRange}
      />
      <div className="rounded-lg bg-card-500 p-2">
        <ul className="lg:columns-2">
          {data[range].map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </ul>
      </div>
      {!hideFooter && (
        <div className="flex justify-end my-4">
          <Link href="/u/top/tracks">See more →</Link>
        </div>
      )}
    </section>
  );
}

export function TopTracksSectionLoading() {
  return (
    <section className="animate-pulse mb-12 col-span-2">
      <h2 className="text-2xl font-bold mb-4">Top tracks</h2>
      <div className="rounded-lg bg-card-500">
        <div className="grid grid-cols-2 gap-2 p-2">
          {[...Array(10)].map((_, i) => (
            <div key={`loading-${i}`} className="h-[60px] w-full bg-card-400" />
          ))}
        </div>
      </div>
    </section>
  );
}
