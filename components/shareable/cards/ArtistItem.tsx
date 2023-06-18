"use client";

interface Props {
  artist: string;
  image: string;
}

export function ArtistItem({ artist, image }: Props) {
  return (
    <li>
      <div className="grid gap-2 grid-cols-[auto_1fr_max-content] cursor-pointer rounded-md p-2 hover:bg-card-400 transition-colors duration-200">
        <div className="relative w-[50px] h-[50px]">
          <img
            alt={artist}
            src={image}
            sizes="100%"
            className="rounded-full w-[50px] h-[50px]"
          />
        </div>
        <div className="overflow-hidden flex items-center align-center">
          <p className="text-white font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">
            {artist}
          </p>
        </div>
      </div>
    </li>
  );
}
