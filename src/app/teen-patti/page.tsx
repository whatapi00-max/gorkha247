import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Teen Patti Online Nepal | Play Teen Patti for Real Money | GorkhaBooks 2026',
  description: 'Play Teen Patti online in Nepal on GorkhaBooks. Best Teen Patti game with real money. Live Teen Patti, 3 Patti, Indian Poker. Instant deposit via eSewa, Khalti, IME Pay. Fast withdrawal.',
  keywords: 'Teen Patti online Nepal, Teen Patti real money Nepal, live Teen Patti Nepal, 3 Patti Nepal, Indian Poker Nepal, best Teen Patti site Nepal, Teen Patti game Nepal, play Teen Patti online, Teen Patti strategy Nepal, Teen Patti rules Nepal',
  alternates: {
    canonical: 'https://gorkha247.com/teen-patti',
  },
}

export default function TeenPattiPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black text-white mb-6">Teen Patti Online Nepal - Play for Real Money 2026</h1>
        <p className="text-gray-300 mb-8">
          Play Teen Patti online in Nepal on GorkhaBooks. We offer the best Teen Patti game with real money betting. Live Teen Patti, 3 Patti, and Indian Poker available. Instant deposit via eSewa, Khalti, IME Pay with fast withdrawal.
        </p>
        <Link href="/" className="text-neon hover:underline">← Back to Home</Link>
      </div>
    </div>
  )
}
