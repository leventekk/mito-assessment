import type { State, Action, Matches } from './SimulatorContext'
import type { CountMatches } from '@helper/countMatches'
import type { GenerateRandomNumbers } from '@helper/generateRandomNumbers'
import type { MapMatchCount } from './mapMatchCount'

const DRAW_PER_YEAR = 52 // 52 weeks

export interface Config {
  TICKET_PRICE: number
  LOTTERY_MIN_NUMBER: number
  LOTTERY_MAX_NUMBER: number
  LOTTERY_NUMBER_COUNT: number
}

export type SimulatorReducer = (state: State, action: Action) => State

function reducerCreator(
  mapperService: MapMatchCount,
  counterService: CountMatches,
  numberGeneratorService: GenerateRandomNumbers,
  { TICKET_PRICE, LOTTERY_MIN_NUMBER, LOTTERY_MAX_NUMBER, LOTTERY_NUMBER_COUNT }: Config
): SimulatorReducer {
  const simulatorReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'updateInterval': {
        return {
          ...state,
          drawInterval: action.interval
        }
      }
      case 'toggleRandomNumbers': {
        return {
          ...state,
          withRandomNumbers: !state.withRandomNumbers
        }
      }
      case 'draw': {
        const resultNumbers = numberGeneratorService({
          count: LOTTERY_NUMBER_COUNT,
          min: LOTTERY_MIN_NUMBER,
          max: LOTTERY_MAX_NUMBER
        })
        const userNumbers = state.withRandomNumbers
          ? [
              ...state.lockedUserNumbers,
              ...numberGeneratorService({
                count: LOTTERY_NUMBER_COUNT - state.lockedUserNumbers.length,
                min: LOTTERY_MIN_NUMBER,
                max: LOTTERY_MAX_NUMBER,
                exclude: state.lockedUserNumbers
              })
            ]
          : state.userNumbers
        const matchCount = counterService(resultNumbers, userNumbers)
        const nextDrawCount = state.drawCount + 1
        const updatedMatchCount: Partial<Matches> = {}

        if (matchCount > 1) {
          const key = mapperService(matchCount)
          updatedMatchCount[key] = state.matches[key] + 1
        }

        return {
          ...state,
          drawCount: nextDrawCount,
          drawResult: [...resultNumbers],
          isRunning: matchCount !== LOTTERY_NUMBER_COUNT,
          moneySpent: TICKET_PRICE * nextDrawCount,
          userNumbers,
          yearsSpent: Math.floor(nextDrawCount / DRAW_PER_YEAR),
          matches: {
            ...state.matches,
            ...updatedMatchCount
          }
        }
      }
      case 'addNumber': {
        if (
          !state.userNumbers.includes(action.number) &&
          state.userNumbers.length < LOTTERY_NUMBER_COUNT &&
          action.number >= LOTTERY_MIN_NUMBER &&
          action.number <= LOTTERY_MAX_NUMBER
        ) {
          return {
            ...state,
            userNumbers: [...state.userNumbers, action.number]
          }
        }
        return state
      }
      case 'removeNumber': {
        return {
          ...state,
          userNumbers: state.userNumbers.filter((number) => number !== action.number)
        }
      }
      case 'start': {
        return {
          ...state,
          isRunning: true,
          lockedUserNumbers: [...state.userNumbers]
        }
      }
      case 'stop': {
        return {
          ...state,
          isRunning: false,
          userNumbers: [...state.lockedUserNumbers],
          lockedUserNumbers: []
        }
      }
    }
  }

  return simulatorReducer
}

export default reducerCreator
