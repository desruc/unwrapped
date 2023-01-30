import AuthContext from "@/components/auth/AuthContext";
import { Figtree } from "@next/font/google";

const figtree = Figtree({
  variable: "--font-figtree"
});

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-full min-h-[100vh]">
        <AuthContext>
          <div className="flex">{children}</div>
        </AuthContext>
      </body>
    </html>
  );
}
