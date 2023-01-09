import { useReducer } from 'react'
import { TICKET_PRICE, LOTTERY_MIN_NUMBER, LOTTERY_MAX_NUMBER, LOTTERY_NUMBER_COUNT } from '@config'
import generateRandomNumbers from '@helper/generateRandomNumbers'
import countMatches from '@helper/countMatches'
import { simulatorState, SimulatorContext } from './SimulatorContext'
import createSimulatorReducer from './SimulatorReducer'
import mapMatchCount from './mapMatchCount'

const simulatorReducer = createSimulatorReducer(mapMatchCount, countMatches, generateRandomNumbers, {
  TICKET_PRICE,
  LOTTERY_MIN_NUMBER,
  LOTTERY_MAX_NUMBER,
  LOTTERY_NUMBER_COUNT
})

const SimulatorProvider = ({ children }: React.PropsWithChildren): React.ReactElement => {
  const [state, dispatch] = useReducer(simulatorReducer, simulatorState)

  return <SimulatorContext.Provider value={{ state, dispatch }}>{children}</SimulatorContext.Provider>
}

export default SimulatorProvider
