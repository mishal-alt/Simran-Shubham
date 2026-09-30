import { Instagram } from 'lucide-react'
import { invite } from '../data/invite'
import Reveal from './Reveal'

export default function Footer() {
  const { couple, footer } = invite
  return (
    <footer className="relative isolate overflow-hidden pt-24 pb-12 text-center">
      <img
        src="/assets/footer-floral.jpg"
        alt=""
        aria-hidden
        loading="lazy"
        width="1920"
        height="912"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-parchment/70" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-royal-deep to-transparent" />
      <Reveal className="px-6">
        <p className="font-display text-[clamp(1.5rem,7.5vw,1.875rem)] tracking-[0.12em] whitespace-nowrap text-royal uppercase">
          {couple.groomShort} <span className="text-[oklch(56%_0.11_80)]">&amp;</span> {couple.brideShort}
        </p>
        <div className="gold-rule mx-auto mt-5 w-24" />
        <p className="mt-6 text-sm text-ink/80">{footer.families}</p>
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
          <p className="font-display text-2xl font-semibold tracking-[0.18em] text-royal-deep">{couple.hashtag}</p>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </Reveal>

      <a
        href="https://www.instagram.com/zetron.tech?stkn=MWkybDJscm41em0zMg%3D%3D&utm_source=qr"
        target="_blank"
        rel="noreferrer"
        aria-label="Zetron Tech on Instagram"
        className="group mx-auto mt-14 flex w-fit items-center gap-2 text-[0.58rem] tracking-[0.3em] text-ink/55 uppercase transition-colors hover:text-royal"
      >
        <span className="h-px w-6 bg-gold/60" />
        <span>Crafted by</span>
        <Instagram className="size-3.5 text-gold transition-transform group-hover:scale-110" aria-hidden />
        <span className="font-medium tracking-[0.22em]">zetron.tech</span>
        <span className="h-px w-6 bg-gold/60" />
      </a>
    </footer>
  )
}
