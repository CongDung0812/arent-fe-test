import { ThemeOptions, createTheme } from '@mui/material'
import React from 'react'

export const createTypography = (): ThemeOptions['typography'] => {
  const theme = createTheme()
  const headingStyle: React.CSSProperties = {
    fontStyle: 'normal',
    fontFamily: 'Hiragino Kaku Gothic Pro',
  }
  return {
    h1: {
      ...headingStyle,
    },
    h2: {
      ...headingStyle,
    },
    h3: {
      ...headingStyle,
    },
    h4: {
      ...headingStyle,
    },
    h5: {
      ...headingStyle,
    },
    h6: {
      ...headingStyle,
    },
    button: {
      fontSize: 16,
      [theme.breakpoints.up('md')]: {
        fontSize: 20,
      },
    },
    subtitle1: {
      fontSize: 14,
      [theme.breakpoints.up('md')]: {
        fontSize: 18,
      },
    },
    subtitle2: {
      fontSize: 18,
      [theme.breakpoints.up('md')]: {
        fontSize: 22,
      },
    },
    body1: {},
    body2: {},
  }
}
