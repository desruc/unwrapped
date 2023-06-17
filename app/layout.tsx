import AuthContext from "@/components/auth/AuthContext";
import { Figtree } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "unwrapped",
  description:
    "unwrapped is a web app that utilizes the Spotify API to provide a visual representation of your personalized data.",
  icons: "/favicon.ico"
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"]
});

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <head />
      <body className="min-h-[100vh] overflow-x-hidden">
        <AuthContext>
          <div className="relative flex">{children}</div>
        </AuthContext>
      </body>
    </html>
  );
}
