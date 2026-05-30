import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Football Betting Nepal | EPL Betting | World Cup 2026 | GorkhaBooks',
  description: 'Best football betting in Nepal on GorkhaBooks. EPL betting, Champions League betting, World Cup 2026 betting, Nepal football betting. Live football odds, instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'football betting Nepal, EPL betting Nepal, Champions League betting Nepal, World Cup 2026 betting Nepal, Nepal football betting, live football betting Nepal, football odds Nepal, Premier League Nepal betting, football satta Nepal, football match prediction Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/football-betting',
  },
}

export default function FootballBettingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Football Betting Nepal - EPL, Champions League, World Cup 2026</h1>
        <p className="text-gray-300 mb-8">
          Bet on football in Nepal on GorkhaBooks. We offer EPL betting, Champions League betting, World Cup 2026 betting, and Nepal football betting with live odds. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
