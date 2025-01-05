import React from 'react'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8F8F9', // White background
          borderRadius: '5px', // Rounded corners
          border: 'none',
          '& .MuiOutlinedInput-root': {
            border: 'none',
            borderRadius: '5px', // Rounded input box
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // White background
          borderRadius: '12px', // Rounded edges
          border: 'none',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow
          display: 'flex',
          flexDirection: 'column', // Ensure sections are stacked
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          color: '#CD929D', // Header text color
          fontWeight: 'bold',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: '#CD929D', // Default day color
          '&.Mui-selected': {
            backgroundColor: '#CD929D', // Selected day background
            color: '#FFFFFF', // Selected day text
          },
        },
      },
    },
    MuiPickersTimeClock: {
      styleOverrides: {
        root: {
          paddingTop: '8px', // Space between calendar and time
        },
      },
    },
    NotchedOutline: {
      border: 'none'
    }
  },
});

const CustomDateMenu = () => {
  return (
    <ThemeProvider theme={theme}>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Date & Time" sx={{ '&notchedOutline': { border: 'none' } }}  />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default CustomDateMenu
