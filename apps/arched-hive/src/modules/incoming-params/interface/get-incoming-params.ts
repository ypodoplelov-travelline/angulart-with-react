export function getIncomingParams() {
  return {
    hotelId: window.location.search.substring(1),
  }
}
