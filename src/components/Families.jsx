import { invite } from '../data/invite'
import Reveal from './Reveal'

export default function Families() {
  const { groom, bride } = invite.families
  return (
    <section className="relative px-5 py-16">
      <Reveal className="text-center">
        <h2 className="font-display text-3xl tracking-[0.14em] text-royal uppercase">With the Blessings of</h2>
        <div className="gold-rule mx-auto mt-4 w-24" />
      </Reveal>

      <div className="relative mx-auto mt-12 max-w-lg">
        <div className="absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:left-1/2" />
        <div className="space-y-14">
          {[groom, bride].map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <article className="relative pl-16 sm:pl-0">
                <span className="absolute top-6 left-6 z-10 block size-2 -translate-x-1/2 rotate-45 bg-gold sm:left-1/2" />
                <div className={`sm:flex sm:items-center sm:gap-6 ${i % 2 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="sm:w-1/2">
                    <div className="relative overflow-hidden rounded-t-[3rem] border border-gold/40 bg-royal px-6 pt-14 pb-8 text-center">
                      <div className="jaali absolute inset-0 opacity-15" />
                      <p className="relative text-[0.6rem] tracking-[0.35em] text-gold uppercase">{p.label}</p>
                      <p className="relative mt-3 font-display text-3xl text-parchment">{p.name}</p>
                    </div>
                  </div>
                  <div className={`mt-4 sm:mt-0 sm:w-1/2 ${i % 2 ? 'sm:text-right' : ''}`}>
                    <p className="text-sm leading-relaxed text-ink/75">{p.parents}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
