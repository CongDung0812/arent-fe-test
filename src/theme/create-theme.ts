import { createTheme as createMuiTheme } from '@mui/material'
import { createPalette } from './palette'
import { createTypography } from './typography'
export type ThemeMode = 'light'

export const createTheme = (mode: ThemeMode = 'light') => {
  return createMuiTheme({
    palette: createPalette(mode),
    typography: createTypography(),
  })
}
