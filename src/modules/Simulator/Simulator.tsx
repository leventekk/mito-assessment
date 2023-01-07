import useSimulator from '@hook/useSimulator'
import { useEffect } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  row-gap: 3.25rem;
`

let interval: number

const Simulator = ({ children }: React.PropsWithChildren): React.ReactElement => {
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

  return <Wrapper>{children}</Wrapper>
}

export default Simulator
