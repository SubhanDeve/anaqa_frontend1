// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CustomAvatar from 'src/@core/components/mui/avatar'
import AddUserModal from '../AddUserModal'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'

const Columns = () => {
  const renderClient = row => {
    if (row?.url) {
      return <CustomAvatar src='/images/avatars/profile1.png' sx={{ mr: 3, width: '34px', height: 34 }} />
    } else {
      return (
        <CustomAvatar
          skin='light'
          color={row.avatarColor || 'primary'}
          sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
        ></CustomAvatar>
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
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', height: 'fit-content' }}>
            <img src='/images/avatars/avatar3.png' />
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
      field: 'phoneNo',
      headerName: 'Phone',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'regDate',
      headerName: 'Reg. Date',
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
            color: '#6C757D'
          },
          Active: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F'
          },
          Deleted: {
            backgroundColor: '#D83A3C14',
            color: '#D83A3C'
          },
          Blocked: {
            backgroundColor: '#EEEEEE',
            color: '#6C757D'
          },
          InActive: {
            backgroundColor: '#F59E0B0D',
            color: '#F59E0B'
          }
        }

        // Fallback to default styles if status not found in map
        const currentStyles = statusStyles[row.status] || {
          backgroundColor: '#E0E0E0', // Default background
          color: '#000000' // Default text color
        }

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
                fontWeight: '500'
              }}
            >
              {row.status}
            </Typography>
          </Box>
        )
      }
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
      field: 'actions',
      headerName: 'Actions',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {
        const [anchorEl, setAnchorEl] = useState(null)
        const [editModal, setEditModal] = useState(false)
        const [openBlock, setOpenBlock] = useState(false)
        const [openDelete, setOpenDelete] = useState(false)
        const open = Boolean(anchorEl)
        const router = useRouter()
        const handleClick = event => {
          setAnchorEl(event.currentTarget)
        }
        const handleClose = () => {
          setAnchorEl(null)
        }

        const profilePage = () => {
          router.push('/users/profile')
        }
        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
            <Box>
              <img src='/icons/actionicon.svg' alt='...' width={'30px'} onClick={handleClick} />
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={profilePage}
              >
                {' '}
                <img src='/icons/tableicons/detail.svg' width={'18px'} />
                Details
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={() => setEditModal(true)}
              >
                <img src='/icons/tableicons/edit.svg' width={'18px'} />
                Edit
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={() => setOpenBlock(true)}
              >
                <img src='/icons/tableicons/reject.svg' width={'18px'} />
                Block
              </MenuItem>
              <MenuItem
                sx={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
                onClick={() => setOpenDelete(true)}
              >
                <img src='/icons/tableicons/delete.svg' width={'20px'} />
                Delete
              </MenuItem>
            </Menu>
            <div>
              <AddUserModal open={editModal} onClose={() => setEditModal(false)} />
              <DeleteDialogBox
                open={openBlock}
                handleClose={() => setOpenBlock(false)}
                title={'Block User?'}
                description={'Are you sure you want to block this user Paityn Torff ?'}
                image={'/images/modals/block.svg'}
              />
              <DeleteDialogBox
                open={openDelete}
                handleClose={() => setOpenDelete(false)}
                title={'Are you Sure?'}
                description={'Are you sure you want to delete the user?'}
                image={'/images/modals/delete.svg'}
              />
            </div>
          </Box>
        )
      }
    }
  ]

  return column
}

export default Columns
