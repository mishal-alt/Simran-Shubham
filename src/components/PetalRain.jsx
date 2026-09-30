const petals = Array.from({ length: 8 }, (_, i) => ({
  left: (i * 13 + (i % 3) * 4) % 94,
  size: 10 + ((i * 5) % 12),
  dur: 22 + ((i * 5) % 16),
  delay: -(i * 3.6),
  drift: (i % 2 === 0 ? 1 : -1) * (30 + ((i * 11) % 70)),
  opacity: 0.14 + (i % 3) * 0.05,
}))

export default function PetalRain() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {petals.map((p, i) => (
        <img
          key={i}
          src="/assets/lotus.png"
          alt=""
          className="petal absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            '--dur': `${p.dur}s`,
            '--delay': `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
