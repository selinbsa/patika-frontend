import React, { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const [activeId, setActiveId] = useState('home')

  // Close menu on link click & smooth-scroll with offset for sticky header
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (target) {
        e.preventDefault()
        const header = document.querySelector('.site-header')
        const top = target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 0)
        window.scrollTo({ top, behavior: 'smooth' })
      }
      if (open) setOpen(false)
    }
    const nav = navRef.current
    nav?.addEventListener('click', onClick)
    return () => nav?.removeEventListener('click', onClick)
  }, [open])

  // Escape to close & body lock
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    document.body.classList.toggle('body-locked', open)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('body-locked')
    }
  }, [open])

  // ScrollSpy: highlight nav item of visible section
  useEffect(() => {
    const ids = ['home','classes','trainers','review','contact']
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }, { rootMargin: '-50% 0px -45% 0px', threshold: 0.01 })
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#home">
          <img src="/assets/logo.png" alt="Powerfull Logo" className="logo" loading="lazy" width="64" height="64" />
        </a>

        <nav
          ref={navRef}
          className={`nav-links ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {['home','classes','trainers','review','contact'].map(id => (
            <a key={id} href={`#${id}`} className={activeId===id ? 'is-active' : ''}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">Join Us</a>
        </nav>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
