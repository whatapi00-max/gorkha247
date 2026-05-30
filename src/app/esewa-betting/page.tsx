import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'eSewa Betting Nepal | Deposit via eSewa | eSewa Casino | GorkhaBooks 2026',
  description: 'Best eSewa betting in Nepal on GorkhaBooks. Deposit via eSewa for betting, casino, and games. Instant eSewa deposit, fast withdrawal. Play IPL betting, cricket, live casino with eSewa.',
  keywords: 'eSewa betting Nepal, eSewa deposit betting Nepal, eSewa casino Nepal, betting with eSewa Nepal, eSewa sports betting Nepal, eSewa gambling Nepal, eSewa betting sites Nepal, deposit via eSewa Nepal, eSewa betting app Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/esewa-betting',
  },
}

export default function EsewaBettingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">eSewa Betting Nepal - Deposit via eSewa 2026</h1>
        <p className="text-gray-300 mb-8">
          Bet using eSewa in Nepal on GorkhaBooks. We offer instant eSewa deposit for betting, casino, and games. Play IPL betting, cricket betting, live casino with eSewa. Fast withdrawal available.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
