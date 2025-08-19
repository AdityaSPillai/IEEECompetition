import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { SocietyHistory } from "@/components/society-history"
import { SocietyDetails } from "@/components/society-details"
import "../../styles/about.css"
import "../../styles/dot-grid.css"
import DotGrid from "@/components/dot-grid"

export const metadata = {
  title: "About Us - IEEE SSCS/SPS/PHO/MTTS Joint Chapter",
  description: "Learn about our joint chapter, mission, vision, and the four IEEE societies we represent.",
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navigation />
      <DotGrid />
      <main className="about-main">
        <AboutHero />
        <MissionVision />
        <SocietyDetails />
        <SocietyHistory />
      </main>
      <Footer />
    </div>
  )
}
