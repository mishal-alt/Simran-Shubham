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
      <div aria-hidden className="absolute inset-0 -z-10 bg-parchment/55" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-royal-deep to-transparent" />
      <Reveal className="px-6">
        <p className="font-display text-3xl tracking-[0.16em] text-royal uppercase">
          {couple.groomShort} <span className="text-gold">&amp;</span> {couple.brideShort}
        </p>
        <div className="gold-rule mx-auto mt-5 w-24" />
        <p className="mt-6 text-sm text-ink/80">{footer.families}</p>
        <p className="mt-2 font-display text-lg tracking-[0.12em] text-gold">{couple.hashtag}</p>
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
