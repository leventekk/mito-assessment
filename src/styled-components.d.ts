import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string
      secondary: string
      accent: string
      danger: string
      neutral: string
      disabled: string
    }
    defaultFontFamily: string
  }
}
