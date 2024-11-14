export type RoomType = 'Standard' | 'Deluxe' | 'Suite'

export type Hotel = {
  id: string
  name: string
  rating: number
  address: string
  image: string
  rooms: Room[]
}

export type Room = {
  id: string
  type: RoomType
  price: number
  available: boolean
}

export type BookingFilters = {
  checkIn: Date | null
  checkOut: Date | null
  location: string
  maxPrice: number | null
}
