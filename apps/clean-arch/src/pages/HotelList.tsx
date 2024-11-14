import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { HotelCard } from '../entities/hotel/HotelCard'
import { FilterPanel } from '../features/filters/FilterPanel'
import { hotels } from '../shared/data/hotels'
import { type BookingFilters } from '../shared/types/hotel'

export const HotelList: React.FC = () => {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<BookingFilters>({
    checkIn: null,
    checkOut: null,
    location: '',
    maxPrice: null,
  })

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchesLocation = filters.location
        ? hotel.address.toLowerCase().includes(filters.location.toLowerCase())
        : true

      const matchesPrice = filters.maxPrice
        ? hotel.rooms.some((room) => room.price <= filters.maxPrice!)
        : true

      return matchesLocation && matchesPrice
    })
  }, [filters])

  const handleBookRoom = (hotelId: string, roomId: string) => {
    navigate(`/checkout/${hotelId}/${roomId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Find Your Perfect Stay
      </h1>

      <div className="mb-8">
        <FilterPanel filters={filters} onFilterChange={setFilters} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onBookRoom={handleBookRoom} />
        ))}
      </div>
    </div>
  )
}
