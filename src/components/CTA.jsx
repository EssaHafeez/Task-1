import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <h2 className={styles.heading}>Ready to work together?</h2>
      <p className={styles.sub}>Let's turn your ideas into a living, breathing product on the web.</p>
      <a href="mailto:hello@devfolio.com" className={styles.btn}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="#c8f060" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        muhammadessahafeez@gmail.com
      </a>
    </section>
  )
}
