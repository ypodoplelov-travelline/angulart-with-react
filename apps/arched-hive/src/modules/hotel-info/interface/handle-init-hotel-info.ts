import { getIncomingParams } from '../../incoming-params/interface/get-incoming-params'
import { getHotelDataAdapter } from '../infra/get-hotel-data.adapter'

export async function handleInitHotelInfo() {
  const params = getIncomingParams()

  const data = await getHotelDataAdapter({
    hotelId: params.hotelId,
  })
}
