import { useForm, ValidationError } from '@formspree/react'
import { site } from '../data/site.js'

export default function Booking() {
  const [state, handleSubmit] = useForm(site.formspreeId)

  return (
    <section className="section booking reveal" id="booking">
      <h2 className="section__title">Book Scott</h2>
      <p className="booking__intro">
        Booking solo, duo, and trio sets — restaurants, bars, and private events across
        the Front Range. Drop a note about a gig, a collaboration, or just to say hello.
      </p>

      {state.succeeded ? (
        <p className="booking__thanks">
          Thanks — your message is on its way. I&apos;ll get back to you soon.
        </p>
      ) : (
        <form className="booking__form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <select name="topic" defaultValue="">
            <option value="" disabled>
              What&apos;s this about?
            </option>
            <option>Booking a show</option>
            <option>Collaboration / work</option>
            <option>Just a question</option>
          </select>
          <textarea name="message" placeholder="Your message" rows="5" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button className="btn" type="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}
    </section>
  )
}
