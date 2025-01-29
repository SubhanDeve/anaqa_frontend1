// External Imports
import { Menu, MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DeleteDialogBox from 'src/@core/components/Dialog Box/DeleteDialogBox'
import CustomAvatar from 'src/@core/components/mui/avatar'
import AddPromotionModal from '../AddPromotionModal'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'code',
      headerName: 'Code',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'title',
      headerName: 'Title',
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
      field: 'serviceType',
      headerName: 'Service Type',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'discountType',
      headerName: 'Discount Type',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'discountValue',
      headerName: 'Discount Value',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'validFrom',
      headerName: 'Valid From',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'validTo',
      headerName: 'Valid To',
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
          Upcoming: {
            backgroundColor: '#F8F8F9',
            color: '#6C757D',
          },
          Active: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F',
          },
          Expired: {
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
        const [anchorEl, setAnchorEl] = useState(null)
        const [openDelete, setOpenDelete] = useState(false)
        const [openEdit, setOpenEdit] = useState(false)
        const router = useRouter()
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const profilePage = () => {
          router.push('/promotions/detail')
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
            <DeleteDialogBox title={'Are you Sure?'} description={'Are you sure you want to delete the Promotion?'} image={'/images/modals/delete.svg'} open={openDelete} handleClose={() => setOpenDelete(false)} />
            <AddPromotionModal open={openEdit} handleClose={() => setOpenEdit(false)} />
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
