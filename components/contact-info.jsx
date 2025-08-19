"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Globe, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import "../styles/contact-info.css"

const contactDetails = [
  { title: "Email Address", icon: Mail, details: [{ label: "General Inquiries", value: "ieee@cek.ac.in" }, { label: "Membership", value: "membership@ieee.cek.ac.in" }, { label: "Events", value: "events@ieee.cek.ac.in" }] },
  { title: "Phone Numbers", icon: Phone, details: [{ label: "Main Office", value: "+91 476 2289000" }, { label: "ECE Department", value: "+91 476 2289001" }, { label: "Student Affairs", value: "+91 476 2289002" }] },
  { title: "Office Location", icon: MapPin, details: [{ label: "Address", value: "College of Engineering Karunagappally" }, { label: "City", value: "Karunagappally, Kerala 690518" }, { label: "Country", value: "India" }] },
  { title: "Office Hours", icon: Clock, details: [{ label: "Monday - Friday", value: "9:00 AM - 5:00 PM" }, { label: "Saturday", value: "9:00 AM - 1:00 PM" }, { label: "Sunday", value: "Closed" }] },
]

const socialLinks = [
  { name: "Website", icon: Globe, url: "https://cek.ac.in", color: "blue" },
  { name: "Facebook", icon: Facebook, url: "#", color: "blue" },
  { name: "Instagram", icon: Instagram, url: "#", color: "pink" },
  { name: "LinkedIn", icon: Linkedin, url: "#", color: "blue-dark" },
  { name: "Twitter", icon: Twitter, url: "#", color: "blue-light" },
]

export function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We're here to help! Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="contact-grid">
          {contactDetails.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <Card key={contact.title} className="contact-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="contact-card__header">
                  <div className="contact-card__icon-wrapper">
                    <div className="contact-card__icon-background">
                      <IconComponent className="contact-card__icon" />
                    </div>
                  </div>
                  <CardTitle className="contact-card__title">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="contact-card__content">
                  {contact.details.map((detail, idx) => (
                    <div key={idx} className="contact-card__detail">
                      <p className="contact-card__detail-label">{detail.label}</p>
                      <p className="contact-card__detail-value">{detail.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="social-media-section">
          <h3 className="social-media-section__title">Connect With Us</h3>
          <div className="social-media-section__links">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <IconComponent className={`social-link__icon social-link__icon--${social.color}`} />
                  <span className="sr-only">{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
