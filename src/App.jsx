import React from 'react'
import Navbar from './pages/navbar'
import Hero from './pages/Hero'
import About from './pages/About_us'
import Practice from './pages/practice_areas'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import DisclaimerPopup from './components/DisclaimerPopup'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <div className="main-container">
          <Navbar />
          <section id="home" className="section">
            <Hero />
          </section>
          <section id="about" className="section">
            <About />
          </section>
          <section id="practice-areas" className="section">
            <Practice />
          </section>
          <section id="contact" className="section">
            <Contact />
          </section>
          <Footer />
        </div>
      </main>
      <DisclaimerPopup />
    </div>
  )
}

export default App
