'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Gift, Play, Sparkles, TrendingUp, Zap } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>
      
      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-500"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-dark-100/80 border border-neon/30 rounded-full px-4 py-2 mb-6"
        >
          <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300">🔥 4,500+ Players Online Now</span>
          <Sparkles size={14} className="text-gold" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="text-white">नेपालको नम्बर </span>
          <span className="text-neon neon-text">1</span>
          <br />
          <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
            Online Betting & Casino
          </span>
        </motion.h1>

        {/* Sub Heading H2 for SEO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto font-semibold"
        >
          Nepal Best Betting Site | Instant Deposit & 5-Min Withdrawal | Daily Bonus NPR 10,000+ 🎯
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto"
        >
          Aviator Game • Cricket Betting • Live Casino • Slots • Teen Patti • Dragon Tiger • Poker
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-sm md:text-base">
            <TrendingUp size={18} className="text-neon" />
            <span className="text-gray-300">NPR 5 Crore+ Won</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Zap size={18} className="text-gold" />
            <span className="text-gray-300">Instant Withdrawal</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Sparkles size={18} className="text-purple-400" />
            <span className="text-gray-300">24/7 Support</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 btn-pulse"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(57, 255, 20, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={22} />
            Join WhatsApp Now
          </motion.a>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-500/30"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Gift size={22} />
            Claim Bonus
          </motion.a>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={22} />
            Start Playing
          </motion.a>
        </motion.div>

        {/* Floating Game Icons */}
        <div className="absolute top-20 left-10 text-4xl animate-float opacity-60 hidden lg:block">🎰</div>
        <div className="absolute top-40 right-20 text-4xl animate-float opacity-60 hidden lg:block" style={{ animationDelay: '1s' }}>✈️</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-float opacity-60 hidden lg:block" style={{ animationDelay: '2s' }}>🏏</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-60 hidden lg:block" style={{ animationDelay: '3s' }}>💎</div>
        <div className="absolute top-60 left-1/4 text-3xl animate-float opacity-40 hidden lg:block" style={{ animationDelay: '1.5s' }}>🃏</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-float opacity-40 hidden lg:block" style={{ animationDelay: '2.5s' }}>🎲</div>
      </div>
    </section>
  )
}
