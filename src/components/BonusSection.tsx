'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, Clock, ArrowRight } from 'lucide-react'
import { WHATSAPP_URL, BONUSES } from '@/lib/constants'

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 5, minutes: 42, seconds: 18 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) { seconds = 59; minutes-- }
        if (minutes < 0) { minutes = 59; hours-- }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59 }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1 text-xs">
      <Clock size={12} className="text-red-400" />
      <span className="bg-red-900/50 px-1.5 py-0.5 rounded text-red-300 font-mono">
        {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </span>
    </div>
  )
}

export default function BonusSection() {
  return (
    <section className="py-16 px-4" id="bonus">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-3"
          >
            <span className="text-gold gold-text">🎁 Bonus</span>
            <span className="text-white"> & Offers</span>
          </motion.h2>
          <p className="text-gray-400">आजको exclusive bonuses claim गर्नुहोस् | Limited Time Only!</p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BONUSES.map((bonus, index) => (
            <motion.a
              key={bonus.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${bonus.color} p-6 min-h-[220px] flex flex-col justify-between`}>
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Gift size={24} className="text-white/80" />
                    <CountdownTimer />
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">{bonus.title}</h3>
                  <p className="text-sm text-white/70 mb-1">{bonus.titleNp}</p>
                  <div className="text-3xl font-black text-white my-3">{bonus.amount}</div>
                  <p className="text-sm text-white/80">{bonus.description}</p>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                    Claim Now
                  </span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Extra CTA */}
        <div className="text-center mt-10">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-black px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-500/30 btn-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Gift size={22} />
            सबै Bonus Claim गर्नुहोस्
          </motion.a>
        </div>
      </div>
    </section>
  )
}
