import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing, ${email}!`)
    setEmail('')
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app-container">

      {/* ── NAVBAR ── */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-inner">
          <span className="navbar-brand" onClick={() => scrollTo('hero')}>
            <span className="brand-crescent">☽</span> Baabussalam
          </span>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
            <li><a onClick={() => scrollTo('hero')}>Home</a></li>
            <li><a onClick={() => scrollTo('about')}>About</a></li>
            <li><a onClick={() => scrollTo('services')}>Services</a></li>
            <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
            <li><a className="nav-cta" onClick={() => scrollTo('contact')}>Get in Touch</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">In the Name of Allah, the Most Gracious</p>
          <h1 className="hero-title">Baabussalam<br /><span>Islamic World</span></h1>
          <p className="hero-subtitle">
            A gateway to Islamic knowledge, community, and spiritual growth.
            Serving the Ummah with sincerity and dedication.
          </p>
          <div className="hero-actions">
            <button className="btn btn--primary" onClick={() => scrollTo('about')}>Discover More</button>
            <button className="btn btn--outline" onClick={() => scrollTo('contact')}>Contact Us</button>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>↓</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section about-section">
        <div className="section-inner">
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">Rooted in Faith,<br />Built for Community</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Baabussalam Islamic World is a trusted center for Islamic education, spiritual guidance,
                and community services. Located in the heart of Ibadan, we have been serving Muslims and
                non-Muslims alike — promoting understanding, unity, and the timeless teachings of Islam.
              </p>
              <p>
                Our name, <em>Baabussalam</em> — "The Gate of Peace" — reflects our mission: to be an
                open door for those seeking knowledge, solace, and connection with their Creator.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years of Service</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Community Members</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Programs & Classes</span>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-icon">☽</div>
              <blockquote className="about-quote">
                "And whoever relies upon Allah — then He is sufficient for him. Indeed, Allah will accomplish His purpose."
                <cite>— Quran 65:3</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section services-section">
        <div className="section-inner">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {[
              { icon: '📖', title: 'Quran Education', desc: 'Tajweed classes, Hifz programs, and Quranic studies for all ages — from beginners to advanced.' },
              { icon: '🕌', title: 'Friday Jumuah', desc: 'Weekly Jumuah prayers and khutbah delivered by knowledgeable scholars of the Deen.' },
              { icon: '🤲', title: 'Islamic Counselling', desc: 'Spiritual and personal guidance rooted in the Quran and Sunnah for individuals and families.' },
              { icon: '📚', title: 'Islamic Library', desc: 'Access a curated collection of books, audio lectures, and resources on Islamic sciences.' },
              { icon: '👨‍👩‍👧', title: 'Youth Programs', desc: "Engaging programs to nurture the next generation's faith, character, and sense of purpose." },
              { icon: '🌙', title: 'Ramadan Programs', desc: 'Special Tarawih prayers, Iftar gatherings, Laylatul Qadr events, and charity initiatives.' },
            ].map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BANNER ── */}
      <section id="contact" className="section contact-section">
        <div className="contact-inner">
          <h2 className="contact-title">Come Visit Us</h2>
          <p className="contact-sub">We'd love to welcome you. Drop by, call, or send us a message.</p>
          <div className="contact-cards">
            <div className="contact-card">
              <span className="contact-card-icon">📍</span>
              <h4>Address</h4>
              <p>Shop 37, Dick Road, Aleshinloye, Ibadan.</p>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">📞</span>
              <h4>Phone</h4>
              <a href="tel:+2348029990303">+234 802 999 0303</a>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">✉️</span>
              <h4>Email</h4>
              <a href="mailto:info@baabussalam.org">info@baabussalam.org</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <p className="newsletter-label">Stay Updated</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-col">
            <h2 className="brand-title">Baabussalam Islamic World</h2>
            <p>Promoting Islamic values, knowledge, and community.</p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a onClick={() => scrollTo('hero')}>Home</a></li>
              <li><a onClick={() => scrollTo('about')}>About Us</a></li>
              <li><a onClick={() => scrollTo('services')}>Services</a></li>
              <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Shop 37, Dick Road, Aleshinloye, Ibadan.</p>
            <p>
              <a href="tel:+2348029990303" target="_blank" rel="noopener noreferrer">+234 802 999 0303</a>
            </p>
            <p>
              <a href="mailto:info@baabussalam.org">info@baabussalam.org</a>
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Baabussalam Islamic World. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App