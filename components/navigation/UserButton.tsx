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
  const name = profile?.display_name;

  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 w-full p-2 rounded-lg cursor-pointer transition-all hover:bg-gray-900 hover:shadow-md">
      <div className="flex items-center">
        <div className="relative w-[50px] h-[50px]">
          <Image src={image} alt="Profile image" fill className="rounded-[50%]" />
        </div>
      </div>
      {name && (
        <div className="flex items-center">
          <span className="select-none block text-sm font-semibold tracking-wide">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}
