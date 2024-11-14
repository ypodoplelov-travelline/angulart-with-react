import { type Hotel } from '../../core/domain/entities/Hotel'
import {
  type IHotelRepository,
  type SearchFilters,
} from '../../core/domain/repositories/IHotelRepository'

import { hotels as mockHotels } from './mockData'

export class HotelRepository implements IHotelRepository {
  async getAllHotels(): Promise<Hotel[]> {
    return mockHotels
  }

  async getHotelById(id: string): Promise<Hotel | undefined> {
    return mockHotels.find((hotel) => hotel.id === id)
  }

  async searchHotels(filters: SearchFilters): Promise<Hotel[]> {
    return mockHotels.filter((hotel) => {
      const matchesLocation = filters.location
        ? hotel.address.toLowerCase().includes(filters.location.toLowerCase())
        : true

      const matchesPrice = filters.maxPrice
        ? hotel.rooms.some((room) => room.price <= filters.maxPrice!)
        : true

      return matchesLocation && matchesPrice
    })
  }
}
