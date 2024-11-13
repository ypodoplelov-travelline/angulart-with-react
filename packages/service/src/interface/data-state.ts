import { isErr, isInvalid, isOk } from '@repo/result'
import { makeAutoObservable } from 'mobx'

import type { Result, ResultOk } from '@repo/result'

export class DataState<T, E = unknown, V = unknown> {
  data?: T = undefined
  error?: E = undefined
  invalid?: V = undefined

  isLoading: boolean

  constructor(args?: { data?: T; isLoading?: boolean; error?: E }) {
    this.data = args?.data
    this.isLoading = args?.isLoading ?? true
    this.error = args?.error

    makeAutoObservable(this)
  }

  get isDataLoaded(): boolean {
    if (this.isLoading) return false
    return !!this.data
  }

  get isError(): boolean {
    return !!this.error
  }

  get isInvalid(): boolean {
    return !!this.invalid
  }

  start(): void {
    this.isLoading = true
    this.error = undefined
    this.invalid = undefined
  }

  setSuccess(data: ResultOk<T>['data']): void {
    this.error = undefined
    this.invalid = undefined
    this.data = data
  }

  setResult(res: Result<T, E, V>): void {
    if (isErr(res)) {
      this.data = undefined
      this.error = res.error
      this.invalid = undefined
    }
    if (isOk(res)) {
      this.error = undefined
      this.invalid = undefined
      this.data = res.data
    }
    if (isInvalid(res)) {
      this.error = undefined
      this.invalid = res.invalid
      this.data = undefined
    }
  }

  finish(): void {
    this.isLoading = false
  }
}
