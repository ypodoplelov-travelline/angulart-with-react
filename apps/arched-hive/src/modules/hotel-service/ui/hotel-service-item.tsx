import { CartStore } from '../../cart/interface/cart.store'
import { handleAddHotelService } from '../../cart/interface/handle-add-hotel-service'

export function HotelServiceItem({ service }) {
  const { cartStore } = useInject({
    cartStore: CartStore,
  })

  if (!cartStore.isExist(service.id)) {
    return null
  }

  return (
    <div>
      service
      <button
        onClick={() => {
          handleAddHotelService(service)
        }}
      >
        Add
      </button>
    </div>
  )
}
