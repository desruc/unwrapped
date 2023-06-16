"use client";

import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { capitalize, countBy } from "lodash";
import { useState } from "react";
import { Chip } from "../Chip";
import { TopItemsHeader } from "../TopItemsHeader";

function getTopGenres(artists: SpotifyApi.ArtistObjectFull[]) {
  const genres = artists.reduce((acc, artist) => {
    return [...acc, ...artist.genres.map((genre) => capitalize(genre))];
  }, [] as string[]);

  const counts = countBy(genres);

  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

interface Props {
  artists: Record<TimeRange, SpotifyApi.ArtistObjectFull[]>;
}

export function TopGenresSection({ artists }: Props) {
  const [range, setTimeRange] = useState<TimeRange>("short");

  const topGenres = getTopGenres(artists[range]);

  return (
    <section>
      <TopItemsHeader
        title="Top genres"
        timeRange={range}
        setTimeRange={setTimeRange}
      />
      <div className="rounded-lg bg-card-500 py-2 px-1">
        <ul className="flex flex-wrap">
          {topGenres.slice(0, 5).map(([label]) => (
            <li key={label}>
              <Chip text={label} colorWeight={500} size="large" />
            </li>
          ))}
          {topGenres.slice(5).map(([label]) => (
            <li key={label}>
              <Chip key={label} text={label} colorWeight={200} />
            </li>
          ))}
        </ul>
      </div>
      <span className="text-xs my-4">
        Top genres are calculated by getting the top artists for the selected time
        range, getting all the unique genres associated with those artists and
        returning the count.
      </span>
    </section>
  );
}

export function TopGenresLoading() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Top genres</h2>
      <div className="rounded-lg bg-card-500 p-2 animate-pulse">
        <div className="bg-card-400 h-[600px] rounded-md" />
      </div>
    </section>
  );
}
