import React, { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing, ${email}!`)
    setEmail('')
  }

  return (
    <div className="app-container">
      <main className="main-content">
        <h1>Baabussalam Islamic World</h1>
        <p>Welcome to our website.</p>
      </main>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-col">
            <h2 className="brand-title">Baabussalam Islamic World</h2>
            <p>Promoting Islamic values, knowledge, and community.</p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Shop 37 ,Dick road ,Aleshinloye Ibadan.</p>
            <p>
              <a href="tel:+2348029990303" target="_blank" rel="noopener noreferrer">+234 802 999 0303</a>
            </p>
            <p>
              <a href="mailto:[EMAIL_ADDRESS]">[EMAIL_ADDRESS]</a>
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