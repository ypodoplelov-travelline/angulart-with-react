import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { type Hotel } from '../../core/domain/entities/Hotel'
import { type SearchFilters } from '../../core/domain/repositories/IHotelRepository'
import { SearchHotelsUseCase } from '../../core/usecases/SearchHotelsUseCase'
import { HotelRepository } from '../../infrastructure/repositories/HotelRepository'
import { FilterPanel } from '../components/FilterPanel'
import { HotelCard } from '../components/HotelCard'

export const HotelListPage: React.FC = () => {
  const navigate = useNavigate()
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [filters, setFilters] = useState<SearchFilters>({
    checkIn: null,
    checkOut: null,
    location: '',
    maxPrice: null,
  })

  const searchHotelsUseCase = new SearchHotelsUseCase(new HotelRepository())

  useEffect(() => {
    const fetchHotels = async () => {
      const results = await searchHotelsUseCase.execute(filters)
      setHotels(results)
    }
    fetchHotels()
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
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onBookRoom={handleBookRoom} />
        ))}
      </div>
    </div>
  )
}
