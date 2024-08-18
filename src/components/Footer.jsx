import React from "react"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-700 py-12 text-white">
      <div
        className="container mx-auto flex flex-col items-center justify-between space-y-8
          md:flex-row md:space-y-0"
      >
        {/* Brand Section */}
        <div
          className="flex flex-col items-center space-y-4 text-center md:items-start md:space-y-0
            md:text-left"
        >
          <div className="text-3xl font-bold">Job Journey</div>
          <p className="text-sm">
            Empowering your career journey with cutting-edge tools and
            resources.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 text-center md:space-y-0 md:text-left">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <a
            href="#"
            className="hover:text-blue-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-blue-300"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-blue-300"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-blue-300"
          >
            Contact
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-4 text-center md:space-y-0 md:text-left">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>123 Career Avenue, Suite 500</p>
          <p>City, State, 12345</p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@jobjourney.com"
              className="hover:text-blue-300"
            >
              support@jobjourney.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-blue-300"
            >
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-blue-200">
        &copy; 2024 Job Journey. All Rights Reserved. | Designed by [Your
        Name/Company]
      </div>
    </footer>
  )
}

export default Footer
