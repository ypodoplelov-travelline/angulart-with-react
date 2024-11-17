export async function getSomethingAdapter() {
  const hotels = await transportSrv1.get('/v1/hotels/list', {
    retry: 3,
  })
}
