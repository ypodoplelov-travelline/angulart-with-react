import { getInstances } from '@repo/service'
import { useMemo } from 'react'

import type { GetInstancesArgs, GetInstancesResult } from '@repo/service'

export function useInject<T>(
  ...args: GetInstancesArgs<T>
): GetInstancesResult<T> {
  return useMemo(() => {
    return getInstances<T>(...args)
  }, [])
}
