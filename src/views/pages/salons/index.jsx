import { Box, Button, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import AnimatedNumber from 'src/@core/components/Number Animated'

const Salons = () => {
  const [targetValue, setTargetValue] = useState(0)

  // Simulate an API call
  useEffect(() => {
    const fetchTargetValue = async () => {
      // Replace this with your actual API call
      const response = await new Promise(resolve => setTimeout(() => resolve({ target: 7 }), 1000))
      setTargetValue(response.target) // Set the target value from the API response
    }

    fetchTargetValue()
  }, [])

  const menuOptions = [
    {
      title: 'Stage 1'
    }
  ]

  return (
    <Box sx={{ display: 'grid', gap: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomPageHeading text='Salons (754) ' />
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Button
            variant='contained'
            size='large'
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
            size='large'
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
        <Card elevation={0} sx={{ height: '80vh' }}>
          <Box>
            <AnimatedNumber targetValue={targetValue} />
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default Salons
