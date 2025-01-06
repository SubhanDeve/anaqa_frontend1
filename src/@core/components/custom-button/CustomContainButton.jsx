import { Button } from '@mui/material'
import React from 'react'

const CustomContainButton = ({ text, width }) => {
  return (
    <Button
      variant='contained'
      size='large'
      sx={{ width: width, textTransform: 'none', boxShadow: 'none', ':hover': { boxShadow: 'none' } }}
    >
      {text}
    </Button>
  )
}

export default CustomContainButton
