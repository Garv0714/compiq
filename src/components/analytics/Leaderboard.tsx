'use client'

import { useEffect, useState } from 'react'

interface LeaderboardItem {
  company: string
  avgComp: number
}

export default function Leaderboard() {
  const [data, setData] = useState<
    LeaderboardItem[]
  >([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch(
          '/api/leaderboard'
        )

        const result = await res.json()

        if (Array.isArray(result)) {
          setData(result)
        } else {
          setData([])
        }
      } catch (error) {
        console.error(error)
        setData([])
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [])

  if (loading) {
    return (
      <div className="rounded-3xl glass-card p-8">
        <p className="text-zinc-400">
          Loading leaderboard...
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-3xl glass-card p-8 mt-10">
      <div className="mb-8">
        <h2 className="text-4xl font-black gradient-text mb-3">
          Company Leaderboard
        </h2>

        <p className="text-zinc-400">
          Top companies ranked by average
          engineering compensation.
        </p>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={item.company}
            className="flex items-center justify-between rounded-2xl border border-zinc-800 p-5 bg-black/30 hover:border-green-500/20 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center font-bold text-green-400">
                #{index + 1}
              </div>

              <div>
                <p className="font-bold text-lg">
                  {item.company}
                </p>

                <p className="text-zinc-500 text-sm">
                  Average Compensation
                </p>
              </div>
            </div>

            <div className="text-2xl font-black text-green-400">
              ₹
              {Math.round(
                item.avgComp
              ).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}