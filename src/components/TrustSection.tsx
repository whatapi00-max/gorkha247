'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Headphones, CheckCircle, Globe } from 'lucide-react'

const trustItems = [
  { icon: Zap, title: 'Fast Payouts', subtitle: '5 मिनेटमा Withdrawal', color: 'text-neon' },
  { icon: Shield, title: 'Secure Gaming', subtitle: '100% सुरक्षित Platform', color: 'text-purple-400' },
  { icon: Headphones, title: '24/7 Support', subtitle: 'जुनसुकै समय सहायता', color: 'text-cyan-400' },
  { icon: CheckCircle, title: 'Nepal Trusted', subtitle: 'नेपालको भरपर्दो Platform', color: 'text-gold' },
  { icon: Globe, title: 'Instant Response', subtitle: 'तुरुन्तै जवाफ', color: 'text-green-400' },
]

export default function TrustSection() {
  return (
    <section className="py-16 px-4 bg-dark-100/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-3"
          >
            <span className="text-white">किन </span>
            <span className="text-neon neon-text">Gorkha247</span>
            <span className="text-white"> रोज्ने?</span>
          </motion.h2>
          <p className="text-gray-400">Nepal Trusted Betting Site | Secure Gaming | Fast Payout | 50,000+ Active Players | 24/7 Support</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl glass neon-border hover:border-neon/50 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 mb-4 ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-500/20">
            <p className="text-2xl md:text-3xl font-black text-neon">50,000+</p>
            <p className="text-xs text-gray-400 mt-1">Active Players</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/10 border border-purple-500/20">
            <p className="text-2xl md:text-3xl font-black text-purple-400">NPR 5Cr+</p>
            <p className="text-xs text-gray-400 mt-1">Total Winnings</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-yellow-900/20 to-amber-900/10 border border-yellow-500/20">
            <p className="text-2xl md:text-3xl font-black text-gold">100+</p>
            <p className="text-xs text-gray-400 mt-1">Games Available</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20">
            <p className="text-2xl md:text-3xl font-black text-cyan-400">5 Min</p>
            <p className="text-xs text-gray-400 mt-1">Avg. Withdrawal</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
