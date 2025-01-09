import { Button } from '@mui/material'
import React from 'react'

const CustomContainButton = ({ text, width, handleFunction, type }) => {
  return (
    <Button
      variant='contained'
      size='large'
      sx={{
        width: width,
        textTransform: 'none',
        boxShadow: 'none',
        ':hover': { boxShadow: 'none', backgroundColor: '#B76271' }
      }}
      onClick={handleFunction}
      type={type}
    >
      {text}
    </Button>
  )
}

export default CustomContainButton
