import { Box } from '@mui/material'
import React from 'react'

const NotificationButton = (props) => {
  const { icon } = props
  return (
    <Box>
      <img src={icon} alt='MSG' width={'48px'} />
    </Box>
  )
}

export default NotificationButton
