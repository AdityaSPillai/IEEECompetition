"use client"

import { useState, useEffect } from "react"
import { Calendar, Users, Award, Zap } from "lucide-react"
import "../styles/activities-hero-activities.css"

export function ActivitiesHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="activities-hero-loading" />
  }

  return (
    <section className="activities-hero">
      <div className="activities-hero__overlay" />
      <div className="container activities-hero__container">
        <div className="activities-hero__content">
          <h1 className="activities-hero__title">Our Activities</h1>
          <p className="activities-hero__subtitle">
            Discover our comprehensive range of technical events, workshops, seminars, and community initiatives.
          </p>
          <div className="activities-hero__stats-grid">
            <div className="stat-card">
              <Calendar className="stat-card__icon" />
              <div className="stat-card__number">25+</div>
              <p className="stat-card__label">Events</p>
            </div>
            <div className="stat-card">
              <Users className="stat-card__icon" />
              <div className="stat-card__number">1000+</div>
              <p className="stat-card__label">Participants</p>
            </div>
            <div className="stat-card">
              <Award className="stat-card__icon" />
              <div className="stat-card__number">15+</div>
              <p className="stat-card__label">Workshops</p>
            </div>
            <div className="stat-card">
              <Zap className="stat-card__icon" />
              <div className="stat-card__number">8+</div>
              <p className="stat-card__label">Seminars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}