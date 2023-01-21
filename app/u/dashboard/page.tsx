import { Hero } from "@/components/Hero";

export default async function Dashboard() {
  return (
    <main>
      Dashboard
      {/* @ts-expect-error Async Server Component */}
      <Hero />
    </main>
  );
}
