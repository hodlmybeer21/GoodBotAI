import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrewBot — Beer Industry Intelligence | GoodBotAI',
  description: 'BrewBot scans NBWA data, trade publications, and craft beer news — delivered every Monday as a concise executive summary for distributors and industry professionals.',
}

const latestReport = {
  date: 'March 30, 2026',
  bpi: 50,
  themes: [
    { label: 'NBWA BPI', value: '50 — first growth in 20 months', icon: '📈' },
    { label: 'Craft Closures', value: 'Persist but mid-size regionals holding', icon: '🏭' },
    { label: 'Boston Beer', value: 'Warns on 2026 depletions again', icon: '⚠️' },
    { label: 'Aluminum Tariffs', value: 'Chronic pressure, not acute crisis', icon: '💰' },
  ],
  sources: 8,
  highlights: [
    'NBWA Beer Purchasers Index hits 50 — first expansion in 20 months',
    'Craft brewery closures continue but regional mid-size operations are resilient',
    'Boston Beer Company again revising 2026 depletion estimates downward',
    'Aluminum tariff impact remains a structural headwind, not a crisis-level event',
  ],
}

const sampleMetrics = [
  { label: 'NBWA BPI', value: '50', sub: 'First growth in 20 months', icon: '📈' },
  { label: 'Sources Scanned', value: '8', sub: 'Per weekly cycle', icon: '🔍' },
  { label: 'Key Themes', value: '5', sub: 'Per report edition', icon: '🎯' },
  { label: 'Delivery', value: 'Mon 7:15 AM', sub: 'Every week, automatically', icon: '⏰' },
]

export default function BrewBot() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/3 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-8">
            <span>🍺</span>
            <span>GoodBot's Beer Industry Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Beer industry intel,<br />
            <span className="text-amber-400">delivered every Monday.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto px-2">
            BrewBot scans NBWA data, trade publications, and craft beer news — then delivers a concise executive summary built for distributors and industry professionals. No fluff. Just signal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a href="#latest-report" className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 hover:bg-amber-600 text-dark-900 font-bold rounded-xl transition-colors text-center">
              See Latest Report
            </a>
            <Link href="/#ecosystem" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors text-center">
              More Tools
            </Link>
          </div>
        </div>
      </section>

      {/* What BrewBot Does */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4 text-center">What BrewBot Tracks</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">Every Week, So You Don't Have To</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: '📊', title: 'NBWA Beer Purchasers Index', desc: 'Monthly distributor sentiment survey — the only real-time pulse of the beer channel.' },
              { icon: '🏭', title: 'Craft Closures & Openings', desc: 'Track which breweries are closing, which are opening, and what size segments are holding.' },
              { icon: '🤝', title: 'M&A Activity', desc: 'Mergers, acquisitions, and distribution rights shifts that change the competitive landscape.' },
              { icon: '💰', title: 'Tariff Impacts', desc: 'Aluminum, hops, glass, and imports — what\'s moving costs and what\'s pass-through.' },
              { icon: '📋', title: 'Distributor Perspective', desc: 'Written from the distributor\'s seat — operational reality, not headlines.' },
              { icon: '⚡', title: 'Weekly Automation', desc: 'Delivered Monday at 7:15 AM ET via Telegram, Notion, and email. Zero effort after setup.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-dark-700 rounded-xl border border-white/10 p-6 hover:border-amber-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Report */}
      <section id="latest-report" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-800/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
            <div>
              <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-2">Latest Report</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Week of {latestReport.date}</h3>
            </div>
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 text-sm font-medium flex items-center gap-1 transition-colors sm:self-end"
            >
              View in Drive →
            </a>
          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {sampleMetrics.map(({ label, value, sub, icon }) => (
              <div key={label} className="bg-dark-700 rounded-xl border border-white/10 p-4 sm:p-5 text-center">
                <span className="text-2xl mb-2 block">{icon}</span>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-gray-400">{label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>

          {/* Theme cards */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {latestReport.themes.map(({ label, value, icon }) => (
              <div key={label} className="bg-dark-700 rounded-xl border border-white/10 p-4 sm:p-5 flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</div>
                  <div className="text-sm text-gray-200 font-medium leading-snug">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="bg-dark-700 rounded-2xl border border-white/10 p-5 sm:p-8">
            <h4 className="font-semibold text-base mb-4 text-gray-200">Key Highlights This Week</h4>
            <ul className="space-y-3">
              {latestReport.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                  <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-white/10 text-xs text-gray-500">
              {latestReport.sources} sources · {latestReport.themes.length} key themes · Distributor perspective
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-4xl mb-6 block">📬</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Get BrewBot in Your Inbox</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
            Every Monday morning. One page. Everything that happened in beer that matters. Subscribe to the GoodBot Dispatch or connect Telegram for direct delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a href="/#newsletter" className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 hover:bg-amber-600 text-dark-900 font-bold rounded-xl transition-colors text-center">
              Subscribe to Dispatch
            </a>
            <Link href="/" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-white/40 rounded-xl font-semibold transition-colors text-center">
              ← Back to GoodBotAI
            </Link>
          </div>

          {/* Support CTA */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">Support this work</p>
            <a href="https://bitcoinhub.goodbotai.tech/donate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500/10 border border-orange-500/30 rounded-xl hover:border-orange-500/60 transition-colors text-orange-400 text-sm font-medium">
                <span>₿</span> Send Bitcoin
            </a>
            <p className="text-gray-600 text-xs mt-3">Your support keeps BrewBot running and free.</p>
          </div>
        </div>
      </section>
    </>
  )
}