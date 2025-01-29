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
      field: 'complaintId',
      headerName: 'Complaint ID',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'userType',
      headerName: 'User Type',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'user',
      headerName: 'Customer/ Salon',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'issue',
      headerName: 'Issue',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.06,
      minWidth: 100,
      field: 'description',
      headerName: 'Description',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ textWrap: 'wrap', fontSize: '14px', fontWeight: '500', lineHeight: '14px', width: '100%' }}>
            {row.description}
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
          Resolved: {
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
          router.push('/complaints/detail')
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
                <img src='/icons/tableicons/resolve.svg' width={'18px'} />
                Resolve
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={() => setOpenReject(true)}
              >
                <img src='/icons/tableicons/ignore.svg' width={'18px'} />
                Ignore
              </MenuItem>
            </Menu>
            <SuccessDialogBox title={'Complaint Resolved!'} description={'You have resolved the complaint.'} image={'/images/modals/done.svg'} open={openApprove} handleClose={() => setOpenApprove(false)} />
            <SuccessDialogBox title={'Complaint Ignored!'} description={'You have ignored the complaint.'} image={'/images/modals/ignore.svg'} open={openReject} handleClose={() => setOpenReject(false)} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
