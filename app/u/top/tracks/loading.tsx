export default async function TopTracksLoadingPage() {
  return (
    <main>
      <h2 className="text-2xl font-bold mb-4">Top tracks</h2>
      <div className="rounded-lg bg-card-500">
        <div className="grid grid-cols-1 mdgrid-cols-2 gap-2 animate-pulse p-2 mb-12">
          {[...Array(50)].map((_, i) => (
            <div key={`loading-${i}`} className="h-[65px] w-full bg-card-400" />
          ))}
        </div>
      </div>
    </main>
  );
}
