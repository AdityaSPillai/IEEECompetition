"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import "../styles/image-gallery.css"

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "IEEE Day Celebration 2024", event: "IEEE Day 2024", category: "Events", date: "2024-10-01" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Signal Processing Workshop", event: "SPS Workshop", category: "Workshops", date: "2024-09-15" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Photonics Seminar", event: "PHO Seminar", category: "Seminars", date: "2024-08-28" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "VLSI Design Competition", event: "SSCS Competition", category: "Competitions", date: "2024-08-10" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "RF Circuit Workshop", event: "MTTS Workshop", category: "Workshops", date: "2024-07-20" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Industry-Academia Meet", event: "Industry Meet 2024", category: "Events", date: "2024-06-15" },
  { id: 7, src: "/placeholder.svg?height=400&width=600", alt: "Paper Presentation Contest", event: "Paper Contest", category: "Competitions", date: "2024-05-25" },
  { id: 8, src: "/placeholder.svg?height=400&width=600", alt: "Photonics Lab Tour", event: "Lab Tour", category: "Lab Visits", date: "2024-04-18" },
  { id: 9, src: "/placeholder.svg?height=400&width=600", alt: "Technical Quiz Competition", event: "Quiz Competition", category: "Competitions", date: "2024-03-22" },
  { id: 10, src: "/placeholder.svg?height=400&width=600", alt: "Executive Committee Meeting", event: "Execom Meeting", category: "Meetings", date: "2024-02-15" },
  { id: 11, src: "/placeholder.svg?height=400&width=600", alt: "Certificate Distribution", event: "Certificate Ceremony", category: "Events", date: "2024-01-20" },
  { id: 12, src: "/placeholder.svg?height=400&width=600", alt: "Guest Lecture", event: "Expert Lecture", category: "Seminars", date: "2023-12-10" },
]

const categories = ["All", "Events", "Workshops", "Seminars", "Competitions", "Lab Visits", "Meetings"]

export function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <section className="image-gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Event Gallery</h2>
          <p className="section-subtitle">
            Browse through our collection of memorable moments from technical events, workshops, and community activities.
          </p>
        </div>

        <div className="filters-container">
          <div className="filters-header">
            <Filter className="filters-header__icon" />
            <span className="filters-header__title">Filter by Category</span>
          </div>
          <div className="filter-buttons">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`filter-button ${selectedCategory === category ? "active" : ""}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* ... The rest of the component remains the same ... */}
        <div className="image-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="ig-card"
              onClick={() => openLightbox(image, index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="ig-card__image" />
              <div className="ig-card__overlay" />
              <div className="ig-card__info">
                <h3 className="ig-card__title">{image.event}</h3>
                <p className="ig-card__date">{new Date(image.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-results">
            <p className="no-results__text">No images found for the selected category.</p>
            <Button onClick={() => setSelectedCategory("All")} variant="outline" className="no-results__button">
              Show All Images
            </Button>
          </div>
        )}

        {selectedImage && (
          <div
            className="lightbox"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} className="lightbox__image" />
              <button onClick={closeLightbox} className="lightbox__close-btn">
                <X className="lightbox__icon" />
              </button>
              <button onClick={goToPrevious} className="lightbox__nav-btn lightbox__nav-btn--prev">
                <ChevronLeft className="lightbox__icon" />
              </button>
              <button onClick={goToNext} className="lightbox__nav-btn lightbox__nav-btn--next">
                <ChevronRight className="lightbox__icon" />
              </button>
              <div className="lightbox__info">
                <h3 className="lightbox__info-title">{selectedImage.event}</h3>
                <p className="lightbox__info-alt">{selectedImage.alt}</p>
                <p className="lightbox__info-meta">
                  {new Date(selectedImage.date).toLocaleDateString()} • {selectedImage.category}
                </p>
              </div>
              <div className="lightbox__counter">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
