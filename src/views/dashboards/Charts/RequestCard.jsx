import { Box, Card, Typography, Button, Badge } from '@mui/material'
import React from 'react'
import Heading from 'src/@core/components/Heading'
import RequestCount from 'src/views/components/dashboard/Request Card/RequestCount'
import RequestList from 'src/views/components/dashboard/Request Card/RequestList'

const countData = [
  { count: 17, textColor: '#6C757D', bgColor: '#F8F8F9' },
  { count: 12, textColor: '#F59E0B', bgColor: '#F59E0B0D' },
  { count: 40, textColor: '#1BA40F', bgColor: '#1BA40F0D' }
]

const requestData = [
  { title: 'Salon Registration', number: 4 },
  { title: 'Sub Service Addition', number: 0 },
  { title: 'Service Addition', number: 2 },
  { title: 'Pricing Change request', number: 0 },
  { title: 'Promotion request', number: 1 }
]

const RequestCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        padding: '14px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading headingText='New Requests' />
        <Box sx={{ display: 'flex', gap: '12px' }}>
          {countData.map((item, index) => (
            <RequestCount key={index} count={item.count} textColor={item.textColor} bgColor={item.bgColor} />
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {requestData.map((item, index) => (
          <RequestList title={item.title} number={item.number} />
        ))}
      </Box>
    </Card>
  )
}

export default RequestCard
