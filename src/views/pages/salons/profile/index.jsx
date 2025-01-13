import { Box, Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'

const SalonProfile = () => {
  const router = useRouter()
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px ' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Salon Profile'} />
      </Box>

      <Card elevation={0} sx={{ height: { xs: '100%', md: '82vh' } }}>
        <Box
          sx={{
            width: '100%',
            height: '24vh',
            backgroundColor: '#ECD5D9',
            borderRadius: '10px',
            padding: '20px 22px'
          }}
        >
          <Box sx={{ display: 'flex', gap: '10px', left: '95%', position: 'relative' }}>
            <img src='/icons/profile/block.svg' style={{ cursor: 'pointer' }} />
            <img src='/icons/profile/delete.svg' style={{ cursor: 'pointer' }} />
          </Box>
        </Box>
        <Grid container sx={{ padding: '20px 30px 20px 30px', marginTop: '-5%' }}>
          <Grid item>
            <Card elevation={0} sx={{ height: '100%', width: '100%', padding: '14px' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  justifyItems: 'center',
                  alignItems: 'center'
                }}
              >
                <img src='/images/avatars/profile2.png' />
                <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#212529' }}>
                  Smart Cut Beauty Salon
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: '500', color: '#6C757D' }}>Jeddah</Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1BA40F',
                    backgroundColor: '#31B6250D',
                    padding: '10px',
                    width: 'fit-content',
                    borderRadius: '8px'
                  }}
                >
                  Active
                </Typography>
              </Box>
              <Box sx={{ padding: '12px 0px' }}>
                <hr></hr>
              </Box>
            </Card>
          </Grid>
          <Grid item>
            <Card elevation={0} sx={{ height: '100%', width: '100%' }}></Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default SalonProfile
