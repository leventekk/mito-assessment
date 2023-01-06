import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string
      secondary: string
      dark: string
      light: string
      text: string
    }
    defaultFontFamily: string
  }
}
