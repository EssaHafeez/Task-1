import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <a href="#" className={styles.logo}>
        Essa<span>.</span>Portfolio
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#cta" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      <a href="#cta" className={styles.cta}>Hire me</a>

      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
