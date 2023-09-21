import React from 'react'
import { Stack, Typography, useTheme } from '@mui/material'

const FOOTER_ITEM = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
]

export const Footer = () => {
  const theme = useTheme()
  return (
    <Stack
      minHeight={128}
      bgcolor={theme.palette.dark.dark500}
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        maxWidth={960}
      >
        {FOOTER_ITEM.map((item) => (
          <Typography key={item} fontSize={11} fontWeight={300} color="white">
            {item}
          </Typography>
        ))}
      </Stack>
    </Stack>
  )
}

Footer.displayName = 'Footer'
