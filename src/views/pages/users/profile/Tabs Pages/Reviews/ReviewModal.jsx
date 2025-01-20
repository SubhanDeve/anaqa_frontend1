import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import StaticFormField from 'src/@core/components/Form/StaticFormField'

const ReviewModal = ({ open, handleClose, name, role, rating, review }) => {
  return (
    <Dialog open={open} fullWidth>
      <Box sx={{ display: 'grid', gap: '12px', padding: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography>Review Detail</Typography>
          <img src='/icons/close.svg' onClick={handleClose} style={{ cursor: 'pointer' }} />
        </Box>
        <hr></hr>
        <Box sx={{ display: 'flex', gap: '14px' }}>
          <img src='/images/avatars/profile3.png' />
          <Box sx={{ display: 'grid', gap: '8px' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '500', color: '#212529' }}>{name}</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>{role}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'grid', gap: '12px' }}>
          <StaticFormField label={'Rating'} value={rating} image2={'/icons/star.svg'} />
          <StaticFormField label={'Review'} value={review} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomContainButton text={'Delete Review'} handleFunction={handleClose} />
        </Box>
      </Box>
    </Dialog>
  )
}

export default ReviewModal
