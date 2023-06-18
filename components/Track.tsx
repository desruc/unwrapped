"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDuration } from "utils/formatDuration";
import { getBlurDataUrl } from "utils/getBlurDataUrl";

interface TrackProps {
  track: SpotifyApi.TrackObjectFull | SpotifyApi.RecommendationTrackObject;
  useImgTag?: boolean;
}

export function Track({ track, useImgTag }: TrackProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/u/track/${track.id}`);
  };

  const commonImageProps = {
    alt: track.artists[0].name,
    src: track.album.images[0].url,
    sizes: "100%",
    className: "rounded-sm"
  };

  const imgJsx = useImgTag ? (
    // eslint-disable-next-line
    <img {...commonImageProps} />
  ) : (
    <Image
      {...commonImageProps}
      style={{ objectFit: "cover" }}
      fill
      blurDataURL={getBlurDataUrl()}
      placeholder="blur"
    />
  );

  return (
    <li>
      <div
        className="grid gap-2 grid-cols-[auto_1fr_max-content] cursor-pointer rounded-md p-2 hover:bg-card-400 transition-colors duration-200"
        onClick={onClick}
      >
        <div className="relative w-[50px] h-[50px]">{imgJsx}</div>
        <div className="overflow-hidden">
          <p className="text-white font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
            {track.name}
          </p>
          <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
            {track.explicit && (
              <span className="p-1 bg-card-900 rounded-md mr-2">E</span>
            )}
            {track.artists &&
              track.artists.map((artist, i) => (
                <Link
                  key={`${artist.id}-${track.id}-${i}`}
                  href={`/u/artist/${artist.id}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>
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
              <span>{track.album.name}</span>
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
