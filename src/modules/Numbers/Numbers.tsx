import useSimulator from '@hook/useSimulator'
import { styled } from 'styled-components'
import Display from './NumbersDisplay'
import Edit from './EditableNumbersDisplay'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Numbers = (): React.ReactElement => {
  const {
    state: { drawResult, userNumbers, withRandomNumbers },
    dispatch
  } = useSimulator()

  return (
    <Wrapper>
      <Display title="Lottery numbers:" values={drawResult} />
      <Edit
        {...{ withRandomNumbers }}
        title="Your numbers:"
        values={userNumbers}
        onAddNumber={(number: number) => {
          dispatch({ type: 'addNumber', number })
        }}
        onRemove={(number: number) => {
          dispatch({ type: 'removeNumber', number })
        }}
        onToggleRandom={() => {
          dispatch({ type: 'toggleRandomNumbers' })
        }}
      />
    </Wrapper>
  )
}

export default Numbers
