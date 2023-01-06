const countMatches = (target: number[], numbersToFind: number[]): number =>
  target.filter((n) => numbersToFind.includes(n)).length

export default countMatches
