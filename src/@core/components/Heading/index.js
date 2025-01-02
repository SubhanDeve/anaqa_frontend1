import { Typography } from '@mui/material'
import React from 'react'

const Heading = ({ headingText }) => {
  return (
    <Typography sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '32px', color: '#212529' }}>{headingText}</Typography>
  )
}

export default Heading

