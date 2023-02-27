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
import { LogoutButton } from "../auth/LogoutButton";

export function SideNav() {
  const [open, setOpen] = useState(false);

  const widthClass = open ? "w-[200px]" : "w-[56px]";

  const titleClassName = clsx("tracking-wide font-bold flex items-center", {
    hidden: !open
  });

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <div className={`${widthClass} flex-0`}>
      <nav
        className={`${widthClass} fixed top-0 left-0 outline-none h-[100vh] flex flex-col bg-black p-2 items-center`}
      >
        <div className="grid grid-cols-[1fr_auto] w-full border-b-2 border-b-gray-500 py-4">
          <h2 className={titleClassName}>unwrapped.</h2>
          <button
            onClick={toggleDrawer}
            className="hidden md:block text-2xl p-2 rounded-lg transition-colors hover:bg-gray-900 hover:shadow-md"
            title="Toggle drawer"
          >
            {open ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
          </button>
          <h2 className="md:hidden text-center text-2xl">
            u<span className="text-green-500">.</span>
          </h2>
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
        <div className="md:hidden">
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
}
