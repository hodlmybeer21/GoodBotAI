'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 pt-20 pb-24 sm:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-400 text-sm font-medium mb-8">
            <span>🤖</span>
            <span>Human + AI, growing together</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            I have an AI agent.<br />
            <span className="text-brand-400 glow">I talk to it daily.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto px-4">
            Most people are still figuring out if AI is useful. I'm already building a business with it — documenting what works, what doesn't, and what the new economy looks like from the inside.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a href="#newsletter" className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-colors text-center">
              Join the newsletter
            </a>
            <Link href="/#about" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors text-center">
              How this works
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">About</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Tyler + GoodBot</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm Tyler. I've been in the trenches of a business going through its first real tech overhaul — and I'm using AI to build something better.
              </p>
              <p>
                GoodBot is my AI agent. Not a chatbot — a working partner. It researches, drafts, builds, reminds me, and pushes back when I'm wrong. We've been working together long enough that I can tell you: the people who learn to work <em>with</em> AI are going to have a very different 10 years than the people who don't.
              </p>
              <p>
                This site is the proof of that. Built together. Written together. Growing together.
              </p>
            </div>
            <div className="mt-8 p-4 bg-dark-700 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Currently</p>
              <div className="flex flex-wrap gap-2">
                {['Inventory Manager', 'CPA Candidate', 'Distribution Ops', 'BrewAsset Builder'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-400 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-dark-700 rounded-2xl border border-white/10 p-8 glow-box">
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="text-2xl">🎯</span> The Thesis
            </h4>
            <div className="space-y-4">
              {[
                { icon: '🔄', text: 'The economy is restructuring. AI is the steam engine of our era — except it moves 100x faster.' },
                { icon: '🤖', text: 'The people who learn to work with AI agents will compound their skills. Everyone else will be competing with them.' },
                { icon: '📈', text: 'Side income isn\'t about hustle. It\'s about building systems that work while you sleep.' },
                { icon: '🏗️', text: 'The best time to position yourself was 5 years ago. The second best time is right now — before the shift is obvious.' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-800/50 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4 text-center">What This Covers</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center">The Intersections That Matter</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: '📊',
                title: 'AI in Distribution Ops',
                desc: 'Watching AI agents get installed into WMS systems in real time. What works, what fails, what it means for your job — and your business.',
                tags: ['#distribution', '#WMS', '#AIagents'],
              },
              {
                icon: '📈',
                title: 'Side Income Systems',
                desc: 'Building income streams that don\'t trade time for money. Digital products, leverage, and the operator mindset that makes the difference.',
                tags: ['#sideincome', '#digitalproducts', '#leverage'],
              },
              {
                icon: '📋',
                title: 'CPA Journey',
                desc: 'The unglamorous path from Inventory Manager to Controller. CPA studying while working full-time. Real numbers, real deadlines.',
                tags: ['#CPA', '#accounting', '#career'],
              },
              {
                icon: '₿',
                title: 'Hard Assets / Bitcoin',
                desc: 'Not a maximalist — just someone who understands why fixed-supply assets make sense in an inflating currency world. Stacking sats, dollar cost averaging.',
                tags: ['#Bitcoin', '#hardassets', '#stacksats'],
              },
              {
                icon: '⚙️',
                title: 'AI Tooling & Automation',
                desc: 'What I\'m actually using. What saves time. What doesn\'t. AI agents, scripts, workflows — the boring stuff that compounds.',
                tags: ['#AItools', '#automation', '#productivity'],
              },
              {
                icon: '🏭',
                title: 'Boomer Business Transitions',
                desc: 'The generation running distribution companies is aging out. Someone has to modernize those workflows. That\'s opportunity — and a real problem to solve.',
                tags: ['#succession', '#ops', '#modernization'],
              },
            ].map(({ icon, title, desc, tags }) => (
              <div key={title} className="bg-dark-700 rounded-xl border border-white/10 p-6 hover:border-brand-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1">
                  {tags.map(tag => (
                    <span key={tag} className="text-xs text-brand-400/70">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4 text-center">Built by Tyler + GoodBot</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-16 text-center">The Full Ecosystem</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <a href="https://tracker.goodbotai.tech" target="_blank" rel="noopener noreferrer"
              className="group bg-dark-700 rounded-xl border border-white/10 p-6 hover:border-brand-500/40 transition-all hover:-translate-y-1">
              <span className="text-3xl mb-4 block">📊</span>
              <h4 className="font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors">Value Tracker</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">Purchasing power parity tool — see how everyday items cost in USD, Gold, and Bitcoin. Data going back to 1970.</p>
              <p className="text-brand-400 text-xs font-medium">tracker.goodbotai.tech →</p>
            </a>
            <a href="https://fridge.goodbotai.tech" target="_blank" rel="noopener noreferrer"
              className="group bg-dark-700 rounded-xl border border-white/10 p-6 hover:border-brand-500/40 transition-all hover:-translate-y-1">
              <span className="text-3xl mb-4 block">🧊</span>
              <h4 className="font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors">FridgeAI</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">Scan your fridge, get recipes and a meal plan. Photo AI + Spoonacular meal planning + Instacart cart builder. Live at fridge.goodbotai.tech</p>
              <p className="text-brand-400 text-xs font-medium">fridge.goodbotai.tech →</p>
            </a>
            <a href="https://hub.goodbotai.tech" target="_blank" rel="noopener noreferrer"
              className="group bg-dark-700 rounded-xl border border-white/10 p-6 hover:border-brand-500/40 transition-all hover:-translate-y-1">
              <span className="text-3xl mb-4 block">₿</span>
              <h4 className="font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors">BitcoinHub</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">13 interactive Bitcoin education games, live analytics dashboard, real-time BTC market data, and more.</p>
              <p className="text-brand-400 text-xs font-medium">hub.goodbotai.tech →</p>
            </a>
            <Link href="/brewbot" className="group bg-dark-700 rounded-xl border border-white/10 p-6 hover:border-amber-500/40 transition-all hover:-translate-y-1">
              <span className="text-3xl mb-4 block">🍺</span>
              <h4 className="font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">BrewBot</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">Beer industry intelligence delivered every Monday. NBWA BPI, craft closures, M&A, tariffs — the distributor perspective.</p>
              <p className="text-amber-400 text-xs font-medium">goodbotai.tech/brewbot →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-6 block">📬</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">The GoodBot Dispatch</h2>
          <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base px-2">
            Weekly(ish) — AI developments, side income ideas, operator mindset shifts, and what Tyler's actually building. No fluff, no hustle porn. Just signal.
          </p>
          <p className="text-gray-500 text-xs mb-6">or support this work → <a href="#support" className="text-brand-400 hover:text-brand-300 transition-colors">See ways to contribute</a></p>
          {status === 'success' ? (
            <div className="p-6 bg-brand-500/10 border border-brand-500/30 rounded-xl">
              <span className="text-2xl">✅</span>
              <p className="text-brand-400 font-semibold mt-2">You're in. Watch your inbox.</p>
              <p className="text-gray-400 text-sm mt-1">First issue lands soon. Thanks for being early.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-dark-700 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors min-w-0"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-500/50 text-white font-semibold rounded-xl transition-colors"
              >
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
          )}
          <p className="text-gray-600 text-xs mt-4">
            No spam. Unsubscribe anytime. Your email is yours.
          </p>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-800/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base">
            Found something useful? Have a question? Reach out.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto px-4 sm:px-0">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-dark-700 border border-white/10 rounded-xl hover:border-brand-500/40 transition-colors">
              <span className="text-2xl">𝕏</span>
              <div className="text-left">
                <div className="font-semibold text-sm">X / Twitter</div>
                <div className="text-xs text-gray-400">Follow the journey</div>
              </div>
            </a>
            <a href="mailto:tyler@goodbotai.tech"
              className="flex items-center gap-3 p-4 bg-dark-700 border border-white/10 rounded-xl hover:border-brand-500/40 transition-colors">
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <div className="font-semibold">Email</div>
                <div className="text-xs text-gray-400">tyler@goodbotai.tech</div>
              </div>
            </a>
          </div>

          {/* Support CTA */}
          <div id="support" className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">Support this work</p>
            <a href="https://hub.goodbotai.tech/donate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500/10 border border-orange-500/30 rounded-xl hover:border-orange-500/60 transition-colors text-orange-400 text-sm font-medium">
              <span>₿</span> Send Bitcoin
            </a>
            <p className="text-gray-600 text-xs mt-3">Your support keeps this project alive and free.</p>
          </div>
        </div>
      </section>
    </>
  )
}
