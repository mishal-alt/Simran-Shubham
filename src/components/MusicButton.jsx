import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Music2 } from 'lucide-react'
import { music } from '../lib/music'
import { useGateOpened } from './Gate'

export default function MusicButton() {
  const opened = useGateOpened()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const sync = () => setPlaying(music.isPlaying())
    sync()
    return music.subscribe(sync)
  }, [])

  return (
    <AnimatePresence>
      {opened && (
        <motion.button
          type="button"
          onClick={music.toggle}
          aria-label={playing ? 'Turn music off' : 'Turn music on'}
          aria-pressed={playing}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileTap={{ scale: 0.92 }}
          className="fixed right-4 bottom-5 z-40 grid size-12 cursor-pointer place-items-center rounded-full border border-gold/80 bg-gradient-to-b from-royal to-royal-deep text-gold shadow-[0_10px_24px_-8px_var(--color-royal-deep)]"
        >
          {/* pulsing gold ripples while the music plays */}
          {playing &&
            [0, 1].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute inset-0 rounded-full border border-gold"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.75, opacity: 0 }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 1.1, ease: 'easeOut' }}
              />
            ))}
          <span aria-hidden className="pointer-events-none absolute inset-[3px] rounded-full border border-gold/30" />

          <motion.span
            animate={playing ? { rotate: [-10, 10, -10], y: [0, -1.5, 0] } : { rotate: 0, y: 0 }}
            transition={playing ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
            className="relative"
          >
            <Music2 className={`size-5 transition-opacity ${playing ? 'opacity-100' : 'opacity-60'}`} strokeWidth={1.8} />
          </motion.span>

          {/* slash across the note when muted */}
          <span
            aria-hidden
            className={`pointer-events-none absolute h-[1.5px] w-7 -rotate-45 rounded-full bg-gold transition-opacity ${playing ? 'opacity-0' : 'opacity-90'}`}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
