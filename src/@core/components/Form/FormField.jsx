import { Box } from '@mui/material'
import React from 'react'

const FormField = ({ label, placeholder, name }) => {
  const isRequired = label?.includes('*')
  const labelText = label?.replace('*', '')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>
        {labelText}
        {isRequired && <span style={{ color: 'red', marginLeft: '2px' }}>*</span>}
      </label>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        required={isRequired}
        style={{
          padding: '8px',
          border: '1px solid #ced4da',
          borderRadius: '4px',
          fontSize: '14px'
        }}
      />
    </Box>
  )
}

export default FormField
