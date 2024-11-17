import { OrderItem } from './order-item'

export function CartOrder() {
  return (
    <>
      {order.guestStays.map((guestStay) => {
        return <OrderItem title={guestStay.title} />
      })}
      {order.hotelService.map((guestStay) => {
        return <OrderItem title={guestStay.title} />
      })}
    </>
  )
}
