import React, { useState, useMemo, useCallback } from 'react'
import {
  Box,
  ButtonBase,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Banner from './components/banner'
import Image from 'next/image'
import { search } from '../../../utils/search'
import { MENU_DATA } from '../../../data/menu-home-page'
import AddMoreButton from '../../shared/add-more-button'

const FILTER_BUTTON_ITEMS = [
  {
    icon: '/images/home-page/icon_knife.svg',
    value: 'morning',
  },
  {
    icon: '/images/home-page/icon_knife.svg',
    value: 'lunch',
  },
  {
    icon: '/images/home-page/icon_knife.svg',
    value: 'dinner',
  },
  {
    icon: '/images/home-page/icon_cup.svg',
    value: 'snack',
  },
]

export const Homepage = () => {
  const theme = useTheme()
  const [filterText, setFilterText] = useState('')
  const [data, setData] = useState(MENU_DATA)

  const filteredData = useMemo(
    () => search(data || [], ({ title }) => `${title}`, filterText),
    [data, filterText]
  )

  const handleLoadMore = useCallback(
    () => setData([...data, ...MENU_DATA]),
    [data]
  )

  return (
    <Stack alignItems="center" spacing={2.625} pb={7}>
      <Banner />
      <Stack maxWidth={960} width="100%" spacing={3}>
        <Stack direction="row" justifyContent="space-between">
          {FILTER_BUTTON_ITEMS.map(({ icon, value }) => (
            <ButtonBase
              key={value}
              onClick={() =>
                filterText ? setFilterText('') : setFilterText(value)
              }
            >
              <Box
                width={150}
                height={150}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src="/images/home-page/background.svg"
                  alt="menu-background"
                  fill
                />
                <Box width="40%" height="40%" position="absolute" bottom={55}>
                  <Image src={icon} alt="" fill />
                </Box>
                <Typography
                  position="absolute"
                  bottom={22}
                  color="white"
                  textTransform="capitalize"
                  fontSize={20}
                  fontWeight={400}
                >
                  {value}
                </Typography>
              </Box>
            </ButtonBase>
          ))}
        </Stack>
        <Stack alignItems="center" spacing={3.25}>
          <Box width="100%">
            <Grid container spacing={1}>
              {filteredData.map(({ img, title, date }, index) => (
                <Grid key={`${title}-${index}`} item xs={3}>
                  <Box
                    width={234}
                    height={234}
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
                      {date}.{title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <AddMoreButton onClick={handleLoadMore}>
            記録をもっと見る
          </AddMoreButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
Homepage.displayName = 'Homepage'
