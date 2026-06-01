import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online Games Nepal | Best Betting Games | GorkhaBooks 2026',
  description: 'Play best online games in Nepal on GorkhaBooks. Aviator, Cricket Betting, Live Casino, Teen Patti, Slots, Poker, Roulette, Blackjack. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'online games Nepal, best betting games Nepal, Aviator game Nepal, cricket betting games, live casino games, Teen Patti online, slots Nepal, poker Nepal, roulette Nepal, blackjack Nepal, real money games Nepal, casino games Nepal, betting games Nepal, online gaming Nepal',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://gorkha247.com/games',
  },
  openGraph: {
    title: 'Online Games Nepal | Best Betting Games | GorkhaBooks 2026',
    description: 'Play best online games in Nepal on GorkhaBooks. Aviator, Cricket Betting, Live Casino, Teen Patti, Slots, Poker, Roulette, Blackjack.',
    url: 'https://gorkha247.com/games',
    siteName: 'GorkhaBooks',
    images: [{ url: 'https://gorkha247.com/logo.png', width: 1200, height: 630 }],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Games Nepal | Best Betting Games | GorkhaBooks 2026',
    description: 'Play best online games in Nepal on GorkhaBooks. Aviator, Cricket Betting, Live Casino, Teen Patti, Slots.',
    images: ['https://gorkha247.com/logo.png'],
  },
}

export default function GamesPage() {
  return (
    <div className="min-h-screen pt-20 bg-dark-500">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Online Games Nepal - Best Betting Games 2026</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6 text-lg">
            Play the best online games in Nepal on GorkhaBooks. We offer a wide variety of games including Aviator, Cricket Betting, Live Casino, Teen Patti, Slots, Poker, Roulette, Blackjack, and more. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal in 5 minutes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Popular Games on GorkhaBooks Nepal</h2>
          <p className="text-gray-300 mb-4">
            GorkhaBooks is Nepal's #1 online gaming platform offering the most popular betting and casino games. Our platform supports instant deposits via eSewa, Khalti, and IME Pay, making it the easiest way for Nepali players to enjoy real money gaming.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Aviator Game Nepal</h3>
          <p className="text-gray-300 mb-4">
            Experience the thrill of Aviator, the most popular crash game in Nepal. Watch the multiplier rise and cash out before it crashes. With instant payouts and exciting gameplay, Aviator has become the favorite game for thousands of Nepali players.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Cricket Betting Games</h3>
          <p className="text-gray-300 mb-4">
            Bet on IPL 2026, T20 World Cup, ICC tournaments, and Nepal Premier League. Our cricket betting platform offers live odds, match predictions, and instant bet placement. Join 50,000+ Nepali cricket fans betting on GorkhaBooks.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Live Casino Games Nepal</h3>
          <p className="text-gray-300 mb-4">
            Play live dealer games including Roulette, Blackjack, Baccarat, Dragon Tiger, and Teen Patti. Our live casino features professional dealers, HD streaming, and real-time gameplay. Experience the authentic casino atmosphere from your home in Nepal.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Teen Patti & Card Games</h3>
          <p className="text-gray-300 mb-4">
            Enjoy Teen Patti, Andar Bahar, Poker, and other popular card games. Play with real money, compete with other players, and win big. Our platform offers the best Teen Patti experience in Nepal with fair gameplay and instant withdrawals.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Slot Games & Jackpots</h3>
          <p className="text-gray-300 mb-4">
            Spin the reels on hundreds of slot games with progressive jackpots, bonus rounds, and free spins. From classic fruit slots to modern video slots, we have games for every player. Win massive jackpots with deposits starting from just NPR 100.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose GorkhaBooks for Online Gaming?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Instant deposit via eSewa, Khalti, IME Pay</li>
            <li>Fast withdrawal in 5 minutes</li>
            <li>Best odds in Nepal</li>
            <li>24/7 WhatsApp support</li>
            <li>50,000+ active players</li>
            <li>Licensed and trusted platform</li>
            <li>Mobile-friendly gaming</li>
            <li>Daily bonuses and promotions</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Start Playing Games on GorkhaBooks</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
            <li>Contact us on WhatsApp to create your account</li>
            <li>Deposit using eSewa, Khalti, or IME Pay (minimum NPR 100)</li>
            <li>Choose your favorite game from our collection</li>
            <li>Place your bets and start winning</li>
            <li>Withdraw your winnings instantly</li>
          </ol>

          <p className="text-gray-300 mb-6">
            Join GorkhaBooks today and experience the best online gaming in Nepal. With trusted payment methods, instant withdrawals, and 24/7 support, we make online gaming safe, fun, and rewarding for all Nepali players.
          </p>
        </div>

        <Link href="/" className="inline-block mt-8 text-neon hover:underline text-lg">← Back to Home</Link>
      </div>
    </div>
  )
}
