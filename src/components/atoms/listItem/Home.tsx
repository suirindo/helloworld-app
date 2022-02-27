import React, { FC } from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import Link from 'next/link'

type HomeListItemProps = {
  selected?: boolean
}

export const HomeListItem: FC<HomeListItemProps> = ({ selected = false }) => {
  const theme = useTheme()

  const item = (
    <ListItem button selected={selected}>
      <ListItemIcon>
        <HomeIcon sx={{ color: theme.palette.primary.main }} />
      </ListItemIcon>
      <ListItemText primary="ホーム" />
    </ListItem>
  )

  if (selected) {
    return item
  }

  return (
    <Link href="/" prefetch={false}>
      <a href="/">{item}</a>
    </Link>
  )
}
