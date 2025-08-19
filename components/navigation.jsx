"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import "../styles/navigation.css"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Execom Members", href: "/execom" },
  { name: "Activities", href: "/activities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Join Us", href: "/join" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false) // State to track scroll position
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    // Function to handle scroll events
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 10px, otherwise false
      setIsScrolled(window.scrollY > 10)
    }

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const ieeesbSrc = mounted && theme === "dark" ? "/ieee.png" : "/ieeeb.png"

  return (
    // Conditionally apply the 'scrolled' class based on the isScrolled state
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="navigation-container">
        <div className="navigation-content">
          {/* Logo Section */}
          <div className="navigation-logo-section">
            <Link href="/" className="navigation-logo-link">
              <img src={ieeesbSrc || "/placeholder.svg"} alt="IEEE | SB Logo" className="navigation-logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navigation-desktop">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`navigation-link ${pathname === item.href ? "navigation-link-active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="navigation-mobile-controls">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="navigation-mobile-button">
              {isOpen ? <X className="navigation-icon" /> : <Menu className="navigation-icon" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="navigation-mobile-menu">
            <div className="navigation-mobile-links">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`navigation-mobile-link ${pathname === item.href ? "navigation-mobile-link-active" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
