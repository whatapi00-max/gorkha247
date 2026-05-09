'use client'

import { useEffect, useRef } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function AutoRedirect() {
  const redirected = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (redirected.current) return
      redirected.current = true

      // Create a hidden anchor and click it - works on all devices
      const link = document.createElement('a')
      link.href = WHATSAPP_URL
      link.setAttribute('target', '_self')
      link.setAttribute('rel', 'noopener noreferrer')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Fallback: if the click didn't work, force navigation
      setTimeout(() => {
        window.location.replace(WHATSAPP_URL)
      }, 500)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
