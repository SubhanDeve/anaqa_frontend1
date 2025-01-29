// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SuccessDialogBox from 'src/@core/components/Dialog Box/SuccessDialogBox'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'bookingNo',
      headerName: 'Booking No',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'customerName',
      headerName: 'Customer Name',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'salon',
      headerName: 'Salon',
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
      flex: 0.03,
      minWidth: 100,
      field: 'rating',
      headerName: 'Rating',
      align: 'center',
      headerAlign: 'center',
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
      flex: 0.06,
      minWidth: 100,
      field: 'review',
      headerName: 'Review',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ textWrap: 'wrap', fontSize: '14px', fontWeight: '500', lineHeight: '14px', width: '100%' }}>
            {row.review}
          </Typography>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'date',
      headerName: 'Date',
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
          Approved: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F',
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
      headerName: 'Action',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {
        const [anchorEl, setAnchorEl] = useState(null)
        const [openApprove, setOpenApprove] = useState(false)
        const [openReject, setOpenReject] = useState(false)
        const router = useRouter()
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const profilePage = () => {
          router.push('/reviews/detail')
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
                onClick={() => setOpenApprove(true)}
              >
                <img src='/icons/tableicons/approve.svg' width={'18px'} />
                Approve
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={() => setOpenReject(true)}
              >
                <img src='/icons/tableicons/reject.svg' width={'20px'} />
                Reject
              </MenuItem>
            </Menu>
            <SuccessDialogBox title={'Approved!'} description={'Review has been Approved'} image={'/images/modals/done.svg'} open={openApprove} handleClose={() => setOpenApprove(false)} />
            <SuccessDialogBox title={'Rejected'} description={'Review has been Rejected'} image={'/images/modals/ignore.svg'} open={openReject} handleClose={() => setOpenReject(false)} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
