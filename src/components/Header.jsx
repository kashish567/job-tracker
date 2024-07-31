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
    <nav className="flex items-center justify-between bg-gray-600 p-4">
      <div className="flex items-center justify-center gap-2 p-4 text-2xl font-bold italic text-white">
        <SiTodoist />
        Job Journey
      </div>
      <div>
        {!isLoggedIn ? (
          <>
            <button
              className="mr-2 scale-90 rounded bg-white px-4 py-2 font-bold text-black hover:shadow-md
                hover:shadow-blue-200"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="mr-2 scale-90 rounded bg-white px-4 py-2 font-bold text-black hover:shadow-md
                hover:shadow-blue-200"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </>
        ) : (
          <>
            <button
              className="mr-2 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
              onClick={() => navigate("/add-job")}
            >
              Job
            </button>
            <button
              className="mr-2 rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
              // onClick={() => navigateTo("/get-all")}
            >
              Get All
            </button>
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
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
