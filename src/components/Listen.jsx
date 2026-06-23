import { useState, useEffect } from 'react'
import { site } from '../data/site.js'

export default function Listen() {
  const { videos } = site
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="section listen reveal" id="listen">
      <img className="section__motif" src="/brand/raven-guitar.png" alt="" />
      <h2 className="section__title">Listen</h2>

      {videos.length > 0 ? (
        <div className="video-grid">
          {videos.map((id) => (
            <button
              key={id}
              className="video-thumb"
              onClick={() => setActive(id)}
              aria-label="Play video"
            >
              <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
              <span className="video-thumb__play">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#C24A2A" stroke="#2E2018" strokeWidth="3" />
                  <polygon points="26,20 26,44 46,32" fill="#F5E6C8" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <p className="placeholder">
          Add a YouTube video id to <code>src/data/site.js</code> to embed a clip here.
        </p>
      )}

      {site.listen.length > 0 && (
        <div className="listen__links">
          {site.listen.map((l) => (
            <a key={l.url} className="btn btn--ghost" href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      )}

      {active && (
        <div className="video-modal" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <div className="video-modal__inner" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal__close" onClick={() => setActive(null)} aria-label="Close">
              &times;
            </button>
            <div className="video-modal__frame">
              <iframe
                src={`https://www.youtube.com/embed/${active}?autoplay=1`}
                title="Scott Freeborn - live"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
