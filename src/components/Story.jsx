import { invite } from '../data/invite'
import Reveal from './Reveal'

export default function Story() {
  return (
    <section className="relative bg-mist px-5 py-16">
      <Reveal className="text-center">
        <h2 className="font-display text-3xl tracking-[0.14em] text-royal uppercase">Our Story</h2>
        <div className="gold-rule mx-auto mt-4 w-24" />
      </Reveal>

      <div className="relative mx-auto mt-12 max-w-lg">
        <div className="absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent sm:left-1/2" />
        <div className="space-y-14">
          {invite.story.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="relative pl-16 sm:pl-0">
                <span className="absolute top-6 left-6 z-10 block size-2 -translate-x-1/2 rotate-45 bg-gold sm:left-1/2" />
                <div className={`sm:flex sm:items-center sm:gap-6 ${i % 2 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="sm:w-1/2">
                    <div className="overflow-hidden rounded-t-[3rem] border border-gold/40">
                      <img
                        src={s.image}
                        alt={s.title}
                        style={{ objectPosition: s.position }}
                        loading="lazy"
                        width="1000"
                        height="1200"
                        className="h-72 w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105 sm:h-80"
                      />
                    </div>
                  </div>
                  <div className={`mt-4 sm:mt-0 sm:w-1/2 ${i % 2 ? 'sm:text-right' : ''}`}>
                    <p className="text-[0.6rem] tracking-[0.35em] text-gold uppercase">{s.label}</p>
                    <h3 className="mt-2 font-display text-2xl text-royal">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.text}</p>
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
