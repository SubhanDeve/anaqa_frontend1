// External Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Columns = () => {
  const column = [
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
      field: 'salons',
      headerName: 'Salons',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'users',
      headerName: 'Users',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'totalbookings',
      headerName: 'No of bookings',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'sale',
      headerName: 'Sale',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        const { sale } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }} >
            <Typography
              sx={{
                padding: '10px',
                backgroundColor: '#FAF5F6',
                color: '#CD929D !important',
                height: 'auto',
                width: 'auto',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {sale}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 100,
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
