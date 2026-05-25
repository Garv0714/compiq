'use client'

import dynamic from 'next/dynamic'

const Chart = dynamic(
  async () => {
    const recharts = await import(
      'recharts'
    )

    const {
      ResponsiveContainer,
      BarChart,
      Bar,
      XAxis,
      YAxis,
      Tooltip,
      CartesianGrid,
    } = recharts

    return function CompareChartInner({
      data,
    }: {
      data: any[]
    }) {
      if (!data?.length) {
        return null
      }

      return (
        <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black shadow-[0_0_40px_rgba(34,197,94,0.08)]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 10,
              }}
            >

              <defs>
                <linearGradient
                  id="barGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#4ade80"
                  />

                  <stop
                    offset="100%"
                    stopColor="#16a34a"
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#27272a"
              />

              <XAxis
                dataKey="company"
                stroke="#a1a1aa"
              />

              <YAxis
                stroke="#a1a1aa"
                tickFormatter={(value) =>
                  `₹${(
                    value / 100000
                  ).toFixed(1)}L`
                }
              />

              <Tooltip
                formatter={(value: any) => [
                  `₹${Number(
                    value
                  ).toLocaleString()}`,
                  'Average Compensation',
                ]}
                contentStyle={{
                  background: '#09090b',
                  border:
                    '1px solid #27272a',
                  borderRadius: '16px',
                  color: '#fff',
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,0.4)',
                }}
              />

              <Bar
                dataKey="avgComp"
                fill="url(#barGradient)"
                radius={[14, 14, 0, 0]}
              />

            </BarChart>
          </ResponsiveContainer>

        </div>
      )
    }
  },
  {
    ssr: false,
  }
)

export default Chart