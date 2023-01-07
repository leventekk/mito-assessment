import { useState } from 'react'
import { styled } from 'styled-components'
import NumbersDisplay, { type NumbersDisplayAttributes } from './NumbersDisplay'

interface EditableNumbersDisplayAttributes extends NumbersDisplayAttributes {
  onToggleRandom: () => void
  onAddNumber: (number: number) => void
  withRandomNumbers: boolean
}

const isAllowed = (value: string): boolean => {
  const numericValue = Number.parseInt(value, 10)
  return value.length === 0 || (/\d/.test(value) && value.length <= 2 && numericValue >= 1 && numericValue <= 90)
}

const NumberInput = styled.input`
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 0.25rem;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  height: 2rem;
  padding: 0 0.5rem;
  text-align: center;
  width: 2.5rem;
`

const EditableNumbersDisplay = ({
  title,
  values,
  withRandomNumbers,
  onAddNumber,
  onRemove,
  onToggleRandom
}: EditableNumbersDisplayAttributes): React.ReactElement => {
  const [value, setValue] = useState<string>('')

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter') {
      onAddNumber(Number.parseInt(value, 10))
      setValue('')
    }
  }

  return (
    <NumbersDisplay {...{ title, values, onRemove }}>
      {values.length < 5 && (
        <>
          {!withRandomNumbers && (
            <NumberInput
              {...{ value }}
              type="text"
              inputMode="numeric"
              pattern="\d*"
              min={1}
              max={90}
              onChange={(event) => {
                const inputValue = event.target.value
                if (isAllowed(inputValue)) {
                  setValue(inputValue)
                }
              }}
              onKeyDown={onKeyDown}
              placeholder="__"
            />
          )}
          <label>
            Play with random numbers <input type="checkbox" onChange={onToggleRandom} />
          </label>
        </>
      )}
    </NumbersDisplay>
  )
}

export default EditableNumbersDisplay
