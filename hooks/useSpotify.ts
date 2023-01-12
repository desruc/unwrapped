import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { spotifyApi } from "@/lib/spotify";

export function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user.accessToken && session.user.refreshToken) {
      spotifyApi.setAccessToken(session.user.accessToken);
      spotifyApi.setRefreshToken(session.user.refreshToken);
    }
  }, [session]);

  return spotifyApi;
}
