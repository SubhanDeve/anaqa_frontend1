import { Box, Typography } from '@mui/material'
import React from 'react'

const StaticFormField = ({ label, value, image, image2 }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '14px' }}>{label}</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          border: '1px solid #E3E3E3',
          borderRadius: '5px',
          padding: '10px',
          width: '100%',
          alignItems: 'center'
        }}
      >
        {image ? <img src='/images/salon/saudi-arabia.png' /> : null}
        <Typography sx={{ fontSize: '13px', fontWeight: '400', lineHeight: '16px' }}>{value}</Typography>
        {image2 ? <img src={image2} /> : null}
      </Box>
    </Box>
  )
}

export default StaticFormField
