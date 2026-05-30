import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviator Game Nepal | Play Aviator Online | Real Money | GorkhaBooks 2026',
  description: 'Play Aviator game in Nepal on GorkhaBooks. Best Aviator betting game with real money. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal. Win big with Aviator crash game.',
  keywords: 'Aviator game Nepal, Aviator betting Nepal, crash game Nepal, Aviator real money Nepal, play Aviator online Nepal, Aviator game strategy Nepal, best Aviator site Nepal, Aviator predictor Nepal, Aviator hack Nepal, Aviator game tips Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/aviator',
  },
}

export default function AviatorPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Aviator Game Nepal - Play Online for Real Money 2026</h1>
        <p className="text-gray-300 mb-8">
          Play the popular Aviator game in Nepal on GorkhaBooks. This crash game offers real money betting with instant payouts. Deposit via eSewa, Khalti, IME Pay and withdraw your winnings in 5 minutes.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
