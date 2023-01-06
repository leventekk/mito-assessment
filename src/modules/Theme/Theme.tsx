import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'

const themeConfig: DefaultTheme = {
  defaultFontFamily: 'Roboto, sans-serif',
  palette: {
    primary: '#512da8',
    secondary: '#eee',
    text: '#212121'
  }
}

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.text};
    font-family: ${({ theme }) => theme.defaultFontFamily};
    margin: 0;
  }

`

const Theme = ({ children }: React.PropsWithChildren): React.ReactElement => (
  <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
)

export default Theme
