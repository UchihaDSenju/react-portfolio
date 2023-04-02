import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/Home"
import Experience from "./pages/Experience"

function App() {

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
