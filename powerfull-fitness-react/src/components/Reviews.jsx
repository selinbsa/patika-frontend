import { useEffect, useRef } from 'react'

const ITEMS = [
  { id: 1, img: '/assets/client1.jpg', quote: 'Amazing gym with great vibe!' },
  { id: 2, img: '/assets/client2.jpg', quote: 'Coaches are super friendly.' },
  { id: 3, img: '/assets/purchase1.jpg', quote: 'Facilities are top-notch.' },
  { id: 4, img: '/assets/purchase2.jpg', quote: 'I love the classes!' },
]

export default function Reviews() {
  const ref = useRef(null)
  const timer = useRef(null)

  const step = (dir=1) => {
    const car = ref.current
    if (!car) return
    const amount = 280 * dir
    const atEnd = car.scrollLeft + car.clientWidth >= car.scrollWidth - 5
    if (dir>0) {
      if (atEnd) car.scrollTo({ left: 0, behavior: 'smooth' })
      else car.scrollBy({ left: amount, behavior: 'smooth' })
    } else {
      if (car.scrollLeft <= 0) car.scrollTo({ left: car.scrollWidth, behavior: 'smooth' })
      else car.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  const start = () => {
    stop()
    timer.current = setInterval(() => step(1), 3000)
  }
  const stop = () => { if (timer.current) { clearInterval(timer.current); timer.current = null } }

  useEffect(() => {
    start()
    const car = ref.current
    if (!car) return
    const onEnter = () => stop()
    const onLeave = () => start()
    car.addEventListener('mouseenter', onEnter)
    car.addEventListener('mouseleave', onLeave)
    car.addEventListener('focusin', onEnter)
    car.addEventListener('focusout', onLeave)
    return () => {
      stop()
      car.removeEventListener('mouseenter', onEnter)
      car.removeEventListener('mouseleave', onLeave)
      car.removeEventListener('focusin', onEnter)
      car.removeEventListener('focusout', onLeave)
    }
  }, [])

  return (
    <section id="review" className="section">
      <div className="container">
        <header className="section-head">
          <h2>What Members Say</h2>
        </header>
        <div className="carousel-controls">
          <button className="ctrl" onClick={() => step(-1)} aria-label="Previous review">◀</button>
          <button className="ctrl" onClick={() => step(1)} aria-label="Next review">▶</button>
        </div>
        <div className="carousel" data-autoscroll ref={ref} tabIndex={0}>
          {ITEMS.map(it => (
            <figure className="review" key={it.id}>
              <img src={it.img} alt="" loading="lazy" width="240" height="240" />
              <blockquote>{it.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
