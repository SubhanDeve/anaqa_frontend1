import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const SaloonCard = ({ saloonImage, title, starCount, totalServices }) => {
  return (
    <Card
      elevation={0}
      sx={{ backgroundColor: '#F8F8F9', padding: '10px', width: '100%', display: 'grid', gap: '8px' }}
    >
      <img src={saloonImage} alt={title} style={{ borderRadius: '6px' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#212529' }}>{title}</Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: '500', color: '#6C757D' }}
        >
          <img src='/icons/salooncard/star.svg' /> {starCount}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>{totalServices} Services</Typography>
    </Card>
  )
}

export default SaloonCard
