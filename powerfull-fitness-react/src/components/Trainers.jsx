import { useEffect } from 'react'

const TRAINERS = [
  { id: 1, name: 'Daniel Craig', role: 'Strength Coach', img: '/assets/trainer1.jpg' },
  { id: 2, name: 'Emma Stone', role: 'Yoga Instructor', img: '/assets/trainer2.jpg' },
  { id: 3, name: 'Michael B.', role: 'Cardio Specialist', img: '/assets/trainer3.jpg' },
]

export default function Trainers() {
  useEffect(() => {
    // Touch hover preview
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      const cards = document.querySelectorAll('.t-card')
      const on = (el) => el.classList.add('is-hover')
      const off = (el) => el.classList.remove('is-hover')
      cards.forEach(card => {
        const onStart = () => on(card)
        const onEnd = () => off(card)
        card.addEventListener('touchstart', onStart, { passive: true })
        card.addEventListener('touchend', onEnd)
        card.addEventListener('touchcancel', onEnd)
      })
    }
  }, [])

  return (
    <section id="trainers" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Our Best Trainers</h2>
          <p className="muted">Meet our team.</p>
        </header>
        <div className="t-grid">
          {TRAINERS.map(t => (
            <article className="t-card" key={t.id}>
              <img src={t.img} alt={t.name} loading="lazy" width="360" height="420" />
              <div className="t-meta">
                <h3>{t.name}</h3>
                <p className="muted">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
