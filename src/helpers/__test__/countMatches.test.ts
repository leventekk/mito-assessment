import { describe, test, expect } from 'vitest'
import countMatches from '../countMatches'

describe('countMatches', () => {
  test('should return the correct match count', () => {
    expect(countMatches([1, 2, 3], [2, 3])).toEqual(2)
  })
})
