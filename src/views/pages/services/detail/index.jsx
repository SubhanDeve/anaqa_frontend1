import { Box, Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import TextBox from 'src/@core/components/Text Decorations/TextBox'
import ServiceDetail from '../subservices/detail'
import ServiceBooking from './Bookings'

const MainServiceDetail = () => {
  const router = useRouter()
  const ServiceDetail = [
    {
      title: 'Service ID',
      detail: '5418484'
    },
    {
      title: 'Service',
      detail: 'Hair cut'
    },
    {
      title: 'Category',
      detail: 'Salon'
    },
    {
      title: 'Created At',
      detail: '18 Sep,2024'
    }
  ]
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Service Details'} />
      </Box>
      <Card elevation={0} sx={{ height: '100%' }}>
        <Box
          sx={{
            backgroundColor: '#ECD5D9',
            height: '20vh'
          }}
        ></Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px', marginTop: '-7%' }}>
          <Card
            elevation={0}
            sx={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '20px', border: '1px solid #F8F8F9' }}
          >
            <Box sx={{ display: 'flex', gap: '14px', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <img src='/icons/salon/bookings/tick.svg' width={'31px'} />
                <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#212529' }}>Service detail</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#212529' }}>16 Sep,2024</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#212529' }}>09:12pm</Typography>
              </Box>
            </Box>
            <hr />
            <Grid container gap={'8px'}>
              {ServiceDetail.map((item, index) => (
                <Grid item xs={12} sm={5} key={index}>
                  <TextBox title={item.title} detail={item.detail} />
                </Grid>
              ))}
              <Grid item xs={12} sm={5} gap={'8px'}>
                <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Status</Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1BA40F',
                    backgroundColor: '#31B6250D',
                    padding: '6px 18px',
                    borderRadius: '8px',
                    width: 'fit-content'
                  }}
                >
                  Active
                </Typography>
              </Grid>
            </Grid>
          </Card>
          <Card
            elevation={0}
            sx={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '20px', border: '1px solid #F8F8F9' }}
          >
            <ServiceBooking />
          </Card>
        </Box>
      </Card>
    </Box>
  )
}

export default MainServiceDetail
