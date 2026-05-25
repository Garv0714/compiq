'use client'

interface Props {
  company: string
  role: string
  level: string
  location: string

  setCompany: (value: string) => void
  setRole: (value: string) => void
  setLevel: (value: string) => void
  setLocation: (value: string) => void
}

export default function FilterBar({
  company,
  role,
  level,
  location,
  setCompany,
  setRole,
  setLevel,
  setLocation,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
      />

      <input
        placeholder="Level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
      />

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
      />
    </div>
  )
}