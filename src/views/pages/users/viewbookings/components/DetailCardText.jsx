import { Box, Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'

const DetailCardText = ({ item, price, color, weight }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '500',
          color: color,
          fontWeight: weight
        }}
      >
        {item}
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: '500',
          color: color,
          fontWeight: weight
        }}
      >
        SAR {price}
      </Typography>
    </Box>
  )
}

export default DetailCardText
