import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cricket Betting Nepal | IPL Betting | T20 World Cup | GorkhaBooks 2026',
  description: 'Best cricket betting in Nepal on GorkhaBooks. IPL betting, T20 World Cup betting, ICC tournament betting, Nepal Premier League. Live cricket odds, instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'cricket betting Nepal, IPL betting Nepal, T20 World Cup betting Nepal, Nepal cricket betting, live cricket betting Nepal, cricket odds Nepal, ICC tournament betting Nepal, Nepal Premier League betting, cricket match prediction Nepal, Nepal vs India betting, cricket satta Nepal',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://gorkha247.com/cricket',
  },
  openGraph: {
    title: 'Cricket Betting Nepal | IPL Betting | T20 World Cup | GorkhaBooks 2026',
    description: 'Best cricket betting in Nepal on GorkhaBooks. IPL betting, T20 World Cup betting, ICC tournament betting, Nepal Premier League.',
    url: 'https://gorkha247.com/cricket',
    siteName: 'GorkhaBooks',
    images: [{ url: 'https://gorkha247.com/logo.png', width: 1200, height: 630 }],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cricket Betting Nepal | IPL Betting | T20 World Cup | GorkhaBooks 2026',
    description: 'Best cricket betting in Nepal. IPL, T20 World Cup, ICC tournaments. Live odds, instant deposit via eSewa, Khalti.',
    images: ['https://gorkha247.com/logo.png'],
  },
}

export default function CricketPage() {
  return (
    <div className="min-h-screen pt-20 bg-dark-500">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Cricket Betting Nepal - IPL, T20 World Cup, Live Odds 2026</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6 text-lg">
            Bet on cricket in Nepal on GorkhaBooks. We offer IPL betting, T20 World Cup betting, ICC tournament betting, and Nepal Premier League betting with live cricket odds. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal in 5 minutes. Join 50,000+ Nepali cricket fans betting on their favorite teams.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cricket Betting Markets Available</h2>
          
          <h3 className="text-xl font-bold text-neon mt-6 mb-3">IPL 2026 Betting Nepal</h3>
          <p className="text-gray-300 mb-4">
            The Indian Premier League is the most popular cricket tournament for Nepali bettors. Bet on all 74 IPL matches with competitive odds. Available markets include match winner, top batsman, top bowler, total runs, highest opening partnership, and more. Follow your favorite IPL teams: CSK, MI, RCB, KKR, SRH, PBKS, RR, DC, GT, LSG.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">T20 World Cup Betting Nepal</h3>
          <p className="text-gray-300 mb-4">
            Bet on ICC T20 World Cup matches with best odds in Nepal. Support Nepal national team against international opponents. Markets include match betting, group winners, tournament winner, top run scorer, and highest wicket taker. Experience the excitement of T20 cricket betting with instant deposits and fast payouts.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">ICC Cricket World Cup Betting</h3>
          <p className="text-gray-300 mb-4">
            The Cricket World Cup brings the best international teams together. Bet on ODI matches, group stages, and knockout rounds. Special markets include man of the match, method of dismissal, total boundaries, and more. Get ready for World Cup 2027 with early betting odds.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Nepal Premier League (NPL) Betting</h3>
          <p className="text-gray-300 mb-4">
            Support domestic Nepali cricket with NPL betting. Bet on Nepal's top franchise teams including Kathmandu Kings, Pokhara Rhinos, Biratnagar Warriors, and more. Show your support for Nepali cricket while winning real money.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">International Cricket Betting</h3>
          <p className="text-gray-300 mb-4">
            Bet on international test matches, ODIs, and T20 series. Follow Nepal vs India, Pakistan, Bangladesh, and other major rivalries. All international matches available with live betting options and best odds guaranteed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Types of Cricket Bets</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong>Match Winner:</strong> Bet on which team will win the match</li>
            <li><strong>Top Batsman:</strong> Predict highest run scorer in match/series</li>
            <li><strong>Top Bowler:</strong> Predict highest wicket taker</li>
            <li><strong>Total Runs:</strong> Over/Under on team or match total</li>
            <li><strong>Innings Runs:</strong> First/Second innings total runs</li>
            <li><strong>Method of Dismissal:</strong> How next wicket will fall</li>
            <li><strong>Man of the Match:</strong> Predict best player award winner</li>
            <li><strong>Live Betting:</strong> Bet while match is in progress</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cricket Betting Tips for Nepali Players</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
            <li>Research team form, player stats, and pitch conditions</li>
            <li>Check weather forecast before placing bets</li>
            <li>Follow toss results - it often affects match outcome</li>
            <li>Start with match winner bets before exploring complex markets</li>
            <li>Set a betting budget and stick to it</li>
            <li>Use live betting to capitalize on match momentum shifts</li>
            <li>Don't chase losses after bad betting days</li>
            <li>Follow expert cricket predictions and analysis</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Start Cricket Betting on GorkhaBooks</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
            <li>Contact us on WhatsApp to create your betting account</li>
            <li>Deposit via eSewa, Khalti, or IME Pay (minimum NPR 100)</li>
            <li>Browse upcoming cricket matches and tournaments</li>
            <li>Select your preferred betting market</li>
            <li>Enter stake amount and confirm your bet</li>
            <li>Watch the match and track your bets live</li>
            <li>Collect winnings instantly after match completion</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose GorkhaBooks for Cricket Betting?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Best cricket odds in Nepal - higher payouts guaranteed</li>
            <li>Live betting available on all major matches</li>
            <li>Coverage of all international and domestic cricket</li>
            <li>Instant deposits via eSewa, Khalti, IME Pay</li>
            <li>5-minute fast withdrawal after match</li>
            <li>50,000+ Nepali cricket bettors trust us</li>
            <li>24/7 WhatsApp customer support</li>
            <li>Special IPL and World Cup promotions</li>
            <li>Mobile-friendly betting platform</li>
            <li>Secure and licensed betting site</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Upcoming Cricket Events 2026-2027</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>IPL 2026 - March to May 2026</li>
            <li>T20 World Cup 2026 - June 2026</li>
            <li>Nepal Premier League 2026 - December 2026</li>
            <li>ICC Cricket World Cup 2027 - Early 2027</li>
            <li>Nepal vs Bangladesh Series - 2026</li>
            <li>Nepal vs UAE Matches - 2026</li>
          </ul>

          <p className="text-gray-300 mb-6">
            Join GorkhaBooks today and start betting on cricket with Nepal's best odds. Whether you love IPL, international cricket, or Nepal Premier League, we offer the best cricket betting experience with instant deposits, fast withdrawals, and 24/7 support. Bet on cricket like a pro with GorkhaBooks Nepal.
          </p>
        </div>

        <Link href="/" className="inline-block mt-8 text-neon hover:underline text-lg">← Back to Home</Link>
      </div>
    </div>
  )
}
