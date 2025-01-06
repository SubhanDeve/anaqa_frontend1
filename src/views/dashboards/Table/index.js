// External Imports
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'

// Internal Imports
import TableHeader from './TableHeader'
import Columns from './column'

const data = [
  {
    id: 1,
    city: 'Jeddah',
    salons: '56',
    users: '1256',
    totalbookings: '1260 Bookings',
    sale: 'SAR 2500',
    actions: '...'
  },
  {
    id: 2,
    city: 'Riyadh',
    salons: '48',
    users: '1000',
    totalbookings: '1150 Bookings',
    sale: 'SAR 2235',
    actions: '...'
  },
  {
    id: 3,
    city: 'Madinah',
    salons: '36',
    users: '950',
    totalbookings: '1048 Bookings',
    sale: 'SAR 1875',
    actions: '...'
  },
  {
    id: 4,
    city: 'Taif',
    salons: '24',
    users: '732',
    totalbookings: '965 Bookings',
    sale: 'SAR 1380',
    actions: '...'
  }
]

const Table = () => {
  const columns = Columns()

  return (
    <Box sx={{ backgroundColor: 'white', borderRadius: '16px', height: '100%' }} spacing={6}>
      <TableHeader pageTitle={'Top Booking  Cities '} />
      <DataGrid
        autoHeight
        rowHeight={70}
        rows={data || []}
        columns={columns}
        hideFooterPagination
        sx={{
          px: '20px',
          '.MuiDataGrid-columnSeparator': { display: 'none' },
          '.MuiDataGrid-columnHeaderTitle': { fontWeight: '600', fontSize: '15px', lineHeight: '24px', color: '#6C757D', textTransform: 'none' },
          '.MuiDataGrid-menuIcon': { display: 'none' },
          '.MuiDataGrid-columnHeaders': { backgroundColor: 'white' },
          '.css-oc5vc5-MuiDataGrid-columnHeadersInner': { borderBottom: '1px solid #F0F0F0', mb: '3%' },
          '.MuiDataGrid-row': { borderBottom: '1px solid #F0F0F0', fontWeight: '600', fontSize: '14px', lineHeight: '24px', color: '#6C757D' },
          mt: '16px'
        }}
      />
    </Box>
  )
}

export default Table
