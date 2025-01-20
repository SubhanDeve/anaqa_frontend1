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
      field: 'serviceId',
      headerName: 'Service ID',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'serviceName',
      headerName: 'Service Name',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'subService',
      headerName: 'Sub Service',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'created',
      headerName: 'Created by',
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
          Active: {
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
        const handleSubmit = () => {
          setSuccessDialogOpen(true)
        }
        const handleDelete = () => {
          setDeleteDialogOpen(true)
        }


        const serviceDetail = () => {
          router.push('/salons/servicedetails')
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
                onClick={handleSubmit}
              > <img src='/icons/tableicons/confirm.svg' width={'18px'} />
                Confirm
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={serviceDetail}
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
              > <img src='/icons/tableicons/delete.svg' width={'18px'} />
                Delete
              </MenuItem>
            </Menu>
            <DeleteDialogBox open={deleteDialogOpen} handleClose={() => setDeleteDialogOpen(false)} image={'/images/modals/delete.svg'} title={'Are you Sure?'} description={'Are you sure you want to delete the Review?'} />
            <SuccessDialogBox open={successDialogOpen} handleClose={() => setSuccessDialogOpen(false)} title={'Service Confirmed'} description={'Your service is confirmed! You can now manage your appointments and services effortlessly on ANAQA.'} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
