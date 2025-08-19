"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, Network, Briefcase, Globe } from "lucide-react"
import "../styles/membership-benefits.css"

const benefits = [
  { title: "Technical Workshops", description: "Access to exclusive hands-on workshops covering cutting-edge technologies and industry practices.", icon: BookOpen, color: "blue" },
  { title: "Networking Opportunities", description: "Connect with industry professionals, researchers, and fellow students from diverse technical backgrounds.", icon: Network, color: "green" },
  { title: "Career Development", description: "Gain access to internship opportunities, job placements, and career guidance from industry experts.", icon: Briefcase, color: "purple" },
  { title: "Research Collaboration", description: "Participate in research projects and collaborate with faculty and peers on innovative solutions.", icon: Award, color: "red" },
  { title: "Global Community", description: "Become part of the worldwide IEEE community with access to international conferences and publications.", icon: Globe, color: "orange" },
  { title: "Leadership Skills", description: "Develop leadership and organizational skills through committee participation and event management.", icon: Users, color: "teal" },
]

export function MembershipBenefits() {
  return (
    <section className="membership-benefits">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Membership Benefits</h2>
          <p className="section-subtitle">
            Discover the advantages of joining our IEEE joint chapter and how it can accelerate your professional growth.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={benefit.title}
                className="benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="benefit-card__content">
                  <div className="benefit-card__icon-wrapper">
                    <div className="benefit-card__icon-background">
                      <IconComponent className={`benefit-card__icon benefit-card__icon--${benefit.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="benefit-card__title">{benefit.title}</h3>
                    <p className="benefit-card__description">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
