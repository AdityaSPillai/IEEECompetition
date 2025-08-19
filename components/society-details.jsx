"use client";

import { ExternalLink } from "lucide-react";
import "../styles/society-details.css";

const societies = [
  {
    name: "IEEE Solid-State Circuits Society",
    acronym: "SSCS",
    description:
      "The IEEE Solid-State Circuits Society is dedicated to the advancement of the theory and practice of solid-state circuits and systems. Our chapter focuses on integrated circuit design, semiconductor device modeling, and system-on-chip architectures.",
    focus: [
      "Analog and Digital IC Design",
      "VLSI Technology",
      "System-on-Chip Design",
      "Semiconductor Devices",
    ],
    established: "1955",
    logo: "/sscs.png",
    website: "https://sscs.ieee.org",
  },
  {
    name: "IEEE Signal Processing Society",
    acronym: "SPS",
    description:
      "The IEEE Signal Processing Society promotes the advancement of signal processing theory and practice. Our activities include digital signal processing, machine learning, image processing, and communication systems.",
    focus: [
      "Digital Signal Processing",
      "Machine Learning",
      "Image & Video Processing",
      "Communication Systems",
    ],
    established: "1948",
    logo: "/sps.png",
    website: "https://signalprocessingsociety.org",
  },
  {
    name: "IEEE Photonics Society",
    acronym: "PHO",
    description:
      "The IEEE Photonics Society advances the interests of its members and the laser, optoelectronics, and photonics professional community through technical conferences, publications, and educational activities.",
    focus: [
      "Optical Communications",
      "Laser Technology",
      "Optoelectronics",
      "Photonic Devices",
    ],
    established: "1965",
    logo: "/pho.png",
    website: "https://photonicssociety.org",
  },
  {
    name: "IEEE Microwave Theory & Techniques Society",
    acronym: "MTTS",
    description:
      "The IEEE Microwave Theory and Techniques Society promotes the advancement of microwave theory and techniques. We cover the spectrum from MHz to THz, including RF and wireless technologies.",
    focus: [
      "RF Circuit Design",
      "Microwave Engineering",
      "Antenna Design",
      "Wireless Communications",
    ],
    established: "1952",
    logo: "/mtts.png",
    website: "https://mtt.org",
  },
];

export function SocietyDetails() {
  return (
    <section className="sdsection-details">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="sdsection-title">Our IEEE Societies</h2>
          <p className="sdsection-subtitle">
            Learn more about the four prestigious IEEE societies that form our
            joint chapter and their contributions to the field of electrical and
            electronics engineering.
          </p>
        </div>

        <div className="grid-container">
          {societies.map((society, index) => (
            <div
              key={society.acronym}
              className="sdcard"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="sdcard-content-wrapper">
                <div className="sdcard-header">
                  <div className="sdcard-header-content">
                    <img
                      src={society.logo || "/placeholder.svg"}
                      alt={`${society.name} Logo`}
                      className="logo"
                    />
                    <div className="sdcard-title-container">
                      <h3 className="sdcard-title">{society.name}</h3>
                      <div className="sdcard-meta">
                        <span className="acronym">{society.acronym}</span>
                        <span>Est. {society.established}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sdcard-content">
                  <p className="description">{society.description}</p>

                  <div>
                    <h4 className="focus-title">Focus Areas:</h4>
                    <div className="focus-areas">
                      {society.focus.map((area) => (
                        <span key={area} className="focus-area">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="website-link-container">
                    <a
                      href={society.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="website-link"
                    >
                      <span>Visit Official Website</span>
                      <ExternalLink className="external-link-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}