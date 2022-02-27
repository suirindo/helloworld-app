import React, { FC } from 'react'
import { List } from '@material-ui/core'
import { HomeListItem } from '@/atoms/listItem/Home'

type NavigationListProps = {
  currentRouteName?: string
}

export const NavigationList: FC<NavigationListProps> = ({
  currentRouteName,
}) => (
  <List>
    <HomeListItem selected={currentRouteName === 'home'} />
  </List>
)
