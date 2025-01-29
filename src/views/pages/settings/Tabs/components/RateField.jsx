import { Box } from '@mui/material'
import React from 'react'

const RateField = ({ label, placeholder, name }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>{label}</label>
      <Box
        sx={{
          display: 'flex',
          border: '1px solid #E3E3E3',
          borderRadius: '5px',
          padding: '4px 10px',
          width: 'fit-content',
          width: '87%',
          justifyContent: 'space-between'
        }}
      >
        <input
          type='text'
          pattern='[0-9]+'
          placeholder={placeholder}
          name={name}
          style={{
            fontSize: '14px',
            fontWeight: '400',
            width: '74%'
          }}
        />
        <img src='/icons/rate.svg' alt='%' />
      </Box>
    </Box>
  )
}

export default RateField
