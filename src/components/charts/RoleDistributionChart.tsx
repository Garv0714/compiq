'use client'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts'

const COLORS = [
  '#22c55e',
  '#3b82f6',
  '#a855f7',
  '#f59e0b',
]

export default function RoleDistributionChart({
  data,
}: {
  data: {
    name: string
    value: number
  }[]
}) {
  return (
    <div className="flex justify-center">
      <PieChart width={500} height={350}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={
                COLORS[index % COLORS.length]
              }
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  )
}