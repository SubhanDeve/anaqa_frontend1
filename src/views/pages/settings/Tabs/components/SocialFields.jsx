import { Box } from '@mui/material'
import React from 'react'

const SocialField = ({ icon, label, placeholder, name }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>{label}</label>

      <Box
        sx={{
          display: 'flex',
          border: '1px solid #E3E3E3',
          borderRadius: '5px',
          padding: '10px',
          gap: '10px'
        }}
      >
        <img src={icon} />
        <hr style={{ height: '1.4rem', width: '1px', backgroundColor: '#CCCFCF', color: '#CCCFCF' }} />
        <input
          type='text'
          placeholder={placeholder}
          name={name}
          style={{
            fontSize: '14px',
            fontWeight: '400',
            width: '100%'
          }}
        />
      </Box>
    </Box>
  )
}

export default SocialField
