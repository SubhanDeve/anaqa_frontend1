import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const BackButton = ({ handleBack }) => {
  return (
    <Box>
      <img src='/icons/arrow-left.svg' alt='Back Arrow' onClick={handleBack} style={{ cursor: 'pointer' }} />
    </Box>
  )
}

export default BackButton
