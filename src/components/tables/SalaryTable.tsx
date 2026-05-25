'use client'

import { useEffect, useState } from 'react'
import FilterBar from '@/components/filters/FilterBar'
import Link from 'next/link'

interface Salary {
  id: string
  company: string
  role: string
  level: string
  location: string
  totalComp: number
  baseSalary: number
  bonus: number
  stock: number
}

export default function SalaryTable() {
  const [data, setData] = useState<Salary[]>([])
  const [loading, setLoading] = useState(true)

  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [level, setLevel] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
  `/api/salaries?company=${company}&role=${role}&level=${level}&location=${location}`
)

        if (!response.ok) {
  throw new Error('Failed to fetch salaries')
}

const result = await response.json()

        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [company, role, level, location])

  if (loading) {
    return (
      <div className="text-zinc-400">
        Loading compensation data...
      </div>
    )
  }

  return (
  <>
    <FilterBar
      company={company}
      role={role}
      level={level}
      location={location}
      setCompany={setCompany}
      setRole={setRole}
      setLevel={setLevel}
      setLocation={setLocation}
    />

    <div className="overflow-x-auto rounded-2xl border border-zinc-800">
      <table className="w-full text-sm">
        <thead className="bg-zinc-900">
          <tr>
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Level</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Base</th>
            <th className="p-4 text-left">Bonus</th>
            <th className="p-4 text-left">Stock</th>
            <th className="p-4 text-left">
              Total Compensation
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-t border-zinc-800 hover:bg-zinc-900"
            >
              <td className="p-4 font-medium text-blue-400">
  <Link
    href={`/companies/${item.company.toLowerCase()}`}
  >
    {item.company}
  </Link>
</td>

              <td className="p-4">
                {item.role}
              </td>

              <td className="p-4">
                {item.level}
              </td>

              <td className="p-4">
                {item.location}
              </td>

              <td className="p-4">
                ₹{item.baseSalary.toLocaleString()}
              </td>

              <td className="p-4">
                ₹{item.bonus.toLocaleString()}
              </td>

              <td className="p-4">
                ₹{item.stock.toLocaleString()}
              </td>

              <td className="p-4 font-semibold text-green-400">
                ₹{item.totalComp.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)
}