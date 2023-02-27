export default async function AlbumLoading() {
  return (
    <main>
      <section className="grid grid-cols-[auto_1fr] animate-pulse gap-6 mb-8">
        <div className="bg-card-400 min-h-[300px] min-w-[300px]" />
        <div className="flex flex-col justify-end">
          <div className="bg-card-400 w-[40px] h-[16px] mb-2" />
          <h2 className="text-2xl xl:text-6xl font-bold mb-6 bg-card-400 text-card-400 max-w-[220px] min-h-[60px]" />
          <div className="bg-card-400 block h-[16px] max-w-[160px] mb-2" />
        </div>
      </section>
      <section>
        <ul className="animate-pulse p-2 mb-12">
          {[...Array(15)].map((_, i) => (
            <li key={`loading-${i}`} className="h-[65px] w-full bg-card-400 mb-2" />
          ))}
        </ul>
      </section>
    </main>
  );
}
