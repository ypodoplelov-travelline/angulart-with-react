import { getMessageList } from './get-message-list'
import { isStackExist } from './guards'

import type { NsDomainError } from './ns-domain-error'
import type { THandlerParams } from './ns-types'

export function createErrorNsFull<
  NS extends string = string,
  T extends string = string,
>(ns: NS, fields: T[] | Record<T, string>) {
  type ErrorKey = `${NS}.${T}`
  type ErrorKeys = { [P in T]: ErrorKey }

  return function <K extends T>(
    key: K,
    error?: THandlerParams | THandlerParams[],
  ): NsDomainError<NS, ErrorKeys[K]> {
    const usedKey: ErrorKeys[K] = `${ns}.${key}`
    const message = Array.isArray(fields) ? usedKey : fields[key]

    return {
      ns,
      key: usedKey,
      message: getMessageList(message, error),
      error,
      stack: isStackExist(error) ? undefined : new Error().stack,
    }
  }
}
