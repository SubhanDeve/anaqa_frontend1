import { DatePicker } from '@mui/lab'
import { Box, MenuItem, Select, Typography, ProgressBar, LinearProgress, Card } from '@mui/material'
import React from 'react'
import CustomProgressBar from 'src/@core/components/CustomProgressBar'

const BookingChart = () => {
  const progressData = [
    {
      title: 'Pending',
      count: '5,324',
      value: 90
    },
    {
      title: 'Confirmed',
      count: '3,434',
      value: 60
    },
    {
      title: 'Cancelled',
      count: '2,532',
      value: 40
    },
    {
      title: 'Completed',
      count: '4,532',
      value: 80
    }
  ]

  return (
    <Card
      elevation={0}
      sx={{
        padding: '20px',
        display: 'flex',
        gap: '30px',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '24px' }}>Booking Analytics</Typography>
        </Box>
        <Box>
          <Select size='small' defaultValue='Date & Time' label='Date & Time' variant='filled'>
            <MenuItem>Today</MenuItem>
            <MenuItem>Yesterday</MenuItem>
            <MenuItem>Last 7 days</MenuItem>
            <MenuItem>Last 30 days</MenuItem>
            <MenuItem>Last 90 days</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box sx={{ display: 'grid', alignItems: 'center', gap: '8px' }}>
        {progressData.map((item, index) => (
          <CustomProgressBar key={index} title={item.title} value={item.value} count={item.count} />
        ))}
      </Box>
    </Card>
  )
}

export default BookingChart
