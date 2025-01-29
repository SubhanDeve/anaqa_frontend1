import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'

const SuccessDialogBox = ({ open, handleClose, image, title, description }) => {
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
        <Typography sx={{ fontSize: '18px', fontWeight: '600', mt: 2, color: '#101212' }}>{title}</Typography>
        <Typography sx={{ fontSize: '14px', color: '#757575', mt: 1 }}>{description}</Typography>
      </Box>
    </Dialog>
  )
}

export default SuccessDialogBox
