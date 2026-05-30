import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Live Casino Nepal | Online Casino | Live Dealer Games | GorkhaBooks 2026',
  description: 'Play live casino in Nepal on GorkhaBooks. Live dealer games, Roulette, Blackjack, Baccarat, Dragon Tiger, Teen Patti. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'live casino Nepal, online casino Nepal, live dealer Nepal, roulette Nepal, blackjack Nepal, baccarat Nepal, Dragon Tiger Nepal, live Teen Patti Nepal, casino games Nepal, real money casino Nepal, best casino Nepal, Nepal casino site',
  alternates: {
    canonical: 'https://gorkha247.com/live-casino',
  },
}

export default function LiveCasinoPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Live Casino Nepal - Online Casino with Live Dealers 2026</h1>
        <p className="text-gray-300 mb-8">
          Play live casino games in Nepal on GorkhaBooks. We offer live dealer games including Roulette, Blackjack, Baccarat, Dragon Tiger, and Teen Patti. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
