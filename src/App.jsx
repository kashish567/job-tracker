import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup/>}
          />
           <Route
            path="/login"
            element={<Login/>}
          />
           <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
