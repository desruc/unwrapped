import {
  MdOutlineDashboard,
  MdSentimentVerySatisfied,
  MdOutlineAlbum,
  MdOutlineLibraryMusic
} from "react-icons/md";
import type { ReactElement } from "react";
import { NavLink } from "./NavLink";
import { UserButton } from "../UserButton";
import { LogoutButton } from "@/components/auth/LogoutButton";

interface Props {
  children: ReactElement;
}

export function SideNav() {
  return (
    <nav className="flex flex-col w-[200px] bg-gray-800 p-4 items-center">
      <div className="flex flex-col flex-grow mt-4 w-full">
        <NavLink
          href="/u/dashboard"
          icon={<MdOutlineDashboard />}
          label="Dashboard"
        />
        <NavLink
          href="/u/top/artists"
          icon={<MdSentimentVerySatisfied />}
          label="Top artists"
        />
        <NavLink href="/u/top/albums" icon={<MdOutlineAlbum />} label="Top albums" />
        <NavLink
          href="/u/top/tracks"
          icon={<MdOutlineLibraryMusic />}
          label="Top tracks"
        />
      </div>
      {/* @ts-expect-error Async Server Component */}
      <UserButton />
      <LogoutButton />
    </nav>
  );
}
