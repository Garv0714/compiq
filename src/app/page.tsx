import Link from 'next/link'
import SalaryTable from '@/components/tables/SalaryTable'
import Leaderboard from '@/components/analytics/Leaderboard'

export default function HomePage() {
  return (
    <main className="min-h-screen text-white hero-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* HERO SECTION */}

        <div className="mb-16 fade-in">
          <div className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 mb-6 glass-card">
            AI Compensation Intelligence Platform
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tight mb-6 gradient-text leading-none">
            CompIQ
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed mb-8">
            Modern compensation analytics platform
            inspired by Levels.fyi with AI-powered
            salary intelligence, company insights,
            compensation comparisons, and advanced
            analytics dashboards.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/compare"
              className="primary-button px-6 py-3 font-semibold"
            >
              Compare Companies
            </Link>

            <a
              href="https://github.com/Garv0714/compiq"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-zinc-800 text-zinc-300 hover:border-zinc-700 transition-all glass-card"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <div className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1">
            <p className="text-zinc-400 text-sm mb-3">
              Companies
            </p>

            <h2 className="text-5xl font-black mb-2">
              6+
            </h2>

            <p className="text-zinc-500 text-sm">
              Top product companies tracked
            </p>
          </div>

          <div className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1">
            <p className="text-zinc-400 text-sm mb-3">
              Compensation Records
            </p>

            <h2 className="text-5xl font-black mb-2">
              250+
            </h2>

            <p className="text-zinc-500 text-sm">
              Structured salary intelligence entries
            </p>
          </div>

          <div className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1">
            <p className="text-zinc-400 text-sm mb-3">
              Supported Roles
            </p>

            <h2 className="text-5xl font-black mb-2">
              4+
            </h2>

            <p className="text-zinc-500 text-sm">
              Engineering compensation categories
            </p>
          </div>
        </div>

        {/* TABLE SECTION */}

        <div className="rounded-3xl glass-card p-6 fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Compensation Records
              </h2>

              <p className="text-zinc-400">
                Explore compensation intelligence
                across companies, roles, and levels.
              </p>
            </div>
          </div>

          <SalaryTable />
        </div>
        <Leaderboard />
      </div>
    </main>
  )
}