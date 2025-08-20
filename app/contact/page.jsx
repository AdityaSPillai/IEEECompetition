import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { LocationMap } from "@/components/location-map"
import "../../styles/contact.css"
import "../../styles/dot-grid.css"
import DotGrid from "@/components/dot-grid"

export const metadata = {
  title: "Contact Us | IEEE SSCS/SPS/PHO/MTTS Joint Chapter",
  description: "Get in touch with our IEEE joint chapter for inquiries, collaborations, or general information.",
}

export default function ContactPage() {
  return (
    <div className="contact-page">
      <DotGrid />
      <Navigation />
      <main className="contact-main">
        <ContactHero />
        <ContactInfo />
        <LocationMap />
      </main>
      <Footer />
    </div>
  )
}
