"use client";

interface Props {
  album: string;
  artist: string;
  image: string;
}

export function AlbumItem({ album, artist, image }: Props) {
  return (
    <li>
      <div className="grid gap-2 grid-cols-[auto_1fr_max-content] cursor-pointer rounded-md p-2 hover:bg-card-400 transition-colors duration-200">
        <div className="relative w-[50px] h-[50px]">
          <img
            alt={album}
            src={image}
            sizes="100%"
            className="rounded-md w-[50px] h-[50px]"
          />
        </div>
        <div className="overflow-hidden">
          <p className="text-white font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
            {album}
          </p>
          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">
            {artist}
          </p>
        </div>
      </div>
    </li>
  );
}
