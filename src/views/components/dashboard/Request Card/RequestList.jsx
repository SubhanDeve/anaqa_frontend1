import { Box, Typography } from '@mui/material'
import React from 'react'

const RequestList = ({ title, number }) => {
  return (
    <Box
      variant='contained'
      sx={{
        padding: '10px',
        backgroundColor: '#F8F8F9',
        color: '#212529',
        width: '100%',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '24px',
          color: '#212529'
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Typography
          sx={{
            width: 'fit-content',
            backgroundColor: '#CD929D',
            color: '#FFFFFF',
            padding: '4px 8px',
            borderRadius: '7px',
            fontSize: '12px'
          }}
        >
          {number}
        </Typography>
        <img src='/icons/arrow-rightdark.svg' width={16} style={{ color: '#D9D9D9' }} />
      </Box>
    </Box>
  )
}

export default RequestList
