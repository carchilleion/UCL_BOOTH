import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

function About() {
  const containerRef = useScrollReveal();

  return (
    <section id="about" className={styles.about} ref={containerRef}>
      <div className="container">
        <h2 className="reveal">About Me</h2>
        <p className={`${styles.description} reveal`}>
          I'm a dedicated developer with a strong foundation in building web and mobile applications.
          I love tackling complex problems and learning new technologies to stay at the forefront of the industry.
        </p>
        <div className={styles.skills}>
          <h3 className="reveal">Skills</h3>
          <div className={`${styles.skillList} reveal`}>
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS Libraries</span>
            <span>Firebase</span>
            <span>Git & GitHub</span>
            <span>Flutter</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
