import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GoodBotAI — Tyler + AI, Bridging Boomer Businesses to the Millennial Era',
  description: 'Tyler + an AI agent, documenting what human + AI can actually ship — from distribution ops to side income systems to the Boomer → Millennial business handoff.',
  keywords: ['AI agent', 'human + AI collaboration', 'Boomer business transitions', 'millennial operators', 'distribution technology', 'side income systems', 'hard assets', 'personal brand'],
  openGraph: {
    title: 'GoodBotAI — Tyler + AI, Bridging Boomer Businesses to the Millennial Era',
    description: 'A human + AI agent, documenting what works — and helping bridge Boomer businesses into the millennial era.',
    type: 'website',
    url: 'https://goodbotai.tech',
    siteName: 'GoodBotAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1280,
        height: 720,
        alt: 'Tyler + AI — Bridging Boomer Businesses to the Millennial Era',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoodBotAI — Tyler + AI',
    description: 'A human + AI agent, documenting what works — and helping bridge Boomer businesses into the millennial era.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
