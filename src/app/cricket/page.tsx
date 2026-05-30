import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cricket Betting Nepal | IPL Betting | T20 World Cup | GorkhaBooks 2026',
  description: 'Best cricket betting in Nepal on GorkhaBooks. IPL betting, T20 World Cup betting, ICC tournament betting, Nepal Premier League. Live cricket odds, instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'cricket betting Nepal, IPL betting Nepal, T20 World Cup betting Nepal, Nepal cricket betting, live cricket betting Nepal, cricket odds Nepal, ICC tournament betting Nepal, Nepal Premier League betting, cricket match prediction Nepal, Nepal vs India betting, cricket satta Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/cricket',
  },
}

export default function CricketPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Cricket Betting Nepal - IPL, T20 World Cup, Live Odds 2026</h1>
        <p className="text-gray-300 mb-8">
          Bet on cricket in Nepal on GorkhaBooks. We offer IPL betting, T20 World Cup betting, ICC tournament betting, and Nepal Premier League betting with live cricket odds. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
