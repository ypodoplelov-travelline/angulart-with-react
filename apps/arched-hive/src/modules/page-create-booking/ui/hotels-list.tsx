import { HotelStore } from '@arched-client/hotels/interface/hotel-store'
import { HotelCard } from '@arched-client/hotels/ui/hotel-card'
import { useInject } from '@arched-client/service/interface/use-inject'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export const HotelsList = observer(() => {
  const navigate = useNavigate()
  const { hotelStore } = useInject({
    hotelStore: HotelStore,
  })

  const filteredHotels = hotelStore.filteredHotels

  const handleBookRoom = (hotelId: string, roomId: string) => {
    navigate(`/checkout/${hotelId}/${roomId}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} onBookRoom={handleBookRoom} />
      ))}
    </div>
  )
})
