"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  async function onLogin() {
    await signIn("spotify", { callbackUrl: "/dashboard" });
  }

  return (
    <div>
      <button onClick={onLogin}>Login to spotify</button>
    </div>
  );
}
