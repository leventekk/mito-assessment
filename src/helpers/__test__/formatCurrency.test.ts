import { describe, test, expect } from 'vitest'
import formatCurrency from '../formatCurrency'

describe('formatCurrency', () => {
  test('should work with different currency', () => {
    expect(formatCurrency(1000, { currency: 'USD' })).toEqual('1 000 USD')
  })
  test('should work with different locale', () => {
    expect(formatCurrency(1000, { locale: 'en-US', currency: 'USD' })).toEqual('$1,000')
  })
  test('should work with default parameters', () => {
    expect(formatCurrency(1000)).toEqual('1 000 Ft')
  })
})
