import React from 'react'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import Chart from '../../../../shared/chart'
import { ChartData } from '../../../../../types/chart'
import { DATA_CHART_HOME_PAGE } from '../../../../../data/chart-home-page'

export const Banner = () => {
  return (
    <Grid container>
      <Grid item xs={4.5}>
        <Box
          width="100%"
          height="30vh"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/images/home-page/banner.png"
            alt="homepage-banner"
            fill
          />
          <Box width={181} height={181} position="absolute">
            <Image
              src="/images/home-page/banner-record.png"
              alt="homepage-banner"
              fill
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={7.5}>
        <Box height="30vh">
          <Chart
            data={DATA_CHART_HOME_PAGE as ChartData[]}
            labels={DATA_CHART_HOME_PAGE.map((data) => data.month + '月')}
            lineDrawFields={['a', 'b']}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
Banner.displayName = 'Banner'
