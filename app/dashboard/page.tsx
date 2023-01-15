import { LogoutButton } from "@/components/auth/LogoutButton";
import { getAuthenticatedSpotifyApi } from "@/lib/getAuthenticatedSpotifyApi";

async function getProfile() {
  const spotify = await getAuthenticatedSpotifyApi();
  const { body } = await spotify.getMe();
  return body;
}

export default async function Dashboard() {
  const profile = await getProfile();

  return (
    <main>
      Dashboard
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <LogoutButton />
    </main>
  );
}
