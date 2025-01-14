// External Imports

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import CustomDateMenu from 'src/@core/components/CustomDateMenu'
import Search from 'src/@core/components/search'

const TableHeader = props => {
  // ** Props
  const { pageTitle } = props

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '20px',
        pb: '6px',
        pt: '18px'
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{pageTitle}</Typography>
      <CustomDateMenu />
      <Search />
    </Box>
  )
}

export default TableHeader
