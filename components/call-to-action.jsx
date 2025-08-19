"use client"

import { Users, Calendar, Mail } from "lucide-react"
import Link from "next/link"
import "../styles/call-to-action.css"
import AnimatedButton from "./AnimatedButton" // Your first animated button
import ModernButton from "./ModernButton"     // The new modern button

export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-header">
            <h2 className="cta-title">Ready to Join Our Community?</h2>
            <p className="cta-subtitle">
              Become part of a vibrant community of engineers, researchers, and innovators. Connect with like-minded
              individuals and advance your technical career.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <Users className="feature-icon" />
              <h3 className="feature-title">Network</h3>
              <p className="feature-description">Connect with professionals and peers</p>
            </div>
            <div className="feature-card">
              <Calendar className="feature-icon" />
              <h3 className="feature-title">Learn</h3>
              <p className="feature-description">Attend workshops and technical sessions</p>
            </div>
            <div className="feature-card">
              <Mail className="feature-icon" />
              <h3 className="feature-title">Contribute</h3>
              <p className="feature-description">Share knowledge and lead initiatives</p>
            </div>
          </div>

          <div className="cta-buttons">
            <Link href="/join">
              <AnimatedButton>Become a Member</AnimatedButton>
            </Link>
            
            <Link href="/contact">
              <ModernButton>Contact Us</ModernButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
