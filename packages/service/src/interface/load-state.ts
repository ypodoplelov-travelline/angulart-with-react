import { isErr, isInvalid } from '@repo/result'
import { makeAutoObservable } from 'mobx'

import type { Result } from '@repo/result'

export class LoadState<E = unknown, V = unknown> {
  error?: E = undefined
  invalid?: V = undefined

  isLoading: boolean

  constructor(args?: { isLoading?: boolean; error?: E }) {
    this.isLoading = args?.isLoading ?? false
    this.error = args?.error
    this.invalid = undefined

    makeAutoObservable(this)
  }

  reset(): void {
    this.isLoading = false
    this.error = undefined
    this.invalid = undefined
  }

  start(): void {
    this.isLoading = true
    this.error = undefined
    this.invalid = undefined
  }

  finish(res?: Result<any, E, V>): void {
    if (!res) {
      this.reset()
      return
    }
    const isError = isErr(res)
    if (isError) {
      this.error = res.error
      this.invalid = undefined
    }
    if (isInvalid(res)) {
      this.error = undefined
      this.invalid = res.invalid
    }
    this.isLoading = false
  }
}
