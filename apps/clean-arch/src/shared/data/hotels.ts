import { type Hotel } from '../types/hotel'

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
  {
    id: '2',
    name: 'Seaside Resort',
    rating: 5,
    address: '456 Beach Road, Coastline',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
    rooms: [
      { id: '2-1', type: 'Standard', price: 180, available: true },
      { id: '2-2', type: 'Deluxe', price: 320, available: true },
      { id: '2-3', type: 'Suite', price: 450, available: true },
    ],
  },
  {
    id: '3',
    name: 'Mountain View Lodge',
    rating: 4,
    address: '789 Highland Drive, Mountains',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    rooms: [
      { id: '3-1', type: 'Standard', price: 150, available: true },
      { id: '3-2', type: 'Deluxe', price: 280, available: true },
      { id: '3-3', type: 'Suite', price: 400, available: true },
    ],
  },
  {
    id: '4',
    name: 'City Center Hotel',
    rating: 4,
    address: '321 Urban Street, Metropolis',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
    rooms: [
      { id: '4-1', type: 'Standard', price: 170, available: true },
      { id: '4-2', type: 'Deluxe', price: 300, available: true },
      { id: '4-3', type: 'Suite', price: 420, available: true },
    ],
  },
  {
    id: '5',
    name: 'Historic Boutique Hotel',
    rating: 5,
    address: '555 Heritage Lane, Old Town',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80',
    rooms: [
      { id: '5-1', type: 'Standard', price: 190, available: true },
      { id: '5-2', type: 'Deluxe', price: 340, available: true },
      { id: '5-3', type: 'Suite', price: 480, available: true },
    ],
  },
]
