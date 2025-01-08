import { Typography, Box } from '@mui/material'
import React from 'react'
import CustomSecondaryButton from '../custom-button/CustomSecondaryButton'
import CustomContainButton from '../custom-button/CustomContainButton'

const CustomPageHeading = ({ text, total, print, addButton }) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', gap: '8px', alignContent: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ fontSize: '26px', lineHeight: '40px', fontWeight: '600', color: '#212529' }}>
        {text} {total !== undefined && `(${total})`}
      </Typography>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        {print ? <CustomSecondaryButton text={'Print'} /> : null}
        {addButton ? <CustomContainButton text={addButton} /> : null}
      </Box>
    </Box>
  )
}

export default CustomPageHeading
