import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

const themeConfig: DefaultTheme = {
  defaultFontFamily: 'Poppins, sans-serif',
  palette: {
    primary: '#111827',
    secondary: '#6b7280',
    accent: '#4338ca',
    danger: '#b91c1c',
    neutral: '#fff',
    disabled: '#f3f4f6'
  }
}

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.palette.neutral};
    color: ${({ theme }) => theme.palette.primary};
    font-family: ${({ theme }) => theme.defaultFontFamily};
    margin: 0;
  }

`

const Theme = ({ children }: React.PropsWithChildren): React.ReactElement => (
  <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
)

export default Theme
