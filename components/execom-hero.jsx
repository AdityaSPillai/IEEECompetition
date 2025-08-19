"use client"

import { useState, useEffect } from "react"
import { Users, Award } from "lucide-react"
import "../styles/execom-hero.css"

export function ExecomHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="execom-hero-loading" />
  }

  return (
    <section className="execom-hero">
      <div className="execom-hero-overlay" />

      <div className="execom-hero-container">
        <div className="execom-hero-content">
          <h1 className="execom-hero-title">Executive Committee</h1>
          <p className="execom-hero-subtitle">
            Meet the dedicated leaders who drive our joint chapter's vision and initiatives forward.
          </p>

          <div className="execom-hero-stats">
            <div className="execom-hero-stat-card">
              <div className="execom-hero-stat-content">
                <Users className="execom-hero-stat-icon" />
                <span className="execom-hero-stat-number">4</span>
              </div>
              <p className="execom-hero-stat-label">Executive Members</p>
            </div>
            <div className="execom-hero-stat-card">
              <div className="execom-hero-stat-content">
                <Award className="execom-hero-stat-icon" />
                <span className="execom-hero-stat-number">2025-26</span>
              </div>
              <p className="execom-hero-stat-label">Current Term</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
