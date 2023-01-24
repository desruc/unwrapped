export function transformToTopItem<
  T extends { id: string; name: string; images: SpotifyApi.ImageObject[] }
>(data: T[]) {
  return data.map((d) => ({
    id: d.id,
    title: d.name,
    imgSrc: d.images[0].url
  }));
}
