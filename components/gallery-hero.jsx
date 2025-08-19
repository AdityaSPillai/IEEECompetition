"use client"

import { useState, useEffect } from "react"
import { Camera, ImageIcon, Users, Calendar } from "lucide-react"
import "../styles/gallery-hero.css"

export function GalleryHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="gallery-hero-loading" />
  }

  return (
    <section className="gallery-hero">
      <div className="gallery-hero__overlay" />

      <div className="container gallery-hero__container">
        <div className="gallery-hero__content">
          <h1 className="gallery-hero__title">Photo Gallery</h1>
          <p className="gallery-hero__subtitle">
            Capturing moments of learning, innovation, and community from our technical events and activities.
          </p>

          <div className="gallery-hero__stats-grid">
            <div className="gh-card">
              <ImageIcon className="gh-card__icon" />
              <div className="gh-card__number">500+</div>
              <p className="gh-card__label">Photos</p>
            </div>
            <div className="gh-card">
              <Calendar className="gh-card__icon" />
              <div className="gh-card__number">25+</div>
              <p className="gh-card__label">Events</p>
            </div>
            <div className="gh-card">
              <Users className="gh-card__icon" />
              <div className="gh-card__number">1000+</div>
              <p className="gh-card__label">People</p>
            </div>
            <div className="gh-card">
              <Camera className="gh-card__icon" />
              <div className="gh-card__number">4</div>
              <p className="gh-card__label">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
