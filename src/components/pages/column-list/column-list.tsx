import React, { useState, useCallback } from 'react'
import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import { NEWS_DATA } from '../../../data/news-data'
import AddMoreButton from '../../shared/add-more-button'
import Image from 'next/image'

const RECOMMENDED_DATA = [
  {
    name: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    name: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    name: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    name: 'RECOMMENDED HEALTH',
    description: '健康',
  },
]

export const ColumnList = () => {
  const theme = useTheme()
  const [data, setData] = useState(NEWS_DATA)

  const handleLoadMore = useCallback(
    () => setData([...data, ...NEWS_DATA]),
    [data]
  )

  return (
    <Stack alignItems="center" spacing={2.625} pt={7} pb={8}>
      <Stack maxWidth={960} width="100%" spacing={7}>
        <Box>
          <Stack direction="row" justifyContent="space-between">
            {RECOMMENDED_DATA.map(({ name, description }, index) => (
              <Stack
                key={index}
                alignItems="center"
                justifyContent="center"
                height={144}
                width={215.98}
                bgcolor={theme.palette.dark.dark600}
                divider={
                  <Divider sx={{ borderColor: 'white', width: '30%' }} />
                }
                spacing={0.5}
                sx={{ aspectRatio: 2 / 1 }}
              >
                <Typography
                  textTransform="uppercase"
                  fontSize={22}
                  fontWeight={400}
                  textAlign="center"
                  color="primary.main"
                >
                  {name}
                </Typography>
                <Typography color="white" fontSize={18} fontWeight={300}>
                  {description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
        <Stack spacing={3.25}>
          <Box>
            <Grid container columns={12} spacing={2.25}>
              {data.map(({ tag, text, time, img }, index) => (
                <Grid item key={index} xs={3}>
                  <Stack spacing={0.5}>
                    <Box
                      width={234}
                      height={145}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      position="relative"
                    >
                      <Image src={img} alt="" fill />
                      <Typography
                        position="absolute"
                        bottom={0}
                        left={0}
                        color="white"
                        fontSize={15}
                        fontWeight={400}
                        bgcolor={theme.palette.primary.main}
                        px={1}
                        textTransform="capitalize"
                      >
                        {time}
                      </Typography>
                    </Box>
                    <Stack>
                      <Typography
                        fontSize={15}
                        fontWeight={300}
                        color="dark.dark500"
                        lineHeight="22px"
                      >
                        {text}
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={300}
                        color="primaryExtend.primary400"
                        lineHeight="22px"
                      >
                        {tag}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Stack alignItems="center">
            <AddMoreButton onClick={handleLoadMore}>
              コラムをもっと見る
            </AddMoreButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
ColumnList.displayName = 'ColumnList'
