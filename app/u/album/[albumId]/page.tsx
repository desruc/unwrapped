import { getAlbum } from "@/lib/getAuthenticatedSpotifyApi";
import Image from "next/image";
import Link from "next/link";
import { formatDuration } from "utils/formatDuration";
import { getAlbumDuration } from "utils/getAlbumDuration";

interface Props {
  params: { albumId: string };
}

export default async function AlbumPage({ params }: Props) {
  const album = await getAlbum(params.albumId);

  return (
    <main>
      <section className="grid grid-cols-[auto_1fr] gap-6 mb-8">
        <Image
          src={album.images[1].url}
          width={album.images[1].width}
          height={album.images[1].height}
          alt="Album cover"
        />
        <div className="flex flex-col justify-end">
          <span className="text-xs font-bold mb-2">
            {album.album_type.toUpperCase()}
          </span>
          <h2 className="text-6xl font-bold mb-6">{album.name}</h2>
          <div className="text-sm mb-2">
            {album.artists.map(({ id: artistId, name: artistName }) => (
              <span key={artistId}>
                <Link href={`/u/artist/${artistId}`} className="font-semibold">
                  {artistName}
                </Link>{" "}
                &#8226;{" "}
              </span>
            ))}
            <span>{new Date(album.release_date).getFullYear()} &#8226; </span>
            <span> {album.tracks.items.length} songs, </span>
            <span className="text-gray-600">{getAlbumDuration(album)}</span>
          </div>
          <div>
            {album.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-12">
        <ul>
          {album.tracks.items.map((track) => (
            <li
              key={track.id}
              className="[&:not(:last-child)]:border-b-[1px] border-gray-400 transition-colors hover:border-b-green-400"
            >
              <Link
                href={`/u/track/${track.id}`}
                className="flex justify-between p-2"
              >
                <span>{track.name}</span>
                <span>{formatDuration(track.duration_ms)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
