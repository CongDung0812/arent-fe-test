import React, { FC } from 'react'
import { ButtonProps, Button, useTheme } from '@mui/material'

export const AddMoreButton: FC<ButtonProps> = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        color: 'white',
        background: theme.palette.gradient.primary,
        boxShadow: 'none',
      }}
    >
      {children}
    </Button>
  )
}

AddMoreButton.displayName = 'AddMoreButton'
