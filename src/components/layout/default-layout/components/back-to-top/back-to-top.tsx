import React, { FunctionComponent, useCallback } from 'react'
import { Zoom, Box, Tooltip } from '@mui/material'

interface ScrollTopProps {
  children: React.ReactElement
}

export const BackToTop: FunctionComponent<ScrollTopProps> = ({ children }) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (e.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [])

  return (
    <Tooltip
      title="Back to top"
      placement="left"
      arrow
      TransitionComponent={Zoom}
    >
      <Box
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: '12vh',
          right: 16,
          zIndex: 100,
        }}
      >
        {children}
      </Box>
    </Tooltip>
  )
}

BackToTop.displayName = 'BackToTop'
