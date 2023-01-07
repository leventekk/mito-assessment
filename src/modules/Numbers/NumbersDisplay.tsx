import { styled } from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const Title = styled.div``

const List = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 0.25rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  font-size: 0.75rem;
  height: 2rem;
  justify-content: center;
  width: 2rem;
`

export interface NumbersDisplayAttributes {
  title: string
  values: number[]
  onRemove?: (number: number) => void
}

const NumbersDisplay = ({
  title,
  values,
  onRemove,
  children
}: React.PropsWithChildren<NumbersDisplayAttributes>): React.ReactElement => (
  <Wrapper>
    <Title>{title}</Title>
    {values.length > 0 && (
      <List>
        {values.map((number) => (
          <Item
            key={number}
            onClick={() => {
              if (typeof onRemove === 'function') {
                onRemove(number)
              }
            }}
          >
            {number}
          </Item>
        ))}
      </List>
    )}
    {children}
  </Wrapper>
)

export default NumbersDisplay
