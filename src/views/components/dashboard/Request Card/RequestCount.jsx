import { Typography } from '@mui/material'
import React from 'react'

const RequestCount = ({ count, textColor, bgColor }) => {
  return (
    <Typography
      sx={{
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '16px',
        color: textColor,
        backgroundColor: bgColor,
        padding: '10px',
        borderRadius: '5px',
        width: 'fit-content'
      }}
    >
      {count}
    </Typography>
  )
}

export default RequestCount
