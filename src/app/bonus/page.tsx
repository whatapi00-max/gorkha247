import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nepal Betting Bonus | Welcome Bonus | Deposit Bonus | GorkhaBooks 2026',
  description: 'Get best betting bonus in Nepal on GorkhaBooks. Welcome bonus, deposit bonus, daily bonus, VIP rewards, cashback, referral bonus. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'Nepal betting bonus, welcome bonus Nepal, deposit bonus Nepal, daily bonus Nepal, VIP bonus Nepal, cashback bonus Nepal, referral bonus Nepal, betting rewards Nepal, casino bonus Nepal, sports betting bonus Nepal, free bets Nepal, no deposit bonus Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/bonus',
  },
}

export default function BonusPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Nepal Betting Bonus - Welcome Bonus & Rewards 2026</h1>
        <p className="text-gray-300 mb-8">
          Get the best betting bonuses in Nepal on GorkhaBooks. We offer welcome bonus, deposit bonus, daily bonus, VIP rewards, cashback, and referral bonus. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
