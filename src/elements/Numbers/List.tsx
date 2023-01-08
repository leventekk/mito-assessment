import { styled } from 'styled-components'
import media from '@helper/media'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  ${media.greaterThan('desktop')`
    gap: 2rem;
    min-height: 2rem;
  `}
`

export const Title = styled.div`
  flex-basis: 100%;

  ${media.greaterThan('desktop')`
    flex-basis: auto;
  `}
`

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.palette.disabled};
  border-radius: 0.25rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 1rem;
  height: 2.25rem;
  justify-content: center;
  width: 2.25rem;
`

export interface ListAttributes {
  title: string
  numbers: number[]
}

const ListElement = ({ title, numbers }: ListAttributes): React.ReactElement => (
  <Wrapper>
    <Title>{title}</Title>
    {numbers.length > 0 && (
      <List>
        {numbers.map((number) => (
          <Item key={number}>{number}</Item>
        ))}
      </List>
    )}
  </Wrapper>
)

export default ListElement
