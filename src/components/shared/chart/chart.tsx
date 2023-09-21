import React, { FC, useMemo } from 'react'
import { ChartData as ChartDataType } from '../../../types/chart'
import { Line } from 'react-chartjs-2'
import { useTheme } from '@mui/material'

interface ChartProps {
  data: ChartDataType[]
  lineDrawFields: (keyof ChartDataType)[]
  labels: string[]
}

export const Chart: FC<ChartProps> = ({ labels, lineDrawFields, data }) => {
  const theme = useTheme()

  const colors = useMemo(() => {
    return [theme.palette.primary.main, theme.palette.secondary.main]
  }, [theme.palette.primary.main, theme.palette.secondary.main])

  const ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      customCanvasBackgroundColor: {
        color: theme.palette.dark.dark600,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: theme.palette.gray.gray400,
        },
      },
    },
  }

  const formatData = useMemo(() => {
    return {
      labels,
      datasets: lineDrawFields.map((field, index) => {
        return {
          data: data.map((pack) => pack[field]),
          borderColor: colors[index % 2],
        }
      }),
    }
  }, [colors, data, lineDrawFields, labels])

  return <Line options={ChartOptions} data={formatData} redraw />
}
Chart.displayName = 'Chart'
