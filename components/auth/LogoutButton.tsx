"use client";

import { signOut } from "next-auth/react";
import { MdOutlineLogout } from "react-icons/md";

export function LogoutButton() {
  async function onLogout() {
    await signOut({ callbackUrl: "/login" });
  }

  return (
    <div>
      <button className="mt-2 text-2xl" onClick={onLogout} title="Logout">
        <MdOutlineLogout />
      </button>
    </div>
  );
}
