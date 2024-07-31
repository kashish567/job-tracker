import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Layout() {
  return (
    <main className="flex h-screen w-screen flex-col bg-gray-200">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
