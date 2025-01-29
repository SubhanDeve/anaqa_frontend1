// External Imports
import { Menu, MenuItem, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'
import FaqModal from '../FaqModal'

const Columns = () => {

  const column = [
    {
      flex: 0.02,
      minWidth: 100,
      field: 'type',
      headerName: 'Type',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.06,
      minWidth: 100,
      field: 'question',
      headerName: 'Question',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.06,
      minWidth: 100,
      field: 'answer',
      headerName: 'Answer',
      align: 'left',
      headerAlign: 'left',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ textWrap: 'wrap', fontSize: '14px', fontWeight: '500', lineHeight: '14px', width: '100%' }}>
            {row.answer}
          </Typography>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'actions',
      headerName: 'Actions',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {
        const [anchorEl, setAnchorEl] = useState(null)
        const [openEdit, setOpenEdit] = useState(false)
        const [openDelete, setOpenDelete] = useState(false)
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }} >
            <Box>
              <img src='/icons/actionicon.svg' alt='...' width={'30px'} onClick={handleClick} />
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
              <MenuItem sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}
                onClick={() => setOpenEdit(true)}
              > <img src='/icons/tableicons/edit.svg' width={'18px'} /> Edit</MenuItem>
              <MenuItem sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}
                onClick={() => setOpenDelete(true)}
              > <img src='/icons/tableicons/delete.svg' width={'20px'} /> Delete</MenuItem>
            </Menu>
            <FaqModal open={openEdit} handleClose={() => setOpenEdit(false)} />
            <DeleteDialogBox title={'Are you Sure?'} description={'Are you sure you want to delete the salon?'} image={'/images/modals/delete.svg'} open={openDelete} />
          </Box >
        )
      }
    },
  ]

  return column
}

export default Columns
