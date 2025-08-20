"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Filter, Instagram } from "lucide-react"
import "../styles/activities-list.css"

const activities = [
  {
    title: "SIGNAUX",
    date: "2022-05-19",
    location: "CEK",
    participants: "50+",
    description: "SIGNAUX, a technical event organized by the SPS society.",
    category: "Event",
    society: "SPS",
    year: "2022",
    image: "/signaux.jpeg",
    instagramLink: "https://www.instagram.com/p/CdlZ6uiPKpU/",
  },
  {
    title: "Benefits of PHO/MTTS/SSCS/SPS",
    date: "2022-07-30",
    location: "CEK",
    participants: "50+",
    description: "A session on the benefits of joining various IEEE societies.",
    category: "Seminar",
    society: "SPS",
    year: "2022",
    image: "/BenefitsofPHOMTTSSSCSSPS.jpeg",
    instagramLink: "https://site.ieee.org/sb-cek/?p=1097",
  },
  {
    title: "Introduction to LiFi Technology",
    date: "2022-06-26",
    location: "Online",
    participants: "75+",
    description: "An introductory session on Light Fidelity (LiFi) technology.",
    category: "Seminar",
    society: "PHO",
    year: "2022",
    image: "/IntroductiontoLifi.jpeg",
    instagramLink: "https://www.instagram.com/p/CfQqDY6rE1z/",
  },
  {
    title: "SPAS 3.0",
    date: "2022-07-22",
    location: "CEK",
    participants: "100+",
    description: "The third edition of the Signal Processing and Antenna Systems (SPAS) event.",
    category: "Symposium",
    society: "SPS",
    year: "2022",
    image: "/spas.jpeg",
    instagramLink: "https://www.instagram.com/p/CgGieGbr-jw/",
  },
  {
    title: "Introduction to Microwave Theory and Techniques",
    date: "2022-09-21",
    location: "Online",
    participants: "60+",
    description: "An introductory seminar on microwave theory and techniques.",
    category: "Seminar",
    society: "MTTS",
    year: "2022",
    image: "/IntroToMicrowaveTheoryAndTechniques.jpeg",
    instagramLink: "https://www.instagram.com/p/CikfDXbDw-i/",
  },
  {
    title: "Quiz on Lifi Technology",
    date: "2022-10-19",
    location: "Online",
    participants: "40+",
    description: "A competitive quiz testing knowledge on LiFi technology.",
    category: "Competition",
    society: "PHO, SSCS, MTTS",
    year: "2022",
    image: "/QuizonLiFiTechnologies.jpeg",
    instagramLink: "https://www.instagram.com/p/Cj4jpHFLqKH/",
  },
  {
    title: "Evolution of IC",
    date: "2022-11-02",
    location: "Online",
    participants: "50+",
    description: "A session detailing the history and evolution of Integrated Circuits (IC).",
    category: "Seminar",
    society: "PHO, SSCS, MTTS",
    year: "2022",
    image: "/EvolutionofIC.jpeg",
    instagramLink: "https://www.instagram.com/p/CkSGI8hrRzi/",
  },
  {
    title: "Workshop on Home Automation",
    date: "2022-11-08",
    location: "CEK Labs",
    participants: "30+",
    description: "A hands-on workshop focused on home automation technologies.",
    category: "Workshop",
    society: "SSCS",
    year: "2022",
    image: "/WorkshopOnHomeAutomation.jpeg",
    instagramLink: "https://www.instagram.com/p/CkleUyEvs-p/",
  },
  {
    title: "Signal Quest, Signal Processing Quiz",
    date: "2023-06-23",
    location: "Online",
    participants: "50+",
    description: "Signal Quest, a challenging quiz on signal processing concepts.",
    category: "Competition",
    society: "SPS",
    year: "2023",
    image: "/SignalQuest.jpeg",
    instagramLink: "https://www.instagram.com/p/CtzEyN_Ptdw/",
  },
  {
    title: "SPExpo 2023",
    date: "2023-10-14",
    location: "CEK Auditorium",
    participants: "150+",
    description: "The 2023 edition of the Signal Processing Expo (SPExpo).",
    category: "Event",
    society: "SPS",
    year: "2023",
    image: "/SPExpo.jpeg",
    instagramLink: "https://www.instagram.com/p/CybWQCxymU4/",
  },
  {
    title: "CNN for Image Classification Using Python",
    date: "2023-10-28",
    location: "Online",
    participants: "80+",
    description: "Interactive session on using Convolutional Neural Networks for image classification.",
    category: "Seminar",
    society: "SPS",
    year: "2023",
    image: "/placeholder.svg",
    instagramLink: "https://www.instagram.com/p/Cy0e1I0vrSh/",
  },
  {
    title: "Luxathon 4.0",
    date: "2023-12-08",
    location: "CEK",
    participants: "120+",
    description: "The fourth edition of Luxathon, a photonics-based hackathon.",
    category: "Competition",
    society: "PHO",
    year: "2023",
    image: "/Lux4.jpeg",
    instagramLink: "https://www.instagram.com/p/Czl2G5IvcU0/",
  },
  {
    title: "SensorCraft",
    date: "2024-05-18",
    location: "CEK Labs",
    participants: "40+",
    description: "A hands-on event focused on building and crafting with sensors.",
    category: "Workshop",
    society: "SSCS, SPS",
    year: "2024",
    image: "/SensorCraft.jpeg",
    instagramLink: "https://www.instagram.com/p/C7BgaDdrYcX/",
  },
  {
    title: "Code and Build With Arduino",
    date: "2024-07-04",
    location: "CEK Labs",
    participants: "35+",
    description: "A workshop on coding and building projects using the Arduino platform.",
    category: "Workshop",
    society: "SSCS",
    year: "2024",
    image: "/CodeAndBuildWithArduino.jpeg",
    instagramLink: "https://www.instagram.com/p/C88nrDTSija/",
  },
  {
    title: "Aithon 2.0",
    date: "2024-08-31",
    location: "CEK",
    participants: "150+",
    description: "The second edition of Aithon, an AI-focused hackathon.",
    category: "Competition",
    society: "SPS",
    year: "2024",
    image: "/Aithon2.jpeg",
    instagramLink: "https://www.instagram.com/p/C9hIck8TKqm/",
  },
  {
    title: "Luxathon 5.0",
    date: "2024-12-20",
    location: "CEK",
    participants: "150+",
    description: "The fifth edition of Luxathon, a photonics-based hackathon.",
    category: "Competition",
    society: "PHO",
    year: "2024",
    image: "/Lux5.jpeg",
    instagramLink: "https://www.instagram.com/p/DDcR86ez2Cd/",
  },
  {
    title: "PhotoniQ",
    date: "2025-04-04",
    location: "Online",
    participants: "60+",
    description: "PhotoniQ, a competitive event centered around photonics.",
    category: "Competition",
    society: "PHO",
    year: "2025",
    image: "/PhotoniQ.jpg",
    instagramLink: "https://www.instagram.com/p/DH_U87rzxpo/",
  },
  {
    title: "AI and ML in Signal Processing",
    date: "2025-06-14",
    location: "Online",
    participants: "100+",
    description: "A talk session on the applications of AI and ML in signal processing.",
    category: "Seminar",
    society: "SPS",
    year: "2025",
    image: "/TalkONAIandMLSignalProcessing.jpg",
    instagramLink: "https://www.instagram.com/p/DK0_qwCTwy_/",
  },
  {
    title: "Q-Signal Quiz",
    date: "2025-06-15",
    location: "Online",
    participants: "50+",
    description: "A quiz competition focused on signal processing.",
    category: "Competition",
    society: "SPS",
    year: "2025",
    image: "/QuizonLiFiTechnologies.jpeg",
    instagramLink: "https://www.instagram.com/p/DK4l9yFThqx/",
  },
];

