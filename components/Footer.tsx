import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🤖</span>
              <span className="font-bold text-lg">GoodBotAI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tyler + AI agent, building together. Learning in public. Growing toward the new economy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gray-200">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
              <Link href="/#about" className="hover:text-brand-400 transition-colors">About</Link>
              <Link href="/#topics" className="hover:text-brand-400 transition-colors">Topics</Link>
              <Link href="/brewbot" className="hover:text-brand-400 transition-colors">BrewBot</Link>
              <Link href="/#newsletter" className="hover:text-brand-400 transition-colors">Newsletter</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gray-200">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">X / Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">LinkedIn</a>
              <a href="mailto:tyler@goodbotai.tech" className="hover:text-brand-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} GoodBotAI. Built by Tyler + GoodBot 🤖
        </div>
      </div>
    </footer>
  )
}
