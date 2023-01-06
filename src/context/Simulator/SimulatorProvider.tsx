import { useReducer } from 'react'
import { simulatorState, SimulatorContext } from './SimulatorContext'
import simulatorReducer from './SimulatorReducer'

const SimulatorProvider = ({ children }: React.PropsWithChildren): React.ReactElement => {
  const [state, dispatch] = useReducer(simulatorReducer, simulatorState)

  return <SimulatorContext.Provider value={{ state, dispatch }}>{children}</SimulatorContext.Provider>
}

export default SimulatorProvider
