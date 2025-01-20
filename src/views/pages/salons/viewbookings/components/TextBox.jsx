import { Box, Typography } from '@mui/material'
import React from 'react'

const TextBox = props => {
  const { title, detail } = props
  return (
    <Box sx={{ display: 'grid', gap: '8px', width: 'fit-content' }}>
      <Typography
        sx={{
          fontSize: '16px',
          lineHeight: '16px',
          fontWeight: '600',
          color: '#212529'
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          lineHeight: '14px',
          fontWeight: '500'
        }}
      >
        {detail}
      </Typography>
    </Box>
  )
}

export default TextBox
