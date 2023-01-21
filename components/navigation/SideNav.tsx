"use client";

import clsx from "clsx";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineDashboard,
  MdSentimentVerySatisfied,
  MdOutlineAlbum,
  MdOutlineLibraryMusic
} from "react-icons/md";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { UserButton } from "./UserButton";

export function SideNav() {
  const [open, setOpen] = useState(true);

  const navClassName = clsx("flex flex-col bg-gray-800 p-2 items-center", {
    "w-[200px]": open,
    "w-[56px]": !open
  });

  const titleClassName = clsx("tracking-wide font-bold flex items-center", {
    hidden: !open
  });

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <nav className={navClassName}>
      <div className="grid grid-cols-[1fr_auto] w-full border-b-2 border-b-gray-500 py-4">
        <h2 className={titleClassName}>unwrapped.</h2>
        <button
          onClick={toggleDrawer}
          className="text-2xl p-2 rounded-lg transition-all hover:bg-gray-900 hover:shadow-md"
          title="Toggle drawer"
        >
          {open ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </button>
      </div>
      <div className="flex flex-col flex-grow mt-4 w-full">
        <NavLink
          href="/u/dashboard"
          icon={<MdOutlineDashboard />}
          label="Dashboard"
          open={open}
        />
        <NavLink
          href="/u/top/artists"
          icon={<MdSentimentVerySatisfied />}
          label="Top artists"
          open={open}
        />
        <NavLink
          href="/u/top/albums"
          icon={<MdOutlineAlbum />}
          label="Top albums"
          open={open}
        />
        <NavLink
          href="/u/top/tracks"
          icon={<MdOutlineLibraryMusic />}
          label="Top tracks"
          open={open}
        />
      </div>
      <UserButton drawerOpen={open} />
    </nav>
  );
}
