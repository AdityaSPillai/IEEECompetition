"use client"

import { useState, useEffect } from "react"
import { Users, Award, Network, BookOpen } from "lucide-react"
import "../styles/join-hero.css"

export function JoinHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="join-hero-loading" />
  }

  return (
    <section className="join-hero">
      <div className="join-hero__overlay" />

      <div className="container join-hero__container">
        <div className="join-hero__content">
          <h1 className="join-hero__title">Join Our Community</h1>
          <p className="join-hero__subtitle">
            Become part of a vibrant community of engineers, researchers, and innovators. Connect with like-minded
            individuals and advance your technical career.
          </p>

          <div className="join-hero__stats-grid">
            <div className="stat-card">
              <Users className="stat-card__icon" />
              <div className="stat-card__number">150+</div>
              <p className="stat-card__label">Members</p>
            </div>
            <div className="stat-card">
              <BookOpen className="stat-card__icon" />
              <div className="stat-card__number">25+</div>
              <p className="stat-card__label">Events/Year</p>
            </div>
            <div className="stat-card">
              <Network className="stat-card__icon" />
              <div className="stat-card__number">4</div>
              <p className="stat-card__label">Societies</p>
            </div>
            <div className="stat-card">
              <Award className="stat-card__icon" />
              <div className="stat-card__number">10+</div>
              <p className="stat-card__label">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
