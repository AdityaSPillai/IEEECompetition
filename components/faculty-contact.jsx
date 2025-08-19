"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, User } from "lucide-react"
import "../styles/faculty-contact.css"

const facultyMembers = [
  { name: "Dr. Jyothi R L", position: "Advisor", department: "Computer Science And Engineering", email: "dummy@ieee.org", phone: "+91 9847874463", office: "Staff Room", image: "/Jyothi.webp" },
  { name: "Prof. Savitha K P", position: "Counselor", department: "Electronics & Communication Engineering", email: "dummy@ieee.org", phone: "+91 8289858010", office: "ECE Department, Room 205", image: "/Savitha.webp" },
]

export function FacultyContact() {
  return (
    <section className="faculty-contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Faculty In Charge</h2>
          <p className="section-subtitle">
            Get in touch with our dedicated faculty advisors for any questions about membership or chapter activities.
          </p>
        </div>

        <div className="faculty-grid">
          {facultyMembers.map((faculty, index) => (
            <Card
              key={faculty.name}
              className="faculty-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="faculty-card__header">
                <div className="faculty-card__image-wrapper">
                  <img src={faculty.image || "/placeholder.svg"} alt={faculty.name} className="faculty-card__image" />
                </div>
                <CardTitle className="faculty-card__name">{faculty.name}</CardTitle>
                <p className="faculty-card__position">{faculty.position}</p>
                <p className="faculty-card__department">{faculty.department}</p>
              </CardHeader>

              <CardContent className="faculty-card__content">
                <div className="faculty-card__details">
                  <div className="detail-item">
                    <Mail className="detail-item__icon" />
                    <a href={`mailto:${faculty.email}`} className="detail-item__link">{faculty.email}</a>
                  </div>
                  <div className="detail-item">
                    <Phone className="detail-item__icon" />
                    <a href={`tel:${faculty.phone}`} className="detail-item__link">{faculty.phone}</a>
                  </div>
                  <div className="detail-item">
                    <MapPin className="detail-item__icon" />
                    <span>{faculty.office}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="help-section">
          <Card className="help-card">
            <CardContent className="help-card__content">
              <User className="help-card__icon" />
              <h3 className="help-card__title">Need Help?</h3>
              <p className="help-card__text">
                Our faculty advisors are here to guide you through the membership process and answer any questions you may have about our joint chapter activities, research opportunities, or career development programs.
              </p>
              <p className="help-card__subtext">Office Hours: Monday - Friday, 10:00 AM - 4:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
