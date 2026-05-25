'use client'

import dynamic from 'next/dynamic'

const RoleDistributionChart = dynamic(
  async () => {
    const recharts = await import(
      'recharts'
    )

    const {
      ResponsiveContainer,
      PieChart,
      Pie,
      Cell,
      Tooltip,
      Legend,
    } = recharts

    const COLORS = [
      '#22c55e',
      '#3b82f6',
      '#a855f7',
      '#f59e0b',
      '#ef4444',
    ]

    return function Chart({
      data,
    }: {
      data: {
        name: string
        value: number
      }[]
    }) {
      if (!data?.length) {
        return null
      }

      return (
        <div className="w-full h-[420px] min-h-[420px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                innerRadius={70}
                paddingAngle={4}
                stroke="none"
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index % COLORS.length
                      ]
                    }
                  />
                ))}
              </Pie>

              <Tooltip
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

              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{
                  color: '#a1a1aa',
                  paddingTop: '20px',
                }}
              />

            </PieChart>
          </ResponsiveContainer>

        </div>
      )
    }
  },
  {
    ssr: false,
  }
)

export default RoleDistributionChart