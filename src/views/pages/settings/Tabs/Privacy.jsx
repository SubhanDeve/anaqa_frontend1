import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'

const Privacy = () => {
  return (
    <Box sx={{ display: 'grid', gap: '18px' }}>
      <Typography>Write your description about your company’s privacy policy</Typography>
      <FormField label={'Heading'} placeholder={'Privacy Policy'} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '14px', color: '#6C757D' }}>Body Text</label>
        <textarea
          style={{ border: '1px solid #E3E3E3', borderRadius: '5px', padding: '8px' }}
          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          rows={12}
        ></textarea>
      </Box>

      <CustomContainButton text={'Update'} width={'fit-content'} />
    </Box>
  )
}

export default Privacy
