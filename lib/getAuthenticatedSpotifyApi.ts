import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { spotifyApi } from "./spotify";

export type TimeRange = "longTerm" | "mediumTerm" | "shortTerm";

export async function getAuthenticatedSpotifyApi() {
  const session = await unstable_getServerSession(authOptions);

  if (session?.user.accessToken) {
    spotifyApi.setAccessToken(session.user.accessToken);
  }

  return spotifyApi;
}
