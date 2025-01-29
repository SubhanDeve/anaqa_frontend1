import React, { useState } from 'react'
import { Box, Checkbox, Dialog, FormControlLabel, Grid, Typography } from '@mui/material'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import FormSelectField from 'src/@core/components/Form/FormSelectField'
import ImageUpload from 'src/@core/components/Upload Picture'
import SuccessDialogBox from 'src/@core/components/Dialog Box/SuccessDialogBox'
import PhoneInput from 'react-phone-input-2'
import { th } from 'date-fns/locale'
import 'react-phone-input-2/lib/style.css'
import FormNumberField from 'src/@core/components/Form/FormNumberField'

const SuccessDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '.css-10j8y90-MuiPaper-root-MuiDialog-paper:not(.MuiDialog-paperFullScreen)': {
          xs: { width: '100%' },
          lg: { width: '23%' }
        }
      }}
    >
      <Box
        sx={{
          padding: '50px 34px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img src='/images/modals/done.svg' alt='Success' width={'190px'} />
        <Typography sx={{ fontSize: '18px', fontWeight: '600', mt: 2, color: '#101212' }}>
          Added Successfully
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#757575', mt: 1 }}>
          Salon successfully added! Manage your bookings and services seamlessly on ANAQA.
        </Typography>
      </Box>
    </Dialog>
  )
}

const SalonModal = ({ handleClose, open }) => {
  const [showField, setShowField] = useState(false)
  const [successDialogOpen, setSuccessDialogOpen] = useState(false)

  const option = [
    { options: 'Spa', value: 'spa' },
    { options: 'Salon & Spa', value: 'salonspa' },
    { options: 'Salon', value: 'salon' }
  ]

  const options = [
    { options: '1st', value: 'first' },
    { options: '2nd', value: 'second' },
    { options: '3rd', value: 'third' }
  ]

  const handleCheckBoxChange = event => {
    setShowField(event.target.checked)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries(formData.entries())
    console.log('Form Data:', formJson)

    // Close the SalonModal
    handleClose()

    // Open the SuccessDialog
    setSuccessDialogOpen(true)
  }

  return (
    <Box>
      <Dialog
        open={open}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit
        }}
        fullWidth
      >
        <Box sx={{ borderRadius: '8px', padding: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Add Salon</Typography>
              <img src='/icons/Close.svg' onClick={handleClose} style={{ cursor: 'pointer' }} alt='Close' />
            </Box>
            <hr />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mt: '30px' }}>
            <Grid container gap={'12px'}>
              <Grid item xs={12}>
                <Box>
                  <ImageUpload title={`Salon's Profile`} />
                </Box>
              </Grid>
              <Grid item lg={5.7}>
                <FormNumberField label={'Phone Number'} />
              </Grid>
              <Grid item lg={6}>
                <FormField label={'Salon Name*'} placeholder={'Enter salon name'} name={'salonName'} />
              </Grid>
              <Grid item lg={5.7}>
                <FormField label={'Owner Name*'} placeholder={'Enter owner name'} name={'ownerName'} />
              </Grid>
              <Grid item lg={6}>
                <FormField label={'Email (Optional)'} placeholder={'Enter your email'} name={'email'} />
              </Grid>
              <Grid item lg={12}>
                <FormField label={'Address* '} placeholder={'Enter your Address'} name={'address'} />
              </Grid>
              <Grid item lg={12}>
                <FormSelectField label={'Category'} name={'category'} option={option} />
              </Grid>
              <Grid item lg={12}>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <FormControlLabel
                    control={<Checkbox onChange={handleCheckBoxChange} />}
                    label={'Top Recommended'}
                    sx={{ '.MuiTypography-root': { fontSize: '14px', fontWeight: '400', lineHeight: '14px' } }}
                  />
                </Box>
              </Grid>
              {showField && (
                <Grid item lg={12}>
                  <FormSelectField label={'Ranking'} name={'ranking'} option={options} />
                </Grid>
              )}
            </Grid>
          </Box>
          <hr style={{ margin: '20px 0px' }} />
          <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
            <CustomOutlineButton text={'Cancel'} handleFunction={handleClose} width={'25%'} />
            <CustomContainButton text={'Register'} type={'submit'} width={'25%'} />
          </Box>
        </Box>
      </Dialog>

      {/* Success Dialog */}
      <SuccessDialogBox
        open={successDialogOpen}
        handleClose={() => setSuccessDialogOpen(false)}
        title={'Added Successfully'}
        description={'Salon successfully added! Manage your bookings and services seamlessly on ANAQA.'}
        image={'/images/modals/done.svg'}
      />
    </Box>
  )
}

export default SalonModal
