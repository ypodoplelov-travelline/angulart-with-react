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

export type RoomType = 'Standard' | 'Deluxe' | 'Suite'
