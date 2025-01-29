import { Box, Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import CustomOutlineButton from 'src/@core/components/custom-button'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import TextBox from 'src/@core/components/Text Decorations/TextBox'

const ComplaintDetail = () => {
  const router = useRouter()
  const ServiceDetail = [
    {
      title: 'Request ID',
      detail: '55665612'
    },
    {
      title: 'Type',
      detail: 'Complaint'
    },
    {
      title: 'Issue',
      detail: 'Over Charge'
    },
    {
      title: 'Date',
      detail: '18 Sep, 2024'
    }
  ]
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Complaints'} />
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
                <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#212529' }}>Complaint detail</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '14px', justifyItems: 'flex-end' }}>
                <CustomContainButton text={'Resolve'} />
                <CustomOutlineButton text={'Ignore'} />
              </Box>
            </Box>
            <hr />
            <Grid container gap={'8px'}>
              {ServiceDetail.map((item, index) => (
                <Grid item xs={12} sm={5} key={index}>
                  <TextBox title={item.title} detail={item.detail} />
                </Grid>
              ))}
              <Grid item xs={12} sm={12} gap={'8px'}>
                <TextBox
                  title={'Description'}
                  detail={
                    'Lorem ipsum dolor sit amet consectetur. Sit ipsum amet nec leo massa velit vel a. Massa curabitur lectus est integer. Risus porttitor vel interdum consectetur egestas.'
                  }
                />
              </Grid>
              <Grid item xs={12} sm={5} gap={'8px'}>
                <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Status</Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#6C757D',
                    backgroundColor: '#F8F8F9',
                    padding: '6px 18px',
                    borderRadius: '8px',
                    width: 'fit-content'
                  }}
                >
                  Pending
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Card>
    </Box>
  )
}

export default ComplaintDetail
