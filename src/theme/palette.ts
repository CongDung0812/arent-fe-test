import { ThemeMode } from './create-theme'
import { PaletteOptions } from '@mui/material'
import { Palette } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    primaryExtend: {
      primary400: string
      primary500: string
    }
    dark: {
      dark500: string
      dark600: string
    }
    gray: {
      gray400: string
    }
    gradient: {
      primary: string
    }
  }
}

export const colors = {
  primary: '#FFCC21',
  secondary: '#8FE9D0',

  primary400: '#FF963C',
  primary500: '#EA6C00',

  dark500: '#414141',
  dark600: '#2E2E2E',

  gray400: '#777',
}

const createSharedOptions = (mode: ThemeMode): PaletteOptions => ({
  mode,
  common: {},
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
  },
})

const createModeOptions = (mode: ThemeMode) => {
  const modeOptions: Record<ThemeMode, Partial<PaletteOptions>> = {
    light: {
      text: {
        primary: colors.dark500,
      },
    },
  }
  return modeOptions[mode]
}

const createCustomOptions = (mode: ThemeMode) => {
  const modeOptions: Record<ThemeMode, Partial<Palette>> = {
    light: {
      primaryExtend: {
        primary400: colors.primary400,
        primary500: colors.primary500,
      },
      dark: {
        dark500: colors.dark500,
        dark600: colors.dark600,
      },
      gray: {
        gray400: colors.gray400,
      },
      gradient: {
        primary: `linear-gradient(90deg, ${colors.primary} 12.83%, ${colors.primary400} 100%)`,
      },
    },
  }
  return modeOptions[mode]
}

export const createPalette = (mode: ThemeMode): PaletteOptions => ({
  ...createSharedOptions(mode),
  ...createModeOptions(mode),
  ...createCustomOptions(mode),
})
