import { useReveal } from './hooks/useReveal.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Divider from './components/Divider.jsx'
import Listen from './components/Listen.jsx'
import Shows from './components/Shows.jsx'
import About from './components/About.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <Shows />
        <Divider />
        <Listen />
        <Divider />
        <About />
        <Divider />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