const categories = ["All", "Event", "Workshop", "Seminar", "Symposium", "Competition", "Lab Visit"]
const societies = ["All", "SSCS", "SPS", "PHO", "MTTS"]
const years = ["All", "2025", "2024", "2023", "2022"]

export function ActivitiesList() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSociety, setSelectedSociety] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")

  const filteredActivities = activities.filter((activity) => {
    return (
      (selectedCategory === "All" || activity.category === selectedCategory) &&
      // --- THIS IS THE UPDATED LOGIC ---
      (selectedSociety === "All" || activity.society.includes(selectedSociety)) &&
      (selectedYear === "All" || activity.year === selectedYear)
    )
  })

  return (
    <section className="activities-list">
      {/* ...The rest of your component's JSX remains exactly the same... */}
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Past Activities</h2>
          <p className="section-subtitle">
            Explore our comprehensive history of technical events, workshops, and community initiatives.
          </p>
        </div>

        <div className="filters-container">
          <div className="filters-header">
            <Filter className="filters-header__icon" />
            <span className="filters-header__title">Filter Activities</span>
          </div>

          <div className="filters-grid">
            <div className="filter-group">
              <label className="filter-group__label">Category</label>
              <div className="filter-group__buttons">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={`filter-button ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-group__label">Society</label>
              <div className="filter-group__buttons">
                {societies.map((society) => (
                  <Button
                    key={society}
                    variant={selectedSociety === society ? "default" : "outline"}
                    size="sm"
                    className={`filter-button ${selectedSociety === society ? "active" : ""}`}
                    onClick={() => setSelectedSociety(society)}
                  >
                    {society}
                  </Button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-group__label">Year</label>
              <div className="filter-group__buttons">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    className={`filter-button ${selectedYear === year ? "active" : ""}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="activities-grid">
          {filteredActivities.map((activity) => (
            <Card key={`${activity.title}-${activity.date}`} className="activity-card">
              <div className="activity-card__image-container">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="activity-card__image"
                />
                <div className="activity-card__tags">
                  <span className="activity-card__tag-category">{activity.category}</span>
                  <span className="activity-card__tag-society">{activity.society}</span>
                </div>
                <a
                  href={activity.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="activity-card__instagram-link"
                  aria-label="View on Instagram"
                >
                  <Instagram className="activity-card__instagram-icon" />
                </a>
              </div>

              <CardHeader className="activity-card__header">
                <CardTitle className="activity-card__title">{activity.title}</CardTitle>
              </CardHeader>

              <CardContent className="activity-card__content">
                <p className="activity-card__description">{activity.description}</p>
                <div className="activity-card__details">
                  <div className="activity-card__detail-item">
                    <Calendar className="activity-card__icon" />
                    <span>{new Date(activity.date).toLocaleDateString()}</span>
                  </div>
                  <div className="activity-card__detail-item">
                    <MapPin className="activity-card__icon" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="activity-card__detail-item">
                    <Users className="activity-card__icon" />
                    <span>{activity.participants} participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="no-results">
            <p className="no-results__text">No activities found matching your filters.</p>
            <Button
              onClick={() => {
                setSelectedCategory("All")
                setSelectedSociety("All")
                setSelectedYear("All")
              }}
              variant="outline"
              className="no-results__button"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}