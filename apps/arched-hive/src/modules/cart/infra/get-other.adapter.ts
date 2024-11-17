export async function getSomethingAdapter() {
  const hotels = await transport.get('/v1/hotels/filtered', {
    retry: 2,
    cache: 'network-only',
    api: 'core',
  })
}
