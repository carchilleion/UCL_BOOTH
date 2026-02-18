import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Portfolio</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#learning">Learning</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.hero}>
        <h1>Hi, I'm Carlo Vargas Mendoza</h1>
        <p className={styles.heroStatement}>I am a Software Engineer passionate about creating innovative solutions and improving lives through technology.</p>
      </div>
    </header>
  )
}

export default Header
