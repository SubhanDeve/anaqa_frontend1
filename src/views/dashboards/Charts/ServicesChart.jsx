import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import Heading from 'src/@core/components/Heading'
import IconServiceButton from 'src/views/components/dashboard/Services Chart/IconServiceButton'

const serviceData = [
  {
    icon: '/icons/service/haircut.svg',
    title: 'Hair cut',
    percent: '48%'
  },
  {
    icon: '/icons/service/thread.svg',
    title: 'Threading',
    percent: '06%'
  },
  {
    icon: '/icons/service/manicure.svg',
    title: 'Manicure',
    percent: '12%'
  },
  {
    icon: '/icons/service/padicure.svg',
    title: 'Pedicure',
    percent: '11%'
  },
  {
    icon: '/icons/service/padicure.svg',
    title: 'Pedicure',
    percent: '11%'
  }
]

const ServicesChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '12px 20px',
        justifyContent: 'space-between'
      }}
    >
      <Heading headingText='Top Services' />
      {serviceData.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mb: '6px' }}>
          <IconServiceButton icon={item.icon} title={item.title} percent={item.percent} />
          <hr></hr>
        </Box>
      ))}
      <CustomOutlineButton text='View All' width={'100%'} />
    </Card>
  )
}

export default ServicesChart
