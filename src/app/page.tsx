import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import LiveWinners from '@/components/LiveWinners'
import GameGrid from '@/components/GameGrid'
import BonusSection from '@/components/BonusSection'
import TrustSection from '@/components/TrustSection'
import SEOContent from '@/components/SEOContent'
import SEOKeywords from '@/components/SEOKeywords'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import AutoRedirect from '@/components/AutoRedirect'

export default function HomePage() {
  return (
    <>
      <AutoRedirect />
      <Header />
      <LeftSidebar />
      <RightSidebar />

      <main className="lg:ml-64 xl:mr-72">
        <HeroSection />
        <LiveWinners />
        <GameGrid />
        <BonusSection />
        <TrustSection />
        <SEOContent />
        <SEOKeywords />
      </main>

      <div className="lg:ml-64 xl:mr-72">
        <Footer />
      </div>

      <WhatsAppFloat />
      <MobileNav />
    </>
  )
}
