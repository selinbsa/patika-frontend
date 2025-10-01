import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Classes from './components/Classes.jsx'
import BmiCalculator from './components/BmiCalculator.jsx'
import Trainers from './components/Trainers.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Sticky header behavior (adds .scrolled)
  useEffect(() => {
    const header = document.querySelector('.site-header')
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) header?.classList.add('scrolled')
          else header?.classList.remove('scrolled')
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Classes />
        <BmiCalculator />
        <Trainers />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
