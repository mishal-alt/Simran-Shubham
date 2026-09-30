import { invite } from '../data/invite'
import Reveal from './Reveal'

export default function Blessing() {
  const { blessing } = invite
  return (
    <section className="px-5 py-20">
      <Reveal className="mx-auto max-w-md text-center">
        <div className="gold-rule mx-auto w-20" />
        <p className="mt-8 font-display text-2xl leading-relaxed text-royal">{blessing.line}</p>
        <p className="mt-5 font-display text-lg leading-relaxed text-ink/75 italic">“{blessing.translation}”</p>
        <p className="mt-4 text-[0.6rem] tracking-[0.3em] text-gold uppercase">{blessing.source}</p>
        <div className="gold-rule mx-auto mt-8 w-20" />
      </Reveal>
    </section>
  )
}
