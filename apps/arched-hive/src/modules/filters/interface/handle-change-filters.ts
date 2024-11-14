import { Inject } from '@repo/service'

import { FiltersStore } from './filters.store'

import type { BookingFilters } from '@arched-client/filters/core/filters.value-object'

export function handleChangeFilters(key: keyof BookingFilters, value: any) {
  const store = Inject(FiltersStore)
  store.setFilters({ ...store.filters, [key]: value })
}
