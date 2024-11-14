import { CheckoutPage } from '@arched-client/checkout-page/ui/checkout-page'
import { HotelsPage } from '@arched-client/hotel-page/ui/hotels-page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HotelsPage />} />
          <Route path="/checkout/:hotelId/:roomId" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
