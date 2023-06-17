"use client";

import { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { useState } from "react";
import { getTopAlbumsFromTracks } from "utils/getTopAlbums";
import { RangeButtons } from "../RangeButtons";
import DownloadImageButton from "./DownloadImageButton";
import { ShareableCard } from "./ShareableCard";

const SHAREABLE_ELEMENT_ID = "unwrapped-shareable";

interface Props {
  user: SpotifyApi.CurrentUsersProfileResponse;
  artists: Record<TimeRange, SpotifyApi.ArtistObjectFull[]>;
  tracks: Record<TimeRange, SpotifyApi.TrackObjectFull[]>;
}

export function ShareableCardSection({ user, artists, tracks }: Props) {
  const [range, setTimeRange] = useState<TimeRange>("short");

  const artistsForRange = artists[range];
  const albumsForRange = getTopAlbumsFromTracks(tracks[range]).slice(0, 5);
  const tracksForRange = tracks[range].slice(0, 5);

  return (
    <main>
      <section className="mb-12">
        <RangeButtons timeRange={range} setTimeRange={setTimeRange} />
        <ShareableCard
          elementId={SHAREABLE_ELEMENT_ID}
          range={range}
          user={user}
          artists={artistsForRange}
          albums={albumsForRange}
          tracks={tracksForRange}
        />
      </section>
      <DownloadImageButton elementId={SHAREABLE_ELEMENT_ID} />
    </main>
  );
}
