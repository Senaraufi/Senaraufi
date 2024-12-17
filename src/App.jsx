import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
