import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Khalti Betting Nepal | Deposit via Khalti | Khalti Casino | GorkhaBooks 2026',
  description: 'Best Khalti betting in Nepal on GorkhaBooks. Deposit via Khalti for betting, casino, and games. Instant Khalti deposit, fast withdrawal. Play IPL betting, cricket, live casino with Khalti.',
  keywords: 'Khalti betting Nepal, Khalti deposit betting Nepal, Khalti casino Nepal, betting with Khalti Nepal, Khalti sports betting Nepal, Khalti gambling Nepal, Khalti betting sites Nepal, deposit via Khalti Nepal, Khalti betting app Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/khalti-betting',
  },
}

export default function KhaltiBettingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Khalti Betting Nepal - Deposit via Khalti 2026</h1>
        <p className="text-gray-300 mb-8">
          Bet using Khalti in Nepal on GorkhaBooks. We offer instant Khalti deposit for betting, casino, and games. Play IPL betting, cricket betting, live casino with Khalti. Fast withdrawal available.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
