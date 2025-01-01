// External Imports
import React from 'react'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { Box, Typography } from '@mui/material'


const DonutChart = () => {

  const [stages, setStages] = React.useState('')

  const handleChange = event => {
    setStages(event.target.value)
  }

  const seriesData = [70]

  const optionsData = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#FAF4F5',
          startAngle: -90,
          endAngle: 90,
          radius: 12
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "48px",
            fontWeight: '600',
            color: '#CD929D',
          }
        },
      }
    },
    fill: {
      colors: ['#CD929D']
    },
    //   // chart: {
    //   //   type: 'radialBar'
    //   // },
    //   // plotOptions: {
    //   //   pie: {
    //   //     expandOnClick: true,
    //   //     customScale: 1,
    //   //     donut: {
    //   //       size: '65%',
    //   //       labels: {
    //   //         show: true,
    //   //         name: {
    //   //           show: true,
    //   //           text: '12',
    //   //           offsetY: -10,
    //   //           formatter(val) {
    //   //             return 'Totalclasses'
    //   //           }
    //   //         },
    //   //         value: {
    //   //           show: true,
    //   //           text: 'Totalclasses',
    //   //           offsetY: 16,
    //   //           formatter(val) {
    //   //             return '12'
    //   //           }
    //   //         }
    //   //       },
    //   //       hover: {
    //   //         enabled: false // Disable color highlight on hover
    //   //       }
    //   //     }
    //   //   }
    //   // },
    //   // legend: {
    //   //   show: false // Hide the legend
    //   // },
    //   // responsive: [
    //   //   {
    //   //     breakpoint: 480,
    //   //     options: {
    //   //       chart: {
    //   //         width: 100
    //   //       },
    //   //       legend: {
    //   //         position: 'bottom'
    //   //       }
    //   //     }
    //   //   }
    //   // ],
    //   // fill: {
    //   //   colors: ['#709A8C', '#ffb3c0']
    //   // }
  }

  return (
    <Box xs={12} md={12} sx={{ backgroundColor: 'white', borderRadius: '16px', height: '264px' }}>


      <div className='radialBar-chart'>
        <ReactApexcharts options={optionsData} series={seriesData} type='radialBar' height='340px' />
      </div>

    </Box>
  )
}

export default DonutChart
