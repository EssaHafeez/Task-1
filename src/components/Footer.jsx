import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Essa — Hasnain Karimain Educational Academy</p>
      <nav className={styles.links} aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#cta">Contact</a>
      </nav>
    </footer>
  )
}
