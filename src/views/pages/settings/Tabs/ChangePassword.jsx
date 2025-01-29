import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'

const ChangePassword = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '30%' }}>
        <Typography>Please Enter your current password</Typography>
        <FormField label={'Current Password'} placeholder={'Enter your Password'} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '30%' }}>
        <Typography>Please Enter your current password</Typography>
        <FormField label={'New Password'} placeholder={'Enter your Password'} />
        <FormField label={'Confirm Password'} placeholder={'Enter your Password'} />
        <CustomContainButton text={'Update'} width={'fit-content'} />
      </Box>
    </Box>
  )
}

export default ChangePassword
