import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
