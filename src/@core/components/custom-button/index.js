import { Button, Typography } from '@mui/material'
import React from 'react'

const CustomOutlineButton = ({ text, width, handleFunction, type }) => {
  return (
    <Button variant='outlined' sx={{ width: width, border: '1px solid #E8E8E8', borderRadius: '12px', textTransform: 'none', padding: '14px 20px' }} onClick={handleFunction} type={type}>
      <Typography sx={{ fontSize: '13px', fontWeight: '500', lineHeight: '16px', color: '#CD929D' }}>{text}</Typography>
    </Button>
  )
}

export default CustomOutlineButton
