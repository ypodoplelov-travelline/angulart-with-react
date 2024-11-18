import { hotelAdapter } from '@arched-client/hotels/infra/hotel-adapter'
import { HotelStore } from '@arched-client/hotels/interface/hotel-store'
import { isErr } from '@repo/result'
import { Inject } from '@repo/service'

export async function handleLoadHotels() {
  const hotelStore = Inject(HotelStore)
  if (hotelStore.hotelState.isLoading) return
  hotelStore.hotelState.start()
  const res = await hotelAdapter.getAllHotels()
  if (!isErr(res)) {
  }
  hotelStore.hotelState.setResult(res)
  hotelStore.hotelState.finish()
}
