import type { ResultInvalid } from './types'

export function resultInvalid<T>(invalid: T): ResultInvalid<T> {
  return {
    invalid,
  }
}
