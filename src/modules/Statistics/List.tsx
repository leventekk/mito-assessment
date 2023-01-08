import { styled } from 'styled-components'
import useSimulator from '@hook/useSimulator'
import media from '@helper/media'
import Item, { Wrapper as ItemWrapper } from './Item'

const Wrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  ${media.greaterThan('desktop')`
    grid-template-columns: repeat(5, 1fr);
  `}

  ${ItemWrapper} + ${ItemWrapper} {
    ${
      media.greaterThan('desktop')`
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      ` /* sc-custom '@media screen { a { top: 1; } }' */
    }
  }
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
      <Item
        title="Lottery"
        value={drawCount}
        note={`Years spent: ${yearsSpent}`}
        isHighlighted={fiveTimes === 1}
        wide
      />
      <Item title="2 matches" value={twoTimes} />
      <Item title="3 matches" value={threeTimes} />
      <Item title="4 matches" value={fourTimes} />
      <Item title="5 matches" value={fiveTimes} />
    </Wrapper>
  )
}

export default List
