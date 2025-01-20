// External Imports
import { Dialog, Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'
import StaticFormField from 'src/@core/components/Form/StaticFormField'
import ReviewModal from '../ReviewModal'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'customer',
      headerName: 'Customer',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.03,
      minWidth: 100,
      field: 'rating',
      headerName: 'Rating',
      align: 'left',
      headerAlign: 'left',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px' }} >
            {row.rating}
            <img src='/icons/star.svg' width={'20px'} />
          </Typography>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'review',
      headerName: 'Review',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'date',
      headerName: 'Date',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'actions',
      headerName: 'Action',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
        const [modalOpen, setModalOpen] = useState(false)
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
        const handleDelete = () => {
          setDeleteDialogOpen(true)
        }
        const handleModalOpen = () => {
          setModalOpen(true)
        }



        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }} >
            <Box>
              <img src='/icons/actionicon.svg' alt='...' width={'30px'} onClick={handleClick} />
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={handleModalOpen}
              >
                <img src='/icons/tableicons/detail.svg' width={'18px'} />
                View
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={handleDelete}
              >
                <img src='/icons/tableicons/delete.svg' width={'18px'} />
                Delete
              </MenuItem>
            </Menu>
            <DeleteDialogBox open={deleteDialogOpen} handleClose={() => setDeleteDialogOpen(false)} image={'/images/modals/delete.svg'} title={'Are you Sure?'} description={'Are you sure you want to delete the Review?'} />
            <ReviewModal open={modalOpen} handleClose={() => setModalOpen(false)} name={'Maria Schleifer'} role={'Customer'} rating={'4.5'} review={'Lorem ipsum dolor sit amet consectetur. Tincidunt vitae dictum sagittis pharetra ac. Praesent turpis non senectus ultricies eu. Ut.'} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
