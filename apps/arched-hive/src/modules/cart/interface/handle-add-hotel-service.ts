import { CartStore } from './cart.store'

export function handleAddHotelService(hotelService) {
  const store = Inject(CartStore)

  if (validate(hotelService)) {
    hotify.showToast({
      type: 'error',
      title: 'wrong service',
    })
    return
  }

  store.addHotelService(hotelService)
}
