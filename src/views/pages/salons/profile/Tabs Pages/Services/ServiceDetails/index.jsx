import { Avatar, AvatarGroup, Box, Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import TextBox from 'src/views/pages/salons/viewbookings/components/TextBox'

const ServiceDetails = () => {
  const router = useRouter()

  const ServiceDetail = [
    {
      charttitle: 'Stats(Sub service 1)',
      ServiceInfo: [
        {
          title: 'Service Id',
          detail: '5652982'
        },
        {
          title: 'Sub Service 1',
          detail: 'Long Hair Cut'
        },
        {
          title: 'Service Name',
          detail: 'Hair Cut'
        },
        {
          title: 'Estimated Time',
          detail: '1 Hr'
        }
      ]
    },
    {
      charttitle: 'Stats(Sub service 2)',
      ServiceInfo: [
        {
          title: 'Service Id',
          detail: '5652922'
        },
        {
          title: 'Sub Service 1',
          detail: 'Deep Facial'
        },
        {
          title: 'Service Name',
          detail: 'Facial'
        },
        {
          title: 'Estimated Time',
          detail: '1.5 Hr'
        }
      ]
    }
  ]

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
      data: [560, 400, 560, 700, 430, 380, 650, 720, 450, 650, 350, 450, 450, 450]
    }
  ]

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Service Details'} />
      </Box>
      <Card elevation={0} sx={{ padding: '20px' }}>
        <Box sx={{ display: 'grid', gap: '14px' }}>
          {/* Service Detail */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: '14 px', gap: '14px' }}>
            <img src='/images/avatars/profile2.png' width={'85px'} />
            <Box sx={{ display: 'grid', gap: '8px' }}>
              <TextBox title={'Smart cut Salon'} detail={'P.O Box 123 Main Rd, Jeddah'} />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#1BA40F',
                  padding: '6px 10px',
                  backgroundColor: '#31B6250D',
                  borderRadius: '8px',
                  width: 'fit-content'
                }}
              >
                Active
              </Typography>
            </Box>
          </Box>
          {/* Service Details */}
          {ServiceDetail.map((item, index) => (
            <Box key={index} sx={{ display: 'grid', gap: '14px' }}>
              <Grid container gap={'6%'} sx={{ alignItems: 'center' }}>
                {item.ServiceInfo?.map((items, index) => (
                  <Grid item key={index}>
                    <TextBox title={items.title} detail={items.detail} />
                  </Grid>
                ))}
                <Grid item>
                  <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Professional</Typography>
                  <AvatarGroup spacing={'medium'}>
                    <Avatar src='/images/avatars/avatar1.png' sx={{ width: '35px', height: '35px' }} />
                    <Avatar src='/images/avatars/avatar2.png' sx={{ width: '35px', height: '35px' }} />
                    <Avatar src='/images/avatars/avatar3.png' sx={{ width: '35px', height: '35px' }} />
                  </AvatarGroup>
                </Grid>
              </Grid>
              <hr />
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>
                    {item.charttitle}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#212529' }}>Filter By</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#007BFF' }}>Date & Time</Typography>
                  </Box>
                </Box>
                <Card sx={{ padding: '30px 0px 0px 0px' }}>
                  <ReactApexcharts options={options} series={series} type='bar' width='100%' height={'280px'} />
                </Card>
              </Box>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  )
}

export default ServiceDetails
