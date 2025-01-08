import React from 'react'
import { Box, Button, Card } from '@mui/material'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import columns from './Table Data/column'
import { RowData } from './Table Data/RowData'
const UsersPage = () => {
  return (
    <Box sx={{ display: 'grid', gap: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomPageHeading text='Users' total={'2,646'} print addButton={'Add User'} />
      </Box>
      <Box>
        <Card elevation={0} sx={{ height: 'fit-content', padding: '14px 20px' }}>
          <Table data={RowData} columns={columns} />
        </Card>
      </Box>
    </Box>
  )
}

export default UsersPage
