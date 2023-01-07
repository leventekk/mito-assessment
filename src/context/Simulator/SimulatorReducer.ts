import { TICKET_PRICE, LOTTERY_MIN_NUMBER, LOTTERY_MAX_NUMBER, LOTTERY_NUMBER_COUNT } from '@config'
import generateRandomNumbers from '@helper/generateRandomNumbers'
import type { State, Action } from './SimulatorContext'
import countMatches from './countMatches'
import formatCount from './formatMatchCount'

const DRAW_PER_YEAR = 52 // 52 weeks

const simulatorReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'updateInterval': {
      return {
        ...state,
        drawInterval: action.interval
      }
    }
    case 'toggleRandomNumbers': {
      const nextWithRandomNumbers = !state.withRandomNumbers
      return {
        ...state,
        lockedUserNumbers: nextWithRandomNumbers ? [...state.userNumbers] : [],
        withRandomNumbers: nextWithRandomNumbers
      }
    }
    case 'draw': {
      const resultNumbers = generateRandomNumbers({
        count: LOTTERY_NUMBER_COUNT,
        min: LOTTERY_MIN_NUMBER,
        max: LOTTERY_MAX_NUMBER
      })
      const userNumbers = state.withRandomNumbers
        ? [
            ...state.lockedUserNumbers,
            ...generateRandomNumbers({
              count: LOTTERY_NUMBER_COUNT - state.lockedUserNumbers.length,
              min: LOTTERY_MIN_NUMBER,
              max: LOTTERY_MAX_NUMBER,
              exclude: state.lockedUserNumbers
            })
          ]
        : state.userNumbers
      const matchCount = countMatches(resultNumbers, userNumbers)
      const nextDrawCount = state.drawCount + 1

      return {
        ...state,
        drawResult: [...resultNumbers],
        userNumbers,
        drawCount: nextDrawCount,
        moneySpent: TICKET_PRICE * nextDrawCount,
        yearsSpent: Math.floor(nextDrawCount / DRAW_PER_YEAR),
        isRunning: matchCount !== LOTTERY_NUMBER_COUNT,
        matches: {
          ...state.matches,
          [formatCount(matchCount)]: state.matches[formatCount(matchCount)] + 1
        }
      }
    }
    case 'addNumber': {
      if (!state.userNumbers.includes(action.number)) {
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
        isRunning: true
      }
    }
    case 'stop': {
      return {
        ...state,
        isRunning: false
      }
    }
  }
}

export default simulatorReducer
