// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'
import SuccessDialogBox from 'src/@core/components/Dialog Box/SuccessDialogBox'


const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'bookingId',
      headerName: 'Booking ID',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'customer',
      headerName: 'Customer',
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
      headerName: 'Date',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'status',
      headerName: 'Status',
      align: 'left',
      headerAlign: 'left',
      renderCell: ({ row }) => {
        // Status styles map (dynamically extendable)
        const statusStyles = {
          Pending: {
            backgroundColor: '#F8F8F9',
            color: '#6C757D',
          },
          Completed: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F',
          },
          Confirmed: {
            backgroundColor: '#F59E0B0D',
            color: '#F59E0B',
          },
          Canceled: {
            backgroundColor: '#D83A3C14',
            color: '#D83A3C',
          },
        };

        // Fallback to default styles if status not found in map
        const currentStyles = statusStyles[row.status] || {
          backgroundColor: '#E0E0E0', // Default background
          color: '#000000', // Default text color
        };

        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Typography
              sx={{
                padding: '6px',
                backgroundColor: currentStyles.backgroundColor,
                height: 'auto',
                width: 'auto',
                borderRadius: '8px',
                fontSize: '14px',
                color: currentStyles.color,
                fontWeight: '500',
              }}
            >
              {row.status}
            </Typography>
          </Box>
        );
      },
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'payment',
      headerName: 'Payment',
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
        const [successDialogOpen, setSuccessDialogOpen] = useState(false)
        const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
        const open = Boolean(anchorEl);
        const router = useRouter()
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const ViewBookingsPage = () => {
          router.push('/salons/viewbookings')
        }

        const handleSubmit = () => {
          setSuccessDialogOpen(true)
        }
        const handleDelete = () => {
          setDeleteDialogOpen(true)
        }
        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }} >
            <Box>
              <img src='/icons/actionicon.svg' alt='...' width={'30px'} onClick={handleClick} style={{ cursor: 'pointer' }} />
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={ViewBookingsPage}
              > <img src='/icons/tableicons/detail.svg' width={'18px'} />
                Invoice Details
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
              >
                <img src='/icons/tableicons/reschedule.svg' width={'18px'} />
                Reschedule
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={handleSubmit}
              >
                <img src='/icons/tableicons/confirm.svg' width={'18px'} />
                Confirm
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={handleDelete}
              >
                <img src='/icons/tableicons/reject.svg' width={'20px'} />
                Cancel
              </MenuItem>
            </Menu>
            <DeleteDialogBox open={deleteDialogOpen} handleClose={() => setDeleteDialogOpen(false)} image={'/images/modals/cancelbooking.svg'} title={'Cancel Booking'} description={'Are you sure you want to cancel this booking?'} />
            <SuccessDialogBox open={successDialogOpen} handleClose={() => setSuccessDialogOpen(false)} title={'Booking Confirmed'} description={'Your booking is confirmed! You can now manage your appointments and services effortlessly on ANAQA.'} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
