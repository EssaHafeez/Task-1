import styles from './About.module.css'

const stats = [
  { num: '12+', label: 'Projects completed' },
  { num: '3',   label: 'Years learning' },
  { num: '100%', label: 'Passion driven' },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="#0b0c10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>About</p>
        <h2 className={styles.heading}>Crafting digital<br />experiences that matter</h2>
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <p className={styles.statNum}>{s.num}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
        <a href="#cta" className={styles.btn}>
          Get in touch <ArrowIcon />
        </a>
      </div>

      <div className={styles.right}>
        <p className={styles.text}>
          I'm a web development intern at{' '}
          <strong>Hasnain Karimain Educational Academy</strong>, building
          real-world projects that sharpen my skills in HTML, CSS, JavaScript,
          and modern frameworks.
        </p>
        <p className={styles.text} style={{ marginTop: '1rem' }}>
          I care deeply about clean code, thoughtful UX, and websites that are
          fast, accessible, and genuinely useful. Every project is an
          opportunity to learn something new and deliver something remarkable.
        </p>
      </div>
    </section>
  )
}
