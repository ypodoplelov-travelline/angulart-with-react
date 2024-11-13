export type ResultOk<T> = { data: T }
export type ResultErr<E> = { error: E }
export type ResultInvalid<I> = { invalid: I }

export type FullResult<
  TData,
  TError = unknown,
  TInvalid extends unknown = undefined,
> = ResultOk<TData> | ResultErr<TError> | ResultInvalid<TInvalid>

export type Result<
  TData,
  TError = unknown,
  TInvalid extends unknown = undefined,
> = TInvalid extends undefined
  ? ResultOk<TData> | ResultErr<TError>
  : FullResult<TData, TError, TInvalid>

export type ExtractResultOk<TRes extends Result<unknown>> = Extract<
  TRes,
  ResultOk<unknown>
>['data']

export type ExtractResultErr<TRes extends Result<unknown>> = Extract<
  TRes,
  ResultErr<unknown>
>['error']

export type ExtractResultInvalid<TRes extends Result<unknown>> = Extract<
  TRes,
  ResultInvalid<unknown>
>['invalid']
