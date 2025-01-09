import { Button } from '@mui/material'
import React from 'react'

const CustomSecondaryButton = ({ text, width, handlePrint, type }) => {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#F5EAEC',
        color: '#CD929D',
        boxShadow: 'none',
        textTransform: 'none',
        ':hover': { boxShadow: 'none', backgroundColor: '#ECD5D9' },
        width: width
      }}
      onClick={handlePrint}
      type={type}
    >
      {text}
    </Button>
  )
}

export default CustomSecondaryButton
