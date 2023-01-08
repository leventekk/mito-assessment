import { styled } from 'styled-components'
import useSimulator from '@hook/useSimulator'
import Input from '@element/Form/Slider'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 600;
`

const Slider = (): React.ReactElement => {
  const {
    state: { drawInterval, isRunning },
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
      <Input step={1} min={1} max={1000} disabled={isRunning} defaultValue={drawInterval} onChange={onChange} />
    </Wrapper>
  )
}

export default Slider
