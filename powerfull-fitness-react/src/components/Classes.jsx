import { useEffect, useMemo, useState } from 'react'

const CLASSES = [
  { id: 1, tag: 'yoga', title: 'Yoga Flow', img: '/assets/yoga.jpg' },
  { id: 2, tag: 'group', title: 'Group Training', img: '/assets/group.webp' },
  { id: 3, tag: 'solo', title: 'Solo Program', img: '/assets/solo.jpg' },
  { id: 4, tag: 'stretch', title: 'Stretch & Mobility', img: '/assets/stret.webp' },
]

export default function Classes() {
  const [active, setActive] = useState('yoga')
  const filtered = useMemo(() => CLASSES.filter(c => c.tag === active), [active])

  useEffect(() => {
    // emulate original fade-in by applying .is-show on mount/change
    const cards = document.querySelectorAll('.class-card')
    cards.forEach(card => {
      card.classList.remove('is-show')
      if (!card.hasAttribute('hidden')) requestAnimationFrame(() => card.classList.add('is-show'))
    })
  }, [active])

  return (
    <section id="classes" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Our Classes</h2>
          <p className="muted">Pick a category to preview.</p>
        </header>

        <div className="chips">
          {['yoga','group','solo','stretch'].map(tag => (
            <button
              key={tag}
              className={`chip ${active===tag ? 'is-active' : ''}`}
              aria-pressed={active===tag ? 'true' : 'false'}
              data-class={tag}
              onClick={() => setActive(tag)}
            >
              {tag[0].toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        <div className="class-grid" aria-live="polite">
          {CLASSES.map(c => (
            <article
              key={c.id}
              className="class-card"
              data-tag={c.tag}
              hidden={c.tag !== active}
            >
              <img src={c.img} alt="" />
              <div className="card-body">
                <h3>{c.title}</h3>
                <a className="btn btn-ghost" href="#contact">Join</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
