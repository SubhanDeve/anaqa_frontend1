// External Imports
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, TextField } from '@mui/material';

// Internal Imports
import TableHeader from './TableHeader';
import { forwardRef, useState } from 'react';

const Table = forwardRef(({ data, columns, onPageChange }, ref) => {
  columns = columns();
  // Custom Pagination Component
  const CustomPagination = ({ page, pageCount, onPageChange }) => {
    return (
      <Box display="flex" alignItems="center" justifyContent="end" sx={{ marginTop: '-3vh' }}>
        {/* Previous Button */}
        <Button
          variant="text"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)} // Zero-based indexing
          sx={{ color: '#6C757D', textTransform: 'none' }}
        >
          <img src='/icons/arrow-lt.svg' />
          Previous
        </Button>

        {/* Page Input */}
        <TextField
          value={page.toString().padStart(2, '0')}
          onChange={(e) => onPageChange(e.target.value)}
          slotProps={{
            input: {
              style: { textAlign: 'center', width: 'fit-content' },
            }
          }}
          size="small"
          sx={{ backgroundColor: '#FAFAFA', width: { xs: '10%', sm: '5%', xl: '3%' } }}
        />

        {/* Next Button */}
        <Button
          variant="text"
          disabled={page === pageCount}
          onClick={() => onPageChange(page + 1)} // Zero-based indexing
          sx={{ color: '#6C757D', textTransform: 'none' }}
        >
          Next
          <img src='/icons/arrow-rt.svg' />
        </Button>
      </Box>

    );
  }
  const [pageSize] = useState(10)
  const [pageNo, setPageNo] = useState(1)

  const handlePaginationChange = (value) => {
    const newPage = parseInt(value, 10);
    if (!isNaN(newPage) && newPage >= 1 && newPage <= Math.ceil((data?.length || 0) / pageSize)) {
      setPageNo(newPage);
      if (onPageChange) {
        onPageChange(newPage - 1);
      }
    }
  }

  return (
    <>
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          backgroundColor: 'white',
          borderRadius: '16px',
          height: '100%',
        }}
      >
        {/* Table Header */}
        <TableHeader />

        {/* DataGrid */}
        <DataGrid
          autoHeight
          rowHeight={70}
          rows={data?.slice((pageNo - 1) * pageSize, pageNo * pageSize) || []}
          columns={columns}
          checkboxSelection
          hideFooterPagination
          paginationModel={{
            pageSize: pageSize,
            page: pageNo - 1
          }}
          sx={{
            '.MuiDataGrid-columnSeparator': { display: 'none' },
            '.MuiDataGrid-menuIcon': { display: 'none' },
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: '#F8F8F9',
              borderRadius: '6px',
            },
            '.MuiDataGrid-columnHeaderTitle': {
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#6C757D',
              textTransform: 'none'
            },
            '.MuiDataGrid-cellContent': {
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '20px',
              color: '#6C757D',
            },
            '.MuiDataGrid-columnHeadersInner': {
              borderBottom: '1px solid #F0F0F0',
            },
            '.MuiDataGrid-row': {
              borderBottom: '1px solid #F0F0F0',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '24px',
              color: '#6C757D',
            },
          }}
          components={{
            NoRowsOverlay: () => (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Typography>{'No results found.'}</Typography>
              </Box>
            )
          }}
        />
        <CustomPagination
          onPageChange={handlePaginationChange}
          page={pageNo}
          pageCount={Math.ceil((data?.length || 0) / pageSize)}
          pageSize={pageSize}
        />
      </Box>
    </>
  )
})


export default Table
