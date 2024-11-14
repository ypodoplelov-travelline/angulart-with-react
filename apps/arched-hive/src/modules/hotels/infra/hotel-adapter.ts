import { type BookingFilters } from '@arched-client/filters/core/filters.value-object'
import { type HotelEntity } from '@arched-client/hotels/core/hotel-entity'
import { type Result, resultOk } from '@repo/result'

import { hotels as mockHotels } from './mockData'

class HotelAdapter {
  async getAllHotels(): Promise<Result<HotelEntity[]>> {
    return resultOk(mockHotels)
  }

  async getHotelById(id: string): Promise<Result<HotelEntity | undefined>> {
    return resultOk(mockHotels.find((hotel) => hotel.id === id))
  }

  async searchHotels(filters: BookingFilters): Promise<Result<HotelEntity[]>> {
    return resultOk(
      mockHotels.filter((hotel) => {
        const matchesLocation = filters.location
          ? hotel.address.toLowerCase().includes(filters.location.toLowerCase())
          : true

        const matchesPrice = filters.maxPrice
          ? hotel.rooms.some((room) => room.price <= filters.maxPrice!)
          : true

        return matchesLocation && matchesPrice
      }),
    )
  }
}

export const hotelAdapter = new HotelAdapter()
