// External Imports
import React from 'react'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { Box, Card, Typography } from '@mui/material'
import Heading from 'src/@core/components/Heading'
import CustomOutlineButton from 'src/@core/components/custom-button'


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
    <Card elevation={0} sx={{ padding: '18px 14px', height: '100%'}}>

      <Box className='radialBar-chart'>
        <ReactApexcharts options={optionsData} series={seriesData} type='radialBar' width={'100%'}  />
      </Box>
      <Box>
        <CustomOutlineButton text='See Details' width={'100%'} />
      </Box>

    </Card>
  )
}

export default DonutChart
