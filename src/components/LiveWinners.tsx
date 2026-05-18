'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { WINNERS } from '@/lib/constants'

export default function LiveWinners() {
  return (
    <section className="py-8 overflow-hidden border-y border-green-900/20 bg-dark-100/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <Trophy size={20} className="text-gold" />
          <h2 className="text-lg font-bold text-white">
            🏆 Live Winners Nepal | <span className="text-neon">भर्खरका विजेताहरू</span> | Online Betting Nepal 2026
          </h2>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-xs text-red-400">LIVE</span>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden">
        <div className="flex ticker whitespace-nowrap">
          {[...WINNERS, ...WINNERS].map((winner, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-4 bg-dark-200/80 border border-green-900/30 rounded-full px-4 py-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-black font-bold text-sm">
                {winner.name[0]}
              </div>
              <div>
                <span className="text-white font-medium text-sm">{winner.name}</span>
                <span className="text-gray-500 text-sm"> from {winner.location}</span>
              </div>
              <span className="text-neon font-bold text-sm">won {winner.amount}</span>
              <span className="text-purple-400 text-xs">in {winner.game}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
