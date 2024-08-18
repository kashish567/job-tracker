import React from "react"
import { Button } from "./ui/button"

function AboutUsSection() {
  return (
    <section className="bg-white py-16 text-blue-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold">About Us</h2>
        <p className="mt-4 text-lg leading-relaxed">
          At Job Journey, we are committed to providing you with the best tools
          to manage and streamline your job application process. Our platform is
          designed to help you stay organized, keep track of your applications,
          and achieve your career goals with ease.
        </p>
      </div>
    </section>
  )
}

export default AboutUsSection
