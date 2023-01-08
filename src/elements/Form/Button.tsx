import { styled, css } from 'styled-components'
import Color from 'color'

const Button = styled.button<{ $isDanger?: boolean }>`
  background: ${({ theme }) => theme.palette.accent};
  border-radius: 0.75rem;
  border: 0;
  color: ${({ theme }) => theme.palette.neutral};
  cursor: pointer;
  display: block;
  font-family: ${({ theme }) => theme.defaultFontFamily};
  font-size: 1.125rem;
  font-weight: 400;
  padding: 0.75rem 1rem;
  text-align: center;
  transition: background-color 100ms ease-in;
  width: 100%;

  &:hover {
    background: ${({ theme }) => Color(theme.palette.accent).lighten(0.1).hex()};
  }

  ${({ $isDanger }) =>
    $isDanger === true &&
    css`
      background: ${({ theme }) => theme.palette.danger};

      &:hover {
        background: ${({ theme }) => Color(theme.palette.danger).lighten(0.1).hex()};
      }
    `}

  &:disabled {
    background: ${({ theme }) => theme.palette.disabled};
    color: ${({ theme }) => theme.palette.secondary};
    cursor: not-allowed;
  }
`

export default Button
