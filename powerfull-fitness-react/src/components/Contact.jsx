export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <h2>Contact</h2>
          <p className="muted">Send us a message. We usually reply within 24 hours.</p>
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="row">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required />
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required />
            </div>
            <div className="row">
              <label htmlFor="msg">Message</label>
              <textarea id="msg" rows="4" required></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
        <div className="contact-aside">
          <img src="/assets/purchase3.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}
