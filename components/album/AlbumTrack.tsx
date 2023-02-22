"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDuration } from "utils/formatDuration";

interface TrackProps {
  track: SpotifyApi.TrackObjectSimplified;
}

export function AlbumTrack({ track }: TrackProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`u/track/${track.id}`);
  };

  return (
    <li className="[&:not(:last-child)]:mb-2">
      <div
        className="grid gap-2 grid-cols-[auto_1fr_max-content] cursor-pointer rounded-md p-2 hover:bg-card-500 transition-colors duration-200"
        onClick={onClick}
      >
        <div className="flex items-center pr-2 text-white">{track.track_number}</div>
        <div className="overflow-hidden">
          <p className="font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap text-white">
            {track.name}
          </p>
          <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
            {track.explicit && (
              <span className="p-1 bg-card-500 rounded-md mr-2">E</span>
            )}
            {track.artists &&
              track.artists.map((artist, i) => (
                <Link
                  key={`${artist.id}-${track.id}-${i}`}
                  href={`/u/artist/${artist.id}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-xs">
                    {artist.name}
                    {track.artists.length > 0 && i === track.artists.length - 1
                      ? ""
                      : ","}
                    &nbsp;
                  </span>
                </Link>
              ))}
          </div>
        </div>
        <div className="flex items-center">
          {track.duration_ms && <span>{formatDuration(track.duration_ms)}</span>}
        </div>
      </div>
    </li>
  );
}
