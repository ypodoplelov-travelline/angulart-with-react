import { FiltersStore } from '@arched-client/filters/interface/filters.store'
import { handleChangeFilters } from '@arched-client/filters/interface/handle-change-filters'
import { useInject } from '@arched-client/service/interface/use-inject'
import { Calendar, DollarSign, MapPin } from 'lucide-react'
import { observer } from 'mobx-react-lite'

export const FilterPanel = observer(() => {
  const { filtersStore } = useInject({
    filtersStore: FiltersStore,
  })

  const filters = filtersStore.filters

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            Check-in
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={filters.checkIn?.toISOString().split('T')[0] || ''}
            onChange={(e) => {
              handleChangeFilters(
                'checkIn',
                e.target.value ? new Date(e.target.value) : null,
              )
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            Check-out
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={filters.checkOut?.toISOString().split('T')[0] || ''}
            onChange={(e) => {
              handleChangeFilters(
                'checkOut',
                e.target.value ? new Date(e.target.value) : null,
              )
            }}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 mr-2" />
            Location
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={filters.location}
            onChange={(e) => {
              handleChangeFilters('location', e.target.value)
            }}
            placeholder="Enter location"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <DollarSign className="w-4 h-4 mr-2" />
            Max Price
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={filters.maxPrice || ''}
            onChange={(e) => {
              handleChangeFilters(
                'maxPrice',
                e.target.value ? Number(e.target.value) : null,
              )
            }}
            placeholder="Enter max price"
          />
        </div>
      </div>
    </div>
  )
})
