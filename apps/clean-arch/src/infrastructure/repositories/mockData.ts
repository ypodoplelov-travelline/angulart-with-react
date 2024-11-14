import { type Hotel } from '../../core/domain/entities/Hotel'

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    rating: 5,
    address: '123 Luxury Avenue, Downtown',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    rooms: [
      { id: '1-1', type: 'Standard', price: 200, available: true },
      { id: '1-2', type: 'Deluxe', price: 350, available: true },
      { id: '1-3', type: 'Suite', price: 500, available: true },
    ],
  },
  // ... other hotels remain the same as in the previous implementation
]
