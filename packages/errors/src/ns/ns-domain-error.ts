export type NsDomainError<
  NS extends string = string,
  T extends string = string,
> = {
  ns: NS
  key: T
  message?: string
  error?: unknown
  stack?: string
}
