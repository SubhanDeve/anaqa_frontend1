import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'

const CustomSelectMenu = ({ menuOptions, bgcolor, title, width }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [selectedStage, setSelectedStage] = React.useState(title)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = option => {
    setAnchorEl(null)
    if (option) {
      setSelectedStage(option.title)
    }
  }

  return (
    <Box>
      <Box
        id='stage-button'
        onClick={handleClick}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          backgroundColor: bgcolor,
          borderRadius: '5px',
          width: width,
          padding: '10px',
          fontSize: '14px',
          color: '#6C757D',
          fontWeight: '400',
          '&:hover': {
            backgroundColor: 'none'
          },
          cursor: 'pointer'
        }}
      >
        <Typography>{selectedStage}</Typography>
        <img src={'/icons/arrow-down.svg'} alt='angle down' />
      </Box>
      <Menu id='stage-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
        {menuOptions.map((option, index) => (
          <MenuItem key={index} sx={{ width: '113px', ':active': { color: '#FFFFFF' }, ':hover': { backgroundColor: '#CD929D', color: '#FFFFFF' } }} onClick={() => handleClose(option)}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default CustomSelectMenu
