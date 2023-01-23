import { generateMedia, pxToRem } from 'styled-media-query'
import { DefaultTheme } from 'styled-components'

export const breakpoints = {
  desktop: '800px'
}

interface Breakpoints {
  desktop: string
}

const breakpointsInRem = pxToRem<Breakpoints>(breakpoints)
const media = generateMedia<Breakpoints, DefaultTheme>(breakpointsInRem)

export default media
