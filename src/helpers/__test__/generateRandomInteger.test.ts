import generateRandomInteger from '../generateRandomInteger'

describe('generateRandomInteger', () => {
  test('should handle the min and max parameters', () => {
    const generatedNumber = generateRandomInteger(1, 10)
    expect(generatedNumber).toBeGreaterThanOrEqual(1)
    expect(generatedNumber).toBeLessThanOrEqual(10)
  })
})
