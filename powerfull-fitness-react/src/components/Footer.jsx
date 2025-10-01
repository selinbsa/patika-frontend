export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-top">
          <a className="brand" href="#home">
            <img src="/assets/logo.png" alt="" className="logo" />
            Powerfull
          </a>
          <p>© {new Date().getFullYear()} Powerfull Gym. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#trainers">Trainers</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#review">Reviews</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
