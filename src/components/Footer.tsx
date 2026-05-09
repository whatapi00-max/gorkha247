'use client'

import { MessageCircle, Heart } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-green-900/20 pt-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon to-green-600 flex items-center justify-center font-black text-black text-lg">
                G
              </div>
              <span className="text-xl font-bold">
                <span className="text-neon">Gorkha</span>
                <span className="text-gold">247</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              नेपालको सबैभन्दा भरपर्दो online gaming platform। Instant deposit, fast withdrawal, र daily bonus सहित।
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-500 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Support
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {['Aviator', 'Cricket Betting', 'Live Casino', 'Slots', 'Teen Patti', 'Poker'].map(link => (
                <li key={link}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              {['Deposit Guide', 'Withdrawal Guide', 'Bonus Rules', 'FAQs', 'Contact Us', 'Responsible Gaming'].map(link => (
                <li key={link}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-400">24/7 WhatsApp Support</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-neon to-green-500 text-black py-3 rounded-lg font-bold text-sm btn-pulse"
              >
                💬 Chat Now
              </a>
              <p className="text-xs text-gray-500">Response Time: Under 2 minutes</p>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">Gorkha247 - Nepal Best Online Betting Site & Casino Platform 2024</h2>
          <div className="text-sm text-gray-500 space-y-3">
            <p>
              Gorkha247 नेपालको सबैभन्दा trusted online gaming र betting platform हो जसमा 50,000+ active players daily खेल्छन्। हाम्रो platform मा तपाईंले Aviator game Nepal, Cricket Betting, Football Betting, Live Casino, Online Slots, Teen Patti, Dragon Tiger, Poker, Roulette, Jackpot, eSports betting, र Lottery जस्ता 100+ popular games खेल्न सक्नुहुन्छ। Nepal betting site को रूपमा हामी instant deposit (eSewa, Khalti, IME Pay) र 5-minute fast withdrawal को guarantee दिन्छौं।
            </p>
            <p>
              Best betting site Nepal मा खोज्दै हुनुहुन्छ? Gorkha247 ले 100% welcome bonus, 50% reload bonus, 15% weekly cashback, VIP exclusive rewards, र NPR 500 referral bonus जस्ता Nepal मा सबैभन्दा attractive offers प्रदान गर्दछ। Online casino Nepal मा सबैभन्दा secure, fast, र reliable platform को रूपमा Gorkha247 लाई Kathmandu, Pokhara, Biratnagar, Lalitpur, Bharatpur, Birgunj, Butwal, Dharan लगायत Nepal भरिका हजारौं players ले विश्वास गर्छन्।
            </p>
            <p>
              Nepal cricket betting (IPL betting Nepal, World Cup betting), Aviator Nepal, live casino Nepal, nepal slot games, nepal poker online - यी सबै games अब तपाईंको mobile बाट खेल्न सकिन्छ। Nepal online gaming, nepal real money games, nepal earning game, nepal paisa kamaaune game - सबैको एउटै destination: Gorkha247। आजै WhatsApp मा join गर्नुहोस् र 100% welcome bonus पाउनुहोस्। हाम्रो 24/7 customer support team सधैं तपाईंको सहायताको लागि तयार छ।
            </p>
            <p>
              Nepal online satta, nepal jua khel, nepal betting app alternative, trusted casino nepal, instant withdrawal nepal, nepal best odds, nepal live score betting - यी सबै features Gorkha247 मा available छन्। Nepal VIP casino experience, nepal free bet, nepal cashback offer, nepal casino bonus - सबैको लागि एउटै platform: Gorkha247.com। नेपालको नम्बर 1 gaming platform मा आजै register गर्नुहोस्!
            </p>
          </div>
        </div>

        {/* Responsible Gaming */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-4">
            <h3 className="text-sm font-bold text-yellow-400 mb-2">⚠️ Responsible Gaming | जिम्मेवार Gaming</h3>
            <p className="text-xs text-gray-500">
              Gaming should be fun and entertaining. Please play responsibly. Only play with money you can afford to lose. If you feel you have a gambling problem, please seek help. Must be 18+ to play. खेल मनोरञ्जनको लागि हो। जिम्मेवारीपूर्वक खेल्नुहोस्।
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2024 Gorkha247. All rights reserved. नेपालको नम्बर 1 Gaming Platform.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500" /> for Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}
