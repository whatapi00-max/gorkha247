import Link from 'next/link'
import { Gamepad2, Gift, Plane, Trophy, Dice5, CreditCard, Wallet, Banknote, Zap, MonitorPlay, Sparkles, Activity } from 'lucide-react'

const links = [
  { href: '/games', label: 'Online Games', desc: 'Aviator, Casino, Slots', icon: Gamepad2 },
  { href: '/bonus', label: 'Betting Bonus', desc: 'Welcome & Daily Bonus', icon: Gift },
  { href: '/aviator', label: 'Aviator Game', desc: 'Crash Game Nepal', icon: Plane },
  { href: '/cricket', label: 'Cricket Betting', desc: 'IPL, T20, World Cup', icon: Trophy },
  { href: '/ipl-betting', label: 'IPL Betting', desc: 'IPL 2026 Odds', icon: Sparkles },
  { href: '/live-casino', label: 'Live Casino', desc: 'Roulette, Blackjack', icon: Dice5 },
  { href: '/teen-patti', label: 'Teen Patti', desc: 'Online Card Game', icon: CreditCard },
  { href: '/slots', label: 'Slot Games', desc: 'Jackpot Slots Nepal', icon: MonitorPlay },
  { href: '/football-betting', label: 'Football Betting', desc: 'EPL, Champions League', icon: Activity },
  { href: '/esewa-betting', label: 'eSewa Betting', desc: 'Instant Deposit', icon: Wallet },
  { href: '/khalti-betting', label: 'Khalti Betting', desc: 'Quick Deposit', icon: Banknote },
  { href: '/withdrawal', label: 'Fast Withdrawal', desc: '5 Minute Payout', icon: Zap },
]

export default function InternalLinks() {
  return (
    <section className="py-16 bg-dark-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-white mb-2 text-center">
          Explore GorkhaBooks Nepal
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Discover all our betting and gaming options
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-4 bg-dark-200 rounded-xl hover:bg-dark-300 transition-all duration-300 border border-green-900/20 hover:border-neon/30"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-900/30 rounded-lg group-hover:bg-neon/20 transition-colors">
                  <link.icon className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm group-hover:text-neon transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {link.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
