import { Calendar, DollarSign, MapPin } from 'lucide-react'
import React from 'react'

import { type BookingFilters } from '../../shared/types/hotel'

type FilterPanelProps = {
  filters: BookingFilters
  onFilterChange: (filters: BookingFilters) => void
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
}) => {
  const handleInputChange = (key: keyof BookingFilters, value: any) => {
    onFilterChange({ ...filters, [key]: value })
  }

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
              handleInputChange(
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
              handleInputChange(
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
              handleInputChange('location', e.target.value)
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
              handleInputChange(
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
}
