export default function Hero() {
  return (
    <section id="home" className="hero" role="banner">
      <div className="hero-media" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Level up your fitness</div>
          <h1>Build your <span>Powerfull</span> body</h1>
          <p className="muted">Join our community with world-class trainers and flexible classes.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#classes">Explore Classes</a>
            <a className="btn btn-ghost" href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="hero-card">
          <img src="/assets/hero-man.jpg" alt="Hero" loading="lazy" width="520" height="600" />
        </div>
      </div>
    </section>
  )
}
