import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-dark-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          <span className="font-bold text-lg tracking-tight">
            Good<span className="text-brand-400">Bot</span>AI
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/#about" className="hover:text-brand-400 transition-colors">About</Link>
          <Link href="/#topics" className="hover:text-brand-400 transition-colors">Topics</Link>
          <Link href="/#newsletter" className="hover:text-brand-400 transition-colors">Newsletter</Link>
          <Link href="/#connect" className="px-4 py-2 bg-brand-500/20 border border-brand-500/40 rounded-lg text-brand-400 hover:bg-brand-500/30 transition-colors">
            Connect
          </Link>
        </div>
      </div>
    </nav>
  )
}
