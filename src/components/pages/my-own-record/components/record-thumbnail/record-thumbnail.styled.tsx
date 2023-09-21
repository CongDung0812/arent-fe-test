import { styled, Stack } from '@mui/material'

export const ImageWrp = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '84%',
  height: '84%',
  top: 23,
  left: 23,
  mixBlendMode: 'luminosity',
}))

export const TextWrp = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '70%',
  height: '100%',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
}))
