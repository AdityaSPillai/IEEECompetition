"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Users, Award, Calendar } from "lucide-react"
import Link from "next/link"
import "../styles/hero-section.css"
import ModernButton from "./ModernButton" // Assuming this is the correct path
import AnimatedButton from "./AnimatedButton"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="hero-loading" />
  }

  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          {/* Main Heading */}
          <div className="hero-heading">
            <h1 className="hero-main-title">IEEE Joint Chapter</h1>
            <h2 className="hero-subtitle">
              <span className="society-acronym">SSCS</span> • <span className="society-acronym">SPS</span> • <span className="society-acronym">PHO</span> • <span className="society-acronym">MTTS</span>
            </h2>
            <p className="hero-location">College of Engineering Karunagappally</p>
          </div>

          {/* Description */}
          <div className="hero-description">
            <p className="hero-text">
              Uniting innovation across Solid-State Circuits, Signal Processing, Photonics, and Microwave Theory &
              Techniques. Empowering students through cutting-edge research and impactful initiatives.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <Link href="/join">
                <ModernButton>Join Our Community</ModernButton>
              </Link>
              <Link href="/about">
                <AnimatedButton>Learn More</AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat-card">
              <div className="hero-stat-content">
                <Users className="hero-stat-icon" />
                <span className="hero-stat-number">150+</span>
              </div>
              <p className="hero-stat-label">Active Members</p>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-content">
                <Calendar className="hero-stat-icon" />
                <span className="hero-stat-number">25+</span>
              </div>
              <p className="hero-stat-label">Events Organized</p>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-content">
                <Award className="hero-stat-icon" />
                <span className="hero-stat-number">10+</span>
              </div>
              <p className="hero-stat-label">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
