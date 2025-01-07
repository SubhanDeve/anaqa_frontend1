import { Box, Typography } from '@mui/material'
import React from 'react'

const InfoBox = ({ title, value }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography
        sx={{
          fontSize: '14px',
          lineHeight: '14px',
          fontWeight: '500',
          color: '#6C757D'
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          border: '1px solid #E3E3E3',
          borderRadius: '5px',
          padding: '10px'
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '14px',
            color: '#6C757D'
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

export default InfoBox
