"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react"
import "../styles/upcoming-events.css"

const upcomingEvents = [
  {
    title: "Advanced Signal Processing Workshop",
    date: "2024-12-15",
    time: "10:00 AM - 4:00 PM",
    location: "ECE Department, CEK",
    capacity: "50 participants",
    description:
      "Hands-on workshop covering advanced DSP techniques, filter design, and real-time implementation using MATLAB and Simulink.",
    category: "Workshop",
    society: "SPS",
    registrationLink: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Photonics in 5G Communications",
    date: "2024-12-20",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall, CEK",
    capacity: "100 participants",
    description:
      "Expert seminar on the role of photonics in next-generation wireless communication systems and optical networking.",
    category: "Seminar",
    society: "PHO",
    registrationLink: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "VLSI Design Competition",
    date: "2024-12-25",
    time: "9:00 AM - 6:00 PM",
    location: "VLSI Lab, CEK",
    capacity: "30 teams",
    description:
      "Inter-college competition focusing on analog and digital IC design challenges with industry-standard tools.",
    category: "Competition",
    society: "SSCS",
    registrationLink: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Don't miss out on our exciting upcoming technical events and learning opportunities.
          </p>
        </div>

        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="event-card">
              <div className="event-card__image-container">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="event-card__image"
                />
                <div className="event-card__tags">
                  <span className="event-card__tag-category">{event.category}</span>
                  <span className="event-card__tag-society">{event.society}</span>
                </div>
              </div>

              <CardHeader className="event-card__header">
                <CardTitle className="event-card__title">{event.title}</CardTitle>
              </CardHeader>

              <CardContent className="event-card__content">
                <p className="event-card__description">{event.description}</p>
                <div className="event-card__details">
                  <div className="event-card__detail-item">
                    <Calendar className="event-card__icon" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="event-card__detail-item">
                    <Clock className="event-card__icon" />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-card__detail-item">
                    <MapPin className="event-card__icon" />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-card__detail-item">
                    <Users className="event-card__icon" />
                    <span>{event.capacity}</span>
                  </div>
                </div>
                <Button className="event-card__button">
                  <span>Register Now</span>
                  <ExternalLink className="event-card__button-icon" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}