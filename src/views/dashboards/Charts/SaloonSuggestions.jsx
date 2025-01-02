import { Box, Card } from '@mui/material'
import React from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import Heading from 'src/@core/components/Heading'
import SaloonCard from 'src/views/components/dashboard/Saloon Suggestion/SaloonCard'

const saloonsData = [
  {
    saloonImage: '/images/cards/saloon.png',
    title: 'Smart Cut',
    starCount: '4.5',
    totalServices: '8'
  },
  {
    saloonImage: '/images/cards/salooon2.png',
    title: 'Smart Cut',
    starCount: '4.5',
    totalServices: '8'
  },
  {
    saloonImage: '/images/cards/salooon3.png',
    title: 'Smart Cut',
    starCount: '4.5',
    totalServices: '8'
  }
]

const SaloonSuggestions = () => {
  return (
    <Card elevation={0} sx={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading headingText='Top Rated Saloons' />
        <CustomOutlineButton text='View All' width={'16%'} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
        {saloonsData.map((item, index) => (
          <SaloonCard
            title={item.title}
            totalServices={item.totalServices}
            saloonImage={item.saloonImage}
            starCount={item.starCount}
          />
        ))}
      </Box>
    </Card>
  )
}

export default SaloonSuggestions
