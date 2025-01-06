import { Box, Input, Typography } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    <Box sx={{ backgroundColor: '#F8F8F9', padding: '8px 12px', display: 'flex', gap: '12px', borderRadius: '8px' }} >
      <img src='/icons/Search.svg' />
      <Input type='text' placeholder='Search city here...' sx={{
        border: 'none',
        width: '100%',
        '::before': {
          border: 'none'
        },
        '::after': {
          border: 'none'
        },
        ':active': {
          border: 'none'
        },
        ':hover': {
          border: 'none'
        },
      }} />
    </Box>
  )
}

export default Search
