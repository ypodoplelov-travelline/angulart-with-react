import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CheckoutPage } from './presentation/pages/CheckoutPage'
import { HotelListPage } from './presentation/pages/HotelListPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HotelListPage />} />
          <Route path="/checkout/:hotelId/:roomId" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
