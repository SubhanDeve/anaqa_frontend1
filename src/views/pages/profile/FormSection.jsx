import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Heading from 'src/@core/components/Heading'
import InfoBox from './components/InfoBox'
import CustomSecondaryButton from 'src/@core/components/custom-button/CustomSecondaryButton'

const FormSection = () => {
  const boxInfo = [
    {
      title: 'Name',
      value: 'Makenna Ekstrom Bothman'
    },
    {
      title: 'Name',
      value: 'tahir@whetstonez.com'
    },
    {
      title: 'Name',
      value: 'Makenna Ekstrom Bothman'
    },
    {
      title: 'Name',
      value: 'Makenna Ekstrom Bothman'
    }
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', gap: '16px' }}>
      <Box>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '20px',
            color: '#212529'
          }}
        >
          Personal information
        </Typography>
      </Box>
      <Box>
        <Grid container gap={'12px'}>
          <Grid sm={12} md={6} lg={6} xl={6}>
            <InfoBox title={'Name'} value={'Makenna Ekstrom Bothman'} />
          </Grid>
          <Grid sm={12} md={5.7} lg={5.7} xl={5.8}>
            <InfoBox title={'Email'} value={'tahir@whetstonez.com'} />
          </Grid>
          <Grid sm={12} md={6} lg={6} xl={6}>
            <InfoBox title={'Phone Number'} value={'+966 123 456 7890 '} />
          </Grid>
          <Grid sm={12} md={5.7} lg={5.7} xl={5.8}>
            <InfoBox title={'City'} value={'Jeddah '} />
          </Grid>
          <Grid sm={12} md={11.9}>
            <InfoBox title={'Address'} value={'Downtown Saudi Arabia, KSA'} />
          </Grid>
          <Grid sm={12} md={11.9}>
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '14px',
                fontWeight: '500',
                color: '#6C757D',
                mb: '8px'
              }}
            >
              Role
            </Typography>
            <CustomSecondaryButton text={'Admin'} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default FormSection
