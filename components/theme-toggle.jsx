"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import "../styles/theme-toggle.css"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid rendering until mounted on the client
  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider" />
      </label>
    </>
  )
}

// You can create a default export for your page or component
export default function Home() {
  // This is an example of how you might use the ThemeToggle
  // You would typically place this in your layout or header component
  return (
    <div style={{ padding: '2rem' }}>
      <h1>My App</h1>
      <p>Toggle the theme below!</p>
      <ThemeToggle />
    </div>
  );
}
