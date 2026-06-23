import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__mark" src="/brand/wordmark.png" alt={site.name} />
      <div className="footer__panel">
        <div className="footer__socials">
          {site.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="footer__fine">
          &copy; {new Date().getFullYear()} {site.name} &middot; Lyons, Colorado
        </p>
      </div>
    </footer>
  )
}
