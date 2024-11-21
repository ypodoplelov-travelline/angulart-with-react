import { CreditCard } from 'lucide-react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { HotelRepository } from '../../infrastructure/repositories/HotelRepository'

export const CheckoutPage: React.FC = () => {
  const { hotelId, roomId } = useParams()
  const navigate = useNavigate()
  const hotelRepository = new HotelRepository()

  // @ts-expect-error
  const hotel = await hotelRepository.getHotelById(hotelId ?? '')
  const room = hotel?.rooms.find((r) => r.id === roomId)

  if (!hotel || !room) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Room not found</h2>
          <button
            onClick={() => {
              navigate('/')
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Return to Hotels
          </button>
        </div>
      </div>
    )
  }

  const handlePayment = () => {
    alert('Payment processed successfully!')
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
          <div className="space-y-2 text-gray-600">
            <p>Hotel: {hotel.name}</p>
            <p>Room Type: {room.type}</p>
            <p>Price per night: ${room.price}</p>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Pay Now
        </button>
      </div>
    </div>
  )
}
