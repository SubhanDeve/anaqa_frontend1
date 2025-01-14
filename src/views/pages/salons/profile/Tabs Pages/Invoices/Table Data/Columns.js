// External Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'invoiceId',
      headerName: 'Booking ID',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'customer',
      headerName: 'Customer',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'service',
      headerName: 'Service',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'date',
      headerName: 'Date/Time',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'total',
      headerName: 'Total Payment',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ backgroundColor: '#FAF5F6', color: '#CD929D', padding: '8px', borderRadius: '8px' }}>
            {row.total}
          </Typography>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'percent',
      headerName: 'Salon %',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ backgroundColor: '#FAF5F6', color: '#CD929D', padding: '8px', borderRadius: '8px' }}>
            {row.total}
          </Typography>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'commission',
      headerName: 'Anaqa Commission',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ backgroundColor: '#FAF5F6', color: '#CD929D', padding: '8px', borderRadius: '8px' }}>
            {row.total}
          </Typography>
        )
      }
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
