import React, { FC } from 'react'
import { Drawer } from '@material-ui/core'

type PermanentLeftDrawerProps = {
  children: JSX.Element
}

export const PermanentLeftDrawer: FC<PermanentLeftDrawerProps> = ({
  children,
}) => {
  const w = 200
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: w,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: w,
          boxSizing: 'border-box',
        },
      }}
    >
      {children}
    </Drawer>
  )
}
