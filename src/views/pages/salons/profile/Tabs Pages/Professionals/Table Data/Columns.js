// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CustomAvatar from 'src/@core/components/mui/avatar'

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
      field: 'profile',
      headerName: 'Profile',
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
      field: 'name',
      headerName: 'Name',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'email',
      headerName: 'Email',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'number',
      headerName: 'Number',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'role',
      headerName: 'Role',
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
        const open = Boolean(anchorEl);
        const router = useRouter()
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };


        const professionalPage = () => {
          router.push('/salons/viewprofessionals')
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
                onClick={professionalPage}
              > <img src='/icons/tableicons/detail.svg' width={'18px'} />
                View Details
              </MenuItem>
            </Menu>
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
