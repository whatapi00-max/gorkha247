import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online Slots Nepal | Slot Games | Jackpot Slots | GorkhaBooks 2026',
  description: 'Play online slots in Nepal on GorkhaBooks. Best slot games, jackpot slots, fruit slots, video slots. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal. Win big jackpots.',
  keywords: 'online slots Nepal, slot games Nepal, jackpot slots Nepal, fruit slots Nepal, video slots Nepal, slot machine Nepal, real money slots Nepal, best slots Nepal, progressive jackpot Nepal, slot games for real money Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/slots',
  },
}

export default function SlotsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Online Slots Nepal - Slot Games & Jackpots 2026</h1>
        <p className="text-gray-300 mb-8">
          Play the best online slots in Nepal on GorkhaBooks. We offer a wide variety of slot games including jackpot slots, fruit slots, and video slots. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
