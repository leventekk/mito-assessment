import { styled } from 'styled-components'
import useSimulator from '@hook/useSimulator'
import List from '@element/Numbers/List'
import EditableList from './EditableList'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Numbers = (): React.ReactElement => {
  const {
    state: { drawResult, userNumbers, isRunning, withRandomNumbers },
    dispatch
  } = useSimulator()

  return (
    <Wrapper>
      {isRunning && <List title="Lottery numbers:" numbers={drawResult} />}
      <EditableList
        {...{ withRandomNumbers }}
        title="Your numbers:"
        numbers={userNumbers}
        isDisabled={isRunning}
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
