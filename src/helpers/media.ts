import { generateMedia, pxToRem } from 'styled-media-query'
import { DefaultTheme } from 'styled-components'

export const breakpoints = {
  desktop: '800px'
}

interface TBreakpoints {
  desktop: string
}

const breakpointsInRem = pxToRem<TBreakpoints>(breakpoints)
const media = generateMedia<TBreakpoints, DefaultTheme>(breakpointsInRem)

export default media
