import { site } from '../data/site.js'
import Clouds from './Clouds.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" />
      <Clouds />
      <img className="hero__raven" src="/brand/raven-flight.png" alt="" aria-hidden="true" />
      <div className="hero__fore" aria-hidden="true">
        <img className="fore fore--grass-l" src="/brand/grass.png" alt="" />
        <img className="fore fore--rocks" src="/brand/rocks.png" alt="" />
        <img className="fore fore--quartz" src="/brand/quartz.png" alt="" />
        <img className="fore fore--grass-r" src="/brand/grass.png" alt="" />
      </div>
      <div className="hero__content">
        <img className="hero__character" src="/brand/character.png" alt="" />
        <h1 className="hero__name">{site.name}</h1>
        <p className="hero__tagline">{site.tagline}</p>
        <div className="hero__cta">
          <a className="btn" href="#listen">
            Listen
          </a>
          <a className="btn btn--ghost" href="#booking">
            Book a show
          </a>
        </div>
      </div>
    </section>
  )
}
