import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:4321/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Ensure cookies are sent and received
      })

      const data = await response.json()
      console.log("response.ok:", response.ok)
      console.log("data:", data)

      if (response.ok) {
        alert("Login successful!")
        setTimeout(() => {
          navigate("/")
        }, 1000)
      } else {
        alert("Login failed: " + (data.message || "Unknown error"))
      }
    } catch (error) {
      console.log(error)
      alert("Login failed: " + error.message)
    }
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border-2 border-gray-200 p-2 text-gray-900
              focus:border-blue-400 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded border-2 border-gray-200 p-2 text-gray-900
              focus:border-blue-400 focus:ring-blue-500"
          />
        </div>
        <Button
          className="mt-4"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
