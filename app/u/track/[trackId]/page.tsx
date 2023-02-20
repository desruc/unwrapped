import { Track } from "@/components/Track";
import { TrackAudioFeatures } from "@/components/track/TrackAudioFeatures";
import { TrackAudioAnalysis } from "@/components/track/TrackAudioAnalysis";
import {
  getTrack,
  getSimilarTracks,
  getAudioFeatures,
  getAudioAnalysis
} from "@/lib/getAuthenticatedSpotifyApi";
import Image from "next/image";
import Link from "next/link";
import { formatDuration } from "utils/formatDuration";
import { getBlurDataUrl } from "utils/getBlurDataUrl";

interface Props {
  params: { trackId: string };
}

export default async function ArtistPage({ params }: Props) {
  const track = await getTrack(params.trackId);
  const similarTracks = await getSimilarTracks(params.trackId);
  const audioFeatures = await getAudioFeatures(params.trackId);
  const audioAnalysis = await getAudioAnalysis(params.trackId);

  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 mb-8">
        <div className="flex justify-center">
          <Image
            src={track.album.images[1].url}
            width={track.album.images[1].width}
            height={track.album.images[1].height}
            alt="Album cover"
            placeholder="blur"
            blurDataURL={getBlurDataUrl()}
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-2xl xl:text-6xl font-bold mb-6">{track.name}</h2>
          <Link
            href={`/u/album/${track.album.id}`}
            className="text-sm mb-2 w-fit"
            title={`Go to ${track.album.name}`}
          >
            {track.album.name}
          </Link>
          <div className="text-sm mb-2">
            {track.artists.map(({ id: artistId, name: artistName }) => (
              <span key={artistId}>
                <Link
                  href={`/u/artist/${artistId}`}
                  className="font-semibold"
                  title={`Go to ${artistName}`}
                >
                  {artistName}
                </Link>{" "}
                &#8226;{" "}
              </span>
            ))}
            <span>{new Date(track.album.release_date).getFullYear()} &#8226; </span>
            <span className="text-gray-600">
              {formatDuration(track.duration_ms)}
            </span>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <section>
          <h2 className="text-2xl font-bold mb-4">Audio features</h2>
          <div className="rounded-lg bg-gray-800 p-2 lg:pb-0 h-[360px]">
            <TrackAudioFeatures audioFeatures={audioFeatures} />
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Audio analysis</h2>
          <div className="rounded-lg bg-gray-800 p-2 grow">
            <TrackAudioAnalysis track={track} analysis={audioAnalysis} />
          </div>
        </section>
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
          <div className="rounded-lg bg-gray-800 p-2">
            <ul className="lg:columns-2">
              {similarTracks.map((track) => (
                <Track key={track.id} track={track} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
