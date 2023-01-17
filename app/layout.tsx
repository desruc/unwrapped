import AuthContext from "@/components/auth/AuthContext";
import { SideNav } from "@/components/navigation/SideNav/SideNav";
import { Footer } from "@/components/Footer";

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex min-h-[100vh]">
        <AuthContext>
          <SideNav />
          <div className="flex-grow px-4 py-8">
            {children}
            <Footer />
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
