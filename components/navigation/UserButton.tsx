"use client";

import { spotifyApi } from "@/lib/spotify";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  drawerOpen: boolean;
}

export function UserButton({ drawerOpen }: Props) {
  const session = useSession();

  const [profile, setProfile] = useState<SpotifyApi.UserProfileResponse | null>(
    null
  );

  useEffect(() => {
    async function getProfile() {
      if (!session.data?.user?.accessToken) return;

      spotifyApi.setAccessToken(session.data.user.accessToken);
      const { body } = await spotifyApi.getMe();
      setProfile(body);
    }

    getProfile();
  }, [session]);

  if (!profile) return <div>Loading</div>;

  const image = profile?.images?.[0]?.url ?? "placeholder image";
  const displayName = profile?.display_name;

  const imageWrapClassName = clsx("relative", {
    "w-[24px] h-[24px]": !drawerOpen,
    "w-[40px] h-[40px]": drawerOpen
  });

  const userNameClassName = clsx(
    "select-none block text-sm font-semibold tracking-wide",
    { hidden: !drawerOpen }
  );

  return (
    <div
      title="User"
      className="grid grid-cols-[auto_1fr] gap-3 w-full px-2 py-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-900 hover:shadow-md"
    >
      <div className="flex items-center">
        <div className={imageWrapClassName}>
          <Image
            src={image}
            alt="Profile image"
            fill
            sizes="50%"
            className="rounded-[50%]"
          />
        </div>
      </div>
      {displayName && (
        <div className="flex items-center">
          <span className={userNameClassName}>{displayName}</span>
        </div>
      )}
    </div>
  );
}
