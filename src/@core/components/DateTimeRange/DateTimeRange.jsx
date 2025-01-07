import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import enUS from 'date-fns/locale/en-US' // Import the desired locale
import 'react-date-range/dist/styles.css' // Main style file
import 'react-date-range/dist/theme/default.css' // Default theme file

const DateTimeRange = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])

  return (
    <div>
      <DateRangePicker
        onChange={item => setState([item.selection])}
        scroll={{ enabled: false }}
        direction='vertical'
        ranges={state}
        locale={enUS} // Pass the locale here
        rangeColors='#CD929D'
        color='#CD929D'
        moveRangeOnFirstSelection={false}
      />
    </div>
  )
}

export default DateTimeRange
