// Navbar.jsx
import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Check if the token is present in local storage
  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log("token:", token)
  }, [])

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          <Link to="/">MyApp</Link>
        </div>
        <div className="flex space-x-4">
          {/* Conditionally render buttons based on token presence */}
          {!token ? (
            <>
              <Link
                to="/login"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/add-job"
                className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-700"
              >
                Add Job
              </Link>
              <Link
                to="/view-applications"
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
              >
                View Job Applications
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
