import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import CurrentlyLearning from './components/CurrentlyLearning'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <CurrentlyLearning />
      <Contact />
    </div>
  )
}

export default App
