export default async function TrackLoadingPage() {
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <section>
          <h2 className="text-2xl font-bold mb-4">Audio features</h2>
          <div className="rounded-lg bg-card-500 h-[360px] p-2">
            <div className="bg-card-400 w-full h-full" />
          </div>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Audio analysis</h2>
          <div className="rounded-lg bg-card-500 p-2 lg:pb-0 h-[360px]">
            <div className="grid grid-cols-2 gap-4 h-full text-center">
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Duration</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Popularity</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Key</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Modality</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Tempo (BPM)</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Time Signature</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Bars</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Beats</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Sections</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
              <div className="flex flex-col items-center">
                <h6 className="font-semibold">Segments</h6>
                <div className="bg-card-400 w-[30px] h-[19px]" />
              </div>
            </div>
          </div>
        </section>
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
          <div className="rounded-lg bg-card-500">
            <div className="grid grid-cols-2 gap-2 animate-pulse p-2 mb-12">
              {[...Array(20)].map((_, i) => (
                <div key={`loading-${i}`} className="h-[65px] w-full bg-card-400" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
