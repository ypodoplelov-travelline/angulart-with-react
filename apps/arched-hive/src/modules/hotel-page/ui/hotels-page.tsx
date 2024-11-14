import { FilterPanel } from '@arched-client/filters/ui/filter-panel'
import { handleLoadHotels } from '@arched-client/hotels/interface/handle-load-hotels'
import { useEffect } from 'react'

import { HotelsList } from './hotels-list'

export function HotelsPage() {
  useEffect(() => {
    handleLoadHotels()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Find Your Perfect Stay
      </h1>

      <div className="mb-8">
        <FilterPanel />
      </div>

      <HotelsList />
    </div>
  )
}
