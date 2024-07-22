import { Button } from "@/components/ui/button"
import React, { useState } from "react"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handlesubmit")
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Signup</h2>
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
          type
        >
          Signup
        </Button>
      </form>
    </div>
  )
}

export default Signup
