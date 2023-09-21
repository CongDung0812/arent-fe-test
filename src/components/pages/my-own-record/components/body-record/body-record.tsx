import React from 'react'
import { Button, Box, useTheme, Typography, Stack } from '@mui/material'
import { ChartData as ChartDataType } from '../../../../../types/chart'
import Chart from '../../../../shared/chart'
import moment from 'moment'
import { CHART_RECORD_DATA } from '../../../../../data/chart-record'

const BUTTON_ITEMS = ['日', '週', '月', '年']

export const BodyRecord = () => {
  const theme = useTheme()
  const selectedDate = 1620147600000

  return (
    <Box p={2} bgcolor={theme.palette.dark.dark500}>
      <Stack direction="row" spacing={2.5} color="white" mb={1}>
        <Typography textTransform="uppercase">Body Record</Typography>
        <Typography>
          {moment(new Date(selectedDate)).format('YYYY.MM.DD')}
        </Typography>
      </Stack>
      <Box width="100%" height={304}>
        <Chart
          data={CHART_RECORD_DATA as ChartDataType[]}
          labels={CHART_RECORD_DATA.map((data) => data.month + '月')}
          lineDrawFields={['a', 'b']}
        />
      </Box>
      <Stack direction="row" alignItems="center" spacing={2} mt={1}>
        {BUTTON_ITEMS.map((item, index) => (
          <Button
            key={item}
            size="small"
            variant="contained"
            color={index === BUTTON_ITEMS.length - 1 ? 'primary' : 'inherit'}
            style={{ padding: '0 20px', borderRadius: '11px !important' }}
          >
            {item}
          </Button>
        ))}
      </Stack>
    </Box>
  )
}
BodyRecord.displayName = 'BodyRecord'
