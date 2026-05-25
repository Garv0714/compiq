'use client'

import { useEffect, useState } from 'react'

import CompareChart from '@/components/charts/CompareChart'
import CompanyAutocomplete from '@/components/search/CompanyAutocomplete'

interface CompareData {
  company: string
  avgComp: number
  highestComp: number
  totalRecords: number
}

export default function ComparePage() {
  const [companies, setCompanies] =
    useState('Google,Meta,Amazon')

  const [data, setData] = useState<
    CompareData[]
  >([])

  const [loading, setLoading] =
    useState(false)

  useEffect(() => {
    async function fetchComparison() {
      try {
        setLoading(true)

        const res = await fetch(
          `/api/compare?companies=${companies}`
        )

        const result = await res.json()

        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchComparison()
  }, [companies])

  return (
    <main className="min-h-screen text-white hero-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HERO */}

        <div className="mb-16 fade-in">

          <div className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 mb-6 glass-card">
            Multi-company Compensation Analytics
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 gradient-text leading-none">
            Compensation Comparison
          </h1>

          <p className="text-zinc-400 text-base md:text-xl max-w-3xl leading-relaxed">
            Compare compensation intelligence,
            engineering salary trends, and
            pay distributions across top
            product companies using modern
            analytics dashboards.
          </p>

        </div>

        {/* SEARCH SECTION */}

        <div className="rounded-3xl glass-card p-6 md:p-8 mb-12 transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,197,94,0.08)]">

          <div className="flex flex-col lg:flex-row lg:items-end gap-6">

            <div className="flex-1">

              <label className="text-sm text-zinc-400 block mb-3 uppercase tracking-wide">
                Compare Companies
              </label>

              <CompanyAutocomplete
  value={companies}
  onChange={setCompanies}
/>

            </div>

            <div className="grid grid-cols-3 gap-3 lg:w-[320px]">

              <button
                onClick={() =>
                  setCompanies(
                    'Google,Meta,Amazon'
                  )
                }
                className="rounded-2xl border border-zinc-800 px-4 py-3 text-sm text-zinc-300 hover:border-green-500/30 hover:bg-green-500/10 transition-all"
              >
                Big Tech
              </button>

              <button
                onClick={() =>
                  setCompanies(
                    'Netflix,Uber,Airbnb'
                  )
                }
                className="rounded-2xl border border-zinc-800 px-4 py-3 text-sm text-zinc-300 hover:border-green-500/30 hover:bg-green-500/10 transition-all"
              >
                Unicorns
              </button>

              <button
                onClick={() =>
                  setCompanies(
                    'Microsoft,Apple,Meta'
                  )
                }
                className="rounded-2xl border border-zinc-800 px-4 py-3 text-sm text-zinc-300 hover:border-green-500/30 hover:bg-green-500/10 transition-all"
              >
                Top Pay
              </button>

            </div>

          </div>

        </div>

        {/* LOADING */}

        {loading && (
          <div className="rounded-3xl glass-card p-10 text-center text-zinc-400 mb-12 animate-pulse">
            Loading compensation intelligence...
          </div>
        )}

        {/* EMPTY STATE */}

        {!loading && data.length === 0 && (
          <div className="rounded-3xl glass-card p-12 text-center border border-zinc-800 mb-12">

            <div className="mb-6">
              <div className="h-20 w-20 rounded-full bg-zinc-900 flex items-center justify-center mx-auto text-3xl">
                📊
              </div>
            </div>

            <h2 className="text-3xl font-black mb-4">
              No Comparison Data Found
            </h2>

            <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Try entering valid company names
              like Google, Meta, Amazon,
              Microsoft, or Netflix to generate
              compensation analytics.
            </p>

          </div>
        )}

        {/* COMPANY CARDS */}

        {!loading && data.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {data.map((item) => (
              <div
                key={item.company}
                className="rounded-3xl glass-card p-7 transition-all duration-300 hover:border-green-500/30 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]"
              >

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-2xl md:text-3xl font-black">
                    {item.company}
                  </h2>

                  <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

                </div>

                <div className="space-y-6">

                  <div>

                    <p className="text-zinc-500 text-sm mb-2 uppercase tracking-wide">
                      Average Compensation
                    </p>

                    <p className="text-4xl font-black text-green-400">
                      ₹
                      {Math.round(
                        item.avgComp
                      ).toLocaleString()}
                    </p>

                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border border-zinc-800 p-4 bg-black/30">

                      <p className="text-zinc-500 text-xs mb-2 uppercase">
                        Highest
                      </p>

                      <p className="text-lg font-bold">
                        ₹
                        {Math.round(
                          item.highestComp
                        ).toLocaleString()}
                      </p>

                    </div>

                    <div className="rounded-2xl border border-zinc-800 p-4 bg-black/30">

                      <p className="text-zinc-500 text-xs mb-2 uppercase">
                        Records
                      </p>

                      <p className="text-lg font-bold">
                        {item.totalRecords}
                      </p>

                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>

        )}

        {/* CHART SECTION */}

        {!loading && data.length > 0 && (

          <div className="rounded-3xl glass-card p-6 md:p-8 transition-all duration-300 hover:border-green-500/20 hover:shadow-[0_0_60px_rgba(34,197,94,0.08)]">

            <div className="mb-8">

              <h2 className="text-3xl md:text-4xl font-black mb-4 gradient-text">
                Average Compensation Analytics
              </h2>

              <p className="text-zinc-400 max-w-2xl leading-relaxed">
                Comparative visualization of
                compensation intelligence across
                selected companies using
                analytics-driven salary insights.
              </p>

            </div>

            <CompareChart data={data} />

          </div>

        )}

      </div>
    </main>
  )
}