import { site } from '../data/site.js'

const links = [
  { label: 'Shows', href: '#shows' },
  { label: 'Listen', href: '#listen' },
  { label: 'About', href: '#about' },
  { label: 'Merch', href: site.merchUrl, external: true },
]

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <img src="/brand/logo.png" alt="Scott Freeborn" />
        <span>{site.name}</span>
      </a>
      <nav className="nav__links">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {l.label}
          </a>
        ))}
        <a className="btn" href="#booking">
          Book
        </a>
      </nav>
    </header>
  )
}
