import { useEffect } from 'react'
import useSimulator from '@hook/useSimulator'

let interval: number

const Iterator = ({ children }: React.PropsWithChildren): React.ReactElement => {
  const {
    state: { isRunning, drawInterval },
    dispatch
  } = useSimulator()

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        dispatch({ type: 'draw' })
      }, drawInterval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning, drawInterval, dispatch])

  return <>{children}</>
}

export default Iterator
