import React from 'react'
import { Box, Button, Card } from '@mui/material'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
const Salons = () => {
  const data = [
    {
      id: 1,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Pending',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 2,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Active',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 3,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Deleted',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 4,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Blocked',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 5,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Active',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 6,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Deleted',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 7,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'InActive',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 8,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Active',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
    },
    {
      id: 9,
      image: 'Image',
      salonName: 'Abs Salon',
      regdate: '09-12-2024',
      phoneNo: '+966-1234567',
      email: 'alex001@gmail.com',
      owner: 'Alex J Morison',
      status: 'Pending',
      city: 'Jeddah',
      category: 'Salon',
      action: '...'
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
        <Card elevation={0} sx={{ height: 'fit-content', padding: '14px 20px' }}>
          <Table data={data} />
        </Card>
      </Box>
    </Box>
  )
}

export default Salons
