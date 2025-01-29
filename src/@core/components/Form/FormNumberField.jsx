import { Box } from '@mui/material'
import React from 'react'
import PhoneInput from 'react-phone-input-2'

const FormNumberField = ({ label }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>{label}</label>
      <PhoneInput country={'sa'} onChange={phone => console.log({ phone })} />
    </Box>
  )
}

export default FormNumberField
