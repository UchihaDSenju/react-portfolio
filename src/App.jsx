import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Experience from "./pages/Experience"
import { Routes, Route } from "react-router-dom"
import Project from "./pages/Project"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/react-portfolio/" element={<Home />}></Route>
        <Route path="/react-portfolio/projects" element={<Projects />}></Route>
        <Route path="/react-portfolio/projects/:id" element={<Project />}/>
        <Route path="/react-portfolio/experience" element={<Experience />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
