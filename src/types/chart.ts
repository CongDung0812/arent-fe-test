interface HomePageChartData {
  month: number
  a: number
  b: number
}

interface RecordChartData {
  month: number
  c: number
  d: number
}

export type ChartData = HomePageChartData & RecordChartData
