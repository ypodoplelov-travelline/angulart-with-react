import type { FullResult, ResultOk } from './types'

function checkField<T, E, V = unknown>(
  result?: FullResult<T, E, V>,
): result is ResultOk<T> {
  if (!result) return false
  return 'data' in result
}

export function isOk<T, E, V>(
  result?: FullResult<T, E, V> | FullResult<T, E, V>[],
): result is ResultOk<T> {
  if (!Array.isArray(result)) {
    return checkField<T, E, V>(result)
  }

  const findResult = result.find((item) => checkField(item))
  return !!findResult
}
