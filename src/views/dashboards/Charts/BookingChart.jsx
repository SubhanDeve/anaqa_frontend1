import { Box, Card } from '@mui/material'
import React from 'react'
import CustomProgressBar from 'src/@core/components/CustomProgressBar'
import DateTimeRange from 'src/@core/components/DateTimeRange/DateTimeRange'
import Heading from 'src/@core/components/Heading'

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

  const menuOptions = [
    {
      title: 'Monday'
    },
    {
      title: 'Tuesday'
    },
    {
      title: 'Wednesday'
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
        justifyContent: 'space-around',
        height: '100%'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Heading headingText={'Booking Analytics'} />
        </Box>
        <Box>
          <DateTimeRange bgcolor={'#F8F8F9'} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px'
        }}
      >
        {progressData.map((item, index) => (
          <CustomProgressBar key={index} title={item.title} value={item.value} count={item.count} />
        ))}
      </Box>
    </Card>
  )
}

export default BookingChart
