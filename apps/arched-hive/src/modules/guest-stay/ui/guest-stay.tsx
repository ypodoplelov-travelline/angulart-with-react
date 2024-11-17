import { type GuestStayValueObject } from '../core/guest-stay.value-object'

export function GuestStay({ guestStay }: { guestStay: GuestStayValueObject }) {
  return (
    <>
      <RoomStay roomStay={guestStay.roomStay} />
      {guestStay.guests.map((guest) => (
        <Guest guest={guest} />
      ))}
    </>
  )
}
