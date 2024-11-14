import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Checkout } from './pages/Checkout'
import { HotelList } from './pages/HotelList'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/checkout/:hotelId/:roomId" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
