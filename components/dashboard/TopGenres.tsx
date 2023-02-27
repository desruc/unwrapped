"use client";

import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { capitalize, countBy } from "lodash";
import { useState } from "react";
import { TopItemsHeader } from "../TopItemsHeader";

function getTopGenres(artists: SpotifyApi.ArtistObjectFull[]) {
  const genres = artists.reduce((acc, artist) => {
    return [...acc, ...artist.genres];
  }, [] as string[]);

  const counts = countBy(genres);

  return {
    name: "genres",
    children: Object.entries(counts).map(([name, loc]) => ({
      name: capitalize(name),
      loc
    }))
  };
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
      <div className="rounded-lg bg-card-500 py-2 px-1 lg:flex lg:justify-center">
        <div className="h-[600px] w-[99%] hidden lg:block">
          <ResponsiveTreeMap
            data={topGenres}
            identity="name"
            value="loc"
            label={function ({ id }) {
              return id.length > 10 ? `${id.slice(0, 10)}...` : id;
            }}
            enableParentLabel={false}
            colors={{ scheme: "greens" }}
            labelSkipSize={12}
            borderWidth={0}
            nodeOpacity={0.5}
            animate={false}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 3]]
            }}
            tooltip={({ node }) => (
              <div className="p-2 rounded-md bg-gray-900">
                <strong>
                  {node.id}: {node.formattedValue}
                </strong>
              </div>
            )}
          />
        </div>
        <ul className="lg:hidden">
          {topGenres.children.slice(0, 20).map(({ name }) => (
            <li key={name}>
              <span className="font-semibold">{name}</span>
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
