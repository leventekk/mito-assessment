import { useContext } from 'react'
import { SimulatorContext, type SimulatorContextValue } from '@context/Simulator/SimulatorContext'

const useSimulator = (): SimulatorContextValue => {
  const context = useContext(SimulatorContext)

  if (context === undefined) {
    throw new Error('useSimulator must be used within a SimulatorProvider')
  }

  return context
}

export default useSimulator
