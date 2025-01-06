import { Button } from '@mui/material'
import React from 'react'

const CustomSecondaryButton = ({ text, width }) => {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#FAF5F6',
        color: '#CD929D',
        boxShadow: 'none',
        textTransform: 'none',
        ':hover': { boxShadow: 'none' },
        width: width
      }}
    >
      {text}
    </Button>
  )
}

export default CustomSecondaryButton
