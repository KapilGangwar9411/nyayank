import React from 'react'
import Home from './pages/Home'
import DisclaimerPopup from './components/DisclaimerPopup'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <Home />
      </main>
      <DisclaimerPopup />
    </div>
  )
}

export default App
