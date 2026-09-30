// One shared audio element so the gate (start) and the floating button (toggle) control the same track.
const audio = typeof Audio !== 'undefined' ? new Audio('/wedding-music.mp3') : null
if (audio) {
  audio.loop = true
  audio.volume = 0.6
  audio.preload = 'none'
}

export const music = {
  play: () => audio?.play().catch(() => {}), // may be blocked; the button lets the guest retry
  pause: () => audio?.pause(),
  toggle: () => (audio?.paused ? music.play() : music.pause()),
  isPlaying: () => !!audio && !audio.paused,
  subscribe(fn) {
    if (!audio) return () => {}
    audio.addEventListener('play', fn)
    audio.addEventListener('pause', fn)
    return () => {
      audio.removeEventListener('play', fn)
      audio.removeEventListener('pause', fn)
    }
  },
}
