import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import StaticFormField from 'src/@core/components/Form/StaticFormField'
import Heading from 'src/@core/components/Heading'

const UserInfo = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box>
        <Heading headingText={'Personal Information'} />
      </Box>
      <Grid container gap={'12px'} width={'100%'}>
        <Grid item lg={6}>
          <StaticFormField image={1} label={'Phone Number'} value={'+966 1234567'} />
        </Grid>{' '}
        <Grid item lg={5.88}>
          <StaticFormField label={'Email'} value={'abssalon01@gmail.com'} />
        </Grid>
        <Grid item lg={6}>
          <StaticFormField label={'First Name'} value={'Makenna Ekstrom'} />
        </Grid>
        <Grid item lg={5.88}>
          <StaticFormField label={'Last Name'} value={'Bothman'} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserInfo
