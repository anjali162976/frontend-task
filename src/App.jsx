import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#F3F3F3] overflow-x-hidden">

      <div className="max-w-[1350px] mx-auto">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App
