import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GorkhaBooks | Gorkha247 - नेपालको नम्बर 1 Online Betting & Casino Platform | Best Gaming Site Nepal 2025',
  description: 'GorkhaBooks (Gorkha Books) Nepal #1 trusted online betting & casino platform। Play Aviator game Nepal, cricket betting, football betting, live casino, slots, teen patti, dragon tiger & 100+ games। Instant deposit via eSewa, Khalti, IME Pay। 5-minute withdrawal guaranteed। Daily bonus NPR 10,000+। Join 50,000+ Nepal players now! GorkhaBooks official site - safe, trusted, legit।',
  keywords: 'gorkhabooks, gorkha books, gorkhabooks nepal, gorkhabooks gaming, gorkhabooks site, gorkhabooks online, gorkha books nepal gaming, gorkhabooks login, gorkhabooks register, gorkhabooks app, gorkhabooks review, gorkhabooks promo, gorkhabooks bonus, gorkhabooks deposit, gorkhabooks withdrawal, gorkhabooks payment, gorkhabooks support, gorkhabooks customer care, gorkhabooks contact, gorkhabooks referral, gorkhabooks affiliate, gorkhabooks free, gorkhabooks winner, gorkhabooks jackpot, gorkhabooks account, gorkhabooks official, gorkhabooks trusted, gorkhabooks legit, online gaming nepal, gaming site nepal, nepal gaming platform, best gaming site nepal, online games nepal, play games online nepal, gaming nepal 2025, nepal game app, top gaming sites nepal, gaming website nepal, free gaming nepal, nepal real money games, gaming in nepal, play and win nepal, win real money nepal, nepal online game, earn money gaming nepal, mobile gaming nepal, sports betting nepal, bet online nepal, nepal sports bet, football betting nepal, cricket betting nepal, IPL betting nepal, kabaddi betting nepal, live betting nepal, sportsbook nepal, bet nepal, online bet nepal, best sportsbook nepal, betting odds nepal, nepal betting app, cricket bet nepal, football bet nepal, basketball betting nepal, tennis betting nepal, esports betting nepal, virtual sports nepal, online casino nepal, casino nepal, slot games nepal, slots nepal, nepal casino, live casino nepal, casino online nepal, best casino nepal, casino bonus nepal, real money casino nepal, casino games nepal, jackpot nepal, roulette nepal, blackjack nepal, baccarat nepal, teen patti nepal, andar bahar nepal, poker nepal, online poker nepal, teen patti online nepal, casino app nepal, live dealer nepal, free spins nepal, casino welcome bonus nepal, lottery nepal, online lottery nepal, nepal lottery, lucky draw nepal, prediction game nepal, color prediction nepal, color game nepal, wingo nepal, aviator game nepal, aviator bet nepal, aviator win nepal, aviator real money nepal, crash game nepal, mines game nepal, plinko nepal, esports nepal, pubg nepal, free fire nepal, valorant nepal, gaming tournament nepal, esewa nepal gaming, khalti nepal gaming, instant withdrawal nepal, fast payout nepal, nepal payment gateway gaming, secure payment nepal gaming, crypto gaming nepal, नेपाल गेमिङ, नेपाल अनलाइन गेम, गोर्खाबुक्स, नेपाल सट्टाबाजी, नेपाली क्यासिनो, नेपाल लटरी, अनलाइन खेल नेपाल, नेपाल जित्ने खेल, nepali gaming site, nepali game, khel nepal, online khel nepal, gaming kathmandu, gaming pokhara, trusted gaming nepal, safe gaming nepal, responsible gaming nepal, gaming bonus nepal, welcome bonus nepal, first deposit bonus nepal, refer and earn nepal gaming, daily bonus nepal gaming, cricket betting nepal, IPL betting nepal, T20 betting nepal, world cup betting nepal, football betting nepal, EPL betting nepal, Champions League bet nepal, live betting nepal, teen patti real money nepal, dragon tiger nepal, baccarat real money nepal, blackjack real money nepal, satta nepal, satta online nepal, cricket satta nepal, football satta nepal, bet nepal kathmandu, bet nepal pokhara, nepal betting platform 2025, सट्टाबाजी नेपाल, अनलाइन सट्टा नेपाल, क्रिकेट सट्टा नेपाल, फुटबल सट्टा नेपाल, लाइभ बेट नेपाल, बेटिङ नेपाल, नेपाल बेटिङ एप',
  authors: [{ name: 'Gorkha247' }],
  creator: 'Gorkha247',
  publisher: 'Gorkha247',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://gorkha247.com',
    languages: {
      'ne-NP': 'https://gorkha247.com',
      'en-US': 'https://gorkha247.com',
    },
  },
  category: 'gambling',
  openGraph: {
    type: 'website',
    locale: 'ne_NP',
    url: 'https://gorkha247.com',
    siteName: 'GorkhaBooks | Gorkha247 - Nepal Best Betting Site',
    title: 'GorkhaBooks | Gorkha247 - Nepal #1 Online Betting & Casino | Aviator | Cricket | Live Casino',
    description: 'GorkhaBooks - Nepal ko sabse trusted gaming platform. 50,000+ active players. Instant withdrawal 5 min. Daily bonus NPR 10,000+. Aviator, Cricket Betting, Live Casino, Slots, Teen Patti. Gorkha Books official. Join now via WhatsApp!',
    images: [
      {
        url: 'https://gorkha247.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gorkha247 - Nepal Number 1 Online Betting and Casino Gaming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GorkhaBooks | Gorkha247 - Nepal #1 Online Betting & Casino Platform 🎰',
    description: 'GorkhaBooks - Join 50,000+ Nepal players! Aviator, Cricket Betting, Live Casino, Slots. Instant withdrawal. Daily bonus NPR 10,000+. Gorkha Books Nepal trusted platform!',
    images: ['https://gorkha247.com/og-image.jpg'],
    creator: '@gorkha247',
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'geo.region': 'NP',
    'geo.placename': 'Nepal',
    'geo.position': '27.7172;85.3240',
    'ICBM': '27.7172, 85.3240',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '1 days',
    'language': 'Nepali, English',
    'target': 'all',
    'audience': 'all',
    'coverage': 'Nepal',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ne">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#050505" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://gorkha247.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Gorkha247',
              alternateName: ['GorkhaBooks', 'Gorkha Books', 'गोर्खाबुक्स', 'Gorkha 247', 'गोर्खा247', 'Gorkha247 Nepal', 'GorkhaBooks Nepal', 'Nepal Betting Site Gorkha247'],
              url: 'https://gorkha247.com',
              description: 'Nepal\'s number 1 online gaming, betting and casino platform with instant deposit and withdrawal',
              inLanguage: ['ne', 'en'],
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://gorkha247.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Gorkha247',
              alternateName: ['GorkhaBooks', 'Gorkha Books', 'गोर्खाबुक्स', 'गोर्खा247'],
              url: 'https://gorkha247.com',
              logo: 'https://gorkha247.com/logo.png',
              description: 'Nepal\'s most trusted online gaming and betting platform with 50,000+ active players',
              foundingDate: '2023',
              areaServed: {
                '@type': 'Country',
                name: 'Nepal',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: ['English', 'Nepali'],
                areaServed: 'NP',
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '00:00',
                  closes: '23:59',
                },
              },
              sameAs: ['https://wa.link/gme782'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Gorkha247?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gorkha247 is Nepal\'s number 1 online gaming and betting platform offering Aviator, Cricket Betting, Live Casino, Slots, Teen Patti, Dragon Tiger, Poker, Roulette, Jackpot, eSports, and Lottery games with instant deposit and 5-minute withdrawal.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How to deposit money in Gorkha247?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can deposit money in Gorkha247 via eSewa, Khalti, IME Pay, bank transfer, or other Nepal payment methods. Deposit is instant and minimum deposit starts from NPR 100. Contact our WhatsApp support for instant deposit assistance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How fast is withdrawal in Gorkha247?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gorkha247 offers the fastest withdrawal in Nepal. Most withdrawals are processed within 5 minutes. We support withdrawal via eSewa, Khalti, bank transfer, and IME Pay.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Gorkha247 safe and trusted?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Gorkha247 is Nepal\'s most trusted gaming platform with 50,000+ active players. We offer 24/7 customer support, secure transactions, and guaranteed payouts.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What games can I play on Gorkha247?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gorkha247 offers 100+ games including Aviator, Cricket Betting, Football Betting, Live Casino, Online Slots, Teen Patti, Dragon Tiger, Poker, Roulette, Jackpot Games, eSports Betting, and Lottery.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What bonus does Gorkha247 offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Gorkha247 offers 100% Welcome Bonus on first deposit, 50% reload bonus, 15% weekly cashback, VIP rewards, and NPR 500 referral bonus for every friend you invite.',
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gorkha247.com' },
                { '@type': 'ListItem', position: 2, name: 'Games', item: 'https://gorkha247.com/#games' },
                { '@type': 'ListItem', position: 3, name: 'Bonus', item: 'https://gorkha247.com/#bonus' },
                { '@type': 'ListItem', position: 4, name: 'Aviator Nepal', item: 'https://gorkha247.com/#aviator' },
                { '@type': 'ListItem', position: 5, name: 'Cricket Betting', item: 'https://gorkha247.com/#cricket' },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Gorkha247',
              operatingSystem: 'Android, iOS, Web',
              applicationCategory: 'GameApplication',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '12500',
                bestRating: '5',
                worstRating: '1',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'NPR',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
