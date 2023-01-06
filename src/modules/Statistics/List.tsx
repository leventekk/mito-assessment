import { styled } from 'styled-components'
import useSimulator from '@hook/useSimulator'
import Item from './Item'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

const List = (): React.ReactElement => {
  const {
    state: {
      drawCount,
      yearsSpent,
      matches: { twoTimes, threeTimes, fourTimes, fiveTimes }
    }
  } = useSimulator()

  return (
    <Wrapper>
      <Item title="Lottery" value={drawCount} note={`Years spent: ${yearsSpent}`} />
      <Item title="2 matches" value={twoTimes} />
      <Item title="3 matches" value={threeTimes} />
      <Item title="4 matches" value={fourTimes} />
      <Item title="5 matches" value={fiveTimes} />
    </Wrapper>
  )
}

export default List
