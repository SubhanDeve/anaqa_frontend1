import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormSelectField from 'src/@core/components/Form/FormSelectField'

const UpdatePassword = () => {
  const options = [
    {
      option: 'Template 1',
      value: 'temp1'
    }
  ]

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '700', lineHeight: '20px', color: '#212529' }}>
          Commission Management
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '16px' }}>
          Commission management should be in percentage
        </Typography>
        <hr></hr>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '18px 0px', gap: '18px' }}>
        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#F8F8F9',
            borderRadius: '6px',
            padding: '12px',
            gap: '20px',
            justifyContent: 'space-between',
            width: '30%'
          }}
        >
          <Typography>Monthly Completed Bookings</Typography>
          <Typography>612</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '16px' }}>
            Select Commission Template
          </Typography>
          <Box sx={{ display: 'flex', gap: '16px', justifyItems: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '30%' }}>
              <FormSelectField name={'Template 1'} option={options} />
            </Box>
            <CustomContainButton text={'Assign Template'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UpdatePassword
