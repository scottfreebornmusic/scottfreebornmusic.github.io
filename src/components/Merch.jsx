import { site } from '../data/site.js'

export default function Merch() {
  return (
    <section className="section merch reveal" id="merch">
      <img className="section__motif" src="/brand/character.png" alt="" />
      <h2 className="section__title">Merch</h2>
      <p className="merch__intro">
        Raven tees, trucker hats, and more — hand-illustrated and printed to order.
      </p>
      <div className="merch__cta">
        <a className="btn" href={site.merchUrl} target="_blank" rel="noreferrer">
          Shop the store
        </a>
      </div>
    </section>
  )
}
