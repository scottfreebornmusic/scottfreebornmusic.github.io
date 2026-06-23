import { site } from '../data/site.js'

export default function About() {
  return (
    <section className="section about reveal" id="about">
      <h2 className="section__title">About</h2>
      <p className="about__bio">{site.bio}</p>
      {site.quote && (
        <blockquote className="about__quote">
          &ldquo;{site.quote.text}&rdquo;
          <cite>&mdash; {site.quote.author}</cite>
        </blockquote>
      )}
    </section>
  )
}
