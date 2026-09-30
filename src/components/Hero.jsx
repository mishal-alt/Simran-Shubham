import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { invite } from '../data/invite'
import { useGateOpened } from './Gate'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const artY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const { couple, invite: inv, event, venue } = invite
  const go = useGateOpened()

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-parchment">
      <motion.div style={{ y: artY }} className="absolute inset-x-0 -top-10 bottom-0">
        <img
          src="/assets/hero-arch.jpg"
          alt="Illustrated golden arch with a bride and groom surrounded by lotus flowers"
          width="1024"
          height="1536"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/25 via-transparent via-40% to-parchment" />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-80 bg-gradient-to-t from-parchment via-parchment/95 via-60% to-transparent" />

      <motion.div style={{ y: textY }} className="relative z-20 mt-auto w-full px-6 pt-24 pb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={go ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[0.7rem] tracking-[0.42em] text-ink/70 uppercase"
        >
          {inv.kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24, letterSpacing: '0.2em' }}
          animate={go ? { opacity: 1, y: 0, letterSpacing: '0.03em' } : false}
          transition={{ duration: 1.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-3 flex items-baseline justify-center gap-[0.18em] font-display text-[clamp(2rem,10.5vw,4rem)] leading-none font-light whitespace-nowrap"
        >
          <span className="bg-gradient-to-b from-royal via-royal-deep to-royal bg-clip-text text-transparent">
            {couple.brideShort}
          </span>
          <span className="font-script text-[1.25em] font-normal text-gold drop-shadow-[0_1px_1px_rgb(31_58_147/0.25)]">
            &amp;
          </span>
          <span className="bg-gradient-to-b from-royal via-royal-deep to-royal bg-clip-text text-transparent">
            {couple.groomShort}
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={go ? { opacity: 1, scaleX: 1 } : false}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="gold-rule mx-auto mt-6 w-52"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={go ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-sm text-ink/80"
        >
          {inv.line}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={go ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-3 font-display text-3xl tracking-[0.18em] text-gold"
        >
          {event.dateLabel}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={go ? { opacity: 1 } : false}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-2 text-[0.72rem] tracking-[0.28em] text-ink/70 uppercase"
        >
          {venue.name}
        </motion.p>
      </motion.div>

      <motion.div style={{ opacity: cueOpacity }} className="relative z-20 pb-6 text-center">
        <span className="text-[0.6rem] tracking-[0.3em] text-ink/60 uppercase">scroll</span>
        <motion.div
          animate={{ scaleY: [0.2, 1, 0.2] }}
          style={{ originY: 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mt-2 h-8 w-px bg-gold"
        />
      </motion.div>
    </section>
  )
}
