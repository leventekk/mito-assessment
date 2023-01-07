import useSimulator from '@hook/useSimulator'
import { styled } from 'styled-components'

const Wrapper = styled.div``

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Input = styled.input.attrs({ type: 'range' })`
  appearance: none;
  background: none;
  display: block;
  width: 100%;

  &::-moz-range-track {
    background: ${({ theme }) => theme?.palette.secondary};
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  &::-moz-range-thumb {
    background: ${({ theme }) => theme?.palette.light};
    border-radius: 50%;
    border: 0.25rem solid ${({ theme }) => theme?.palette.primary};
    height: 0.75rem;
    width: 0.75rem;
  }

  &::-moz-range-progress {
    background: ${({ theme }) => theme?.palette.primary};
    border-radius: 0.5rem;
    height: 1rem;
  }
`

const Slider = (): React.ReactElement => {
  const {
    state: { drawInterval },
    dispatch
  } = useSimulator()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: 'updateInterval',
      interval: Number.parseInt(event.target.value, 10)
    })
  }

  return (
    <Wrapper>
      <Label>Speed</Label>
      <Input step={1} min={1} max={1000} defaultValue={drawInterval} onChange={onChange} />
    </Wrapper>
  )
}

export default Slider
