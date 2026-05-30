import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IPL Betting Nepal 2026 | IPL Match Prediction | IPL Odds | GorkhaBooks',
  description: 'Best IPL betting in Nepal on GorkhaBooks. IPL 2026 betting, IPL match prediction, live IPL odds, IPL winner prediction. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'IPL betting Nepal, IPL 2026 betting Nepal, IPL match prediction Nepal, IPL odds Nepal, live IPL betting Nepal, IPL winner prediction Nepal, IPL satta Nepal, IPL cricket betting Nepal, best IPL betting site Nepal, IPL betting tips Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/ipl-betting',
  },
}

export default function IPLBettingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">IPL Betting Nepal 2026 - IPL Match Prediction & Live Odds</h1>
        <p className="text-gray-300 mb-8">
          Bet on IPL 2026 in Nepal on GorkhaBooks. We offer the best IPL betting with live odds, match predictions, and winner predictions. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
