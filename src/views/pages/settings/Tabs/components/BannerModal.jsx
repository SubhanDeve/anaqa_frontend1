import { Box, Checkbox, Dialog, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import BannerUpload from './BannerUpload'
import FormSelectField from 'src/@core/components/Form/FormSelectField'

const BannerModal = ({ open, onClose }) => {
  const [showMore, setShowMore] = useState(false)

  const handleCheckboxChange = () => {
    setShowMore(!showMore)
  }

  const Salons = [
    {
      options: 'All',
      value: 'all'
    },
    {
      options: 'Smart Cut',
      value: 'smart'
    },
    {
      options: 'ABS Salon',
      value: 'abs'
    }
  ]

  return (
    <Dialog open={open} onClose={onClose} style={{ width: '400px' }}>
      <Box sx={{ display: 'grid', gap: '12px', padding: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Add User</Typography>
          <img src='/icons/Close.svg' style={{ cursor: 'pointer' }} onClick={onClose} />
        </Box>
        <hr />
        <Box>
          <BannerUpload title={'User Profile'} />
        </Box>
        <Box>
          <Grid container gap={'12px'}>
            <Grid item xl={12}>
              <FormField label={'Title Text'} name={'title'} placeholder={'Effortless Scheduling'} />
            </Grid>
            <Grid item xl={12}>
              <FormField label={'Body Text'} name={'text'} placeholder={'Find your favorite salon, book in minutes!'} />
            </Grid>
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Checkbox
                sx={{ '.css-1umw9bq-MuiSvgIcon-root': { fontSize: '1.2em' } }}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                onChange={handleCheckboxChange}
                checked={showMore}
              />
              <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>Enable Button Link</Typography>
            </Box>
            {showMore && (
              <>
                <Grid item xl={12}>
                  <FormField label={'Button Text'} name={'btnText'} placeholder={'Book Now'} />
                </Grid>
                <Grid item xl={12}>
                  <FormField label={'Discount Percentage'} name={'disPercent'} placeholder={'20%'} />
                </Grid>
                <Grid item xl={12}>
                  <FormSelectField label={'Link Salons'} name={'links'} option={Salons} />
                </Grid>
              </>
            )}
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

export default BannerModal
