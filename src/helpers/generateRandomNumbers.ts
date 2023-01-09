import getRandomInteger from './generateRandomInteger'

interface GenerateRandomNumbersParameters {
  count: number
  min: number
  max: number
  exclude?: number[]
}

export type GenerateRandomNumbers = (parameters: GenerateRandomNumbersParameters) => number[]

const generateRandomNumbers = ({ count, min, max, exclude = [] }: GenerateRandomNumbersParameters): number[] => {
  const numbers: number[] = []

  while (numbers.length !== count) {
    const generatedNumber = getRandomInteger(min, max)

    if (!numbers.includes(generatedNumber) && !exclude.includes(generatedNumber)) {
      numbers.push(generatedNumber)
    }
  }

  return numbers
}

export default generateRandomNumbers
