import { Card } from '@mui/material'
import { ca } from 'date-fns/locale'
import React, { useState } from 'react'
import ReactApexChart from 'src/@core/components/react-apexcharts'

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
      categories: ['0', '100', '200', '300', '400', '500'],
      labels: {
        style: {
          colors: '#B0B0B0'
        }
      }
    }
  }

  const series = [
    {
      name: 'Bookings',
      data: [20, 40, 30, 50, 80, 40, 30]
    }
  ]

  return (
    <Card elevation={0} style={{ padding: '20px', borderRadius: '10px' }}>
      <div id='chart'>
        <ReactApexChart options={options} series={series} type='area' width={'100%'} height={'360px'} />
      </div>
    </Card>
  )
}

export default LineCard
