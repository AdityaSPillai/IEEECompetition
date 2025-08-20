"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Clock } from "lucide-react"
import "../styles/location-map.css"

export function LocationMap() {
  return (
    <section className="location-map">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visit Our Campus</h2>
          <p className="section-subtitle">
            Find us at the College of Engineering Karunagappally campus. We're always happy to welcome visitors and prospective members.
          </p>
        </div>

        <div className="location-grid">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.990969110119!2d76.55441247510099!3d9.064586290998196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06047ba58e1ba5%3A0x34bf71aaecc5a798!2sCollege%20of%20Engineering%20Karunagappally!5e0!3m2!1sen!2sin!4v1755571848176!5m2!1sen!2sin&maptype=satellite"
              width="600" 
              height="520" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="details-container">
            <Card className="detail-card">
              <CardContent className="detail-card__content">
                <MapPin className="detail-card__icon" />
                <div>
                  <h3 className="detail-card__title">Address</h3>
                  <p className="detail-card__text">
                    College of Engineering Karunagappally<br />
                    Karunagappally, Kerala 690518<br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="detail-card">
              <CardContent className="detail-card__content">
                <Navigation className="detail-card__icon" />
                <div>
                  <h3 className="detail-card__title">Directions</h3>
                  <p className="detail-card__text">
                    Located on the Kollam-Alappuzha highway, easily accessible by bus and private transport.
                  </p>
                  <p className="detail-card__text">
                    The nearest railway station is Karunagappally (2 km).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="detail-card">
              <CardContent className="detail-card__content">
                <Clock className="detail-card__icon" />
                <div>
                  <h3 className="detail-card__title">Visiting Hours</h3>
                  <div className="detail-card__text">
                    <p>Monday - Saturday : 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
