export class CartStore {
  order: CartOrder

  constructor(private readonly filters = Inject(FiltersStore)) {}

  addHotelService(hotelService) {
    this.order.hotelServices.push(hotelService)
  }

  isExist(id) {
    return order.service.includes(service.id)
  }

  get computedValue() {
    return this.order.service.filter((param) => {
      this.filters.myParam.value === param
    })
  }

  orderToDto() {}
}
