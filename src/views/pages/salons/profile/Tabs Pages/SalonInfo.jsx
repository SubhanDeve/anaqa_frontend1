import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import StaticFormField from 'src/@core/components/Form/StaticFormField'
import Heading from 'src/@core/components/Heading'

const SalonInfo = () => {
  const ranking = 1
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box>
        <Heading headingText={'Salon Information'} />
      </Box>
      <Grid container gap={'12px'} width={'100%'}>
        <Grid item lg={6}>
          <StaticFormField image={1} label={'Phone Number'} value={'+966 1234567'} />
        </Grid>
        <Grid item lg={5.88}>
          <StaticFormField label={'Salon Name'} value={'Abs Salon'} />
        </Grid>
        <Grid item lg={6}>
          <StaticFormField label={'Owner Name'} value={'Hussain al Hamdi'} />
        </Grid>
        <Grid item lg={5.88}>
          <StaticFormField label={'Email'} value={'abssalon01@gmail.com'} />
        </Grid>
        <Grid item lg={12}>
          <StaticFormField label={'Address'} value={'P.O. Box 2343 Jeddah, Saudi Arabia'} />
        </Grid>
        <Grid item lg={12}>
          <StaticFormField label={'Category'} value={'Salon & Spa'} />
        </Grid>
        {ranking ? (
          <Grid item lg={12}>
            <StaticFormField label={'Ranking'} value={'1st'} />
          </Grid>
        ) : null}
      </Grid>
      <Box>
        <Heading headingText={'Contract'} />
        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#F8F8F9',
            border: '1px solid #CD929D',
            borderRadius: '5px',
            width: 'fit-content',
            padding: '10px',
            gap: '30px'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src='/icons/salon/file.svg' width={'37px'} />
            <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>Contract.doc</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src='/icons/salon/preview.svg' width={'32px'} style={{ cursor: 'pointer' }} />
            <img src='/icons/salon/download.svg' width={'32px'} style={{ cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SalonInfo
