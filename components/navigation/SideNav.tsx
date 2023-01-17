"use client";

import Link from "next/link";
import { useState } from "react";

import {
  MdOutlineDashboard,
  MdSentimentVerySatisfied,
  MdOutlineAlbum,
  MdOutlineLibraryMusic
} from "react-icons/md";

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col max-w-[200px] bg-gray-800 p-4 items-center">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">unwrapped</span>
      </div>
      <div className="flex flex-col flex-grow mt-4">
        <Link
          href="/"
          className="flex items-center mt-4 py-2 px-6 bg-gray-900 rounded-lg shadow-md "
        >
          <MdOutlineDashboard />
          Dashboard
        </Link>
        <Link
          href="/top/artists"
          className="flex items-center mt-4 py-2 px-6 bg-gray-900 rounded-lg shadow-md"
        >
          <MdSentimentVerySatisfied />
          Top artists
        </Link>
        <Link
          href="/top/albums"
          className="flex items-center mt-4 py-2 px-6 bg-gray-900 rounded-lg shadow-md"
        >
          <MdOutlineAlbum />
          Top albums
        </Link>
        <Link
          href="/top/tracks"
          className="flex items-center mt-4 py-2 px-6 bg-gray-900 rounded-lg shadow-md"
        >
          <MdOutlineLibraryMusic />
          Top tracks
        </Link>
      </div>
    </nav>
  );
}
