// External Imports
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

const Columns = () => {

  const column = [
    {
      flex: 0.02,
      minWidth: 100,
      field: 'type',
      headerName: 'Type',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.06,
      minWidth: 100,
      field: 'question',
      headerName: 'Question',
      align: 'left',
      headerAlign: 'left'
    },
    {
      flex: 0.06,
      minWidth: 100,
      field: 'answer',
      headerName: 'Answer',
      align: 'left',
      headerAlign: 'left',
      renderCell: ({ row }) => {
        return (
          <Typography sx={{ textWrap: 'wrap', fontSize: '14px', fontWeight: '500', lineHeight: '14px', width: '100%' }}>
            {row.answer}
          </Typography>
        )
      }
    },
    {
      flex: 0.01,
      width: 10,
      field: 'actions',
      headerName: 'Action',
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
