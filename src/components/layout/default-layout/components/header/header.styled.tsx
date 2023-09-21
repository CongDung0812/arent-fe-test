import { styled, Box } from '@mui/material'

export const AppBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.dark.dark500,
  zIndex: theme.zIndex.appBar,
  top: 0,
  position: 'sticky',
}))
