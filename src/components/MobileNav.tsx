'use client'

import { Home, Gamepad2, Gift, Wallet, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const navItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Gamepad2, label: 'Games', href: '#games' },
  { icon: Gift, label: 'Bonus', href: '#bonus' },
  { icon: Wallet, label: 'Deposit', href: WHATSAPP_URL },
  { icon: MessageCircle, label: 'WhatsApp', href: WHATSAPP_URL },
]

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-dark border-t border-green-900/30">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isWhatsApp = item.label === 'WhatsApp'
          const isExternal = item.href.startsWith('http')
          return (
            <a
              key={item.label}
              href={item.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                isWhatsApp ? 'text-neon' : 'text-gray-400 hover:text-white'
              }`}
            >
              <item.icon size={20} className={isWhatsApp ? 'animate-bounce-slow' : ''} />
              <span className={`text-[10px] font-medium ${isWhatsApp ? 'text-neon font-bold' : ''}`}>
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
