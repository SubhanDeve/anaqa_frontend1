// External Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'bookingId',
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
      headerName: 'Date & time',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'amount',
      headerName: 'Payment',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        const { amount } = row

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
              {amount}
            </Typography>
          </Box>
        )
      }
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
          Completed: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F',
          },
          Canceled: {
            backgroundColor: '#D83A3C14',
            color: '#D83A3C',
          },
          Confirmed: {
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
