import { Box, Dialog, Grid, Switch, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import FormSelectField from 'src/@core/components/Form/FormSelectField'

const AddPromotionModal = ({ handleClose, open }) => {
  const [discountType, setDiscountType] = useState('')
  const SalonList = [
    {
      options: 'Smart Cut',
      value: 'smart'
    },
    {
      options: 'Abs Salon',
      value: 'abs'
    }
  ]
  const ServiceTypeList = [
    {
      options: 'Hair Cut',
      value: 'haircut'
    },
    {
      options: 'Facial',
      value: 'facial'
    }
  ]
  const DiscountTypeList = [
    {
      options: 'Flat',
      value: 'flat'
    },
    {
      options: 'Coupon Code',
      value: 'coupon'
    }
  ]

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: event => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries(formData.entries())
            const email = formJson.email
            console.log(email)
            handleClose()
          }
        }}
        fullWidth
      >
        <Box
          sx={{
            borderRadius: '8px',
            padding: '20px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Add Question</Typography>
              <img src='/icons/Close.svg' onClick={handleClose} style={{ cursor: 'pointer' }} />
            </Box>
            <hr></hr>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mt: '30px' }}>
            <Grid container gap={'14px'} justifyContent>
              <Grid item sm={6}>
                <FormField label='Title*' name='title' />
              </Grid>
              <Grid item sm={5.6}>
                <FormSelectField label={'Salon'} name={'salon'} option={SalonList} />
              </Grid>
              <Grid item sm={6}>
                <FormSelectField label={'Service Type'} name={'service'} option={ServiceTypeList} />
              </Grid>
              <Grid item sm={5.6}>
                <FormSelectField
                  label={'Discount Type*'}
                  name={'discount'}
                  option={DiscountTypeList}
                  onChange={({ target }) => setDiscountType(target.value)}
                />
              </Grid>
              {discountType === 'coupon' && (
                <Grid item sm={11.9}>
                  <FormField label='Enter Code' name='code' placeholder={'FS435FS'} />
                </Grid>
              )}
              <Grid item sm={6}>
                <FormField label='Discount Value*' name='value' />
              </Grid>
              <Grid item sm={5.6}>
                <FormField label='Usage Limit' name='usage' />
              </Grid>
              <Grid item sm={6}>
                <FormField label='Valid From*' name='validfrom' />
              </Grid>
              <Grid item sm={5.6}>
                <FormField label='Valid To*' name='validto' />
              </Grid>
            </Grid>
          </Box>
          <hr style={{ margin: '20px 0px' }}></hr>
          <Box sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>
            <CustomOutlineButton text={'Cancel'} handleFunction={handleClose} width={'25%'} />
            <CustomContainButton text={'Save'} type={'submit'} width={'25%'} />
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

export default AddPromotionModal
