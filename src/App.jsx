import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './Pages/Menu'
import Laporan from './Pages/Laporan'
import Pembayaran from './Pages/Pembayaran'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/laporan' element={<Laporan/>} />
        <Route path='/pembayaran' element={<Pembayaran/>} />
      </Routes>
    </Router>
  )
}

export default App
