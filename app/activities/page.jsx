import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ActivitiesHero } from "@/components/activities-hero"
import { ActivitiesList } from "@/components/activities-list"
import { UpcomingEvents } from "@/components/upcoming-events"
import "../../styles/activities.css"
import "../../styles/dot-grid.css"
import DotGrid from "@/components/dot-grid"

export const metadata = {
  title: "Activities - IEEE SSCS/SPS/PHO/MTTS Joint Chapter",
  description: "Explore our technical events, workshops, seminars, and activities organized by our joint chapter.",
}

export default function ActivitiesPage() {
  return (
    <div className="activities-page">
      <DotGrid />
      <Navigation />
      <main className="activities-main">
        <ActivitiesHero />
        <UpcomingEvents />
        <ActivitiesList />
      </main>
      <Footer />
    </div>
  )
}
