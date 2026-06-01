import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nepal Betting Bonus | Welcome Bonus | Deposit Bonus | GorkhaBooks 2026',
  description: 'Get best betting bonus in Nepal on GorkhaBooks. Welcome bonus, deposit bonus, daily bonus, VIP rewards, cashback, referral bonus. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'Nepal betting bonus, welcome bonus Nepal, deposit bonus Nepal, daily bonus Nepal, VIP bonus Nepal, cashback bonus Nepal, referral bonus Nepal, betting rewards Nepal, casino bonus Nepal, sports betting bonus Nepal, free bets Nepal, no deposit bonus Nepal',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://gorkha247.com/bonus',
  },
  openGraph: {
    title: 'Nepal Betting Bonus | Welcome Bonus | Deposit Bonus | GorkhaBooks 2026',
    description: 'Get best betting bonus in Nepal on GorkhaBooks. Welcome bonus, deposit bonus, daily bonus, VIP rewards, cashback, referral bonus.',
    url: 'https://gorkha247.com/bonus',
    siteName: 'GorkhaBooks',
    images: [{ url: 'https://gorkha247.com/logo.png', width: 1200, height: 630 }],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nepal Betting Bonus | Welcome Bonus | GorkhaBooks 2026',
    description: 'Get best betting bonus in Nepal. Welcome bonus, deposit bonus, daily bonus, VIP rewards, cashback.',
    images: ['https://gorkha247.com/logo.png'],
  },
}

export default function BonusPage() {
  return (
    <div className="min-h-screen pt-20 bg-dark-500">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Nepal Betting Bonus - Welcome Bonus & Rewards 2026</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6 text-lg">
            Get the best betting bonuses in Nepal on GorkhaBooks. We offer welcome bonus, deposit bonus, daily bonus, VIP rewards, cashback, and referral bonus. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal in 5 minutes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Types of Bonuses on GorkhaBooks Nepal</h2>
          
          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Welcome Bonus Nepal</h3>
          <p className="text-gray-300 mb-4">
            New players get an exclusive welcome bonus on their first deposit. Deposit via eSewa, Khalti, or IME Pay and receive up to 100% bonus on your first deposit. Minimum deposit NPR 100. Use your bonus to play Aviator, Cricket Betting, Live Casino, Teen Patti, and Slots.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Deposit Bonus</h3>
          <p className="text-gray-300 mb-4">
            Get bonus on every deposit you make. Our deposit bonus program rewards loyal players with extra betting credits. The more you deposit, the bigger your bonus. Available for all payment methods including eSewa, Khalti, IME Pay, and bank transfer.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Daily Bonus Nepal</h3>
          <p className="text-gray-300 mb-4">
            Login daily to claim your daily bonus. We reward active players with daily bonuses, free spins, and cashback offers. Check your WhatsApp for daily bonus notifications and special promotions exclusive to Nepali players.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">VIP Rewards Program</h3>
          <p className="text-gray-300 mb-4">
            Join our VIP program and enjoy exclusive benefits including higher bonuses, faster withdrawals, dedicated account manager, special promotions, and invitations to exclusive events. VIP status is based on your betting activity and loyalty.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Cashback Bonus</h3>
          <p className="text-gray-300 mb-4">
            Get cashback on your losses. Our cashback program returns a percentage of your net losses back to your account. Weekly cashback is calculated automatically and credited to your account every Monday. No wagering requirements on cashback.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Referral Bonus Nepal</h3>
          <p className="text-gray-300 mb-4">
            Refer your friends and earn bonus. Share your referral link via WhatsApp and earn bonus for every friend who signs up and makes a deposit. Both you and your friend receive bonus credits. Unlimited referrals allowed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Claim Your Bonus</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
            <li>Contact us on WhatsApp to create your account</li>
            <li>Make your first deposit via eSewa, Khalti, or IME Pay</li>
            <li>Bonus is automatically credited to your account</li>
            <li>Start playing and meet wagering requirements</li>
            <li>Withdraw your winnings after completing requirements</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Bonus Terms & Conditions</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Minimum deposit: NPR 100</li>
            <li>Wagering requirement: 5x bonus amount</li>
            <li>Valid for 30 days from credit date</li>
            <li>Available for all games (Aviator, Cricket, Casino, Slots)</li>
            <li>One bonus per player, household, IP address</li>
            <li>GorkhaBooks reserves the right to modify terms</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose GorkhaBooks Bonuses?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Best bonus offers in Nepal</li>
            <li>Low wagering requirements</li>
            <li>Instant bonus credit</li>
            <li>Multiple bonus types available</li>
            <li>No hidden terms or conditions</li>
            <li>24/7 WhatsApp support for bonus queries</li>
            <li>Regular promotions and special offers</li>
          </ul>

          <p className="text-gray-300 mb-6">
            Join GorkhaBooks today and claim your welcome bonus. With the best bonus offers in Nepal, trusted payment methods, and instant withdrawals, we make online betting more rewarding for all Nepali players.
          </p>
        </div>

        <Link href="/" className="inline-block mt-8 text-neon hover:underline text-lg">← Back to Home</Link>
      </div>
    </div>
  )
}
