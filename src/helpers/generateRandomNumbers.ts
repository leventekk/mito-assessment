import getRandomInteger from './generateRandomInteger'

interface GenerateRandomNumbers {
  count: number
  min: number
  max: number
  exclude?: number[]
}

const generateRandomNumbers = ({ count, min, max, exclude = [] }: GenerateRandomNumbers): number[] => {
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
