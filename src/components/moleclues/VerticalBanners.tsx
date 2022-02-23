import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { MediumRectangleDummyBanner } from '@/atoms/banners/MediumRectangleDummy'

export const VerticalBanners: FC = () => (
  <Box component="div">
    <Box pb={2}>
      <MediumRectangleDummyBanner />
    </Box>
    <Box>
      <MediumRectangleDummyBanner />
    </Box>
  </Box>
)
