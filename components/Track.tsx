"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDuration } from "utils/formatDuration";

interface TrackProps {
  track: SpotifyApi.TrackObjectFull;
}

export function Track({ track }: TrackProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`u/track/${track.id}`);
  };

  return (
    <li className="[&:not(:last-child)]:mb-2">
      <div
        className="grid gap-2 grid-cols-[auto_1fr_max-content] cursor-pointer rounded-md p-2 hover:bg-gray-900 transition-colors duration-200"
        onClick={onClick}
      >
        <div className="relative w-[50px] h-[50px]">
          <Image
            alt={track.artists[0].name}
            src={track.album.images[0].url}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            className="rounded-sm"
          />
        </div>
        <div className="overflow-hidden">
          <p className="font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
            {track.name}
          </p>
          <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
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
            &nbsp;&middot;&nbsp;&nbsp;
            <Link
              href={`/u/album/${track.album.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs">{track.album.name}</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          {track.duration_ms && <span>{formatDuration(track.duration_ms)}</span>}
        </div>
      </div>
    </li>
  );
}
