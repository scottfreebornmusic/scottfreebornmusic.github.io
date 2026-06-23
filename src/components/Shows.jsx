import { site } from '../data/site.js'

export default function Shows() {
  return (
    <section className="section shows reveal" id="shows">
      <h2 className="section__title">Upcoming shows</h2>
      {site.shows.length === 0 ? (
        <p className="placeholder">No upcoming shows right now — check back soon.</p>
      ) : (
        <ul className="shows__list">
          {site.shows.map((s, i) => (
            <li className="show" key={i}>
              <span className="show__date">{s.date}</span>
              <span className="show__venue">{s.venue}</span>
              <span className="show__city">{s.city}</span>
              {s.ticketUrl ? (
                <a className="btn btn--sm" href={s.ticketUrl} target="_blank" rel="noreferrer">
                  Tickets
                </a>
              ) : (
                <span className="show__tba">—</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
