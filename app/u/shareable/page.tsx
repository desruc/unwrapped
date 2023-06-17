import DownloadImageButton from "@/components/shareable/DownloadButton";
import { getMe, getTopArtists } from "@/lib/getAuthenticatedSpotifyApi";
import { transformArtistsToTopItems } from "utils/transformToTopItem";

const SHAREABLE_ELEMENT_ID = "unwrapped-shareable";

export default async function Shareable() {
  const range = "short";
  const me = await getMe();

  const topArtists = await getTopArtists(5);
  const transformedArtists = transformArtistsToTopItems(topArtists[range]);

  return (
    <main>
      <section className="mb-12">
        <div
          id={SHAREABLE_ELEMENT_ID}
          className="w-[400px] rounded-md bg-card-500 p-4"
        >
          <div>
            <div className="mb-2">
              <span className="font-semibold text-heading">User:</span>{" "}
              {me.display_name}
            </div>
            <div className="mb-2">
              <span className="font-semibold text-heading">Range:</span> {range}
            </div>
            <h2>Top artists</h2>
            <ul>
              {transformedArtists.map((item, idx) => (
                <li key={item.id}>
                  <span className="font-semibold">{idx + 1}. </span>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center">unwrapped.jmscmrn.com</p>
        </div>
      </section>
      <DownloadImageButton elementId={SHAREABLE_ELEMENT_ID} />
    </main>
  );
}
