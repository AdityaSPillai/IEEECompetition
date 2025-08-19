"use client";

import { Calendar, Users, Award, Rocket } from "lucide-react";
import "../styles/society-history.css";

const timeline = [
  {
    year: "2020",
    title: "Joint Chapter Formation",
    description:
      "IEEE SSCS/SPS/PHO/MTTS Joint Chapter was officially established at CEK with 25 founding members.",
    icon: Rocket,
    color: "color-blue",
  },
  {
    year: "2021",
    title: "First Technical Symposium",
    description:
      "Organized our inaugural technical symposium with over 200 participants from across Kerala.",
    icon: Users,
    color: "color-green",
  },
  {
    year: "2022",
    title: "Research Milestone",
    description:
      "Chapter members published 15+ research papers in IEEE conferences and journals.",
    icon: Award,
    color: "color-purple",
  },
  {
    year: "2023",
    title: "Outstanding Chapter Award",
    description:
      "Received recognition as the Outstanding Student Chapter in Kerala Section.",
    icon: Award,
    color: "color-yellow",
  },
  {
    year: "2024",
    title: "Expansion & Growth",
    description:
      "Reached 150+ active members and established partnerships with leading tech companies.",
    icon: Users,
    color: "color-red",
  },
];

export function SocietyHistory() {
  return (
    <section className="section-history">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            From humble beginnings to becoming a leading IEEE student chapter,
            here's our story of growth and achievement.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-relative">
            <div className="timeline-line"></div>
            <div className="timeline-events">
              {timeline.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div
                    key={event.year}
                    className="timeline-event"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content-container">
                      <div className="timeline-card">
                        <div className="timeline-card-content">
                          <div className="card-header-flex">
                            <div className="icon-background">
                              <IconComponent
                                className={`timeline-icon ${event.color}`}
                              />
                            </div>
                            <div className="event-details">
                              <div className="event-year-container">
                                <span className="event-year">
                                  {event.year}
                                </span>
                                <Calendar className="calendar-icon" />
                              </div>
                              <h3 className="event-title">{event.title}</h3>
                              <p className="event-description">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden-md"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}