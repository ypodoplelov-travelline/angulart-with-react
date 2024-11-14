import { type BookingFilters } from '@arched-client/filters/core/filters.value-object'
import { Store } from '@repo/service'

@Store()
export class FiltersStore {
  filters: BookingFilters = {
    checkIn: null,
    checkOut: null,
    location: '',
    maxPrice: null,
  }

  setFilters(filters: BookingFilters) {
    this.filters = filters
  }
}
