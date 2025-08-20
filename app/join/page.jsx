import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JoinHero } from "@/components/join-hero"
import { MembershipForm } from "@/components/membership-form"
import { MembershipBenefits } from "@/components/membership-benefits"
import { FacultyContact } from "@/components/faculty-contact"
import "../../styles/join.css"
import "../../styles/dot-grid.css"
import DotGrid from "@/components/dot-grid"

export const metadata = {
  title: "Join Us | IEEE SSCS/SPS/PHO/MTTS Joint Chapter",
  description: "Become a member of our IEEE joint chapter and join a community of innovators and engineers.",
}

export default function JoinPage() {
  return (
    <div className="join-page">
      <Navigation />
      <DotGrid />
      <main className="join-main">
        <JoinHero />
        <MembershipBenefits />
        <MembershipForm />
        <FacultyContact />
      </main>
      <Footer />
    </div>
  )
}
