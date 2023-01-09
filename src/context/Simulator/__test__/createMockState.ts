import type { State } from '../SimulatorContext'

const createMockState = (parameters?: Partial<State>): State => ({
  drawCount: 0,
  drawInterval: 500,
  drawResult: [],
  isRunning: false,
  matches: {
    twoTimes: 0,
    threeTimes: 0,
    fourTimes: 0,
    fiveTimes: 0
  },
  moneySpent: 0,
  userNumbers: [],
  lockedUserNumbers: [],
  withRandomNumbers: false,
  yearsSpent: 0,
  ...parameters
})

export default createMockState
