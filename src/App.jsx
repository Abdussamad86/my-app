import React, { useState, useEffect } from 'react'
import './App.css'

const PRODUCTS = [
  {
    icon: '🧕',
    category: 'Islamic Fashion',
    desc: 'Elegant and modest clothing for the modern Muslim woman.',
    items: ['Malaysian Hijabs', 'Abayas', 'Jalabiyas'],
  },
  {
    icon: '🕯️',
    category: 'Fragrances & Incense',
    desc: 'Fill your home and heart with beautiful, uplifting scents.',
    items: ['Incense Sticks', 'Incense Burners', 'Premium Blends'],
  },
  {
    icon: '✨',
    category: 'Cosmetics & Personal Care',
    desc: 'Quality cosmetics and personal care products you can trust.',
    items: ['Cosmetics', 'Skincare', 'Personal Care Products'],
  },
  {
    icon: '🍯',
    category: 'Natural Products',
    desc: 'Pure, natural honey — nature\'s finest gift for health and wellness.',
    items: ['Natural Honey', 'Related Natural Products'],
  },
]

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
    alert(`Thank you! We'll keep you updated, ${email}.`)
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
            <li><a onClick={() => scrollTo('products')}>Products</a></li>
            <li><a onClick={() => scrollTo('about')}>About</a></li>
            <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
            <li>
              <a
                className="nav-cta"
                href="https://wa.me/2348029990303"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Islamic Lifestyle • Modest Fashion • Fragrances • Natural Products</p>
          <h1 className="hero-title">Your Destination for<br /><span>Islamic Living</span></h1>
          <p className="hero-subtitle">
            Discover quality modest fashion, fragrances, cosmetics, and natural products —
            curated with care for the Muslim lifestyle.
          </p>
          <div className="hero-actions">
            <button className="btn btn--primary" onClick={() => scrollTo('products')}>Browse Products</button>
            <a
              className="btn btn--whatsapp"
              href="https://wa.me/2348029990303"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-scroll-hint"><span>↓</span></div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="section products-section">
        <div className="section-inner">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Product Range</h2>
          <div className="products-grid">
            {PRODUCTS.map((p) => (
              <div className="product-card" key={p.category}>
                <div className="product-icon">{p.icon}</div>
                <h3 className="product-title">{p.category}</h3>
                <p className="product-desc">{p.desc}</p>
                <ul className="product-items">
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="product-enquire"
                  href={`https://wa.me/2348029990303?text=Hi! I'm interested in your ${p.category}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section about-section">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-icon">☽</div>
              <h3 className="about-card-heading">Our Promise</h3>
              <p className="about-card-text">
                "Quality Islamic lifestyle products, delivered with care and convenience."
              </p>
            </div>
            <div className="about-text">
              <div className="section-label">About Us</div>
              <h2 className="section-title">Who We Are</h2>
              <p>
                Baabussalam Islamic World is an Islamic lifestyle and retail business offering a
                carefully selected range of products — from modest fashion and fragrances to
                cosmetics, natural honey, and more.
              </p>
              <p>
                Our aim is to make quality Islamic lifestyle products accessible to every customer
                through convenient shopping, reliable service, and a warm, welcoming experience.
              </p>
              <p>
                Whether you're looking for the perfect hijab, a beautiful fragrance, or pure natural
                honey, Baabussalam Islamic World is your trusted destination.
              </p>
              <a
                className="btn btn--primary about-cta"
                href="https://wa.me/2348029990303?text=Hi! I'd like to know more about your products."
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP BANNER ── */}
      <section className="whatsapp-banner">
        <div className="whatsapp-banner-inner">
          <div className="whatsapp-banner-text">
            <h2>Ready to Order?</h2>
            <p>Browse our catalogue, ask questions, and place your order easily via WhatsApp.</p>
          </div>
          <div className="whatsapp-banner-actions">
            <a
              className="btn btn--whatsapp"
              href="https://wa.me/2348029990303"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 +234 802 999 0303
            </a>
            <a
              className="btn btn--whatsapp"
              href="https://wa.me/2349075804375"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 +234 907 580 4375
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section contact-section">
        <div className="contact-inner">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-sub">Reach out via WhatsApp or phone to enquire about products and place your order.</p>
          <div className="contact-cards">
            <div className="contact-card">
              <span className="contact-card-icon">📞</span>
              <h4>Phone / WhatsApp</h4>
              <a href="https://wa.me/2348029990303" target="_blank" rel="noopener noreferrer">+234 802 999 0303</a>
              <a href="https://wa.me/2349075804375" target="_blank" rel="noopener noreferrer">+234 907 580 4375</a>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">🛍️</span>
              <h4>How to Order</h4>
              <p>Browse our products, message us on WhatsApp, and we'll guide you through checkout and payment.</p>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">⏰</span>
              <h4>Response Time</h4>
              <p>We aim to respond to all enquiries promptly. Don't hesitate to reach out!</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <p className="newsletter-label">Stay Updated</p>
            <p className="newsletter-sub">Subscribe to hear about new arrivals and special offers.</p>
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
            <p>Islamic Lifestyle • Modest Fashion • Fragrances • Natural Products</p>
          </div>

          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li><a onClick={() => scrollTo('products')}>Islamic Fashion</a></li>
              <li><a onClick={() => scrollTo('products')}>Fragrances & Incense</a></li>
              <li><a onClick={() => scrollTo('products')}>Cosmetics & Personal Care</a></li>
              <li><a onClick={() => scrollTo('products')}>Natural Products</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>
              <a href="https://wa.me/2348029990303" target="_blank" rel="noopener noreferrer">+234 802 999 0303</a>
            </p>
            <p>
              <a href="https://wa.me/2349075804375" target="_blank" rel="noopener noreferrer">+234 907 580 4375</a>
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