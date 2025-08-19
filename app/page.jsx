import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocietyOverview } from "@/components/society-overview"
import { RecentActivities } from "@/components/recent-activities"
import { FeaturedAchievements } from "@/components/featured-achievements"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import DotGrid from "@/components/dot-grid"
import "../styles/dot-grid.css"
import "../styles/home.css"

export default function HomePage() {
  return (
    <div className="home-page">
      <DotGrid />
      <Navigation />
      <main className="home-main">
        <HeroSection />
        <SocietyOverview />
        <RecentActivities />
        <FeaturedAchievements />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
