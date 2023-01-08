import useSimulator from '@hook/useSimulator'
import { styled } from 'styled-components'
import formatCurrency from '@helper/formatCurrency'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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
