import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExecomHero } from "@/components/execom-hero"
import { CurrentExecom } from "@/components/current-execom"
import { PreviousExecom } from "@/components/previous-execom"
import DotGrid from "@/components/dot-grid"
import "../../styles/execom.css"
import "../../styles/dot-grid.css"

export const metadata = {
  title: "Executive Committee - IEEE SSCS/SPS/PHO/MTTS Joint Chapter",
  description: "Meet our current and previous executive committee members who lead our joint chapter.",
}

export default function ExecomPage() {
  return (
    <div className="execom-page">
      <DotGrid />
      <Navigation />
      <main className="execom-main">
        <ExecomHero />
        <CurrentExecom />
        <PreviousExecom />
      </main>
      <Footer />
    </div>
  )
}