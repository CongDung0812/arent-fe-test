import React, { FunctionComponent, ReactNode } from 'react'
import { Stack, Box, Fab, useTheme } from '@mui/material'
import Header from './components/header'
import Footer from './components/footer'
import BackToTop from './components/back-to-top'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

interface DefaultLayoutProps {
  children?: ReactNode
}

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  children,
}) => {
  const theme = useTheme()
  return (
    <Stack width="100%" height="100vh">
      <Box id="back-to-top-anchor" />
      <Box flex={1}>
        <Header />
        <Box>{children}</Box>
        <BackToTop>
          <Fab
            style={{
              color: theme.palette.gray.gray400,
              backgroundColor: theme.palette.common.white,
              boxShadow: 'none',
              border: `1px solid ${theme.palette.gray.gray400}`,
            }}
            size="small"
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </BackToTop>
      </Box>
      <Footer />
    </Stack>
  )
}

DefaultLayout.displayName = 'DefaultLayout'
