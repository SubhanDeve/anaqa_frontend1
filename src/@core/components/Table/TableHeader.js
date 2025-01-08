// External Imports

import { Typography, Box } from '@mui/material'

import Search from '../search'
import CustomSelectMenu from '../CustomSelectMenu'

const TableHeader = () => {
  const menuOptions = [
    {
      title: 'Active'
    },
    {
      title: 'InActive'
    }
  ]
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Typography sx={{ fontSize: '14px', lineHeight: '21px', fontWeight: '500', color: '#212529' }}>Filter By</Typography>
        <CustomSelectMenu menuOptions={menuOptions} title={'Date & Time'} bgcolor={'#F8F8F9'} />
        <CustomSelectMenu menuOptions={menuOptions} title={'Status'} bgcolor={'#F8F8F9'} />
        <CustomSelectMenu menuOptions={menuOptions} title={'City'} bgcolor={'#F8F8F9'} />
        <CustomSelectMenu menuOptions={menuOptions} title={'Category'} bgcolor={'#F8F8F9'} />
      </Box>
      <Search />
    </Box>
  )
}

export default TableHeader
