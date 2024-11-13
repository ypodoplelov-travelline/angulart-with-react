import { makeAutoObservable } from 'mobx'

export class MetaState<T = unknown> {
  data?: T = undefined

  constructor() {
    makeAutoObservable(this)
  }

  get isDataExist(): boolean {
    return !!this.data
  }

  reset = (): void => {
    this.data = undefined
  }

  setData = (data?: T): void => {
    this.data = data
  }
}
