import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const IconServiceButton = ({ icon, title, percent }) => {
  return (
    <Button
      variant='text'
      sx={{
        textTransform: 'none',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        px: 0.5
      }}
    >
      <Box display={'flex'} gap={2}>
        <img src={icon} width={36} />
        <Box
          sx={{
            display: 'grid'
          }}
        >
          <Typography
            sx={{ textAlign: 'left', fontSize: '16px', lineHeight: '20px', fontWeight: '600', color: '#212529' }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ textAlign: 'left', fontSize: '12px', lineHeight: '16px', fontWeight: '500', color: '#6C757D' }}
          >
            {percent}
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src='/icons/arrow-right.svg' width={20} />
      </Box>
    </Button>
  )
}

export default IconServiceButton
