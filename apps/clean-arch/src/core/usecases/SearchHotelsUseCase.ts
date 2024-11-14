import { type Hotel } from '../domain/entities/Hotel'
import {
  type IHotelRepository,
  type SearchFilters,
} from '../domain/repositories/IHotelRepository'

export class SearchHotelsUseCase {
  constructor(private hotelRepository: IHotelRepository) {}

  async execute(filters: SearchFilters): Promise<Hotel[]> {
    return this.hotelRepository.searchHotels(filters)
  }
}
