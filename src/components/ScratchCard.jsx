import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { invite } from '../data/invite'
import Reveal from './Reveal'

const { event } = invite
const BRUSH = 26
const REVEAL_AT = 0.45 // share of foil cleared before the rest fades away

function paintFoil(canvas) {
  const dpr = window.devicePixelRatio || 1
  const { width, height } = canvas.getBoundingClientRect()
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  const g = ctx.createLinearGradient(0, 0, width, height)
  g.addColorStop(0, '#b98c3a')
  g.addColorStop(0.3, '#ecd18a')
  g.addColorStop(0.55, '#c9a04c')
  g.addColorStop(0.8, '#f2dfa2')
  g.addColorStop(1, '#b58432')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, width, height)

  // fine diamond lattice, like the jaali used elsewhere
  ctx.strokeStyle = 'rgba(255,255,255,0.28)'
  ctx.lineWidth = 0.8
  for (let x = -height; x < width + height; x += 18) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x + height, height)
    ctx.moveTo(x + height, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }

  ctx.fillStyle = '#6d4d12'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `600 ${Math.max(12, width * 0.05)}px Karla, sans-serif`
  ctx.fillText('SCRATCH TO REVEAL', width / 2, height / 2 - 10)
  ctx.font = `italic 400 ${Math.max(14, width * 0.06)}px "Cormorant Garamond", Georgia, serif`
  ctx.fillText('the date', width / 2, height / 2 + 16)
}

export default function ScratchCard() {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const last = useRef(null)
  const moves = useRef(0)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || revealed) return
    paintFoil(canvas)
    const ro = new ResizeObserver(() => paintFoil(canvas))
    ro.observe(canvas)
    // redraw once webfonts are ready so the foil text uses them
    document.fonts?.ready.then(() => paintFoil(canvas))
    return () => ro.disconnect()
  }, [revealed])

  const cleared = useCallback(() => {
    const c = canvasRef.current
    const { data } = c.getContext('2d').getImageData(0, 0, c.width, c.height)
    let clear = 0
    let total = 0
    for (let i = 3; i < data.length; i += 4 * 16) {
      total++
      if (data[i] === 0) clear++
    }
    return clear / total
  }, [])

  const scratch = (e) => {
    if (!drawing.current || revealed) return
    const c = canvasRef.current
    const r = c.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const ctx = c.getContext('2d')
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineCap = ctx.lineJoin = 'round'
    ctx.lineWidth = BRUSH
    ctx.beginPath()
    ctx.moveTo(last.current?.x ?? x, last.current?.y ?? y)
    ctx.lineTo(x, y)
    ctx.stroke()
    last.current = { x, y }
    if (++moves.current % 6 === 0 && cleared() > REVEAL_AT) setRevealed(true)
  }

  const start = (e) => {
    drawing.current = true
    last.current = null
    e.currentTarget.setPointerCapture?.(e.pointerId)
    scratch(e)
  }
  const end = () => {
    drawing.current = false
    last.current = null
    if (!revealed && canvasRef.current && cleared() > REVEAL_AT) setRevealed(true)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist to-mist-deep px-5 py-16">
      <Reveal className="mx-auto max-w-md text-center">
        <h2 className="font-display text-3xl tracking-[0.14em] text-royal uppercase">Save the Date</h2>
        <div className="gold-rule mx-auto mt-4 w-24" />
        <p className="mt-5 font-display text-lg text-ink/70 italic">Scratch the card to reveal our special day</p>

        <div className="relative mx-auto mt-8 h-56 w-full max-w-sm overflow-hidden rounded-t-[7rem] rounded-b-2xl border border-gold/70 bg-parchment shadow-[0_24px_50px_-30px_var(--color-royal-deep)]">
          {/* prize underneath */}
          <div className="paper-grain absolute inset-0 flex flex-col items-center justify-center px-6 pt-6 text-center">
            <p className="text-[0.6rem] tracking-[0.4em] text-ink/60 uppercase">The Engagement</p>
            <p className="mt-2 font-display text-4xl tracking-[0.12em] text-royal">{event.dateLabel}</p>
            <div className="gold-rule mt-3 w-28" />
            <p className="mt-3 font-display text-lg text-ink/75 italic">
              {event.dayLabel}, {event.timeLabel}
            </p>
          </div>

          <AnimatePresence>
            {!revealed && (
              <motion.canvas
                ref={canvasRef}
                key="foil"
                role="img"
                aria-label="Scratch card covering the engagement date"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                onPointerDown={start}
                onPointerMove={scratch}
                onPointerUp={end}
                onPointerCancel={end}
                className="absolute inset-0 h-full w-full cursor-crosshair touch-none"
              />
            )}
          </AnimatePresence>
          <span className="pointer-events-none absolute inset-2 rounded-t-[6.6rem] rounded-b-xl border border-gold/40" />
        </div>

        {!revealed && (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="mt-4 cursor-pointer text-[0.6rem] tracking-[0.3em] text-ink/50 uppercase underline-offset-4 hover:text-royal hover:underline"
          >
            or tap to reveal
          </button>
        )}
      </Reveal>
    </section>
  )
}
