import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { ImageGallery } from "@/components/image-gallery"
import "../../styles/gallery.css"
import "../../styles/dot-grid.css"
import DotGrid from "@/components/dot-grid"

export const metadata = {
  title: "Gallery | IEEE SSCS/SPS/PHO/MTTS Joint Chapter",
  description: "Browse through our collection of event photos, workshop moments, and memorable experiences.",
}

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <DotGrid />
      <Navigation />
      <main className="gallery-main">
        <GalleryHero />
        <ImageGallery />
      </main>
      <Footer />
    </div>
  )
}
