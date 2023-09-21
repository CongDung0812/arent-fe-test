import React, { FunctionComponent, ReactNode } from 'react'
import { Stack, Box } from '@mui/material'
import Header from './components/header'
import Footer from './components/footer'

interface DefaultLayoutProps {
  children?: ReactNode
}

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  children,
}) => {
  return (
    <Stack width="100%" height="100vh">
      <Box flex={1}>
        <Header />
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Stack>
  )
}

DefaultLayout.displayName = 'DefaultLayout'
