import { useState, useEffect, useRef, useCallback } from 'react'
import slides from '../data/slides'
import styles from './HeroSlider.module.css'

const INTERVAL = 5000

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="#0b0c10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(null)
  const startRef = useRef(null)
  const pausedRef = useRef(false)
  const accumulatedRef = useRef(0)

  const goTo = useCallback((idx) => {
    setCurrent(((idx % slides.length) + slides.length) % slides.length)
    accumulatedRef.current = 0
    setProgress(0)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Progress animation
  useEffect(() => {
    accumulatedRef.current = 0
    setProgress(0)
    startRef.current = performance.now()

    const tick = (now) => {
      if (pausedRef.current) {
        progressRef.current = requestAnimationFrame(tick)
        return
      }
      const elapsed = accumulatedRef.current + (now - startRef.current)
      const pct = Math.min((elapsed / INTERVAL) * 100, 100)
      setProgress(pct)
      if (pct >= 100) {
        setCurrent(c => (c + 1) % slides.length)
        accumulatedRef.current = 0
        startRef.current = performance.now()
        setProgress(0)
      }
      progressRef.current = requestAnimationFrame(tick)
    }
    progressRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(progressRef.current)
  }, [current])

  // Touch swipe
  const touchStartX = useRef(0)
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev()
  }

  // Keyboard
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const onMouseEnter = () => {
    accumulatedRef.current += performance.now() - startRef.current
    pausedRef.current = true
  }
  const onMouseLeave = () => {
    startRef.current = performance.now()
    pausedRef.current = false
  }

  const pad = (n) => String(n + 1).padStart(2, '0')

  return (
    <section
      className={styles.hero}
      aria-label="Featured projects and services"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
    >
      {/* Slide counter */}
      <div className={styles.counter} aria-live="polite">
        <span className={styles.counterCurrent}>{pad(current)}</span>
        <span className={styles.counterSep}> / </span>
        <span>{pad(slides.length - 1)}</span>
      </div>

      {/* Slides */}
      {slides.map((slide, i) => (
        <article
          key={slide.id}
          className={`${styles.slide} ${i === current ? styles.active : ''}`}
          aria-hidden={i !== current}
        >
          <div
            className={styles.slideBg}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className={styles.slideGradient} />
          <div className={styles.slideContent}>
            <span className={styles.slideTag}>{slide.tag}</span>
            <h1 className={styles.slideTitle}>
              {slide.title.split('\n').map((line, j) => (
                <span key={j}>{line}<br /></span>
              ))}
            </h1>
            <p className={styles.slideDesc}>{slide.desc}</p>
            <div className={styles.slideActions}>
              <a href={slide.cta.href} className={styles.btnPrimary}>
                {slide.cta.label} <ArrowIcon />
              </a>
              <a href={slide.secondary.href} className={styles.btnGhost}>
                {slide.secondary.label}
              </a>
            </div>
          </div>
        </article>
      ))}

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === current}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button className={styles.ctrlBtn} aria-label="Previous slide" onClick={prev}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className={styles.ctrlBtn} aria-label="Next slide" onClick={next}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Progress line */}
      <div className={styles.progressLine} style={{ width: `${progress}%` }} />
    </section>
  )
}
