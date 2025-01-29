import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomSelectMenu from 'src/@core/components/CustomSelectMenu'
import DateTimeRange from 'src/@core/components/DateTimeRange/DateTimeRange'
import Heading from 'src/@core/components/Heading'

const LineChartHeader = () => {
  const menuOptions = [
    {
      title: 'Stage 1'
    }
  ]
  return (
    <Box>
      <Box>
        <Typography sx={{ fontSize: '15px', fontWeight: '600', lineHeight: '24px' }}>Total Sales</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <Heading headingText={'$1,124,000'} />
          <Typography
            sx={{
              fontSize: '13px',
              fontWeight: '600',
              lineHeight: '16px',
              color: '#FFB91B',
              backgroundColor: '#FFFBEA',
              padding: '4px 10px',
              borderRadius: '6px',
              display: 'flex',
              width: 'fit-content',
              height: 'fit-content',
              alignItems: 'center'
            }}
          >
            16
            <img src={'/icons/totalcard/trade-up.svg'} width={'16px'} />
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <CustomSelectMenu menuOptions={menuOptions} bgcolor={'#F8F8F9'} title={'Salon'} />
          <CustomSelectMenu menuOptions={menuOptions} bgcolor={'#F8F8F9'} title={'City'} />
          <DateTimeRange bgcolor={'#F8F8F9'} />
        </Box>
      </Box>
    </Box>
  )
}

export default LineChartHeader
