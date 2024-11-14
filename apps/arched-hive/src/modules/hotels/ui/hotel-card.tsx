import { type HotelEntity } from '@arched-client/hotels/core/hotel-entity'
import { Star } from 'lucide-react'

import { RoomOption } from './room-option'

type HotelCardProps = {
  hotel: HotelEntity
  onBookRoom: (hotelId: string, roomId: string) => void
}

export function HotelCard({ hotel, onBookRoom }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {hotel.name}
            </h3>
            <p className="text-gray-600 text-sm">{hotel.address}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700">{hotel.rating}</span>
          </div>
        </div>

        <div className="space-y-4">
          {hotel.rooms.map((room) => (
            <RoomOption
              key={room.id}
              room={room}
              onBook={() => {
                onBookRoom(hotel.id, room.id)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
