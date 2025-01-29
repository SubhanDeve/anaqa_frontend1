// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'
import CustomAvatar from 'src/@core/components/mui/avatar'
import AddServiceModal from '../AddServiceModal'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'serviceId',
      headerName: 'Service ID',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'name',
      headerName: 'Service Name',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'category',
      headerName: 'Salon Category',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'created',
      headerName: 'Created At',
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
          Active: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F',
          },
          InActive: {
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
      field: 'actions',
      headerName: 'Action',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const [openDelete, setOpenDelete] = useState(false)
        const [openEdit, setOpenEdit] = useState(false)
        const open = Boolean(anchorEl);
        const router = useRouter()
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const profilePage = () => {
          router.push('/services/detail')
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
                onClick={() => setOpenEdit(true)}
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
                onClick={() => setOpenDelete(true)}
              >
                <img src='/icons/tableicons/delete.svg' width={'20px'} />
                Delete
              </MenuItem>
            </Menu>
            <AddServiceModal open={openEdit} handleClose={() => setOpenEdit(false)} />
            <DeleteDialogBox title={'Are you Sure?'} description={'Are you sure you want to delete the Service?'} image={'/images/modals/delete.svg'} open={openDelete} handleClose={() => setOpenDelete(false)} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
