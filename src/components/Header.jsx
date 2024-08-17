import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SiTodoist } from "react-icons/si"

// import { useHistory } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  // const handleLogin = () => {
  //   // Implement login logic here
  //   localStorage.setItem("token"); // Simulate setting a token
  //   setIsLoggedIn(true);
  // };

  const handleLogout = () => {
    // Implement logout logic here
    localStorage.removeItem("authToken")
    setIsLoggedIn(false)
  }

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div
        className="flex items-center justify-center gap-2 p-4 text-2xl font-bold italic
          text-blue-600"
      >
        <SiTodoist />
        Job Journey
      </div>
      <div>
        {!isLoggedIn ? (
          <>
            <button
              className="mr-2 scale-90 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:shadow-md
                hover:shadow-blue-200"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="mr-2 scale-90 rounded bg-blue-500 px-4 py-2 text-white font-bold hover:shadow-md
                hover:shadow-blue-200"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        ) : (
          <>
            <button
              className="mr-2 rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
              onClick={() => navigate("/add-job")}
            >
              Job
            </button>
            <button
              className="mr-2 rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
              onClick={() => navigate("/get-all")}
            >
              Get All
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
    </nav>
  )
}

export default Header
