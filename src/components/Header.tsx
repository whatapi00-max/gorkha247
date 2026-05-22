'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Gift, MessageCircle, Users, Zap } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState(4523)

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prev => prev + Math.floor(Math.random() * 10) - 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="casino-lights h-1 w-full"></div>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          aria-label="GorkhaBooks - Nepal #1 Online Betting Site & Casino 2026"
        >
          <img 
            src="/logo.png" 
            alt="GorkhaBooks - Nepal #1 Online Betting Site & Casino 2026" 
            className="w-14 h-14 rounded-lg object-contain bg-dark-100/50 p-1"
          />
          <span className="text-xl font-bold hidden sm:block">
            <span className="text-neon neon-text">Gorkha</span>
            <span className="text-gold">247</span>
          </span>
        </motion.a>

        {/* Live Users Counter */}
        <div className="hidden md:flex items-center gap-2 text-sm bg-dark-100 px-3 py-1.5 rounded-full border border-green-900">
          <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
          <Users size={14} className="text-neon" />
          <span className="text-gray-300">{onlineUsers.toLocaleString()} Online</span>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm btn-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Join WhatsApp for Nepal Betting Support"
          >
            <MessageCircle size={16} />
            Join WhatsApp
          </motion.a>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-600 text-black px-4 py-2 rounded-lg font-semibold text-sm"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get Nepal Betting Bonus"
          >
            <Gift size={16} />
            Get Bonus
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-100 border-t border-green-900/30"
          >
            <div className="px-4 py-4 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-300 pb-2 border-b border-gray-800">
                <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
                <Users size={14} className="text-neon" />
                {onlineUsers.toLocaleString()} Players Online
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-3 rounded-lg font-semibold"
              >
                <MessageCircle size={20} />
                Join WhatsApp Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-gradient-to-r from-gold to-yellow-600 text-black px-4 py-3 rounded-lg font-semibold"
              >
                <Gift size={20} />
                Claim Bonus
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold"
              >
                <Zap size={20} />
                Start Playing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
