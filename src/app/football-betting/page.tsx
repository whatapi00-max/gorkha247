import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Football Betting Nepal | EPL Betting | World Cup 2026 | GorkhaBooks',
  description: 'Best football betting in Nepal on GorkhaBooks. EPL betting, Champions League betting, World Cup 2026 betting, Nepal football betting. Live football odds, instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'football betting Nepal, EPL betting Nepal, Champions League betting Nepal, World Cup 2026 betting Nepal, Nepal football betting, live football betting Nepal, football odds Nepal, Premier League Nepal betting, football satta Nepal, football match prediction Nepal',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://gorkha247.com/football-betting',
  },
  openGraph: {
    title: 'Football Betting Nepal | EPL Betting | World Cup 2026 | GorkhaBooks',
    description: 'Best football betting in Nepal on GorkhaBooks. EPL betting, Champions League betting, World Cup 2026 betting, Nepal football betting.',
    url: 'https://gorkha247.com/football-betting',
    siteName: 'GorkhaBooks',
    images: [{ url: 'https://gorkha247.com/logo.png', width: 1200, height: 630 }],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Football Betting Nepal | EPL Betting | World Cup 2026 | GorkhaBooks',
    description: 'Best football betting in Nepal. EPL, Champions League, World Cup 2026. Live football odds, instant deposit via eSewa, Khalti.',
    images: ['https://gorkha247.com/logo.png'],
  },
}

export default function FootballBettingPage() {
  return (
    <div className="min-h-screen pt-20 bg-dark-500">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Football Betting Nepal - EPL, Champions League, World Cup 2026</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6 text-lg">
            Bet on football in Nepal on GorkhaBooks. We offer EPL betting, Champions League betting, World Cup 2026 betting, and Nepal football betting with live odds. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal in 5 minutes. Join thousands of Nepali football fans betting on their favorite teams and leagues.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Football Leagues Available for Betting</h2>
          
          <h3 className="text-xl font-bold text-neon mt-6 mb-3">English Premier League (EPL)</h3>
          <p className="text-gray-300 mb-4">
            The world's most-watched football league featuring legendary clubs like Manchester United, Manchester City, Liverpool, Chelsea, Arsenal, and Tottenham. Bet on all 380 EPL matches each season with competitive odds. Markets include match winner, total goals, correct score, first goalscorer, and more. EPL runs from August to May.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">UEFA Champions League</h3>
          <p className="text-gray-300 mb-4">
            Europe's premier club competition featuring the best teams from across the continent. Watch Real Madrid, Barcelona, Bayern Munich, PSG, and other giants compete for the ultimate prize. Bet on group stage matches, knockout rounds, and the final. Special markets include group winners, tournament winner, and top scorer.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">FIFA World Cup 2026</h3>
          <p className="text-gray-300 mb-4">
            The biggest football tournament on Earth is coming to North America in 2026. 48 teams will compete across USA, Canada, and Mexico. Bet on group matches, knockout stages, and the final. Special markets include tournament winner, top scorer, best player, and team to reach final. World Cup 2026 promises to be the most exciting yet.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">La Liga (Spanish League)</h3>
          <p className="text-gray-300 mb-4">
            Home to football powerhouses Real Madrid and Barcelona. La Liga showcases technical, attacking football with some of the world's best players. Bet on El Clasico, Sevilla derby, and all other matches. Season runs August to May with 38 matchdays.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Serie A (Italian League)</h3>
          <p className="text-gray-300 mb-4">
            Italian football at its finest featuring Juventus, AC Milan, Inter Milan, Napoli, and Roma. Known for tactical battles and defensive excellence. Bet on all matches with markets including match result, both teams to score, and under/over goals.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Bundesliga (German League)</h3>
          <p className="text-gray-300 mb-4">
            High-intensity football featuring Bayern Munich, Borussia Dortmund, and other German giants. Known for passionate fans and high-scoring games. Bet on all 306 matches per season with great odds and multiple markets.
          </p>

          <h3 className="text-xl font-bold text-neon mt-6 mb-3">Nepal Football League</h3>
          <p className="text-gray-300 mb-4">
            Support domestic Nepali football by betting on Nepal's top clubs including Kathmandu Rayzrs, Lalitpur City, and other teams. Show your support for Nepali football while enjoying betting excitement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Football Betting Markets</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong>Match Result (1X2):</strong> Bet on Home Win, Draw, or Away Win</li>
            <li><strong>Total Goals (Over/Under):</strong> Bet on number of goals in match</li>
            <li><strong>Both Teams to Score:</strong> Bet on whether both teams will score</li>
            <li><strong>Correct Score:</strong> Predict exact final score</li>
            <li><strong>First Goalscorer:</strong> Bet on who scores first</li>
            <li><strong>Anytime Goalscorer:</strong> Bet on player to score anytime</li>
            <li><strong>Half-Time/Full-Time:</strong> Predict result at half and full time</li>
            <li><strong>Handicap Betting:</strong> Level the playing field between teams</li>
            <li><strong>Live Betting:</strong> Bet while match is in progress</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Football Betting Tips for Nepali Players</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
            <li>Research team form - check last 5-10 matches</li>
            <li>Check head-to-head records between teams</li>
            <li>Follow team news - injuries and suspensions affect outcomes</li>
            <li>Consider home advantage - teams perform better at home</li>
            <li>Check weather conditions - affects playing style</li>
            <li>Look at motivation - cup finals vs dead rubbers</li>
            <li>Start with match result before trying complex markets</li>
            <li>Set budget and stick to it - don't chase losses</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Start Football Betting</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
            <li>Contact GorkhaBooks on WhatsApp to create account</li>
            <li>Deposit via eSewa, Khalti, or IME Pay (min NPR 100)</li>
            <li>Browse upcoming football fixtures and leagues</li>
            <li>Select match and betting market</li>
            <li>Enter stake amount and confirm bet</li>
            <li>Watch match live and track your bet</li>
            <li>Collect winnings after match ends</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Major Football Events Calendar</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong>Premier League:</strong> August - May (annual)</li>
            <li><strong>Champions League:</strong> September - June (annual)</li>
            <li><strong>World Cup 2026:</strong> June - July 2026 (quadrennial)</li>
            <li><strong>Euro 2028:</strong> June - July 2028 (quadrennial)</li>
            <li><strong>Copa America:</strong> June - July (quadrennial)</li>
            <li><strong>AFC Asian Cup:</strong> January - February (quadrennial)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose GorkhaBooks for Football Betting?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Best football odds in Nepal market</li>
            <li>Coverage of all major leagues and tournaments</li>
            <li>Live betting with real-time odds updates</li>
            <li>Wide range of betting markets</li>
            <li>Instant deposits via eSewa, Khalti, IME Pay</li>
            <li>5-minute fast withdrawal</li>
            <li>50,000+ Nepali football bettors trust us</li>
            <li>24/7 WhatsApp customer support</li>
            <li>Mobile-friendly betting platform</li>
            <li>Secure and licensed betting site</li>
          </ul>

          <p className="text-gray-300 mb-6">
            Join GorkhaBooks today and start betting on football with Nepal's best odds. Whether you love the Premier League, Champions League, or international tournaments, we offer the best football betting experience with instant deposits, fast withdrawals, and comprehensive coverage. Bet on football like a pro with GorkhaBooks Nepal!
          </p>
        </div>

        <Link href="/" className="inline-block mt-8 text-neon hover:underline text-lg">← Back to Home</Link>
      </div>
    </div>
  )
}
