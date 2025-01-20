import React, { useState } from 'react'
import { Box, Card } from '@mui/material'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Table from 'src/@core/components/Table'
import columns from './Table Data/column'
import { RowData } from './Table Data/RowData'
import AddUserModal from './AddUserModal'
import usePrint from 'src/hooks/usePrint'
const UsersPage = () => {
  const { componentRef, handlePrint } = usePrint()
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(null)
  const handleAdd = () => {
    setEditModal(null)
    setAddModal(true)
  }
  const handleEdit = () => {
    setEditModal(row)
    setAddModal(true)
  }
  return (
    <Box sx={{ display: 'grid', gap: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomPageHeading
          text='Users'
          total={'2,646'}
          print
          addButton={'Add User'}
          openModal={handleAdd}
          handlePrint={handlePrint}
        />
      </Box>
      <Box>
        <Card elevation={0} sx={{ height: 'fit-content', padding: '14px 20px' }}>
          <Table data={RowData} columns={columns} ref={componentRef} />
        </Card>
      </Box>
      <Box>
        <AddUserModal open={addModal} onClose={() => setAddModal(false)} />
      </Box>
    </Box>
  )
}

export default UsersPage
