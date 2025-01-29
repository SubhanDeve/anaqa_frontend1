import { Box, Card } from '@mui/material'
import React, { useState } from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import { RowData } from './Table Data/RowData'
import Columns from './Table Data/column'
import AddServiceModal from './AddServiceModal'
import usePrint from 'src/hooks/usePrint'

const ServicesPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const { componentRef, handlePrint } = usePrint()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <CustomPageHeading
          text={'Services'}
          total={13}
          print
          handlePrint={handlePrint}
          addButton={'Add Services'}
          openModal={() => setOpenModal(true)}
        />
      </Box>
      <Box>
        <Card elevation={0} sx={{ padding: '14px 20px', width: '100%' }}>
          <Table data={RowData} columns={Columns} ref={componentRef} />
        </Card>
      </Box>
      <AddServiceModal handleClose={() => setOpenModal(false)} open={openModal} />
    </Box>
  )
}

export default ServicesPage
