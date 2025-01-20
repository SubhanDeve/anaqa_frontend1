import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import FormSelectField from 'src/@core/components/Form/FormSelectField'

const UpdatePassword = () => {
  const options = [
    {
      option: 'Template 1',
      value: 'temp1'
    }
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '700', lineHeight: '20px', color: '#212529' }}>
          Update Password
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '500', lineHeight: '16px' }}>Update your password</Typography>
        <hr></hr>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '18px 0px', gap: '18px' }}>
        <Box>
          <Box sx={{ display: 'flex', gap: '12px', alignItems: 'end' }}>
            <Box sx={{ width: '30%' }}>
              <FormField placeholder={'Enter new password'} label={'Update Password*'} />
            </Box>
            <Button variant='contained' sx={{ width: 'fit-content' }}>
              <img src='/icons/salon/copy.svg' />
            </Button>
          </Box>
        </Box>
      </Box>
      <CustomContainButton text={'Update'} width={'fit-content'} />
    </Box>
  )
}

export default UpdatePassword
