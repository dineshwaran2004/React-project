import { useState } from 'react'
import './App.css'

import Home from './CarConnect/Home'
import Licensed from './CarConnect/Licensed'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/licensed" element={<Licensed />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
