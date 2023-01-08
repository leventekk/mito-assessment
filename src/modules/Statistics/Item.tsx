import { styled, css } from 'styled-components'
import media from '@helper/media'

export const Wrapper = styled.div<{ $isHighlighted?: boolean; $isWide?: boolean }>`
  align-items: center;
  color: ${({ theme }) => theme.palette.secondary};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.75rem 0.5rem;

  ${({ $isHighlighted }) =>
    $isHighlighted === true &&
    css`
      background: ${({ theme }) => theme.palette.accent};
      color: ${({ theme }) => theme.palette.neutral};
    `}

  ${({ $isWide }) =>
    $isWide === true &&
    css`
      grid-column: -1 /1;

      ${media.greaterThan('desktop')`
        grid-column: auto;
      `}
    `}
`

const Title = styled.strong`
  font-size: 0.75rem;
  font-weight: 400;
`

const Value = styled.span<{ $isHighlighted?: boolean }>`
  color: ${({ theme }) => theme.palette.primary};
  font-size: 2.25rem;
  font-weight: 900;
  margin-top: 0.25rem;

  ${({ $isHighlighted }) =>
    $isHighlighted === true &&
    css`
      color: ${({ theme }) => theme.palette.neutral};
    `}
`

const Note = styled.small`
  font-size: 0.625rem;
`

const Item = ({
  title,
  value,
  note,
  isHighlighted,
  wide
}: {
  title: string
  value: number
  isHighlighted?: boolean
  note?: string
  wide?: boolean
}): React.ReactElement => (
  <Wrapper $isHighlighted={isHighlighted} $isWide={wide}>
    <Title>{title}</Title>
    <Value $isHighlighted={isHighlighted}>{value}</Value>
    {note !== null && <Note>{note}</Note>}
  </Wrapper>
)

export default Item
