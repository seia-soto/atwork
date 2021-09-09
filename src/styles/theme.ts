import { createStitches } from '@stitches/react'

export const { styled, createTheme, css, globalCss, getCssText } = createStitches({})

export const globals = globalCss({
  '*': {
    fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, Roboto, \'Helvetica Neue\', \'Segoe UI\', \'Apple SD Gothic Neo\', \'Noto Sans KR\', \'Malgun Gothic\', sans-serif',
    boxSizing: 'border-box',
    wordBreak: 'keep-all',
    wordWrap: 'break-word'
  },
  'p,h1,h2,h3,h4,h5,h6,li': {
    lineHeight: '1.4em'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  },
  'pre,code': {
    overflowX: 'auto'
  }
})

export const light = createTheme({
  colors: {
    black: 'black',
    black100: 'rgba(0,0,0,.1)',
    black200: 'rgba(0,0,0,.2)',
    black300: 'rgba(0,0,0,.3)',
    black400: 'rgba(0,0,0,.4)',
    black500: 'rgba(0,0,0,.5)',
    black600: 'rgba(0,0,0,.6)',
    black700: 'rgba(0,0,0,.7)',
    black800: 'rgba(0,0,0,.8)',
    black900: 'rgba(0,0,0,.9)',
    black910: 'rgba(0,0,0,.91)',
    black920: 'rgba(0,0,0,.92)',
    black930: 'rgba(0,0,0,.93)',
    black940: 'rgba(0,0,0,.94)',
    black950: 'rgba(0,0,0,.95)',
    black960: 'rgba(0,0,0,.96)',
    black970: 'rgba(0,0,0,.97)',
    black980: 'rgba(0,0,0,.98)',
    black990: 'rgba(0,0,0,.99)',
    white: 'white',
    white100: 'rgba(255,255,255,.1)',
    white200: 'rgba(255,255,255,.2)',
    white300: 'rgba(255,255,255,.3)',
    white400: 'rgba(255,255,255,.4)',
    white500: 'rgba(255,255,255,.5)',
    white600: 'rgba(255,255,255,.6)',
    white700: 'rgba(255,255,255,.7)',
    white800: 'rgba(255,255,255,.8)',
    white900: 'rgba(255,255,255,.9)',
    blue: 'hsl(218,56.7%,38%)',
    blue100: 'hsl(218,56.7%,10%)',
    blue200: 'hsl(218,56.7%,20%)',
    blue300: 'hsl(218,56.7%,30%)',
    blue400: 'hsl(218,56.7%,40%)',
    blue500: 'hsl(218,56.7%,50%)',
    blue600: 'hsl(218,56.7%,60%)',
    blue700: 'hsl(218,56.7%,70%)',
    blue800: 'hsl(218,56.7%,80%)',
    blue900: 'hsl(218,56.7%,90%)'
  }
})
export const dark = createTheme({
  colors: {
    black: 'white',
    black100: 'rgba(255,255,255,.1)',
    black200: 'rgba(255,255,255,.2)',
    black300: 'rgba(255,255,255,.3)',
    black400: 'rgba(255,255,255,.4)',
    black500: 'rgba(255,255,255,.5)',
    black600: 'rgba(255,255,255,.6)',
    black700: 'rgba(255,255,255,.7)',
    black800: 'rgba(255,255,255,.8)',
    black900: 'rgba(255,255,255,.9)',
    black910: 'rgba(255,255,255,.91)',
    black920: 'rgba(255,255,255,.92)',
    black930: 'rgba(255,255,255,.93)',
    black940: 'rgba(255,255,255,.94)',
    black950: 'rgba(255,255,255,.95)',
    black960: 'rgba(255,255,255,.96)',
    black970: 'rgba(255,255,255,.97)',
    black980: 'rgba(255,255,255,.98)',
    black990: 'rgba(255,255,255,.99)',
    white: 'black',
    white100: 'rgba(0,0,0,.1)',
    white200: 'rgba(0,0,0,.2)',
    white300: 'rgba(0,0,0,.3)',
    white400: 'rgba(0,0,0,.4)',
    white500: 'rgba(0,0,0,.5)',
    white600: 'rgba(0,0,0,.6)',
    white700: 'rgba(0,0,0,.7)',
    white800: 'rgba(0,0,0,.8)',
    white900: 'rgba(0,0,0,.9)',
    blue: 'hsl(218,56.7%,38%)',
    blue100: 'hsl(218,56.7%,90%)',
    blue200: 'hsl(218,56.7%,80%)',
    blue300: 'hsl(218,56.7%,70%)',
    blue400: 'hsl(218,56.7%,60%)',
    blue500: 'hsl(218,56.7%,50%)',
    blue600: 'hsl(218,56.7%,40%)',
    blue700: 'hsl(218,56.7%,30%)',
    blue800: 'hsl(218,56.7%,20%)',
    blue900: 'hsl(218,56.7%,10%)'
  }
})
