// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Brands from "./components/Brands"
// import Services from "./components/Services"
// import Process from "./components/Process"
// import Testimonials from "./components/Testimonials"
// import Footer from "./components/Footer"

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Brands />
//       <Services />
//       <Process />
//       <Testimonials />
//       <Footer />
//     </>
//   )
// }

// export default App

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (<div>
      {/* Your real UI */}
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}
