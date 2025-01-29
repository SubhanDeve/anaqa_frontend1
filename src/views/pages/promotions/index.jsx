import { Box, Card } from '@mui/material'
import React, { useState } from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import { RowData } from './Table Data/RowData'
import Columns from './Table Data/Columns'
import AddPromotionModal from './AddPromotionModal'
import usePrint from 'src/hooks/usePrint'

const PromotionsPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const { componentRef, handlePrint } = usePrint()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <CustomPageHeading
          text={'Promotion & Discounts'}
          print
          handlePrint={handlePrint}
          addButton={'Add Promotion '}
          openModal={() => setOpenModal(true)}
        />
      </Box>
      <Box>
        <Card elevation={0} sx={{ padding: '14px 20px', width: '100%' }}>
          <Table data={RowData} columns={Columns} ref={componentRef} />
        </Card>
      </Box>
      <AddPromotionModal open={openModal} handleClose={() => setOpenModal(false)} />
    </Box>
  )
}

export default PromotionsPage
