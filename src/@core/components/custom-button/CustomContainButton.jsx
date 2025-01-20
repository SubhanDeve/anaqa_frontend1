import { Button, Typography } from '@mui/material'
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
      <Typography sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '16px', color: 'white' }}>{text}</Typography>
    </Button>
  )
}

export default CustomContainButton
