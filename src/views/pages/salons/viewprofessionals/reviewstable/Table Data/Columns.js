// External Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'customerName',
      headerName: 'Customer Name',
      align: 'center',
      headerAlign: 'center'
    },
    {
      flex: 0.03,
      minWidth: 100,
      field: 'rating',
      headerName: 'Rating',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px' }} >
            {row.rating}
            <img src='/icons/star.svg' width={'20px'} />
          </Typography>
        )
      }
    },
    {
      flex: 0.06,
      minWidth: 100,
      field: 'review',
      headerName: 'Review',
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ textWrap: 'wrap', fontSize: '14px', fontWeight: '500', lineHeight: '14px', width: '100%' }}>
            {row.review}
          </Typography>
        )
      }
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'date',
      headerName: 'Date',
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
