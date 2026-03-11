import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[100px]">
        <Navbar />
        <Hero />
        <Brands />
        <Services />
        <Process />
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}