// External Imports

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Search from '../search'

const TableHeader = props => {
  // ** Props
  const { pageTitle } = props

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Search />
      <Search />
    </Box>
  )
}

export default TableHeader
