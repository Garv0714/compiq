import RoleDistributionChart from '@/components/charts/RoleDistributionChart'
import { generateInsights } from '@/lib/insights'

async function getCompanyData(company: string) {
  const res = await fetch(
    `http://localhost:3000/api/companies/${company}`,
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

const chartData = Object.entries(roleMap).map(
  ([name, value]) => ({
    name,
    value,
  })
)

const insights = generateInsights(
  data.salaries
)

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-3 capitalize">
          {data.company}
        </h1>

        <p className="text-zinc-400 mb-10">
          Compensation Intelligence Dashboard
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
            <p className="text-zinc-400 text-sm mb-2">
              Avg Total Compensation
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              ₹
              {Math.round(
                data.avgTotalComp
              ).toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
            <p className="text-zinc-400 text-sm mb-2">
              Highest Compensation
            </p>

            <h2 className="text-3xl font-bold">
              ₹
              {Math.round(
                data.highestComp
              ).toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
            <p className="text-zinc-400 text-sm mb-2">
              Total Records
            </p>

            <h2 className="text-3xl font-bold">
              {data.totalRecords}
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
          <h2 className="text-2xl font-bold mb-6">
            Compensation Records
          </h2>

          <div className="space-y-4">
            {data.salaries.slice(0, 10).map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between border border-zinc-800 rounded-xl p-4"
              >
                <div>
                  <p className="font-semibold">
                    {item.role}
                  </p>

                  <p className="text-zinc-400 text-sm">
                    {item.level} • {item.location}
                  </p>
                </div>

                <div className="text-green-400 font-bold">
                  ₹
                  {item.totalComp.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950 mt-10">
  <h2 className="text-2xl font-bold mb-6">
    Role Distribution
  </h2>

  <RoleDistributionChart data={chartData} />
</div>

        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950 mt-10">
  <h2 className="text-2xl font-bold mb-6">
    AI Compensation Insights
  </h2>

  <div className="space-y-4">
    {insights.map(
      (insight: string, index: number) => (
        <div
          key={index}
          className="border border-zinc-800 rounded-xl p-4 text-zinc-300"
        >
          {insight}
        </div>
      )
    )}
  </div>
</div>

    </main>
  )
}