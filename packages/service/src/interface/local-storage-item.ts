import { makeObservable, observable } from 'mobx'

type Maybe<T> = T | undefined | null

type OptionsType<T> = {
  initialValue?: T
  prefix?: string
  onChange?: (value: Maybe<T>) => void
}

const PREFIX = '@repo:'

const cache: Record<string, boolean> = {}

export class LocalStorageItem<T> {
  value: Maybe<T>

  constructor(
    private readonly key: string,
    private readonly options?: OptionsType<T>,
  ) {
    if (cache[this.usedKey]) {
      throw new Error(
        `Cache key "${key}" is already in use for "LocalStorageItem"`,
      )
    }
    cache[this.usedKey] = true

    this.value = this.getValue()
    window.addEventListener('storage', (event) => {
      if (!event.key || event.key === this.usedKey) {
        this.value = this.getValue()
        options?.onChange && options?.onChange(this.value)
      }
    })

    makeObservable(this, {
      value: observable,
    })
  }

  get usedKey(): string {
    return `${this.options?.prefix || PREFIX}-${this.key}`
  }

  set(value: T): void {
    this.value = value
    try {
      const storedValue = JSON.stringify({ value })
      window.localStorage.setItem(this.usedKey, storedValue)
    } catch (e) {}
  }

  private getValue(): Maybe<T> {
    const storedValue = window.localStorage.getItem(this.usedKey)
    if (!storedValue) {
      return this.options?.initialValue
    }
    try {
      const result = JSON.parse(storedValue)
      if (!result) return this.options?.initialValue
      return result.value as unknown as Maybe<T>
    } catch (e) {}
  }

  remove(): void {
    this.value = undefined
    return window.localStorage.removeItem(this.usedKey)
  }
}
