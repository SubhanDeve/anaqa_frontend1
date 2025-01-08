import { Box, Card } from '@mui/material'
import React, { useState } from 'react'
import ReactApexChart from 'src/@core/components/react-apexcharts'
import LineChartHeader from 'src/views/components/dashboard/Line Chart Header/LineChartHeader'

const LineCard = () => {
  const [selectedItem, setSelectedItem] = useState('')

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        opacity: 100,
        blur: 20,
        left: 0,
        top: 10,
        colors: ['#CD929D', '#FAF5F6']
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#CD929D', '#FAF5F6']
    },
    markers: {
      size: 5,
      colors: ['#CD929D'],
      strokeColors: '#CD929D',
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex]
        return `
          <div style="padding: 5px; background-color: #FAF5F6; color: #CD929D; border-radius: 5px;">
            <strong>$${value * 10}</strong><br />
            ${value} Bookings
          </div>
        `
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 1,
        gradientToColors: ['#CD929D', '#FAF5F6'],
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      labels: {
        style: {
          colors: '#B0B0B0'
        }
      }
    },
    yaxis: {
      labels: {
        value: ['0', '100', '200', '300', '400', '500'],
        style: {
          colors: '#B0B0B0'
        },
        formatter: function (value) {
          return `$${value}` // Prefix each value with a dollar sign
        }
      }
    }
  }

  const series = [
    {
      name: 'Bookings',
      data: [150, 300, 200, 480, 300, 270]
    }
  ]

  return (
    <Card elevation={0} style={{ padding: '20px', borderRadius: '10px' }}>
      <Box>
        <LineChartHeader />
      </Box>
      <Box>
        <ReactApexChart options={options} series={series} type='area' width={'100%'} height={'300px'} />
      </Box>
    </Card>
  )
}

export default LineCard
