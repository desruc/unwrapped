"use client";

import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { useState } from "react";
import { TopItemsHeader } from "../TopItemsHeader";
import { Track } from "@/components/Track";

interface Props {
  data: Record<TimeRange, SpotifyApi.TrackObjectFull[]>;
}

export function TopTrackSection({ data }: Props) {
  const [range, setTimeRange] = useState<TimeRange>("short");

  return (
    <section className="mb-12">
      <TopItemsHeader
        title="Top tracks"
        timeRange={range}
        setTimeRange={setTimeRange}
      />
      <div className="rounded-lg bg-gray-800 p-2 lg:pb-0">
        <ul className="lg:columns-2">
          {data[range].map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TopTracksSectionLoading() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Top tracks</h2>
      <div className="rounded-lg bg-gray-800">
        <div className="grid grid-cols-2 gap-2 p-2 mb-12">
          {[...Array(10)].map((_, i) => (
            <div key={`loading-${i}`} className="h-[65px] w-full bg-gray-400" />
          ))}
        </div>
      </div>
    </section>
  );
}
