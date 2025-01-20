import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const StatusTab = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false
    },
    xaxis: {
      categories: [
        `10 Mon`,
        '11 Tue',
        '12 Wed',
        '13 Thu',
        '14 Fri',
        '15 Sat',
        '16 Sun',
        '17 Mon',
        '18 Tue',
        '19 Wed',
        '20 Thu',
        '21 Fri',
        '22 Sat',
        '23 Sun'
      ],
      labels: {
        style: {
          fontFamily: 'Outfit',
          fontSize: '14px',
          color: '#212529'
        },
        offsetY: '-10%'
      }
    },
    tooltip: {
      shared: true,
      intersect: false, // Ensure this is set to false to avoid the error
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex]
        return `<div style="padding: 10px; font-size: 14px;">
                  <span>30 Bookings</span>
                </div>`
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `Sar ${val}`
      },
      style: {
        colors: ['#FFFFFF'],
        fontFamily: 'Outfit'
      },
      offsetY: -10
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: '70%'
      }
    },
    fill: {
      colors: ['#D991A7']
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  }

  const series = [
    {
      name: 'Price',
      data: [560, 400, 560, 700, 430, 380, 650, 650, 650, 650, 650, 650, 650, 650]
    }
  ]

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Stats</Typography>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#212529' }}>Filter By</Typography>
          <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#007BFF' }}>Date & Time</Typography>
        </Box>
      </Box>
      <Card sx={{ padding: '30px 0px 0px 0px' }}>
        <ReactApexcharts options={options} series={series} type='bar' width='100%' height={'280px'} />
      </Card>
    </Box>
  )
}

export default StatusTab
