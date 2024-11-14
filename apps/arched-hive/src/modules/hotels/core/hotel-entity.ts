export type HotelEntity = {
  id: string
  name: string
  rating: number
  address: string
  image: string
  rooms: RoomEntity[]
}

export type RoomEntity = {
  id: string
  type: RoomTypeValueObject
  price: number
  available: boolean
}

export type RoomTypeValueObject = 'Standard' | 'Deluxe' | 'Suite'
