import { Box, Card, Grid } from '@mui/material'
import React from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import { RowData } from './Table Data/RowData'
import Columns from './Table Data/Columns'
import usePrint from 'src/hooks/usePrint'
import PageHeaderCard from 'src/views/components/bookings/PageHeaderCard'

const SalonRegistration = () => {
  const { componentRef, handlePrint } = usePrint()
  const BookingStatusHeader = [
    {
      title: 'All Bookings',
      number: '7,265',
      percent: '11.02'
    },
    {
      title: 'Pending',
      number: '265',
      percent: '11.02',
      onClick: () => router.push('/booking/pending')
    },
    {
      title: 'Confirmed',
      number: '152',
      percent: '11.02'
    },
    {
      title: 'Completed',
      number: '681',
      percent: '11.02'
    },
    {
      title: 'Canceled',
      number: '103',
      percent: '11.02'
    }
  ]
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <Grid container gap={'14px'}>
          {BookingStatusHeader.map((item, index) => (
            <Grid item xl={2} key={index}>
              <PageHeaderCard title={item.title} number={item.number} percent={item.percent} onClick={item.onClick} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <CustomPageHeading text={'Salon Registration Request'} total={'09'} print handlePrint={handlePrint} />
      </Box>
      <Box>
        <Card elevation={0} sx={{ padding: '14px 20px', width: '100%' }}>
          <Table data={RowData} columns={Columns} ref={componentRef} />
        </Card>
      </Box>
    </Box>
  )
}

export default SalonRegistration
