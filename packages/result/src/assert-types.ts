export type TypeEqualityGuard<A, B> = Exclude<A, B> | Exclude<B, A>

export function assertTypes<T extends never>(_?: T): T | undefined {
  return _
}

// assertTypes<
//   TypeEqualityGuard<(typeof statusEventsList)[number], StatusEventsValueObject>
// >()
