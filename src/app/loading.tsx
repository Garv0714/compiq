export default function Loading() {
  return (
    <main className="min-h-screen hero-grid text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 animate-pulse">

        {/* HERO */}

        <div className="mb-14">

          <div className="h-8 w-64 rounded-full bg-zinc-900 mb-6" />

          <div className="h-24 w-[500px] rounded-3xl bg-zinc-900 mb-6" />

          <div className="space-y-3">
            <div className="h-5 w-[700px] rounded bg-zinc-900" />
            <div className="h-5 w-[600px] rounded bg-zinc-900" />
          </div>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl glass-card p-8"
            >
              <div className="h-4 w-32 bg-zinc-900 rounded mb-5" />

              <div className="h-14 w-32 bg-zinc-900 rounded mb-4" />

              <div className="h-4 w-48 bg-zinc-900 rounded" />
            </div>
          ))}

        </div>

        {/* TABLE */}

        <div className="rounded-3xl glass-card p-8">

          <div className="h-10 w-72 bg-zinc-900 rounded mb-8" />

          <div className="space-y-4">

            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 p-5"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <div className="h-5 w-40 bg-zinc-900 rounded mb-3" />

                    <div className="h-4 w-28 bg-zinc-900 rounded" />
                  </div>

                  <div className="h-6 w-32 bg-zinc-900 rounded" />

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </main>
  )
}