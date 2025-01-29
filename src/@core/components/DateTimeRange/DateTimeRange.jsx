import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import enUS from 'date-fns/locale/en-US' // Import the desired locale
import 'react-date-range/dist/styles.css' // Main style file
import 'react-date-range/dist/theme/default.css' // Default theme file
import { Box, Button, Menu, Typography } from '@mui/material'

const DateTimeRange = ({ bgcolor }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDateChange = item => {
    setState([item.selection])
    logValues(item.selection, startTime, endTime)
  }

  const handleStartTimeChange = e => {
    const value = e.target.value
    setStartTime(value)
    logValues(state[0], value, endTime)
  }

  const handleEndTimeChange = e => {
    const value = e.target.value
    setEndTime(value)
    logValues(state[0], startTime, value)
  }

  const logValues = (dateRange, start, end) => {
    console.log('Date Range:', dateRange)
    console.log('Start Time:', start)
    console.log('End Time:', end)
  }

  return (
    <Box>
      <Box>
        <Button
          sx={{
            backgroundColor: bgcolor,
            textTransform: 'none',
            display: 'flex',
            gap: '10px',
            color: '#6C757D',
            fontSize: '14px',
            fontWeight: '400',
            borderRadius: '5px',
            padding: '10px',
            '.css-1is3odb-MuiButtonBase-root-MuiButton-root .MuiButton-textPrimary:hover': {
              backgroundColor: '#F8F8F9'
            }
          }}
          disableRipple
          onClick={handleMenuOpen}
        >
          Date & Time
          <img src='/icons/arrow-down.svg' width={'20px'} />
        </Button>
      </Box>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        elevation={0}
        sx={{
          borderRadius: '12px',
          boxShadow: 'none',
          '.MuiMenu-paper': {
            boxShadow: '0px 10px 60px 0px #0000001A',
            border: '1px solid #E3E3E3',
            borderRadius: '12px'
          },
          '.css-1toxriw-MuiList-root-MuiMenu-list': { padding: 0 }
        }}
      >
        <Box sx={{ width: 'fit-content', borderRadius: '12px', overflow: 'clip' }}>
          <DateRangePicker
            onChange={handleDateChange}
            scroll={{ enabled: false }}
            direction='vertical'
            ranges={state}
            locale={enUS} // Pass the locale here
            rangeColors='#CD929D'
            color='#CD929D'
            moveRangeOnFirstSelection={false}
            className='daterange'
          />
          <Box
            sx={{ display: 'flex', backgroundColor: '#F8F8F9', justifyContent: 'space-between', padding: '8px 20px' }}
          >
            <Box sx={{ display: 'grid' }}>
              <Typography sx={{ color: '#212529', fontSize: '15px', fontWeight: '600' }}>From</Typography>
              <input
                type='time'
                name='starttime'
                id='starttime'
                value={startTime}
                onChange={handleStartTimeChange}
                style={{ padding: '10px', borderRadius: '8px', fontSize: '16px', fontWeight: '500', width: '140px' }}
              />
            </Box>
            <Box sx={{ display: 'grid' }}>
              <Typography sx={{ color: '#212529', fontSize: '15px', fontWeight: '600' }}>To</Typography>
              <input
                type='time'
                name='endtime'
                id='endtime'
                value={endTime}
                onChange={handleEndTimeChange}
                style={{ padding: '10px', borderRadius: '8px', fontSize: '16px', fontWeight: '500', width: '140px' }}
              />
            </Box>
          </Box>
        </Box>
      </Menu>
    </Box>
  )
}

export default DateTimeRange
