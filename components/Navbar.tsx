'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full border-b border-white/10 bg-dark-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          <span className="font-bold text-lg tracking-tight">
            Good<span className="text-brand-400">Bot</span>AI
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-300">
          <Link href="/#about" className="hover:text-brand-400 transition-colors">About</Link>
          <Link href="/#topics" className="hover:text-brand-400 transition-colors">Topics</Link>
          <a href="https://tracker.goodbotai.tech" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Value Tracker</a>
          <a href="https://hub.goodbotai.tech" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">BitcoinHub</a>
          <Link href="/#newsletter" className="hover:text-brand-400 transition-colors">Newsletter</Link>
          <Link href="/#connect" className="px-4 py-2 bg-brand-500/20 border border-brand-500/40 rounded-lg text-brand-400 hover:bg-brand-500/30 transition-colors">
            Connect
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-dark-900/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-300">
            <Link href="/#about" onClick={() => setOpen(false)} className="hover:text-brand-400 transition-colors py-1">About</Link>
            <Link href="/#topics" onClick={() => setOpen(false)} className="hover:text-brand-400 transition-colors py-1">Topics</Link>
            <a href="https://tracker.goodbotai.tech" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="hover:text-brand-400 transition-colors py-1">Value Tracker</a>
            <a href="https://hub.goodbotai.tech" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="hover:text-brand-400 transition-colors py-1">BitcoinHub</a>
            <Link href="/#newsletter" onClick={() => setOpen(false)} className="hover:text-brand-400 transition-colors py-1">Newsletter</Link>
            <Link href="/#connect" onClick={() => setOpen(false)} className="px-4 py-2.5 bg-brand-500/20 border border-brand-500/40 rounded-lg text-brand-400 text-center mt-1">
              Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}