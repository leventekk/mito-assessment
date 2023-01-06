import { styled } from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.75rem 0.5rem;

  & + & {
    box-shadow: inset 1px 0 rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.strong`
  color: ${({ theme }) => theme.palette.dark};
  font-size: 0.75rem;
  font-weight: 400;
`

const Value = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 0.375rem;
`

const Note = styled.small`
  color: ${({ theme }) => theme.palette.dark};
  font-size: 0.625rem;
`

const Item = ({ title, value, note }: { title: string; value: number; note?: string }): React.ReactElement => (
  <Wrapper>
    <Title>{title}</Title>
    <Value>{value}</Value>
    {note !== null && <Note>{note}</Note>}
  </Wrapper>
)

export default Item
