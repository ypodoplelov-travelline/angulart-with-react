export async function getHotelDataAdapter() {
  const data = await fetch('')

  if (!data) {
    return resultErr({ code: 'empty' })
  }

  return resultOk(data)
}
