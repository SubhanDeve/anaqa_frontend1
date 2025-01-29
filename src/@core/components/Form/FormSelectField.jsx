import { Box, ListItem, MenuItem, Select } from '@mui/material'
import React from 'react'

const FormSelectField = ({ label, name, option, onChange }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontSize: '14px', fontWeight: '500', color: '#6C757D' }}>{label}</label>

      <select
        name={name}
        style={{
          border: '1px solid #E3E3E3',
          borderRadius: '5px',
          fontSize: '14px',
          fontWeight: '400',
          backgroundColor: '#FFFFFF',
          padding: '10px'
        }}
        onChange={onChange}
      >
        {option.map((item, index) => (
          <option key={index} value={item.value} style={{ backgroundColor: 'transparent', fontFamily: 'Outfit' }}>
            {item.options}
          </option>
        ))}
      </select>
    </Box>
  )
}

export default FormSelectField
