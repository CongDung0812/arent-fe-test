import React from 'react'
import { Grid, Box, useTheme, Typography } from '@mui/material'
import Image from 'next/image'
import { ImageWrp, TextWrp } from './record-thumbnail.styled'

const RECORD_ITEMS = [
  {
    img: '/images/record/1.svg',
    title: 'body record',
    text: '自分のカラダの記録',
  },
  {
    img: '/images/record/2.svg',
    title: 'my exercise',
    text: '自分の運動の記録',
  },
  {
    img: '/images/record/3.svg',
    title: 'my diary',
    text: '自分の日記',
  },
]

export const RecordThumbnail = () => {
  const theme = useTheme()

  return (
    <Grid container columns={3.35} gap={6} justifyContent="space-between">
      {RECORD_ITEMS.map(({ img, title, text }) => (
        <Grid key={title} item xl={1} lg={1} md={1} sm={3} xs={3}>
          <Box position="relative" width={288} height={288}>
            <Image
              src="/images/record/background.svg"
              alt="record-background"
              width={100}
              height={100}
              layout="responsive"
            />
            <ImageWrp>
              <Image
                alt="record-thumb"
                src={img}
                width={50}
                height={50}
                layout="responsive"
              />
            </ImageWrp>
            <TextWrp spacing={0.5}>
              <Typography
                fontSize={25}
                fontWeight={400}
                textTransform="uppercase"
                color="primary.main"
              >
                {title}
              </Typography>
              <Typography
                color="white"
                minWidth={160}
                textAlign="center"
                bgcolor={theme.palette.primaryExtend.primary400}
              >
                {text}
              </Typography>
            </TextWrp>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
RecordThumbnail.displayName = 'RecordThumbnail'
