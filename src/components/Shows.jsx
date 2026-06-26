import { useState, useEffect } from 'react'
import { site } from '../data/site.js'

// Minimal CSV parser that handles quoted fields (commas/newlines inside quotes).
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else inQuotes = false
      } else field += c
    } else if (c === '"') inQuotes = true
    else if (c === ',') {
      row.push(field)
      field = ''
    } else if (c === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else if (c !== '\r') field += c
  }
  if (field !== '' || row.length) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

export default function Shows() {
  const [shows, setShows] = useState(null) // null = still loading

  useEffect(() => {
    const url = site.showsSheetCsvUrl
    if (!url) {
      setShows(site.shows)
      return
    }
    fetch(url)
      .then((r) => r.text())
      .then((text) => {
        const rows = parseCsv(text.trim()).filter((r) => r.some((c) => c.trim()))
        if (rows.length < 2) {
          setShows([])
          return
        }
        // Map columns by header NAME (order-independent; missing columns are fine).
        const norm = (s) => s.toLowerCase().replace(/[^a-z]/g, '')
        const headers = rows[0].map(norm)
        const col = (...names) => {
          for (const n of names) {
            const i = headers.indexOf(n)
            if (i !== -1) return i
          }
          return -1
        }
        const idx = {
          date: col('date'),
          venue: col('venue'),
          city: col('city'),
          venueUrl: col('venueurl', 'venuelink', 'url'),
          venueLinkText: col('venuelinktext', 'linktext'),
          ticketUrl: col('tickets', 'ticket', 'ticketurl', 'ticketslink'),
        }
        const get = (r, i) => (i !== -1 && r[i] ? r[i].trim() : '')
        const data = rows
          .slice(1)
          .map((r) => ({
            date: get(r, idx.date),
            venue: get(r, idx.venue),
            city: get(r, idx.city),
            venueUrl: get(r, idx.venueUrl),
            venueLinkText: get(r, idx.venueLinkText),
            ticketUrl: get(r, idx.ticketUrl),
          }))
          .filter((s) => s.date || s.venue)
        setShows(data)
      })
      .catch(() => setShows(site.shows)) // fall back if the sheet can't be reached
  }, [])

  return (
    <section className="section shows reveal" id="shows">
      <h2 className="section__title">Upcoming shows</h2>
      {shows === null ? (
        <p className="placeholder">Loading shows&hellip;</p>
      ) : shows.length === 0 ? (
        <p className="placeholder">No upcoming shows right now — check back soon.</p>
      ) : (
        <ul className="shows__list">
          {shows.map((s, i) => (
            <li className="show" key={i}>
              <span className="show__date">{s.date}</span>
              <span className="show__venue">
                {s.venueUrl ? (
                  <a href={s.venueUrl} target="_blank" rel="noreferrer">
                    {s.venueLinkText || s.venue}
                  </a>
                ) : (
                  s.venue
                )}
              </span>
              <span className="show__city">{s.city}</span>
              {s.ticketUrl && (
                <a className="btn btn--sm" href={s.ticketUrl} target="_blank" rel="noreferrer">
                  Tickets
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
