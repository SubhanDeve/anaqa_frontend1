import { Typography } from '@mui/material'
import React from 'react'

const CustomPageHeading = ({ text }) => {
  return (
    <Typography sx={{ fontSize: '26px', lineHeight: '40px', fontWeight: '600', color: '#212529' }}>{text}</Typography>
  )
}

export default CustomPageHeading
