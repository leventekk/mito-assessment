import { createContext } from 'react'

export interface Matches {
  twoTimes: number
  threeTimes: number
  fourTimes: number
  fiveTimes: number
}

export interface State {
  moneySpent: number
  matches: Matches
  userNumbers: number[]
  drawResult: number[]
  drawCount: number
  withRandomNumbers: boolean
  drawDelay: number
  yearsSpent: number
  hasFiveTimesMatch: boolean
}

type ActionNames = 'updateDelay' | 'draw' | 'setNumbers' | 'toggleRandomNumbers'

type GeneralAction<T extends ActionNames, S = void> = {
  type: T
} & S

export type Action =
  | GeneralAction<'toggleRandomNumbers'>
  | GeneralAction<'updateDelay', { delay: number }>
  | GeneralAction<'draw', { numbers: number[] }>
  | GeneralAction<'setNumbers', { numbers: number[] }>

export type Dispatch = (action: Action) => void

export const simulatorState: State = {
  moneySpent: 0,
  matches: {
    twoTimes: 0,
    threeTimes: 1,
    fourTimes: 1,
    fiveTimes: 10
  },
  userNumbers: [],
  drawResult: [],
  withRandomNumbers: false,
  drawCount: 2321,
  drawDelay: 500,
  yearsSpent: 10,
  hasFiveTimesMatch: false
}

export interface SimulatorContextValue {
  state: State
  dispatch: Dispatch
}

export const SimulatorContext = createContext<SimulatorContextValue>({
  state: simulatorState,
  dispatch: () => {}
})
