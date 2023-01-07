const getRandomInteger = (min: number, max: number): number => {
  const byteArray = new Uint8Array(1)
  window.crypto.getRandomValues(byteArray)

  const range = max - min + 1
  const maxRange = 90
  if (byteArray[0] >= Math.floor(maxRange / range) * range) {
    return getRandomInteger(min, max)
  }
  return min + (byteArray[0] % range)
}

export default getRandomInteger
