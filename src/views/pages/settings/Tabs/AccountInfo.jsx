import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FormField from 'src/@core/components/Form/FormField'
import FormSelectField from 'src/@core/components/Form/FormSelectField'
import Heading from 'src/@core/components/Heading'
import SocialField from './components/SocialFields'

const AccountInfo = () => {
  const Fields = [
    {
      label: 'Name*',
      name: 'name'
    },
    {
      label: 'Owner Name*',
      name: 'owner'
    },
    {
      label: 'Email*',
      name: 'email'
    },
    {
      label: 'Phone Number*',
      name: 'number'
    }
  ]
  const Cities = [
    {
      options: 'Jeddah',
      value: 'jed'
    },
    {
      options: 'Makkah',
      value: 'mkh'
    },
    {
      options: 'Madina',
      value: 'mdn'
    }
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Heading headingText={'Account Information'} />
        <Grid container gap={'12px'}>
          {Fields.map(field => (
            <Grid item sm={5.9}>
              <FormField label={field.label} name={field.name} />
            </Grid>
          ))}
          <Grid item sm={5.9}>
            <FormSelectField label={'City*'} option={Cities} />
          </Grid>
          <Grid item sm={5.9}>
            <FormField label={'Postal Code*'} name={'code'} />
          </Grid>
          <Grid item sm={11.94}>
            <FormField label={'Address*'} name={'address'} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Heading headingText={'Social Media Links'} />
        <Grid container gap={'12px'}>
          <Grid item sm={5.9}>
            <SocialField icon={'/icons/social/instagram.svg'} label={'Instagram'} placeholder={'@Anaqa.sa'} />
          </Grid>
          <Grid item sm={5.9}>
            <SocialField icon={'/icons/social/facebook.svg'} label={'Facebook'} placeholder={'@Anaqa.sa'} />
          </Grid>
          <Grid item sm={5.9}>
            <SocialField icon={'/icons/social/twitter.svg'} label={'Twitter'} placeholder={'@Anaqa.sa'} />
          </Grid>
          <Grid item sm={5.9}>
            <SocialField icon={'/icons/social/linkedin.svg'} label={'LinkedIn'} placeholder={'@Anaqa.sa'} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default AccountInfo
