import { sortBy } from "lodash";

export function transformArtistsToTopItems(artists: SpotifyApi.ArtistObjectFull[]) {
  return artists.map((a) => {
    const sortedImages = sortBy(a.images, "height");

    return {
      id: a.id,
      title: a.name,
      imgSrc: sortedImages[sortedImages.length - 1].url,
      href: `/artist/${a.id}`
    };
  });
}

export function transformAlbumsToTopItems(
  albums: SpotifyApi.AlbumObjectFull[] | SpotifyApi.AlbumObjectSimplified[]
) {
  return albums.map((a) => {
    const sortedImages = sortBy(a.images, "height");

    return {
      id: a.id,
      title: a.name,
      subtitle: a.artists.map((a) => a.name).join(", "),
      imgSrc: sortedImages[sortedImages.length - 1].url,
      href: `/album/${a.id}`
    };
  });
}
