import Image from "next/image";
import { getAuthenticatedSpotifyApi } from "@/lib/getAuthenticatedSpotifyApi";
import { Suspense } from "react";

async function getProfile() {
  const spotify = await getAuthenticatedSpotifyApi();
  const { body } = await spotify.getMe();
  return body;
}

export async function UserButton() {
  return (
    <Suspense fallback={<div>loading</div>}>
      {/* @ts-expect-error Async Server Component */}
      <UserButtonInner />
    </Suspense>
  );
}

async function UserButtonInner() {
  const profile = await getProfile();

  const image = profile?.images?.[0]?.url ?? "placeholder image";

  return (
    <div className="relative w-[60px] h-[60px]">
      <Image src={image} alt="Profile image" fill className="rounded-[50%]" />
    </div>
  );
}
