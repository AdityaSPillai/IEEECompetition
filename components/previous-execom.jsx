"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Instagram } from "lucide-react"
import "../styles/current-execom.css"

const previousExecom = [
  {
    name: "Sravan P Kumar",
    position: "Chair",
    email: "dummy@ieee.org",
    linkedin: "https://www.linkedin.com/in/sravan-p-kumar/",
    insta: "https://www.instagram.com/vichu_sravan/",
    image: "/sravan.jpg",
    bio: "Leading the joint chapter with a focus on innovation and member engagement.",
  },
  {
    name: "Ashik",
    position: "Vice-Chair",
    email: "dummy@ieee.org",
    linkedin: "https://www.linkedin.com/in/ashik-m-50a081260/",
    insta: "https://www.instagram.com/ashiklalum/",
    image: "/Ashik.jpg",
    bio: "Supporting chapter operations and coordinating technical activities.",
  },
  {
    name: "Mahitha D",
    position: "Secretary",
    email: "dummy@ieee.org",
    linkedin: "https://www.linkedin.com/in/mahitha-dpillai-7892052b4/",
    insta: "https://www.instagram.com/mahitha_mahi243/",
    image: "/Mahitha.jpg",
    bio: "Managing chapter documentation and communication.",
  },
  {
    name: "Hari Krishnan",
    position: "SBC Mentor",
    email: "dummy@ieee.org",
    linkedin: "https://www.linkedin.com/in/harikrishnan2255/",
    insta: "https://www.instagram.com/hxri.krishz/",
    image: "/hari-krishnan.png",
    bio: "Overseeing planning and overall management.",
  },
]

export function PreviousExecom() {
  return (
    <section className="current-execom">
      <div className="current-execom-container">
        <div className="current-execom-header">
          <h2 className="current-execom-title">Current Executive Committee</h2>
          <p className="current-execom-subtitle">
            Academic Year 2025-26 • Meet the dedicated team leading our joint chapter
          </p>
        </div>

        <div className="current-execom-grid">
          {previousExecom.map((member, index) => (
            <Card key={member.name} className="execom-member-card">
              <div className="execom-member-image-container">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="execom-member-image" />
                <div className="execom-member-overlay" />
                <div className="execom-member-social">
                  <a href={`mailto:${member.email}`} className="execom-social-link">
                    <Mail className="execom-social-icon" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="execom-social-link">
                    <Linkedin className="execom-social-icon" />
                  </a>
                  <a href={member.insta} target="_blank" rel="noopener noreferrer" className="execom-social-link">
                    <Instagram className="execom-social-icon" />
                  </a>
                </div>
              </div>

              <CardContent className="execom-member-content">
                <div>
                  <h3 className="execom-member-name">{member.name}</h3>
                  <p className="execom-member-position">{member.position}</p>
                </div>
                <p className="execom-member-bio">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}