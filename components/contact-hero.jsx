"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import "../styles/contact-hero.css"

export function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="contact-hero-loading" />
  }

  return (
    <section className="contact-hero">
      <div className="contact-hero__overlay" />

      <div className="container contact-hero__container">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Contact Us</h1>
          <p className="contact-hero__subtitle">
            Get in touch with our IEEE joint chapter for inquiries, collaborations, or general information.
          </p>

          <div className="contact-hero__stats-grid">
            <div className="stat-card">
              <Mail className="stat-card__icon" />
              <p className="stat-card__label">Email Us</p>
            </div>
            <div className="stat-card">
              <Phone className="stat-card__icon" />
              <p className="stat-card__label">Call Us</p>
            </div>
            <div className="stat-card">
              <MapPin className="stat-card__icon" />
              <p className="stat-card__label">Visit Us</p>
            </div>
            <div className="stat-card">
              <Clock className="stat-card__icon" />
              <p className="stat-card__label">Office Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
