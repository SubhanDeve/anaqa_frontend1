import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

const CustomProgressBar = ({ title, value, count }) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: '600', lineHeight: '18px' }}>{title}</Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '20px' }}>{count}</Typography>
      </Box>
      <Box>
        <LinearProgress variant='determinate' value={value} sx={{ width: '100%', height: '12px' }} />
      </Box>
    </>
  )
}

export default CustomProgressBar
