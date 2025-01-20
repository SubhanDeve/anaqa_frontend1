// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'invoiceId',
      headerName: 'Invoice ID',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'salon',
      headerName: 'Salon',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'service',
      headerName: 'Service',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'date',
      headerName: 'Date/Time',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'payment',
      headerName: 'Payment',
      align: 'left',
      headerAlign: 'left',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ backgroundColor: '#FAF5F6', color: '#CD929D', padding: '8px', borderRadius: '8px' }}>
            {row.payment}
          </Typography>
        )
      }
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
        const open = Boolean(anchorEl);
        const router = useRouter()
        const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
        const handleDelete = () => {
          setDeleteDialogOpen(true);
        };

        const invoicesPage = () => {
          router.push('/users/viewinvoices')
        }
        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }} >
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
                onClick={invoicesPage}
              > <img src='/icons/tableicons/detail.svg' width={'18px'} />
                View Details
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={handleDelete}
              >
                <img src='/icons/tableicons/delete.svg' width={'20px'} />
                Delete
              </MenuItem>
            </Menu>
            <DeleteDialogBox open={deleteDialogOpen} handleClose={() => setDeleteDialogOpen(false)} image={'/images/modals/cancelbooking.svg'} title={'Cancel Booking'} description={'Are you sure you want to cancel this booking?'} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
