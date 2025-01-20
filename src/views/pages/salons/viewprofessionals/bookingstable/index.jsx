import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import { RowData } from './Table Data/RowData'
import Columns from './Table Data/Columns'

const BookingsTable = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}> Total Bookings (04) </Typography>
      </Box>
      <Box>
        <Card elevation={0} sx={{ width: '100%' }}>
          <Table data={RowData} columns={Columns} />
        </Card>
      </Box>
    </Box>
  )
}

export default BookingsTable
