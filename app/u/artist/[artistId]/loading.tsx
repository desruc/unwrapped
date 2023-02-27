import { CardLoading } from "@/components/Card";

export default async function ArtistLoadingPage() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] animate-pulse gap-6 mb-8">
        <div className="bg-card-400 min-h-[300px] min-w-[300px]" />
        <div className="flex flex-col justify-end">
          <div className="bg-card-400 w-[40px] h-[16px] mb-2" />
          <h2 className="text-2xl xl:text-6xl font-bold mb-6 bg-card-400 text-card-400 max-w-[220px] min-h-[60px]" />
          <div className="bg-card-400 block h-[16px] max-w-[160px] mb-2" />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular</h2>
        <div className="rounded-lg bg-card-500">
          <div className="grid grid-cols-2 gap-2 animate-pulse p-2 mb-12">
            {[...Array(10)].map((_, i) => (
              <div key={`loading-${i}`} className="h-[65px] w-full bg-card-400" />
            ))}
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Discography</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...new Array(18)].map((_, idx) => (
            <CardLoading key={`album-loading-${idx}`} />
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Fans also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...new Array(18)].map((_, idx) => (
            <CardLoading key={`album-loading-${idx}`} roundImage />
          ))}
        </div>
      </section>
    </main>
  );
}
