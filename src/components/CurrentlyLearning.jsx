import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { learningItems } from '../data/learning'
import styles from './CurrentlyLearning.module.css'

function CurrentlyLearning() {
  const containerRef = useScrollReveal();

  return (
    <section id="learning" className={styles.learning} ref={containerRef}>
      <div className="container">
        <h2 className="reveal">Currently Learning</h2>
        <div className={styles.learningGrid}>
          {learningItems.map((item, index) => (
            <div key={index} className={`${styles.learningCard} reveal`}>
              <h3>{item.skill}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlyLearning
