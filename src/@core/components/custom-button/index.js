import { Button, Typography } from '@mui/material'
import React from 'react'

const CustomOutlineButton = ({ text, width, handleFunction, type }) => {
  return (
    <Button variant='outlined' sx={{ width: width, border: '1px solid #CD929D', borderRadius: '6px', textTransform: 'none' }} onClick={handleFunction} type={type}>
      <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '20px', color: '#CD929D' }}>{text}</Typography>
    </Button>
  )
}

export default CustomOutlineButton
