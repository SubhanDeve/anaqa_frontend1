import { Box, Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import TextBox from 'src/@core/components/Text Decorations/TextBox'

const PromotionDetail = () => {
  const router = useRouter()
  const ServiceDetail = [
    {
      title: 'Promotion Name',
      detail: 'ABC'
    },
    {
      title: 'Service Type',
      detail: 'Hair cut'
    },
    {
      title: 'Salon',
      detail: 'Abs Salon'
    },
    {
      title: 'Discount Type',
      detail: 'Percentage'
    },
    {
      title: 'Discount Value',
      detail: '10%'
    },
    {
      title: 'Usage Limit',
      detail: 'SAR 600'
    },
    {
      title: 'Valid From',
      detail: '21 Sep,2024'
    },
    {
      title: 'Valid To',
      detail: '26 Sep,2024'
    }
  ]
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Promotion Details'} />
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
                <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#212529' }}>Promotion detail</Typography>
              </Box>
              <Box sx={{ display: 'grid', justifyItems: 'flex-end' }}>
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
        </Box>
      </Card>
    </Box>
  )
}

export default PromotionDetail
