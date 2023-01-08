import { styled, css } from 'styled-components'

const trackStyle = css`
  background: ${({ theme }) => theme?.palette.disabled};
  border-radius: 0.5rem;
  height: 0.5rem;
  transition: background 100ms ease-in;
`

const thumbStyle = css`
  appearance: none;
  background: ${({ theme }) => theme?.palette.neutral};
  border: 0.25rem solid currentColor;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: grab;
  height: 1rem;
  transition: background 100ms ease-in, border-color 100ms eae-in;
  width: 1rem;
`

const Slider = styled.input.attrs({ type: 'range' })`
  appearance: none;
  background: none;
  color: ${({ theme }) => theme?.palette.accent};
  height: 1.25rem;
  overflow: hidden;
  position: relative;

  &:disabled {
    color: ${({ theme }) => theme?.palette.secondary};
    cursor: not-allowed;
  }

  &::-moz-range-track {
    ${trackStyle}
  }

  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }

  &::-moz-range-thumb {
    ${thumbStyle}
  }
  &::-webkit-slider-thumb {
    ${thumbStyle}
    --right: calc(100% - 0.8rem);
    --edge: calc(100% - 1.1rem);
    box-shadow: calc(-100vmax - 0.5rem) 0 0 100vmax currentColor;
    clip-path: polygon(
      100% 0,
      100% 1rem,
      var(--right) 1rem,
      var(--edge) 0.7rem,
      -100vmax 0.7rem,
      -100vmax 0.2rem,
      var(--edge) 0.2rem,
      var(--right) 0,
      100% 0
    );
    margin-top: -0.3rem;
  }

  &::-moz-range-progress {
    background: currentColor;
    border-radius: 0.5rem;
    height: 1rem;
    transition: background 100ms ease-in;
  }
`
export default Slider
