import useSimulator from '@hook/useSimulator'
import { styled } from 'styled-components'
import formatCurrency from '@helper/formatCurrency'
import media from '@helper/media'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  ${media.greaterThan('desktop')`
    align-items: center;
    flex-direction: row;
  `}
`

const Price = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`

const Summary = (): React.ReactElement => {
  const {
    state: { moneySpent }
  } = useSimulator()

  return (
    <Wrapper>
      Total money spent to tickets: <Price>{formatCurrency(moneySpent)}</Price>
    </Wrapper>
  )
}

export default Summary
