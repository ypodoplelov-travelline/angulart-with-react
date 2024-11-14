import { type Hotel } from '../entities/Hotel'

export type IHotelRepository = {
  getAllHotels: () => Promise<Hotel[]>
  getHotelById: (id: string) => Promise<Hotel | undefined>
  searchHotels: (filters: SearchFilters) => Promise<Hotel[]>
}

export type SearchFilters = {
  checkIn: Date | null
  checkOut: Date | null
  location: string
  maxPrice: number | null
}
