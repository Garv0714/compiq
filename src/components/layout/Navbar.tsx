import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-black text-black shadow-[0_0_25px_rgba(34,197,94,0.35)]">
            C
          </div>

          <div>
            <p className="font-black text-lg leading-none">
              CompIQ
            </p>

            <p className="text-[11px] text-zinc-500">
              Compensation Intelligence
            </p>
          </div>
        </Link>

        {/* NAV LINKS */}

        <div className="flex items-center gap-3">

          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
          >
            Dashboard
          </Link>

          <Link
            href="/compare"
            className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
          >
            Compare
          </Link>

          <a
            href="https://github.com/Garv0714/compiq"
            target="_blank"
            className="primary-button px-5 py-2 text-sm font-semibold"
          >
            GitHub
          </a>

        </div>
      </div>
    </header>
  )
}