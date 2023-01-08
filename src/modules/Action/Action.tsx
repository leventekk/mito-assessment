import useSimulator from '@hook/useSimulator'
import Button from '@element/Form/Button'
import { LOTTERY_NUMBER_COUNT } from '@config'

const Action = (): React.ReactElement => {
  const {
    state: { isRunning, withRandomNumbers, userNumbers },
    dispatch
  } = useSimulator()
  const isAllowedToStart = withRandomNumbers || userNumbers.length === LOTTERY_NUMBER_COUNT

  const onClick = (): void => {
    if (isRunning) {
      dispatch({ type: 'stop' })
    } else {
      dispatch({ type: 'start' })
      dispatch({ type: 'draw' })
    }
  }

  return (
    <div>
      <Button {...{ onClick }} $isDanger={isRunning} disabled={!isAllowedToStart}>
        {isAllowedToStart
          ? isRunning
            ? 'Stop'
            : 'Start'
          : 'Please select at least 5 numbers or play with random ones'}
      </Button>
    </div>
  )
}

export default Action
