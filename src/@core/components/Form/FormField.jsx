import { Box } from '@mui/material'
import React from 'react'

const FormField = ({ label, placeholder, name }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        style={{
          border: '1px solid #E3E3E3',
          borderRadius: '5px',
          padding: '10px',
          fontSize: '13px',
          fontWeight: '400',
          width: '100%'
        }}
      />
    </Box>
  )
}

export default FormField
