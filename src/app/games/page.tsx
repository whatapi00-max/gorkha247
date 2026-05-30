import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online Games Nepal | Best Betting Games | GorkhaBooks 2026',
  description: 'Play best online games in Nepal on GorkhaBooks. Aviator, Cricket Betting, Live Casino, Teen Patti, Slots, Poker, Roulette, Blackjack. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'online games Nepal, best betting games Nepal, Aviator game Nepal, cricket betting games, live casino games, Teen Patti online, slots Nepal, poker Nepal, roulette Nepal, blackjack Nepal, real money games Nepal, casino games Nepal, betting games Nepal, online gaming Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/games',
  },
}

export default function GamesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Online Games Nepal - Best Betting Games 2026</h1>
        <p className="text-gray-300 mb-8">
          Play the best online games in Nepal on GorkhaBooks. We offer a wide variety of games including Aviator, Cricket Betting, Live Casino, Teen Patti, Slots, Poker, Roulette, Blackjack, and more. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
