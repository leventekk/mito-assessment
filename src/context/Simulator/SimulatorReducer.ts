import { TICKET_PRICE } from '@config'
import type { State, Action } from './SimulatorContext'
import countMatches from './countMatches'
import formatCount from './formatMatchCount'

const DRAW_PER_YEAR = 52 // 52 weeks

const simulatorReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'updateDelay': {
      state.drawDelay = action.delay
      return state
    }
    case 'toggleRandomNumbers': {
      state.withRandomNumbers = !state.withRandomNumbers
      return state
    }
    case 'draw': {
      const matchCount = countMatches(action.numbers, state.userNumbers)
      state.drawResult = [...action.numbers]
      state.drawCount += 1
      state.moneySpent = TICKET_PRICE * state.drawCount
      state.yearsSpent = Math.floor(state.drawCount * DRAW_PER_YEAR)
      state.matches[formatCount(matchCount)] += 1
      return state
    }
    case 'setNumbers': {
      state.userNumbers = [...action.numbers]
      return state
    }
  }
}

export default simulatorReducer
