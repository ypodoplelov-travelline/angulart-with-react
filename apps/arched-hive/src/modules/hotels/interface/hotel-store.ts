import { FiltersStore } from '@arched-client/filters/interface/filters.store'
import { HotelEntity } from '@arched-client/hotels/core/hotel-entity'
import { DataState, Inject, Store } from '@repo/service'

@Store()
export class HotelStore {
  constructor(private readonly filtersStore = Inject(FiltersStore)) {}

  hotelState = new DataState<HotelEntity[]>({
    isLoading: false,
  })

  get filteredHotels() {
    const hotels = this.hotelState.data || []
    const filters = this.filtersStore.filters

    const res = hotels.filter((hotel) => {
      const matchesLocation = filters.location
        ? hotel.address.toLowerCase().includes(filters.location.toLowerCase())
        : true

      const matchesPrice = filters.maxPrice
        ? hotel.rooms.some((room) => room.price <= filters.maxPrice!)
        : true

      return matchesLocation && matchesPrice
    })
    return res
  }
}
