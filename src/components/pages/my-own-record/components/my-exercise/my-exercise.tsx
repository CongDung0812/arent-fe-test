import React from 'react'
import { Grid, Box, useTheme, Typography, Stack, Divider } from '@mui/material'
import moment from 'moment'
import { EXERCISE_DATA } from '../../../../../data/exercise-data'

export const MyExercise = () => {
  const theme = useTheme()
  const selectedDate = 1620147600000

  return (
    <Box bgcolor={theme.palette.dark.dark500} p={2}>
      <Stack direction="row" spacing={2.5} color="white" mb={1}>
        <Typography textTransform="uppercase">My exercise</Typography>
        <Typography>
          {moment(new Date(selectedDate)).format('YYYY.MM.DD')}
        </Typography>
      </Stack>
      <Box maxHeight={200} sx={{ overflowY: 'auto' }}>
        <Grid container columns={2}>
          {EXERCISE_DATA.map((exercise, index) => (
            <Grid item key={index} lg={1} xl={1} md={1} sm={1} xs={2}>
              <Box sx={{ m: '5px 30px 5px 0' }}>
                <Box display="flex" fontSize={13}>
                  <Box
                    sx={{
                      width: '5%',
                      color: 'white',
                      fontSize: 30,
                      lineHeight: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      mt: '-15px',
                    }}
                  >
                    <sup>.</sup>
                  </Box>
                  <Box width="65%">
                    <Typography color="white">{exercise.name}</Typography>
                    <Typography color="primary.main">
                      {Math.round(exercise.cal / 1000)}kcal
                    </Typography>
                  </Box>
                  <Typography width="20%" color="primary.main">
                    {Math.round(exercise.time / 1000 / 60)}min
                  </Typography>
                </Box>
                <Divider sx={{ borderColor: theme.palette.gray.gray400 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
MyExercise.displayName = 'MyExercise'
