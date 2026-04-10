import type { Metadata } from 'next'
import BrewBotClient from './BrewBotClient'

export const metadata: Metadata = {
  title: 'BrewBot — Beer Industry Intelligence | GoodBotAI',
  description: 'BrewBot scans NBWA data, trade publications, and craft beer news — delivered every Monday as a concise executive summary for distributors and industry professionals.',
}

export default function BrewBot() {
  return <BrewBotClient />
}