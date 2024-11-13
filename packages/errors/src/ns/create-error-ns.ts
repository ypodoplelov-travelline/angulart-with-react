import { getMessageList } from './get-message-list'
import { isStackExist } from './guards'

import type { NsDomainError } from './ns-domain-error'
import type { THandlerParams } from './ns-types'

export function createErrorNs<
  NS extends string = string,
  T extends string = string,
>(ns: NS, fields: T[] | Record<T, string>) {
  return function <K extends T>(
    key: K,
    error?: THandlerParams | THandlerParams[],
  ): NsDomainError<NS, K> {
    const message = Array.isArray(fields) ? key : fields[key]
    return {
      ns,
      key,
      message: getMessageList(message, error),
      error,
      stack: isStackExist(error) ? undefined : new Error().stack,
    }
  }
}
