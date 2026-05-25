import RoleDistributionChart from '@/components/charts/RoleDistributionChart'
import { generateInsights } from '@/lib/insights'

async function getCompanyData(company: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/companies/${company}`,
    {
      cache: 'no-store',
    }
  )

  return res.json()
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{
    company: string
  }>
}) {
  const resolvedParams = await params

  const data = await getCompanyData(
    resolvedParams.company
  )

  const roleMap: Record<string, number> = {}

  data.salaries.forEach((item: any) => {
    if (!roleMap[item.role]) {
      roleMap[item.role] = 0
    }

    roleMap[item.role] += 1
  })

  const chartData = Object.entries(
    roleMap
  ).map(([name, value]) => ({
    name,
    value,
  }))

  const insights = generateInsights(
    data.salaries
  )

  return (
    <main className="min-h-screen text-white hero-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HERO */}

        <div className="mb-14 fade-in">

          <div className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 mb-6 glass-card">
            Company Compensation Intelligence
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tight mb-5 capitalize gradient-text leading-none">
            {data.company}
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
            Advanced compensation analytics,
            engineering salary intelligence,
            role distributions, and AI-powered
            compensation insights.
          </p>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

          <div className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-wide">
              Avg Total Compensation
            </p>

            <h2 className="text-5xl font-black text-green-400 mb-2">
              ₹
              {Math.round(
                data.avgTotalComp
              ).toLocaleString()}
            </h2>

            <p className="text-zinc-500 text-sm">
              Average engineering compensation
            </p>
          </div>

          <div className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-wide">
              Highest Compensation
            </p>

            <h2 className="text-5xl font-black mb-2">
              ₹
              {Math.round(
                data.highestComp
              ).toLocaleString()}
            </h2>

            <p className="text-zinc-500 text-sm">
              Peak compensation intelligence
            </p>
          </div>

          <div className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-wide">
              Total Records
            </p>

            <h2 className="text-5xl font-black mb-2">
              {data.totalRecords}
            </h2>

            <p className="text-zinc-500 text-sm">
              Structured salary entries
            </p>
          </div>

        </div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* LEFT SECTION */}

          <div className="xl:col-span-2 space-y-8">

            {/* RECORDS */}

            <div className="rounded-3xl glass-card p-8">

              <div className="mb-8">
                <h2 className="text-3xl font-black mb-3">
                  Compensation Records
                </h2>

                <p className="text-zinc-400">
                  Explore compensation data
                  across engineering roles and
                  experience levels.
                </p>
              </div>

              <div className="space-y-4">

                {data.salaries
                  .slice(0, 10)
                  .map((item: any) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border border-zinc-800 rounded-2xl p-5 bg-black/20 transition-all duration-300 hover:border-green-500/20 hover:bg-black/30"
                    >
                      <div>

                        <div className="flex items-center gap-3 mb-2">

                          <p className="font-bold text-lg">
                            {item.role}
                          </p>

                          <div className="h-2 w-2 rounded-full bg-green-500" />

                        </div>

                        <p className="text-zinc-400 text-sm">
                          {item.level} •{' '}
                          {item.location}
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-green-400 font-black text-2xl">
                          ₹
                          {item.totalComp.toLocaleString()}
                        </p>

                        <p className="text-zinc-500 text-xs mt-1">
                          Total Compensation
                        </p>

                      </div>
                    </div>
                  ))}

              </div>
            </div>

            {/* ROLE DISTRIBUTION */}

            <div className="rounded-3xl glass-card p-8 transition-all duration-300 hover:border-green-500/20">

              <div className="mb-8">
                <h2 className="text-3xl font-black mb-3">
                  Role Distribution
                </h2>

                <p className="text-zinc-400">
                  Engineering role composition
                  across compensation records.
                </p>
              </div>

              <RoleDistributionChart
                data={chartData}
              />

            </div>

          </div>

          {/* RIGHT SECTION */}

          <div>

            <div className="rounded-3xl glass-card p-8 sticky top-8">

              <div className="mb-8">

                <div className="flex items-center gap-3 mb-4">

                  <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

                  <h2 className="text-3xl font-black">
                    AI Insights
                  </h2>

                </div>

                <p className="text-zinc-400">
                  AI-generated compensation
                  intelligence and engineering
                  salary patterns.
                </p>

              </div>

              <div className="space-y-5">

                {insights.map(
                  (
                    insight: string,
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="border border-zinc-800 rounded-2xl p-5 text-zinc-300 bg-black/20 transition-all duration-300 hover:border-green-500/20"
                    >
                      {insight}
                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  )
}