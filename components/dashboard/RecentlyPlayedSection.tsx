"use client";

import { Track } from "@/components/Track";

interface Props {
  tracks: SpotifyApi.PlayHistoryObject[];
}

export function RecentlyPlayedSection({ tracks }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Recently played</h2>
      <div className="rounded-lg bg-card-500 p-2">
        <ul>
          {tracks.map((track) => (
            <Track key={track.track.id} track={track.track} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export function RecentlyPlayedSectionLoading() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Top tracks</h2>
      <div className="rounded-lg bg-card-500">
        <div className="grid grid-cols-1 gap-2 p-2 mb-12">
          {[...Array(5)].map((_, i) => (
            <div key={`loading-${i}`} className="h-[60px] w-full bg-card-400" />
          ))}
        </div>
      </div>
    </section>
  );
}
