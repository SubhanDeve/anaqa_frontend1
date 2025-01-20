// External Imports
import Typography from '@mui/material/Typography'

const Columns = () => {

  const column = [
    {
      flex: 0.05,
      minWidth: 100,
      field: 'salon',
      headerName: 'Salon',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'serviceNumber',
      headerName: 'No of Services',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'location',
      headerName: 'Location',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.05,
      minWidth: 100,
      field: 'distance',
      headerName: 'Distance',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.03,
      minWidth: 100,
      field: 'rating',
      headerName: 'Rating',
      align: 'left',
      headerAlign: 'left',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px' }} >
            {row.rating}
            <img src='/icons/star.svg' width={'20px'} />
          </Typography>
        )
      }
    },
  ]

  return column
}

export default Columns
