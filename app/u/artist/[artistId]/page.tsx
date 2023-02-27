import { ArtistHero } from "@/components/artist/ArtistHero";
import { Card, CardLoading } from "@/components/Card";
import { Track } from "@/components/Track";
import {
  getArtist,
  getArtistAlbums,
  getArtistPopularTracks,
  getRelatedArtists
} from "@/lib/getAuthenticatedSpotifyApi";
import { capitalize } from "lodash";
import { Suspense } from "react";

interface Props {
  params: { artistId: string };
}

export default async function ArtistPage({ params }: Props) {
  const artist = await getArtist(params.artistId);

  return (
    <main>
      <ArtistHero artist={artist} />
      <Suspense fallback={<TracksLoading />}>
        {/* @ts-expect-error Async Server Component */}
        <PopularTracks artistId={params.artistId} />
      </Suspense>
      <Suspense fallback={<AlbumsLoading />}>
        {/* @ts-expect-error Async Server Component */}
        <Albums artistId={params.artistId} />
      </Suspense>
      <Suspense fallback={<ArtistsLoading />}>
        {/* @ts-expect-error Async Server Component */}
        <RelatedArtists artistId={params.artistId} />
      </Suspense>
    </main>
  );
}

interface PopularTracksProps {
  artistId: string;
}

async function PopularTracks({ artistId }: PopularTracksProps) {
  const tracks = await getArtistPopularTracks(artistId);
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Popular</h2>
      <div className="rounded-lg bg-card-500 p-2">
        <ul className="lg:columns-2">
          {tracks.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface AlbumsProps {
  artistId: string;
}

async function Albums({ artistId }: AlbumsProps) {
  const albums = await getArtistAlbums(artistId, "AU");
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Discography</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {albums.map((album) => (
          <Card
            key={album.id}
            href={`/u/album/${album.id}`}
            image={album.images[0]}
            title={album.name}
            description={`${new Date(
              album.release_date
            ).getFullYear()} • ${capitalize(album.album_type)}`}
          />
        ))}
      </div>
    </section>
  );
}

async function RelatedArtists({ artistId }: AlbumsProps) {
  const artists = await getRelatedArtists(artistId);
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Fans also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {artists.map((artist) => (
          <Card
            key={artist.id}
            href={`/u/artist/${artist.id}`}
            image={artist.images[0]}
            title={artist.name}
            description="Artist"
            roundImage
          />
        ))}
      </div>
    </section>
  );
}

function TracksLoading() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Popular</h2>
      <div className="rounded-lg bg-card-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 mb-12">
          {[...Array(10)].map((_, i) => (
            <div key={`loading-${i}`} className="h-[65px] w-full bg-card-400" />
          ))}
        </div>
      </div>
    </section>
  );
}

function AlbumsLoading() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Discography</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...new Array(18)].map((a, idx) => (
          <CardLoading key={`album-loading-${idx}`} />
        ))}
      </div>
    </section>
  );
}

function ArtistsLoading() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Fans also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...new Array(18)].map((_, idx) => (
          <CardLoading key={`album-loading-${idx}`} roundImage />
        ))}
      </div>
    </section>
  );
}
