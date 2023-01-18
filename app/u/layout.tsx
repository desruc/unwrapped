import { SideNav } from "@/components/navigation/SideNav/SideNav";
import { Footer } from "@/components/Footer";

export default function AuthenticatedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideNav />
      <div className="flex-grow px-4 py-8">
        {children}
        <Footer />
      </div>
    </>
  );
}
