import { Box, Grid } from '@mui/material'
import React, { useState } from 'react' // Add useState import
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import FormField from 'src/@core/components/Form/FormField'
import FormSelectField from 'src/@core/components/Form/FormSelectField'
import Heading from 'src/@core/components/Heading'
import RateField from './components/RateField'

const CommissionSettings = () => {
  // Convert CommissionSections to state
  const [commissionSections, setCommissionSections] = useState([{ id: 1 }])

  const BasedOn = [
    {
      options: 'Bookings',
      value: 'bookings'
    }
  ]

  const AddFunction = () => {
    // Add new section with unique id
    setCommissionSections([...commissionSections, { id: commissionSections.length + 1 }])
  }

  return (
    <Box sx={{ display: 'grid', gap: '18px' }}>
      <Heading headingText={'Commision Settings'} />
      <Box sx={{ width: '55%' }}>
        <FormField label={'Name'} name={'name'} placeholder={'Template 1'} />
        <FormSelectField label={'Commission Rate Based on'} option={BasedOn} />
      </Box>
      <Grid container gap={'18px'}>
        {commissionSections.map((item, index) => (
          <Grid item key={index}>
            <Box sx={{ display: 'flex', gap: '9px' }}>
              <FormField label={'Bookings From*'} name={'from'} placeholder={'0'} />
              <FormField label={'Bookings To*'} name={'to'} placeholder={'100'} />
              <RateField label={'Set Commission Rate*'} name={'rate'} placeholder={'10'} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <CustomOutlineButton text={'+ Add more'} width={'fit-content'} handleFunction={AddFunction} />
      <Box sx={{ paddingTop: '100px' }}>
        <CustomContainButton text={'Save'} width={'10%'} />
      </Box>
    </Box>
  )
}

export default CommissionSettings
