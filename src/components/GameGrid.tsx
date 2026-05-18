'use client'

import { motion } from 'framer-motion'
import { Play, Users, Flame, TrendingUp } from 'lucide-react'
import { WHATSAPP_URL, GAMES } from '@/lib/constants'

export default function GameGrid() {
  return (
    <section className="py-16 px-4 bg-dark-100/30" id="games">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-3"
          >
            <span className="text-white">Nepal Online Casino </span>
            <span className="text-neon neon-text">Games</span>
            <span className="text-white"> खेल्नुहोस्</span>
          </motion.h2>
          <h3 className="text-gray-400 text-base">Aviator, Cricket Betting, Live Casino, Slots, Teen Patti - 100+ Games | Nepal Best Odds | Instant Play</h3>
          <p className="text-gray-500 text-sm mt-2">Choose your favorite game र WhatsApp बाट instantly खेल्न सुरु गर्नुहोस् | eSewa, Khalti बाट deposit गर्नुहोस्</p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {GAMES.map((game, index) => (
            <motion.a
              key={game.name}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="game-card relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-dark-100 rounded-xl overflow-hidden neon-border p-4 h-full flex flex-col items-center justify-center min-h-[180px]">
                {/* Badges */}
                {game.hot && (
                  <div className="absolute top-2 left-2 badge-hot text-[10px] px-2 py-0.5 rounded-full text-white font-bold flex items-center gap-1 z-10">
                    <Flame size={10} /> HOT
                  </div>
                )}
                {game.trending && (
                  <div className="absolute top-2 right-2 bg-purple-600 text-[10px] px-2 py-0.5 rounded-full text-white font-bold flex items-center gap-1 z-10">
                    <TrendingUp size={10} /> Trending
                  </div>
                )}

                {/* Game Icon */}
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>

                {/* Game Name */}
                <h3 className="text-sm font-bold text-white text-center mb-2">{game.name}</h3>

                {/* Live Players */}
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                  <Users size={12} className="text-neon" />
                  <span>{game.players.toLocaleString()} playing</span>
                </div>

                {/* Play Button */}
                <div className="w-full bg-gradient-to-r from-neon to-green-500 text-black text-xs font-bold py-2 px-3 rounded-lg text-center flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={12} /> Play Now
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="text-center mt-8">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            सबै Games हेर्नुहोस् →
          </motion.a>
        </div>
      </div>
    </section>
  )
}
