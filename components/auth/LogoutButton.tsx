"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  async function onLogout() {
    await signOut({ callbackUrl: "/login" });
  }

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
