'use client'

import { motion } from 'framer-motion'
import { Wallet, ArrowDownCircle, RotateCcw, Crown, Users, Trophy, Headphones, Gift } from 'lucide-react'
import { WHATSAPP_URL, WINNERS } from '@/lib/constants'
import { useEffect, useState } from 'react'

const sidebarItems = [
  { icon: Wallet, label: 'Instant Deposit', sublabel: 'तुरुन्तै Deposit', color: 'text-neon' },
  { icon: ArrowDownCircle, label: 'Fast Withdrawal', sublabel: '5 Min मा Withdrawal', color: 'text-gold' },
  { icon: RotateCcw, label: 'Daily Cashback', sublabel: 'दैनिक Cashback', color: 'text-purple-400' },
  { icon: Crown, label: 'VIP Bonus', sublabel: 'VIP सदस्यता', color: 'text-yellow-400' },
  { icon: Users, label: 'Referral Bonus', sublabel: 'साथीलाई बोलाउनुहोस्', color: 'text-cyan-400' },
  { icon: Headphones, label: '24/7 Support', sublabel: 'सधैं सहायता', color: 'text-green-400' },
]

export default function RightSidebar() {
  const [currentWinner, setCurrentWinner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWinner(prev => (prev + 1) % WINNERS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <aside className="hidden xl:block fixed right-0 top-16 bottom-0 w-72 glass-dark overflow-y-auto z-40 border-l border-green-900/20">
      <div className="p-4 space-y-4">
        {/* Quick Actions */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Gift size={14} className="text-gold" />
            Quick Actions
          </h3>
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <motion.a
                key={item.label}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon/30 transition-all"
                whileHover={{ x: -3, scale: 1.02 }}
              >
                <item.icon size={18} className={item.color} />
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-[11px] text-gray-500">{item.sublabel}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Live Winners Feed */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-dark-100 to-dark-200 border border-green-900/20">
          <h3 className="text-sm font-bold text-neon mb-3 flex items-center gap-2">
            <Trophy size={14} />
            🏆 Live Winners
          </h3>
          <div className="space-y-2 min-h-[120px]">
            {WINNERS.slice(currentWinner, currentWinner + 3).map((winner, i) => (
              <motion.div
                key={`${winner.name}-${i}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-xs"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-black font-bold text-[10px]">
                  {winner.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{winner.name} • {winner.location}</p>
                  <p className="text-neon font-bold">{winner.amount}</p>
                </div>
                <span className="text-[10px] text-gray-500">{winner.game}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Big Wins */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/20">
          <h3 className="text-sm font-bold text-purple-300 mb-2">💰 Recent Big Wins</h3>
          <div className="text-center py-3">
            <motion.p
              key={currentWinner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-black text-gold gold-text"
            >
              {WINNERS[currentWinner].amount}
            </motion.p>
            <p className="text-xs text-gray-400 mt-1">{WINNERS[currentWinner].name} from {WINNERS[currentWinner].location}</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg text-sm font-bold mt-2 hover:opacity-90 transition-opacity"
          >
            तपाईं पनि जित्नुहोस् →
          </a>
        </div>
      </div>
    </aside>
  )
}
