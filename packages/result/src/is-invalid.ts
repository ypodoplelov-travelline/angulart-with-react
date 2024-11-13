import type { FullResult, ResultInvalid } from './types'

function checkField<T, E, I>(
  result?: FullResult<T, E, I>,
): result is ResultInvalid<I> {
  if (!result) return false
  return 'invalid' in result
}

export function isInvalid<T, E, I>(
  result?: FullResult<T, E, I> | FullResult<T, E, I>[],
): result is ResultInvalid<I> {
  if (!Array.isArray(result)) {
    return checkField<T, E, I>(result)
  }

  const findResult = result.find((item) => checkField(item))
  return !!findResult
}
