import AuthContext from "@/components/auth/AuthContext";
import localFont from "@next/font/local";

const gothamFont = localFont({
  src: [
    {
      path: "../fonts/gotham/GothamBook.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/gotham/GothamMedium_1.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../fonts/gotham/GothamBold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  display: "optional",
  variable: "--font-gotham"
});

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gothamFont.variable}>
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
