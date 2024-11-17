import { CheckoutPage } from '@arched-client/page-checkout/ui/checkout-page'
import { HotelsPage } from '@arched-client/page-create-booking/ui/hotels-page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '@repo/ui-kit/ui-kit.base.css'
import '../../../style/globals.css'

export function App() {
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
