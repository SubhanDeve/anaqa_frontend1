import { Box, Card } from '@mui/material'
import React from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import { RowData } from './Table Data/RowData'
import Columns from './Table Data/Columns'

const Favorites = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <CustomPageHeading text={'Favorites'} total={12} />
      </Box>
      <Box>
        <Card elevation={0} sx={{ width: '100%' }}>
          <Table data={RowData} columns={Columns} />
        </Card>
      </Box>
    </Box>
  )
}

export default Favorites
