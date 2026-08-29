import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from '../icons'
import styles from './EventsCarousel.module.css'
import { latestEvents } from '../../../data/latestEvents'

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    // Only advance if there are more cards to the right
    // We stop before the end depending on how many we want to show, 
    // but a circular one might be better. Let's make it circular for now.
    setCurrentIndex((prev) => (prev + 1) % latestEvents.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + latestEvents.length) % latestEvents.length)
  }

  return (
    <section className={styles.eventsSection}>
      <div className={styles.backgroundLeftGradient}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>SIGUIENTES EVENTOS</h2>
          </div>
          <div className={styles.headerRight}>
            <button className={styles.allEventsBtn}>TODOS LOS EVENTOS</button>
            <div className={styles.navButtons}>
              <button className={styles.navBtn} onClick={handlePrev} aria-label="Evento anterior">
                <ChevronLeft className={styles.navIcon} />
              </button>
              <button className={styles.navBtn} onClick={handleNext} aria-label="Evento siguiente">
                <ChevronRight className={styles.navIcon} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--gap))))`
            }}
          >
            {latestEvents.map((event, index) => {
              const isPrincipal = index === currentIndex
              return (
                <div
                  key={event.id}
                  className={`${styles.card} ${isPrincipal ? styles.principalCard : ''}`}
                >
                  <div className={styles.cardImageWrapper}>
                    <img src={event.image} alt={event.title} className={styles.cardImage} />
                    <div className={styles.pill}>{event.category}</div>
                    <h3 className={styles.cardTitle}>{event.title}</h3>
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.dateInfo}>
                      <span className={styles.dateDays}>{event.days}</span>
                      <div className={styles.dateMonthYear}>
                        <span className={styles.dateMonth}>{event.month}</span>
                        <span className={styles.dateYear}>{event.year}</span>
                      </div>
                    </div>
                    <button className={styles.footerBtn} aria-label={`Ver ${event.title}`}>
                      <ArrowRight className={styles.footerIcon} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
