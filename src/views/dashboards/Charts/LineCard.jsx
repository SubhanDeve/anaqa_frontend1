import { Card, colors } from '@mui/material'
import { color } from '@mui/system'
import React, { useState } from 'react'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const LineCard = () => {
  const [selectedItem, setSelectedItem] = useState('')

  const options = {
    chart: {
      type: 'area',
      dropShadow: {
        enabled: true,
        opacity: 0.5, // Reduce opacity for a subtle shadow
        blur: 10,
        left: 0,
        top: 10,
        color: '#CD929D'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 4,
      colors: ['#CD929D'] // Line color
    },
    series: [
      {
        name: 'Series 1',
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical', // Ensures gradient "falls" under the line
        shadeIntensity: 100,
        gradientToColors: ['#CD929D'], // The gradient falls to white or another background color
        inverseColors: true,
        opacityFrom: 100, // Starting opacity at the line
        opacityTo: 0, // Ending opacity at the bottom
        stops: [0, 100] // Gradient stops from top (line) to bottom
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
    }
  }

  const series = [
    {
      name: 'Amount',
      data: [30, 40, 35, 50, 49, 60, 70]
    }
  ]

  return (
    <Card elevation={0}>
      <div id='chart'>
        <ReactApexcharts options={options} series={series} type='line' width={'100%'} height={'360px'} />
      </div>
    </Card>
  )
}

export default LineCard
