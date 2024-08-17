import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:4321/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      console.log("data", data)

      if (response.ok) {
        alert("Signup successful! Redirecting to login...")
        navigate("/login")
      } else {
        alert("Signup failed: " + (data.message || "Unknown error"))
      }
    } catch (error) {
      console.log(error)
      alert("Signup failed: " + error.message)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token) {
      navigate("/")
    }
  }, [navigate])

  return (
    <div className=" flex h-[680px] items-center justify-center bg-gray-200">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border-2 border-gray-300 p-2 text-gray-900
                focus:border-gray-500 focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border-2 border-gray-300 p-2 text-gray-900
                focus:border-gray-500 focus:ring-gray-500"
              required
            />
          </div>
          <Button
            className="w-full rounded bg-gray-500 py-2 text-white hover:bg-gray-600"
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Signup
