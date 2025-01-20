// External Imports
import { Menu, MenuItem, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'

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
      flex: 0.05,
      minWidth: 100,
      field: 'actions',
      headerName: 'Actions',
      align: 'center',
      headerAlign: 'center',
      renderCell: () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };

        const profilePage = () => {
          Router.push('/salons/profile')
        }
        return (
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }} >
            <Box>
              <img src='/icons/actionicon.svg' alt='...' width={'30px'} onClick={handleClick} />
            </Box>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
              <MenuItem sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}> <img src='/icons/tableicons/edit.svg' width={'18px'} /> Edit</MenuItem>
              <MenuItem sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}> <img src='/icons/tableicons/delete.svg' width={'20px'} /> Delete</MenuItem>
            </Menu>
          </Box >
        )
      }
    },
  ]

  return column
}

export default Columns
