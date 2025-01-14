// External Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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
      field: 'number',
      headerName: 'Number',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'role',
      headerName: 'Role',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.03,
      width: 10,
      field: 'actions',
      headerName: 'Actions',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {

        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }} >
            <Box>
              <img src='/icons/actionicon.svg' alt='...' width={'30px'} />
            </Box>
          </Box>
        )
      }
    },
  ]

  return column
}

export default Columns
