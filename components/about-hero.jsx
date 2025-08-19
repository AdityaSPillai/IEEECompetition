"use client"

import { useState, useEffect } from "react"
import "../styles/about-hero.css"

export function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="about-hero-loading" />
  }

  return (
    <section className="about-hero">
      <div className="about-hero-overlay" />

      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Our Joint Chapter</h1>
          <p className="about-hero-subtitle">
            Uniting four premier IEEE societies to advance electrical and electronics engineering education, research,
            and innovation at College of Engineering Karunagappally.
          </p>
          <div className="about-hero-info">
            <span className="about-hero-info-item">Established: 2020</span>
            <span className="about-hero-info-dot"></span>
            <span className="about-hero-info-item">Kerala Section</span>
          </div>
        </div>
      </div>
    </section>
  )
}
