import { Box, Card } from '@mui/material'
import React from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import { RowData } from './Table Data/RowData'
import Columns from './Table Data/Columns'
import usePrint from 'src/hooks/usePrint'

const ProfessionalReviews = () => {
  const { componentRef, handlePrint } = usePrint()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <CustomPageHeading text={'Salon Reviews'} total={25} print handlePrint={handlePrint} />
      </Box>
      <Box>
        <Card elevation={0} sx={{ padding: '14px 20px', width: '100%' }}>
          <Table data={RowData} columns={Columns} ref={componentRef} />
        </Card>
      </Box>
    </Box>
  )
}

export default ProfessionalReviews
