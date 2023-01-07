import { styled, css } from 'styled-components'
import useSimulator from '@hook/useSimulator'
import { LOTTERY_NUMBER_COUNT } from '@config'

const Button = styled.button<{ $isInactive?: boolean }>`
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 1rem;
  border: 0;
  color: ${({ theme }) => theme.palette.light};
  cursor: pointer;
  display: block;
  font-family: ${({ theme }) => theme.defaultFontFamily};
  font-size: 1.125rem;
  padding: 0.725rem 1rem;
  text-align: center;
  width: 100%;

  ${({ $isInactive }) =>
    $isInactive === true &&
    css`
      background: ${({ theme }) => theme.palette.dark};
    `}

  &:disabled {
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.text};
    cursor: not-allowed;
  }
`

const Action = (): React.ReactElement => {
  const {
    state: { isRunning, withRandomNumbers, userNumbers },
    dispatch
  } = useSimulator()
  const isAllowedToStart = withRandomNumbers || userNumbers.length === LOTTERY_NUMBER_COUNT

  const onClick = (): void => {
    dispatch({ type: isRunning ? 'stop' : 'start' })
  }

  return (
    <div>
      <Button {...{ onClick }} $isInactive={isRunning} disabled={!isAllowedToStart}>
        {isAllowedToStart ? (isRunning ? 'Stop' : 'Start') : 'Please select numbers'}
      </Button>
    </div>
  )
}

export default Action
