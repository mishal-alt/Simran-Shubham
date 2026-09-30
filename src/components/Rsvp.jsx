import { useState } from 'react'
import { Send } from 'lucide-react'
import { invite } from '../data/invite'
import Reveal from './Reveal'

const { couple, event, venue, rsvp } = invite

export default function Rsvp() {
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [touched, setTouched] = useState(false)

  const invalid = touched && !name.trim()

  const onSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    if (!name.trim()) return
    const text = [
      `Hello! This is ${name.trim()}.`,
      `I would love to attend the engagement of ${couple.brideShort} & ${couple.groomShort} on ${event.dayLabel}, ${event.dateLabel} at ${venue.name}.`,
      note.trim() && `\n${note.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  const field =
    'w-full rounded-xl border bg-parchment/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-gold focus:bg-parchment'

  return (
    <section className="px-5 py-16">
      <Reveal className="mx-auto max-w-md text-center">
        <h2 className="font-display text-3xl tracking-[0.14em] text-royal uppercase">RSVP</h2>
        <div className="gold-rule mx-auto mt-4 w-24" />
        <p className="mt-6 font-display text-lg text-ink/70 italic">
          Kindly let us know you are joining us — your reply opens in WhatsApp.
        </p>

        <form
          onSubmit={onSubmit}
          noValidate
          className="paper-grain relative mt-8 rounded-t-[3rem] border border-gold/50 bg-parchment px-6 pt-10 pb-8 text-left shadow-[0_24px_50px_-40px_var(--color-ink)]"
        >
          <div className="pointer-events-none absolute inset-x-2.5 top-2.5 bottom-2.5 rounded-t-[2.6rem] border border-gold/25" />
          <label htmlFor="rsvp-name" className="relative block text-[0.6rem] tracking-[0.3em] text-ink/60 uppercase">
            Your name
          </label>
          <input
            id="rsvp-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Enter your name"
            autoComplete="name"
            aria-invalid={invalid}
            className={`${field} relative mt-2 ${invalid ? 'border-rose' : 'border-gold/40'}`}
          />
          {invalid && <p className="relative mt-1.5 text-xs text-rose">Please enter your name.</p>}

          <label htmlFor="rsvp-note" className="relative mt-5 block text-[0.6rem] tracking-[0.3em] text-ink/60 uppercase">
            Message <span className="tracking-normal normal-case">(optional)</span>
          </label>
          <textarea
            id="rsvp-note"
            rows={2}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Number of guests, or a wish for the couple"
            className={`${field} relative mt-2 resize-none border-gold/40`}
          />

          <button
            type="submit"
            className="group relative mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 text-[0.7rem] tracking-[0.24em] text-parchment uppercase transition-transform duration-200 active:scale-95"
          >
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            Send on WhatsApp
          </button>
        </form>
      </Reveal>
    </section>
  )
}
