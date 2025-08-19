"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import "../styles/footer.css"

const societyLogos = [
  {
    name: "MTT-S",
    src: "/mtts.png",
    alt: "IEEE Microwave Theory & Techniques Society",
  },
  {
    name: "SPS",
    src: "/sps.png",
    alt: "IEEE Signal Processing Society",
  },
  {
    name: "SSCS",
    src: "/sscs.png",
    alt: "IEEE Solid-State Circuits Society",
  },
  {
    name: "Photonics",
    src: "/pho.png",
    alt: "IEEE Photonics Society",
  },
]

export function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const ieeeLogoSrc = mounted && theme === "dark" ? "/ieeewhite.png" : "/ieeeblack.png"
  const ieeeCekSrc = mounted && theme === "dark" ? "/cekwhite.png" : "/cekblack.png"

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logos">
              <img src={ieeeLogoSrc || "/placeholder.svg"} alt="IEEE Logo" className="footer-logo ieeelogo" />
              <img src={ieeeCekSrc || "/placeholder.svg"} alt="CEK Logo" className="footer-logo" />
            </div>
            <h3 className="footer-title">IEEE Student Branch</h3>
            <p className="footer-text">College of Engineering Karunagappally</p>
            <p className="footer-text">Joint Chapter: SSCS/SPS/PHO/MTTS</p>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-section-title">Contact Us</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>ieeesbcek2000@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+91 476 2289000</span>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>Karunagappally, Kerala 690523</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">Quick Links</h3>
            <div className="footer-links-list">
              <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>IEEE</span>
              </a>
              <a href="https://www.ceknpy.ac.in/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>CEK</span>
              </a>
              <a href="https://ieeesbcek.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>IEEE SB CEK</span>
              </a>
              <a href="https://www.instagram.com/ieee_sb_cek" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/ieeesbcek" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://mtt.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>MTTS</span>
              </a>
              <a href="https://signalprocessingsociety.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>SPS</span>
              </a>
              <a href="https://sscs.ieee.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>SSCS</span>
              </a>
              <a href="https://ieeephotonics.org/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <ExternalLink className="footer-link-icon" />
                <span>PHO</span>
              </a>
            </div>
          </div>

          {/* Society Logos */}
          <div className="footer-section">
            <h3 className="footer-section-title">Our Societies</h3>
            <div className="footer-society-grid">
              {societyLogos.map((logo) => (
                <div key={logo.name} className="footer-society-card">
                  <img src={logo.src || "/placeholder.svg"} alt={logo.alt} className="footer-society-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2024 IEEE Student Branch CEK. All rights reserved.</p>
            <p className="footer-credit">Designed for IEEE SB CEK Society Website Competition</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
