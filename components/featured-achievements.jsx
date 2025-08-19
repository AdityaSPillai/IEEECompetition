"use client"

import { Trophy, Award, Star, Target } from "lucide-react"
import "../styles/featured-achievements.css"

const achievements = [
  {
    title: "Darrel Chong Award",
    year: "2022",
    description: "IEEE SB CEK has received the prestigious Darrel Chong Award for Student Chapters for the third consecutive time.",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "IEEE Exemplary Award 2021",
    year: "2021",
    description: "The Exemplary Award was awarded to IEEE SB CEK for the fourth time simultaneously.It is a prestigious accolade that recognizes outstanding achievements in a specific field.",
    icon: Award,
    color: "text-blue-500",
  },
  {
    title: "IEEE Exemplary Award 2020",
    year: "2020",
    description: "The IEEE Exemplary student branch award was awarded to the SB for its outstanding activities for the third time.",
    icon: Star,
    color: "text-purple-500",
  },
  {
    title: "Awarded most promising SB of Kerala section.",
    year: "2019",
    description: "The IEEE KERALA SECTION AGM awarded IEEE SB CEK as the most promising student branch in KERALA SECTION.for its outstanding activities.",
    icon: Target,
    color: "text-green-500",
  },
]

export function FeaturedAchievements() {
  return (
    <section className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Achievements</h2>
          <p className="section-description">
            Celebrating excellence in technical innovation, community service, and academic achievement.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={achievement.title}
                className="achievement-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="card-content">
                  <div className="card-header">
                    <div className="icon-wrapper">
                      <IconComponent className={`achievement-icon ${achievement.color}`} />
                    </div>
                    <span className="year-badge">{achievement.year}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}