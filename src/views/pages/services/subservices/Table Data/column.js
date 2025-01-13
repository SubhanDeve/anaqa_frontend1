// External Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'subservice',
      headerName: 'Sub Service',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'salonName',
      headerName: 'Salon',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'mainService',
      headerName: 'Main Service',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'price',
      headerName: 'Price',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'estimate',
      headerName: 'Estimated Duration',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'created',
      headerName: 'Created Date',
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
          Approved: {
            backgroundColor: '#1BA40F14',
            color: '#1BA40F',
          },
          Rejected: {
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
