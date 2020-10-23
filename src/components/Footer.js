import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <nav className="flex justify-between">
        <div>
          © Rita Wang 2020
        </div>

        <div>
          <Link to="/about-me">About</Link>
        </div>
      </nav>
    </footer>
  )
}
