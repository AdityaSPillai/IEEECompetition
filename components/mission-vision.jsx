"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"
import "../styles/mission-vision.css"

const values = [
  {
    title: "Innovation",
    description: "Fostering cutting-edge research and technological advancement",
    icon: Lightbulb,
    color: "text-yellow-500",
  },
  {
    title: "Excellence",
    description: "Maintaining the highest standards in all our endeavors",
    icon: Target,
    color: "text-blue-500",
  },
  {
    title: "Collaboration",
    description: "Building bridges between academia and industry",
    icon: Heart,
    color: "text-red-500",
  },
  {
    title: "Leadership",
    description: "Developing future leaders in engineering and technology",
    icon: Eye,
    color: "text-green-500",
  },
]

export function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">
        <div className="mission-vision-grid">
          {/* Mission */}
          <div className="mission-vision-section">
            <div className="mission-vision-header">
              <Target className="mission-vision-icon" />
              <h2 className="mission-vision-title">Our Mission</h2>
            </div>
            <p className="mission-vision-text">
              To advance the theory and application of electrical and electronics engineering through the collaborative
              efforts of four premier IEEE societies. We strive to provide our members with exceptional educational
              opportunities, professional development, and networking experiences that prepare them for successful
              careers in technology and innovation.
            </p>
            <p className="mission-vision-text">
              Our joint chapter serves as a bridge between academic learning and industry practice, fostering research
              excellence and technological innovation across solid-state circuits, signal processing, photonics, and
              microwave engineering.
            </p>
          </div>

          {/* Vision */}
          <div className="mission-vision-section">
            <div className="mission-vision-header">
              <Eye className="mission-vision-icon" />
              <h2 className="mission-vision-title">Our Vision</h2>
            </div>
            <p className="mission-vision-text">
              To be recognized as the leading IEEE student chapter in Kerala, known for our innovative approach to
              technical education, groundbreaking research contributions, and strong industry partnerships. We envision
              a future where our members become global leaders in their respective fields.
            </p>
            <p className="mission-vision-text">
              We aim to create a vibrant ecosystem of learning and innovation that not only benefits our immediate
              community but also contributes to the advancement of engineering education and research on a global scale.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mission-vision-values-header">
          <h2 className="mission-vision-values-title">Our Core Values</h2>
          <p className="mission-vision-values-subtitle">
            The principles that guide our actions and define our character as a joint chapter.
          </p>
        </div>

        <div className="mission-vision-values-grid">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={value.title} className="mission-vision-value-card">
                <CardContent className="mission-vision-value-content">
                  <div className="mission-vision-value-icon-wrapper">
                    <div className="mission-vision-value-icon-bg">
                      <IconComponent className={`mission-vision-value-icon ${value.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="mission-vision-value-title">{value.title}</h3>
                    <p className="mission-vision-value-description">{value.description}</p>
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
