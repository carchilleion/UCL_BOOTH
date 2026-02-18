import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

function Projects() {
  const containerRef = useScrollReveal();

  return (
    <section id="projects" className={styles.projects} ref={containerRef}>
      <div className="container">
        <h2 className="reveal">My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectCard} reveal`}>
              <div className={`${styles.category} ${styles[project.category.toLowerCase().replace(/\s+/g, '').replace(/'/g, '')]}`}>
                {project.category}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.split(',').map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech.trim()}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
