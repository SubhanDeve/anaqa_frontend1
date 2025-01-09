import {
  Box,
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControlLabel,
  Radio,
  Switch,
  TextareaAutosize,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import { RowData } from './Table Data/RowData'
import Columns from './Table Data/Columns'
import usePrint from 'src/hooks/usePrint'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import CustomOutlineButton from 'src/@core/components/custom-button'
import { borderColor } from '@mui/system'
import FaqModal from './FaqModal'

const FaqsPage = () => {
  const { componentRef, handlePrint } = usePrint()
  const [open, setOpen] = useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <CustomPageHeading
          text={`FAQ's`}
          total={'07'}
          print
          addButton={'Add Question'}
          handlePrint={handlePrint}
          openModal={handleModalOpen}
        />
      </Box>
      <Box>
        <Card elevation={0} sx={{ padding: '14px 20px', width: '100%' }}>
          <Table data={RowData} columns={Columns} ref={componentRef} />
        </Card>
        <Box>
          <FaqModal handleClose={handleClose} open={open} />
        </Box>
      </Box>
    </Box>
  )
}

export default FaqsPage
