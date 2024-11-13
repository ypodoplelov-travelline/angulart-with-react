import { describe, expect, it } from '@repo/unit-test'

import { createErrorNs } from './create-error-ns'
import { createErrorNsFull } from './create-error-ns-full'

describe('error-service', () => {
  const myErrorNs = createErrorNs('MyErrorClasses', [
    'Test',
    'Second',
    'Third',
    'Four',
  ])

  it('should create error with origin error', () => {
    const originError = new Error('origin')

    const instance = myErrorNs('Test', originError)

    expect(instance.message).toBe('Test: origin')
    expect(instance.error).toBe(originError)
  })

  it('should create error without any error', () => {
    const instance = myErrorNs('Test')

    expect(instance).toEqual(
      expect.objectContaining({
        key: 'Test',
        error: undefined,
        message: 'Test',
        ns: 'MyErrorClasses',
      }),
    )
  })

  it('should create error with full NS', () => {
    const myErrorNs = createErrorNsFull('MyErrorClasses', [
      'Test',
      'Second',
      'Third',
      'Four',
    ])

    const instance = myErrorNs('Test')

    expect(instance).toEqual(
      expect.objectContaining({
        key: 'MyErrorClasses.Test',
        error: undefined,
        message: 'MyErrorClasses.Test',
        ns: 'MyErrorClasses',
      }),
    )
  })

  it('should create errors with fill but for records', () => {
    const myErrorNs = createErrorNsFull('MyErrorClasses', {
      Test: 'this is test message',
      Second: 'this is second message',
      Third: 'this is third message',
      Four: 'this is four',
    })

    const instance = myErrorNs('Test')

    expect(instance).toEqual(
      expect.objectContaining({
        key: 'MyErrorClasses.Test',
        error: undefined,
        message: 'this is test message',
        ns: 'MyErrorClasses',
      }),
    )
  })

  it('should check key for detect errors', () => {
    const error = myErrorNs('Test')

    expect(error.key === 'Test').toBeTruthy()
    // @ts-expect-error
    expect(error.key === 'Second').toBeFalsy()
  })

  it('should return chain of errors', () => {
    const secondError = myErrorNs('Second')
    const error = myErrorNs('Test', secondError)

    expect(error.message).toEqual('Test: Second')
  })

  it('should return list chain of errors', () => {
    const ordinaryError = new Error('ordinary')
    const fourError = myErrorNs('Four', 'four message')
    const secondErrorSub = myErrorNs('Second', fourError)
    const secondErrorOne = myErrorNs('Third')
    const error = myErrorNs('Test', [
      secondErrorSub,
      secondErrorOne,
      ordinaryError,
    ])

    expect(error.message).toEqual(
      'Test: Second: Four: four message\n' + 'Test: Third\n' + 'Test: ordinary',
    )
  })

  it('should not create new stack field', () => {
    const ordinaryError = new Error('ordinary')
    const fourError = myErrorNs('Four', ordinaryError)
    const secondErrorSub = myErrorNs('Second', fourError)
    const secondErrorOne = myErrorNs('Third', secondErrorSub)
    const error = myErrorNs('Test', secondErrorOne)

    expect(error.message).toEqual('Test: Third: Second: Four: ordinary')
  })

  it('should not create stack for ordinary error', () => {
    const ordinaryError = new Error('ordinary')
    const firstError = myErrorNs('Four', ordinaryError)
    expect(firstError.stack).toBe(undefined)

    const secondError = myErrorNs('Four', 'withStack')

    expect(secondError.stack).not.toBe(undefined)
  })
})
