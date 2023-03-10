import AuthContext from "@/components/auth/AuthContext";
import { Figtree } from "@next/font/google";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"]
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
      <body className="min-h-[100vh] overflow-x-hidden">
        <AuthContext>
          <div className="relative flex">{children}</div>
        </AuthContext>
      </body>
    </html>
  );
}
