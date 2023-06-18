"use client";

import { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { useState } from "react";
import { getTopAlbumsFromTracks } from "utils/getTopAlbums";
import { RangeButtons } from "../RangeButtons";
import { CardType, CardTypeButtons } from "./CardTypeButtons";
import DownloadImageButton from "./DownloadImageButton";
import { SummaryCard } from "./cards/SummaryCard";
import { ArtistCard } from "./cards/ArtistCard";
import { TracksCard } from "./cards/TracksCard";
import { AlbumCard } from "./cards/AlbumCard";

const SHAREABLE_ELEMENT_ID = "unwrapped-shareable";
const FILENAME_PREFIX = "unwrapped";

interface Props {
  user: SpotifyApi.CurrentUsersProfileResponse;
  artists: Record<TimeRange, SpotifyApi.ArtistObjectFull[]>;
  tracks: Record<TimeRange, SpotifyApi.TrackObjectFull[]>;
}

export function ShareableCardSection({ user, artists, tracks }: Props) {
  const [cardType, setCardType] = useState<CardType>("summary");
  const [range, setTimeRange] = useState<TimeRange>("short");

  const artistsForRange = artists[range];
  const albumsForRange = getTopAlbumsFromTracks(tracks[range]);
  const tracksForRange = tracks[range];

  const commonCardProps = {
    elementId: SHAREABLE_ELEMENT_ID,
    range,
    user
  };

  const cards = {
    summary: (
      <SummaryCard
        {...commonCardProps}
        artists={artistsForRange.slice(0, 5)}
        albums={albumsForRange.slice(0, 5)}
        tracks={tracksForRange.slice(0, 5)}
      />
    ),
    artists: (
      <ArtistCard {...commonCardProps} artists={artistsForRange.slice(0, 10)} />
    ),
    albums: <AlbumCard {...commonCardProps} albums={albumsForRange.slice(0, 10)} />,
    tracks: <TracksCard {...commonCardProps} tracks={tracks[range].slice(0, 10)} />
  };

  return (
    <main>
      <section className="mb-12 flex flex-col justify-center items-center">
        <div className="mb-8">
          <div className="flex flex-col justify-center items-center">
            <CardTypeButtons cardType={cardType} setCardType={setCardType} />
            <RangeButtons timeRange={range} setTimeRange={setTimeRange} />
            <DownloadImageButton
              elementId={SHAREABLE_ELEMENT_ID}
              filename={`${FILENAME_PREFIX}-${cardType}-${range}`}
              label="Download image"
            />
          </div>
        </div>
        {cards[cardType]}
      </section>
    </main>
  );
}
