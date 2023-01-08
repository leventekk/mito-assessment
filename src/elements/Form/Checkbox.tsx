import { styled } from 'styled-components'

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  align-items: center;
  appearance: none;
  background: ${({ theme }) => theme?.palette.neutral};
  border-radius: 0.25rem;
  border: 2px solid ${({ theme }) => theme?.palette.secondary};
  color: currentColor;
  display: inline-flex;
  height: 1.125rem;
  justify-content: center;
  margin: 0 0 0 0.5rem;
  width: 1.125rem;

  &::before {
    background: ${({ theme }) => theme?.palette.accent};
    content: '';
    height: 0.625rem;
    border-radius: 0.125rem;
    transform: scale(0);
    transition: transform 120ms ease-in-out;
    width: 0.625rem;
  }

  &:checked::before {
    transform: scale(1);
  }
`

export default Checkbox
