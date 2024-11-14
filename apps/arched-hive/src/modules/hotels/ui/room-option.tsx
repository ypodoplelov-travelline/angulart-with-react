import { type RoomEntity } from '@arched-client/hotels/core/hotel-entity'

type RoomOptionProps = {
  room: RoomEntity
  onBook: () => void
}

export function RoomOption({ room, onBook }: RoomOptionProps) {
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
