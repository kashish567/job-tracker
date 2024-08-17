import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Layout() {
  return (
    <div className="flex h-screen w-screen flex-col bg-blue-50">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
