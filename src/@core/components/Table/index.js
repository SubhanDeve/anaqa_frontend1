// External Imports
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, TextField } from '@mui/material';

// Internal Imports
import TableHeader from './TableHeader';

const Table = ({ data, columns }) => {
  columns = columns();

  // Custom Pagination Component
  const CustomPagination = ({ page, pageCount, onPageChange }) => {
    return (
      <Box display="flex" alignItems="center" justifyContent="end" sx={{ padding: '8px 0px' }}>
        {/* Previous Button */}
        <Button
          variant="text"
          disabled={page === 1}
          onClick={() => onPageChange(page - 2)} // Zero-based indexing
          sx={{ color: '#6C757D', textTransform: 'none' }}
        >
          <img src='/icons/arrow-lt.svg' />
          Previous
        </Button>

        {/* Page Input */}
        <TextField
          // value={page.toString().padStart(2, '0')}
          value={10}
          onChange={(e) => {
            const newPage = parseInt(e.target.value, 10);
            if (!isNaN(newPage) && newPage >= 1 && newPage <= pageCount) {
              onPageChange(newPage - 1); // Convert to zero-based indexing
            }
          }}
          inputProps={{
            style: { textAlign: 'center', width: '100%' },
          }}
          size="small"
          sx={{ backgroundColor: '#FAFAFA', width: '16%' }}
        />

        {/* Next Button */}
        <Button
          variant="text"
          disabled={page === pageCount}
          onClick={() => onPageChange(page)} // Zero-based indexing
          sx={{ color: '#6C757D', textTransform: 'none' }}
        >
          Next
          <img src='/icons/arrow-rt.svg' />
        </Button>
      </Box>
    );
  };

  return (
    <Box
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
        rows={data || []}
        columns={columns}
        checkboxSelection
        pageSize={10}
        rowsPerPageOptions={[10]}
        pagination
        paginationMode="client" // Use "client" or "server" as per your setup
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
          Pagination: (props) => (
            <CustomPagination
              page={props.page + 1} // Convert zero-based to one-based for display
              pageCount={props.rowCount / props.pageSize} // Total page count
              onPageChange={(newPage) => props.onPageChange(newPage)} // Pass onPageChange
            />
          ),
        }}
      />
    </Box>
  );
};

export default Table;
