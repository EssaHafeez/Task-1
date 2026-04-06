import services from '../data/services'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <p className={styles.eyebrow}>What I do</p>
      <h2 className={styles.heading}>Services</h2>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.id} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <p className={styles.title}>{s.title}</p>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
