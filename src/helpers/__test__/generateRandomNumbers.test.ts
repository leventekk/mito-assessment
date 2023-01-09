import { describe, test, expect } from 'vitest'
import generateRandomNumbers from '../generateRandomNumbers'

describe('generateRandomNumbers', () => {
  test('should handle the count parameter', () => {
    expect(generateRandomNumbers({ count: 2, min: 1, max: 10 })).toHaveLength(2)
  })

  test('should handle the exlude list', () => {
    const generatedNumbers = generateRandomNumbers({ count: 2, min: 1, max: 4, exclude: [1, 2] })
    expect(generatedNumbers).toEqual(expect.arrayContaining([3, 4]))
    expect(generatedNumbers).toHaveLength(2)
  })
})
