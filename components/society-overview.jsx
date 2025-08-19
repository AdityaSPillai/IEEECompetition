"use client"

import { Cpu, Radio, Lightbulb, Zap } from "lucide-react"
import "../styles/society-overview.css"

const societies = [
  {
    name: "Solid-State Circuits Society",
    acronym: "SSCS",
    icon: Cpu,
    description: "Advancing integrated circuit design and semiconductor technology through research and innovation.",
    color: "text-red-500",
    logo: "./sscs.png",
  },
  {
    name: "Signal Processing Society",
    acronym: "SPS",
    description: "Exploring digital signal processing, machine learning, and communication systems.",
    icon: Radio,
    color: "text-green-500",
    logo: "./sps.png",
  },
  {
    name: "Photonics Society",
    acronym: "PHO",
    description: "Pioneering optical technologies, laser systems, and photonic applications.",
    icon: Lightbulb,
    color: "text-orange-500",
    logo: "./pho.png",
  },
  {
    name: "Microwave Theory & Techniques",
    acronym: "MTTS",
    description: "Advancing RF and microwave engineering from MHz to THz frequencies.",
    icon: Zap,
    color: "text-blue-500",
    logo: "./mtts.png",
  },
]

export function SocietyOverview() {
  return (
    <section className="society-overview-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Technical Societies</h2>
          <p className="section-description">
            Four premier IEEE societies united under one chapter, driving innovation across diverse fields of electrical
            and electronics engineering.
          </p>
        </div>

        <div className="society-grid">
          {societies.map((society, index) => {
            const IconComponent = society.icon
            return (
              <div
                key={society.acronym}
                className="society-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="card-content">
                  <div className="card-header">
                    <img
                      src={society.logo || "/placeholder.svg"}
                      alt={`${society.name} Logo`}
                      className="society-logo"
                    />
                    <IconComponent className={`society-icon ${society.color}`} />
                  </div>
                  <div className="card-body">
                    <h3 className="society-acronym">{society.acronym}</h3>
                    <h4 className="society-name">{society.name}</h4>
                    <p className="society-description-text">{society.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}