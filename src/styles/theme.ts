import { createStitches } from '@stitches/react'

export const { styled, createTheme, css } = createStitches({
  theme: {
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
      white: 'white',
      white100: 'rgba(255,255,255,.1)',
      white200: 'rgba(255,255,255,.2)',
      white300: 'rgba(255,255,255,.3)',
      white400: 'rgba(255,255,255,.4)',
      white500: 'rgba(255,255,255,.5)',
      white600: 'rgba(255,255,255,.6)',
      white700: 'rgba(255,255,255,.7)',
      white800: 'rgba(255,255,255,.8)',
      white900: 'rgba(255,255,255,.9)'
    }
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
    white: 'black',
    white100: 'rgba(0,0,0,.1)',
    white200: 'rgba(0,0,0,.2)',
    white300: 'rgba(0,0,0,.3)',
    white400: 'rgba(0,0,0,.4)',
    white500: 'rgba(0,0,0,.5)',
    white600: 'rgba(0,0,0,.6)',
    white700: 'rgba(0,0,0,.7)',
    white800: 'rgba(0,0,0,.8)',
    white900: 'rgba(0,0,0,.9)'
  }
})
