import {
  transformAlbumsToTopItems,
  transformArtistsToTopItems
} from "utils/transformToTopItem";
import { Track } from "../Track";
import { AlbumItem } from "./AlbumItem";
import { ArtistItem } from "./ArtistItem";

interface Props {
  elementId: string;
  user?: SpotifyApi.CurrentUsersProfileResponse;
  range: string;
  artists: SpotifyApi.ArtistObjectFull[];
  albums: SpotifyApi.AlbumObjectSimplified[];
  tracks: SpotifyApi.TrackObjectFull[];
}

export function ShareableCard({
  elementId,
  user,
  range,
  artists,
  albums,
  tracks
}: Props) {
  const parsedArtists = transformArtistsToTopItems(artists);
  const parsedAlbums = transformAlbumsToTopItems(albums);

  return (
    <div id={elementId} className="w-[400px] rounded-md bg-card-500 p-4">
      <div>
        <div className="mb-2">
          <span className="font-semibold text-heading">User:</span>{" "}
          {user?.display_name}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-heading">Range:</span> {range}
        </div>
        <div className="mb-4">
          <h2 className="mb-2 font-bold">Artists:</h2>
          <ul>
            {parsedArtists.map((item, idx) => (
              <ArtistItem key={item.id} artist={item.title} image={item.imgSrc} />
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 font-bold">Albums:</h2>
          <ul>
            {parsedAlbums.map((item, idx) => (
              <AlbumItem
                key={item.id}
                artist={item.subtitle}
                album={item.title}
                image={item.imgSrc}
              />
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 font-bold">Tracks:</h2>
          <ul>
            {tracks.map((item, idx) => (
              <Track key={item.id} track={item} />
            ))}
          </ul>
        </div>
      </div>
      <p className="text-heading text-center font-bold">unwrapped.jmscmrn.com</p>
      <p className="text-center text-xs">powered by Spotify</p>
    </div>
  );
}
