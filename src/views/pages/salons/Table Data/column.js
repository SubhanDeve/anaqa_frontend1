// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Router from 'next/router'
import { useState } from 'react'
import CustomAvatar from 'src/@core/components/mui/avatar'
import SalonProfile from '../profile'

const Columns = () => {
  const renderClient = row => {
    if (row?.url) {
      return <CustomAvatar src={row.url} sx={{ mr: 3, width: '34px', height: 34 }} />
    } else {
      return (
        <CustomAvatar
          skin='light'
          color={row.avatarColor || 'primary'}
          sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
        >
        </CustomAvatar>
      )
    }
  }
  const column = [
    {
      flex: 0.05,
      minWidth: '30px',
      field: 'url',
      headerName: 'Image',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', height: 'fit-content' }}>
            {renderClient(row)}
          </Box>
        )
      }
    },
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
      field: 'phoneNo',
      headerName: 'Phone',
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
      field: 'owner',
      headerName: 'Owner',
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
          Active: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F',
          },
          Deleted: {
            backgroundColor: '#D83A3C14',
            color: '#D83A3C',
          },
          Blocked: {
            backgroundColor: '#EEEEEE',
            color: '#6C757D',
          },
          InActive: {
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
                padding: '6px 16px',
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
      field: 'city',
      headerName: 'City',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'category',
      headerName: 'Category',
      align: 'center',
      headerAlign: 'center'
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
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const profilePage = () => {
          Router.push('/salons/profile')
        }
        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }} >
            <Box>
              <img src='/icons/actionicon.svg' alt='...' width={'30px'} onClick={handleClick} />
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
              <MenuItem onClick={profilePage}>Details</MenuItem>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Block</MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
