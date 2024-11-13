import type { FullResult, ResultErr } from './types'

function checkField<T, E, V>(
  result?: FullResult<T, E, V>,
): result is ResultErr<E> {
  if (!result) return false
  return 'error' in result
}

export function isErr<T, E, V>(
  result?: FullResult<T, E, V> | FullResult<T, E, V>[],
): result is ResultErr<E> {
  if (!Array.isArray(result)) {
    return checkField<T, E, V>(result)
  }

  const findResult = result.find((item) => checkField(item))
  return !!findResult
}
