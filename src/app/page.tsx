import SalaryTable from '@/components/tables/SalaryTable'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-3">
            CompIQ
          </h1>

          <p className="text-zinc-400 text-lg">
            Compensation Intelligence Platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
            <p className="text-zinc-400 text-sm mb-2">
              Companies
            </p>

            <h2 className="text-3xl font-bold">
              6+
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
            <p className="text-zinc-400 text-sm mb-2">
              Compensation Records
            </p>

            <h2 className="text-3xl font-bold">
              250+
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
            <p className="text-zinc-400 text-sm mb-2">
              Supported Roles
            </p>

            <h2 className="text-3xl font-bold">
              4+
            </h2>
          </div>
        </div>

        <SalaryTable />
      </div>
    </main>
  )
}