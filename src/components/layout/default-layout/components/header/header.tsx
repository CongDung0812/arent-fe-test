import React, { FunctionComponent, useState } from 'react'
import {
  Badge,
  Stack,
  Typography,
  useTheme,
  IconButton,
  Box,
  Popover,
  MenuItem,
} from '@mui/material'
import {
  MemmoIcon,
  ChallengeIcon,
  InfoIcon,
  MenuIcon,
  CloseIcon,
} from '../../../../../icons'
import Image from 'next/image'
import { AppBar } from './header.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MENU_ITEMS = [
  {
    name: '自分の記録',
    Icon: MemmoIcon,
    path: '/',
  },
  {
    name: 'チャレンジ',
    Icon: ChallengeIcon,
    path: '/record',
  },
  {
    name: 'お知らせ',
    Icon: InfoIcon,
    path: '/column',
  },
]

const DRAWER_MENU_ITEMS = [
  {
    name: '自分の記録',
    path: '/',
  },
  {
    name: '体重グラフ',
    path: '/',
  },
  {
    name: '目標',
    path: '/',
  },
  {
    name: '選択中のコース',
    path: '/',
  },
  {
    name: 'コラム一覧',
    path: '/',
  },
  {
    name: '設定',
    path: '/',
  },
]

export const Header: FunctionComponent = () => {
  const router = useRouter()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  return (
    <AppBar>
      <Stack
        width="100%"
        height={64}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth={960}
        >
          <Image src="/images/logo.svg" alt="logo" width={100} height={40} />
          <Stack direction="row" alignItems="center" spacing={4}>
            {MENU_ITEMS.map(({ name, path, Icon }) => (
              <Link key={name} href={path} passHref legacyBehavior>
                <Stack direction="row" spacing={1} sx={{ cursor: 'pointer' }}>
                  {path === MENU_ITEMS[2].path ? (
                    <Badge badgeContent={1} color="warning">
                      <Icon />
                    </Badge>
                  ) : (
                    <Icon />
                  )}
                  <Typography
                    fontSize={16}
                    fontWeight={300}
                    lineHeight="23px"
                    color={
                      router.pathname === path
                        ? theme.palette.primaryExtend.primary400
                        : theme.palette.common.white
                    }
                    sx={{ textDecoration: 'none' }}
                  >
                    {name}
                  </Typography>
                </Stack>
              </Link>
            ))}
            <Box pl={2}>
              <IconButton
                size="small"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                {!!anchorEl ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack bgcolor={theme.palette.gray.gray400}>
          {DRAWER_MENU_ITEMS.map(({ name, path }) => (
            <Link key={name} href={path} passHref legacyBehavior>
              <MenuItem>
                <Typography color="white" py={0.875} px={3.25} minWidth={280}>
                  {name}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Stack>
      </Popover>
    </AppBar>
  )
}

Header.displayName = 'Header'
