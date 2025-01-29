// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'
import SuccessDialogBox from 'src/@core/components/Dialog Box/SuccessDialogBox'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'salonName',
      headerName: 'Salon Name',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'owner',
      headerName: 'Owner',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'email',
      headerName: 'Email',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'phone',
      headerName: 'Phone No',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'city',
      headerName: 'City',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'reqDate',
      headerName: 'Req Date',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'status',
      headerName: 'Status',
      align: 'center',
      headerAlign: 'center',
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
          Canceled: {
            backgroundColor: '#D83A3C14',
            color: '#D83A3C',
          },
          Confirmed: {
            backgroundColor: '#F59E0B0D',
            color: '#F59E0B',
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
      field: 'actions',
      headerName: 'Actions',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const [openConfirm, setOpenConfirm] = useState(false)
        const [openCancel, setOpenCancel] = useState(false)
        const open = Boolean(anchorEl);
        const router = useRouter()
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const profilePage = () => {
          router.push('/bookings/bookingdetail')
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
                onClick={profilePage}
              > <img src='/icons/tableicons/detail.svg' width={'18px'} />
                View Details
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
                onClick={() => setOpenConfirm(true)}
              >
                <img src='/icons/tableicons/approve.svg' width={'18px'} />
                Confirm
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={() => setOpenCancel(true)}
              >
                <img src='/icons/tableicons/cancel.svg' width={'18px'} />
                Cancel
              </MenuItem>
            </Menu>
            <SuccessDialogBox title={'Booking Confirmed'} description={'Your booking is confirmed! You can now manage your appointments and services effortlessly on ANAQA.'} image={'/images/modals/done.svg'} open={openConfirm} handleClose={() => setOpenConfirm(false)} />
            <DeleteDialogBox title={'Are you Sure?'} description={'Are you sure you want to delete the salon?'} image={'/images/modals/done.svg'} open={openCancel} handleClose={() => setOpenCancel(false)} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
