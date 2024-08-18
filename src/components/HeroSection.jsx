import React from "react"
import { Button } from "./ui/button"

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-blue-600 text-white">
      <div className="absolute inset-0">
        <img
          src="https://rareminds.in/wp-content/uploads/2021/05/The-Journey-to-Your-Dream-Job.jpg"
          alt="Background"
          className="h-full w-full object-cover opacity-60"
        />
      </div>
      <div
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12
          text-center md:px-12 md:py-24 lg:px-24"
      ></div>
    </section>
  )
}

export default HeroSection
