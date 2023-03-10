import { Matches } from './SimulatorContext'

const mapping: Record<number, keyof Matches> = {
  2: 'twoTimes',
  3: 'threeTimes',
  4: 'fourTimes',
  5: 'fiveTimes'
}

export type MapMatchCount = (count: number) => keyof Matches

const mapMatchCount = (count: number): keyof Matches => mapping[count]

export default mapMatchCount
