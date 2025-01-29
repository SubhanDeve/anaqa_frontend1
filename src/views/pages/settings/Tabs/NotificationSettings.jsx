import { Box, Switch, Typography } from '@mui/material'
import React from 'react'

const NotificationSettings = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#F8F8F9',
          padding: '12px 14px',
          alignItems: 'center',
          borderRadius: '6px'
        }}
      >
        <Typography>Payments</Typography>
        <Switch></Switch>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#F8F8F9',
          padding: '12px 14px',
          alignItems: 'center',
          borderRadius: '6px'
        }}
      >
        <Typography>Schedule</Typography>
        <Switch></Switch>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#F8F8F9',
          padding: '12px 14px',
          alignItems: 'center',
          borderRadius: '6px'
        }}
      >
        <Typography>Cancellation</Typography>
        <Switch></Switch>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#F8F8F9',
          padding: '12px 14px',
          alignItems: 'center',
          borderRadius: '6px'
        }}
      >
        <Typography>Other Notification</Typography>
        <Switch></Switch>
      </Box>
    </Box>
  )
}

export default NotificationSettings
