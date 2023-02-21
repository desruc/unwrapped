"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  async function onLogin() {
    await signIn("spotify", { callbackUrl: "/u/dashboard" });
  }

  return (
    <button
      className="rounded-md font-bold bg-green-600 py-2 px-4 text-white"
      onClick={onLogin}
    >
      Login
    </button>
  );
}
