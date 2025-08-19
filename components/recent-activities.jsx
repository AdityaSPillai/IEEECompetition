"use client"

import { Calendar, MapPin, Users, ArrowRight, Earth } from "lucide-react"
import Link from "next/link"
import "../styles/recent-activities.css"
import ModernButton from "./ModernButton"

const recentActivities = [
  {
    title: "GeoSync - Outreach Program",
    date: "June 17-19, 2025",
    location: "GMHSS Vellamunda, Wayanad",
    participants: "50+",
    description: "A transformative three-day Robotics Outreach Program bringing the magic of Robotics, AI, and Emerging Tech to GMHSS Vellamunda.",
    image: "/outreachprogram.jpg",
    category: "Event",
    society: "SSCS",
  },
  {
    title: "Q-Signal, SPS Quiz Competition",
    date: "June 15, 2025",
    location: "Online",
    participants: "30+",
    description: "An exciting online quiz celebrating SPS Day 2025. Challenge your signal processing knowledge and discover how sharp your insights really are.",
    image: "/qsignal.jpg",
    category: "Quiz",
    society: "SPS",
  },
  {
    title: "AI and ML in Signal Processing",
    date: "June 14, 2025",
    location: "Online",
    participants: "80+",
    description: "An exciting talk session on AI and ML in Signal Processing, organized as part of the SPS Day celebration.",
    image: "/TalkONAIandMLSignalProcessing.jpg",
    category: "Talk Session",
    society: "SPS",
  },
]

export function RecentActivities() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <section className="recent-activities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Recent Activities</h2>
          <p className="section-description">
            Stay updated with our latest events, workshops, and technical sessions.
          </p>
        </div>

        <div className="activities-grid">
          {recentActivities.map((activity, index) => (
            <div
              key={activity.title}
              className="activity-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="activity-card-inner">
                {/* Front of the card */}
                <div className="card-front">
                  <span className="category-badge">{activity.category}</span>
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                </div>

                {/* Back of the card */}
                <div
                  className="card-back"
                  onMouseMove={handleMouseMove}
                  style={{ backgroundImage: `url(${activity.image || "/placeholder.svg"})` }}
                >
                  <div className="card-back-overlay" />
                  <div className="card-back-content">
                    <div className="activity-meta">
                      <div className="meta-item">
                        <Earth className="meta-icon" />
                        <span>{activity.society}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar className="meta-icon" />
                        <span>{activity.date}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin className="meta-icon" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="meta-item">
                        <Users className="meta-icon" />
                        <span>{activity.participants} participants</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="ctaviewall">
          <Link href="/activities">
            <ModernButton>View All Activities</ModernButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
