'use client'

import { useEffect, useState } from 'react'

const COMPANIES = [
  'Google',
  'Meta',
  'Amazon',
  'Netflix',
  'Microsoft',
  'Apple',
]

export default function CompanyAutocomplete({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const [query, setQuery] = useState(value)

  const [suggestions, setSuggestions] =
    useState<string[]>([])

  const [selectedIndex, setSelectedIndex] =
    useState(-1)

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([])
      return
    }

    const filtered = COMPANIES.filter(
      (company) =>
        company
          .toLowerCase()
          .includes(query.toLowerCase())
    )

    setSuggestions(filtered)
  }, [query])

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1
          ? prev + 1
          : prev
      )
    }

    if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : 0
      )
    }

    if (e.key === 'Enter') {
      if (selectedIndex >= 0) {
        const selected =
          suggestions[selectedIndex]

        setQuery(selected)
        onChange(selected)
        setSuggestions([])
      }
    }
  }

  return (
    <div className="relative w-full">

      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          onChange(e.target.value)
        }}
        onKeyDown={handleKeyDown}
        placeholder="Search companies..."
        className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 outline-none text-white transition-all focus:border-green-500/40"
      />

      {suggestions.length > 0 && (
        <div className="absolute mt-2 w-full rounded-2xl border border-zinc-800 bg-black/95 backdrop-blur-xl overflow-hidden z-50 shadow-2xl">

          {suggestions.map(
            (company, index) => (
              <button
                key={company}
                onClick={() => {
                  setQuery(company)
                  onChange(company)
                  setSuggestions([])
                }}
                className={`w-full text-left px-5 py-4 transition-all ${
                  selectedIndex === index
                    ? 'bg-green-500/20 text-green-400'
                    : 'hover:bg-zinc-900 text-zinc-300'
                }`}
              >
                {company}
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}