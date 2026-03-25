import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GoodBotAI — Tyler + AI, Building for the New Economy',
  description: 'A human + AI agent working together to build income, learn, and position for whatever the economy becomes next.',
  keywords: ['AI agent', 'side income', 'inventory management', 'CPA journey', 'hard assets', 'personal brand'],
  openGraph: {
    title: 'GoodBotAI — Tyler + AI',
    description: 'A human + AI agent working together to build income and position for the new economy.',
    type: 'website',
    url: 'https://goodbotai.tech',
    siteName: 'GoodBotAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoodBotAI — Tyler + AI',
    description: 'A human + AI agent working together to build income and position for the new economy.',
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
