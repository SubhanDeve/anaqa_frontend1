import React, { useState } from 'react'
import { Box, Button, Card, Dialog } from '@mui/material'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import columns from './Table Data/column'
import { RowData } from './Table Data/RowData'
import { FlashAutoOutlined } from '@mui/icons-material'
import Heading from 'src/@core/components/Heading'
import usePrint from 'src/hooks/usePrint'
import SalonModal from './SalonModal'
const Salons = () => {
  const { componentRef, handlePrint } = usePrint()
  const [open, setOpen] = useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'grid', gap: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomPageHeading
          text='Salons'
          total={754}
          print
          addButton={'Add Salon'}
          openModal={handleModalOpen}
          handlePrint={handlePrint}
        />
      </Box>
      <Box>
        <Card elevation={0} sx={{ height: 'fit-content', padding: '14px 20px' }}>
          <Table data={RowData} columns={columns} ref={componentRef} />
        </Card>
      </Box>
      <Box>
        <SalonModal handleClose={handleClose} open={open} />
      </Box>
    </Box>
  )
}

export default Salons
