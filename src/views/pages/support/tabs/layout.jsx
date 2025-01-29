import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import DateTimeRange from 'src/@core/components/DateTimeRange/DateTimeRange'
import Search from 'src/@core/components/search'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', gap: '5px' }}>
      <Box sx={{ width: '20%' }}>
        <Search />
        <Typography>Recents</Typography>
      </Box>
      <Box sx={{ width: '80%' }}>
        <Card elevation={0} sx={{ backgroundColor: '#F8F8F9', width: '100%', padding: '14px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <img src='/images/avatars/Profile.png' />
              <Typography sx={{ fontSize: '20px', fontWeight: '600', lineHeight: '25 px', color: '#212529' }}>
                Alice Brown
              </Typography>
            </Box>
            <img src='/icons/support/verticaldots.svg' />
          </Box>
          <hr></hr>
          <Box>
            <DateTimeRange />
          </Box>
          <Box sx={{ display: 'flex', gap: '11px' }}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '10px',
                width: '100%',
                display: 'flex',
                gap: '10px',
                borderRadius: '8px '
              }}
            >
              <input type='text' style={{ width: '100%' }} />
              <img src='/icons/support/voice.svg' style={{ cursor: 'pointer' }} />
              <img src='/icons/support/clip.svg' style={{ cursor: 'pointer' }} />
            </Box>
            <img src='/icons/support/send.svg' style={{ cursor: 'pointer' }} />
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default Layout
