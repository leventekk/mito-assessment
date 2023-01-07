import { TICKET_PRICE } from '@config'
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
      const matchCount = countMatches(action.numbers, state.userNumbers)
      return {
        ...state,
        drawResult: [...action.numbers],
        drawCount: state.drawCount + 1,
        moneySpent: TICKET_PRICE * state.drawCount,
        yearsSpent: Math.floor(state.drawCount * DRAW_PER_YEAR),
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
  }
}

export default simulatorReducer
