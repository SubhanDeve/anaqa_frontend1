import { Button } from '@mui/material'
import React from 'react'

const CustomSecondaryButton = ({ text, width, handlePrint, type }) => {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#F5EAEC',
        color: '#CD929D',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
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
