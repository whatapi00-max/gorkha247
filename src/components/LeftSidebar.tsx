'use client'

import { motion } from 'framer-motion'
import { WHATSAPP_URL, GAMES } from '@/lib/constants'

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 glass-dark overflow-y-auto z-40 border-r border-green-900/20">
      <div className="p-4">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
          Games Menu
        </h2>
        <nav className="space-y-1">
          {GAMES.map((game, index) => (
            <motion.a
              key={game.name}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 neon-border transition-all group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5, backgroundColor: 'rgba(57, 255, 20, 0.05)' }}
            >
              <span className="text-xl group-hover:scale-125 transition-transform">{game.icon}</span>
              <span className="text-sm font-medium flex-1">{game.name}</span>
              {game.hot && (
                <span className="badge-hot text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold">
                  HOT
                </span>
              )}
              {game.trending && !game.hot && (
                <span className="bg-purple-600 text-[10px] px-1.5 py-0.5 rounded-full text-white font-bold">
                  🔥
                </span>
              )}
            </motion.a>
          ))}
        </nav>

        {/* Sidebar CTA */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-500/20">
          <p className="text-sm font-bold text-neon mb-2">🎁 आजको Bonus</p>
          <p className="text-xs text-gray-400 mb-3">100% Welcome Bonus पाउनुहोस्!</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-neon text-black py-2 rounded-lg text-sm font-bold hover:bg-green-400 transition-colors"
          >
            Claim Now →
          </a>
        </div>
      </div>
    </aside>
  )
}
