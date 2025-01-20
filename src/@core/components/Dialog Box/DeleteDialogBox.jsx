import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'
import CustomOutlineButton from '../custom-button'
import CustomContainButton from '../custom-button/CustomContainButton'

const DeleteDialogBox = ({ open, handleClose, image, title, description }) => {
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
        <img src={image} alt='Success' width={'190px'} />
        <Typography sx={{ fontSize: '18px', fontWeight: '600', mt: '8px', color: '#101212' }}>{title}</Typography>
        <Typography sx={{ fontSize: '14px', color: '#757575', mt: '12px' }}>{description}</Typography>
        <Box sx={{ display: 'flex', gap: '12px', width: '100%', mt: '22px' }}>
          <CustomOutlineButton text={'No'} width={'100%'} handleFunction={handleClose} />
          <CustomContainButton text={'Yes'} width={'100%'} handleFunction={handleClose} />
        </Box>
      </Box>
    </Dialog>
  )
}

export default DeleteDialogBox
