import { Box, Dialog, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import ImageUpload from 'src/@core/components/Upload Picture'

const AddUserModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ display: 'grid', gap: '12px', padding: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Add User</Typography>
          <img src='/icons/Close.svg' style={{ cursor: 'pointer' }} onClick={onClose} />
        </Box>
        <hr />
        <Box>
          <ImageUpload title={'User Profile'} />
        </Box>
        <Box>
          <Grid container gap={'12px'}>
            <Grid item xl={6}>
              <FormField label={'Phone Number*'} name={'number'} placeholder={'Enter your number'} />
            </Grid>
            <Grid item xl={5.7}>
              <FormField label={'Email(Optional)'} name={'number'} placeholder={'Enter your number'} />
            </Grid>
            <Grid item xl={6}>
              <FormField label={'First Name*'} name={'number'} placeholder={'Enter your number'} />
            </Grid>
            <Grid item xl={5.7}>
              <FormField label={'Last Name*'} name={'number'} placeholder={'Enter your number'} />
            </Grid>
          </Grid>
        </Box>
        <hr />
        <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <CustomOutlineButton text={'Cancel'} handleFunction={onClose} />
          <CustomContainButton text={'Save'} type={'submit'} handleFunction={onClose} />
        </Box>
      </Box>
    </Dialog>
  )
}

export default AddUserModal
