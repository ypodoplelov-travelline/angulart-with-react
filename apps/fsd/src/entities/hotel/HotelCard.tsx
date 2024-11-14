import { Star } from 'lucide-react'
import React from 'react'

import { type Hotel, type Room } from '../../shared/types/hotel'

type HotelCardProps = {
  hotel: Hotel
  onBookRoom: (hotelId: string, roomId: string) => void
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onBookRoom }) => {
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

type RoomOptionProps = {
  room: Room
  onBook: () => void
}

const RoomOption: React.FC<RoomOptionProps> = ({ room, onBook }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h4 className="font-medium text-gray-900">{room.type}</h4>
        <p className="text-gray-600">${room.price} per night</p>
      </div>
      <button
        onClick={onBook}
        disabled={!room.available}
        className={`px-4 py-2 rounded-md ${
          room.available
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {room.available ? 'Book Now' : 'Not Available'}
      </button>
    </div>
  )
}
