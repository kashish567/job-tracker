import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SiTodoist } from "react-icons/si"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsLoggedIn(false)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleHomeClick = () => {
    navigate("/")
    setIsMenuOpen(false) // Close the menu if it was open
  }

  return (
    <nav className="sticky flex items-center justify-between bg-white p-4 shadow-md">
      <div
        onClick={handleHomeClick}
        className="flex cursor-pointer items-center justify-center gap-2 p-4 text-2xl font-bold
          italic text-blue-600"
      >
        <SiTodoist />
        Job Journey
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <div
        className={`absolute left-0 top-16 w-full bg-white transition-transform duration-300
          ease-in-out md:static md:flex md:w-auto md:transform-none ${
          isMenuOpen
              ? "translate-x-0 transform"
              : "-translate-x-full transform"
          }`}
      >
        <div className="flex flex-col items-center gap-4 p-4 md:flex-row md:p-0">
          {!isLoggedIn ? (
            <>
              <button
                className="scale-90 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:shadow-md
                  hover:shadow-blue-200"
                onClick={() => {
                  navigate("/login")
                  setIsMenuOpen(false)
                }}
              >
                Login
              </button>
              <button
                className="scale-90 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:shadow-md
                  hover:shadow-blue-200"
                onClick={() => {
                  navigate("/signup")
                  setIsMenuOpen(false)
                }}
              >
                Signup
              </button>
            </>
          ) : (
            <>
              <button
                className="rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
                onClick={() => {
                  navigate("/add-job")
                  setIsMenuOpen(false)
                }}
              >
                Add Job
              </button>
              <button
                className="rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
                onClick={() => {
                  navigate("/get-all")
                  setIsMenuOpen(false)
                }}
              >
                Applications
              </button>
              <button
                className="rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
