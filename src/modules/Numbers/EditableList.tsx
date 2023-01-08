import { useState } from 'react'
import { styled } from 'styled-components'
import { LOTTERY_MIN_NUMBER, LOTTERY_MAX_NUMBER, LOTTERY_NUMBER_COUNT } from '@config'
import Checkbox from '@element/Form/Checkbox'
import { Wrapper, Title, List, Item as ListItem, type ListAttributes } from '@element/Numbers/List'
import media from '@helper/media'
import Button from '@element/Form/Button'

interface EditableListAttributes extends ListAttributes {
  isDisabled?: boolean
  onToggleRandom: () => void
  onRemove: (value: number) => void
  onAddNumber: (value: number) => void
  withRandomNumbers: boolean
}

const isAllowed = (value: string): boolean => {
  const numericValue = Number.parseInt(value, 10)
  return (
    value.length === 0 ||
    (/\d/.test(value) && value.length <= 2 && numericValue >= LOTTERY_MIN_NUMBER && numericValue <= LOTTERY_MAX_NUMBER)
  )
}

const Item = styled(ListItem)`
  cursor: pointer;
  transition: background 100ms ease-in, color 100ms ease-in;

  &:hover {
    background: ${({ theme }) => theme?.palette.danger};
    color: ${({ theme }) => theme?.palette.neutral};
  }
`

const Label = styled.label`
  flex-basis: 100%;

  ${media.greaterThan('desktop')`
    flex-basis: auto;
  `}
`

const FloatingMenu = styled.div`
  background: ${({ theme }) => theme.palette.disabled};
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: fixed;
  right: 0;
  z-index: 2;

  ${media.greaterThan('desktop')`
    display: none;
  `}
`

const NumberInput = styled.input`
  background: ${({ theme }) => theme.palette.disabled};
  border-radius: 0.25rem;
  border: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  height: 2.25rem;
  padding: 0;
  text-align: center;
  width: 2.25rem;

  &:focus {
    outline-color: ${({ theme }) => theme.palette.accent};
  }
`

const EditableList = ({
  title,
  numbers,
  withRandomNumbers,
  isDisabled = false,
  onAddNumber,
  onRemove,
  onToggleRandom
}: EditableListAttributes): React.ReactElement => {
  const [value, setValue] = useState<string>('')

  const onCallAddNumber = (): void => {
    onAddNumber(Number.parseInt(value, 10))
    setValue('')
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter') {
      onCallAddNumber()
    }
  }

  const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value
    if (isAllowed(inputValue)) {
      setValue(inputValue)
    }
  }

  const onCheckboxChange = (): void => {
    if (withRandomNumbers && value !== '') {
      setValue('')
    }
    onToggleRandom()
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      {numbers.length > 0 && (
        <List>
          {numbers.map((number) => (
            <Item
              onClick={() => {
                onRemove(number)
              }}
              key={number}
            >
              {number}
            </Item>
          ))}
        </List>
      )}
      {!isDisabled && numbers.length < LOTTERY_NUMBER_COUNT && (
        <>
          {!withRandomNumbers && (
            <>
              <NumberInput
                {...{ value }}
                type="text"
                inputMode="numeric"
                onChange={onNumberChange}
                onKeyDown={onKeyDown}
                placeholder="_"
              />
              {value.length > 0 && (
                <FloatingMenu>
                  <Button
                    onClick={() => {
                      onCallAddNumber()
                    }}
                  >
                    Add Number
                  </Button>
                </FloatingMenu>
              )}
            </>
          )}
          <Label>
            Play with random numbers
            <Checkbox checked={withRandomNumbers} onChange={onCheckboxChange} />
          </Label>
        </>
      )}
    </Wrapper>
  )
}

export default EditableList
