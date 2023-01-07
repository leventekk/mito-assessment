import { styled, css } from 'styled-components'

const Wrapper = styled.div<{ $isHighlighted?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.75rem 0.5rem;

  ${({ $isHighlighted }) =>
    $isHighlighted === true &&
    css`
      background: ${({ theme }) => theme.palette.primary};
      color: ${({ theme }) => theme.palette.light};

      ${Title},
      ${Note} {
        color: inherit;
      }
    `}

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

const Item = ({
  title,
  value,
  note,
  isHighlighted
}: {
  title: string
  value: number
  isHighlighted?: boolean
  note?: string
}): React.ReactElement => (
  <Wrapper $isHighlighted={isHighlighted}>
    <Title>{title}</Title>
    <Value>{value}</Value>
    {note !== null && <Note>{note}</Note>}
  </Wrapper>
)

export default Item
