import React, { useCallback, useState } from 'react'
import { Stack, Typography, useTheme, Box, Grid } from '@mui/material'
import AddMoreButton from '../../shared/add-more-button'
import RecordThumbnail from './components/record-thumbnail'
import BodyRecord from './components/body-record'
import MyExercise from './components/my-exercise'
import { DIARY_DATA } from '../../../data/diary-data'
import moment from 'moment'

export const MyOwnRecord = () => {
  const theme = useTheme()
  const [diaryData, setDiaryData] = useState(DIARY_DATA)

  const handleLoadMore = useCallback(
    () => setDiaryData([...diaryData, ...DIARY_DATA]),
    [diaryData]
  )

  return (
    <Stack alignItems="center" spacing={2.625} py={7}>
      <Stack maxWidth={960} width="100%" spacing={3}>
        <RecordThumbnail />
        <BodyRecord />
        <MyExercise />
        <Stack spacing={3.75}>
          <Stack>
            <Typography
              textTransform="uppercase"
              fontSize={22}
              fontWeight={400}
              fontFamily="InterLight"
            >
              My Diary
            </Typography>
            <Box>
              <Grid
                container
                columns={12}
                width="100%"
                justifyContent="space-between"
              >
                {diaryData.map((diary, index) => (
                  <Grid
                    item
                    key={index}
                    xl={2.9}
                    lg={2.9}
                    md={5.9}
                    sm={5.9}
                    xs={12}
                    sx={{ m: '5px 0' }}
                  >
                    <Box
                      p={2}
                      border={`2px solid ${theme.palette.dark.dark500}`}
                    >
                      <Box mb={1}>
                        <Box>
                          {moment(new Date(diary.date)).format('YYYY.MM.DD')}
                        </Box>
                        <Box>{diary.time}</Box>
                      </Box>
                      <Typography fontSize={13}>{diary.title}</Typography>
                      <Typography fontSize={12}>{diary.description}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
          <Stack alignItems="center">
            <AddMoreButton onClick={handleLoadMore}>
              自分の日記をもっと見る
            </AddMoreButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
MyOwnRecord.displayName = 'MyOwnRecord'
