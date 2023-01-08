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
      return {
        ...state,
        withRandomNumbers: !state.withRandomNumbers
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
        drawCount: nextDrawCount,
        drawResult: [...resultNumbers],
        isRunning: matchCount !== LOTTERY_NUMBER_COUNT,
        moneySpent: TICKET_PRICE * nextDrawCount,
        userNumbers,
        yearsSpent: Math.floor(nextDrawCount / DRAW_PER_YEAR),
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

export default simulatorReducer
