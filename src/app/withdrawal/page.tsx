import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fast Withdrawal Nepal | Instant Payout | Withdraw Winnings | GorkhaBooks 2026',
  description: 'Fast withdrawal in Nepal on GorkhaBooks. Instant payout, withdraw winnings in 5 minutes. Withdraw via eSewa, Khalti, IME Pay, bank transfer. Same day withdrawal Nepal.',
  keywords: 'fast withdrawal Nepal, instant payout Nepal, withdraw winnings Nepal, same day withdrawal Nepal, quick withdrawal Nepal, withdrawal methods Nepal, eSewa withdrawal Nepal, Khalti withdrawal Nepal, IME Pay withdrawal Nepal, bank transfer withdrawal Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/withdrawal',
  },
}

export default function WithdrawalPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Fast Withdrawal Nepal - Instant Payout in 5 Minutes 2026</h1>
        <p className="text-gray-300 mb-8">
          Get fast withdrawal in Nepal on GorkhaBooks. We offer instant payout with withdrawal in 5 minutes. Withdraw your winnings via eSewa, Khalti, IME Pay, or bank transfer. Same day withdrawal available.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
