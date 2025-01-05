import { Box, Button, Card } from '@mui/material'
import React from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import CustomSelectMenu from 'src/@core/components/CustomSelectMenu'

const Salons = () => {
  const menuOptions = [
    {
      title: 'Stage 1'
    }
  ]

  return (
    <Box sx={{ display: 'grid', gap: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomPageHeading text='Salons (754) ' />
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#F5EAEC',
              color: '#CD929D',
              boxShadow: 'none',
              textTransform: 'none',
              ':hover': {
                boxShadow: 'none'
              }
            }}
          >
            Print
          </Button>
          <Button
            variant='contained'
            sx={{
              boxShadow: 'none',
              textTransform: 'none',
              ':hover': {
                boxShadow: 'none'
              }
            }}
          >
            Add Salons
          </Button>
        </Box>
      </Box>
      <Box>
        <Card elevation={0} sx={{ height: '80vh' }}></Card>
      </Box>
    </Box>
  )
}

export default Salons
