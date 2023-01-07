import { createContext } from 'react'

export interface Matches {
  twoTimes: number
  threeTimes: number
  fourTimes: number
  fiveTimes: number
}

export interface State {
  drawCount: number
  drawInterval: number
  drawResult: number[]
  isRunning: boolean
  matches: Matches
  moneySpent: number
  userNumbers: number[]
  lockedUserNumbers: number[]
  withRandomNumbers: boolean
  yearsSpent: number
}

type ActionNames = 'updateInterval' | 'draw' | 'addNumber' | 'removeNumber' | 'toggleRandomNumbers' | 'start' | 'stop'

type GeneralAction<T extends ActionNames, S = {}> = {
  type: T
} & S

export type Action =
  | GeneralAction<'toggleRandomNumbers'>
  | GeneralAction<'start'>
  | GeneralAction<'stop'>
  | GeneralAction<'updateInterval', { interval: number }>
  | GeneralAction<'draw'>
  | GeneralAction<'addNumber', { number: number }>
  | GeneralAction<'removeNumber', { number: number }>

export type Dispatch = (action: Action) => void

export const simulatorState: State = {
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
  yearsSpent: 10
}

export interface SimulatorContextValue {
  state: State
  dispatch: Dispatch
}

export const SimulatorContext = createContext<SimulatorContextValue>({
  state: simulatorState,
  dispatch: () => {}
})
