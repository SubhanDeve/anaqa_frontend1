import { Box, Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import TextBox from './components/TextBox'
import CustomOutlineButton from 'src/@core/components/custom-button'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import CustomSecondaryButton from 'src/@core/components/custom-button/CustomSecondaryButton'
import DetailCardText from './components/DetailCardText'

const ViewBookings = () => {
  const router = useRouter()

  const detailData = [
    {
      title: 'Booking For',
      detail: 'Junaid Ayoub'
    },
    {
      title: 'Booking ID',
      detail: '466984'
    },
    {
      title: 'Service',
      detail: 'Hair Cut'
    },
    {
      title: 'Professional',
      detail: 'Haris Awan'
    },
    {
      title: 'Timeslot',
      detail: 'Sat 28 Sep 2024 at 9:30Am'
    },
    {
      title: 'Discount Type',
      detail: 'National Day Promotion'
    },
    {
      title: 'Date & Time',
      detail: '06:00Am Sunday, 20 September 2024'
    },
    {
      title: 'Salon Location',
      detail: '14 street Dakar colony, Jeddah'
    },
    {
      title: 'Salon Contact',
      detail: '+966 1234567'
    },
    {
      title: 'Customer Contact',
      detail: '+966 1234567'
    }
  ]

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Booking Details'} />
      </Box>
      <Grid container gap={'8px'}>
        <Grid item sm={8} md={9} xl={8.9}>
          <Card
            elevation={0}
            sx={{
              display: 'grid',
              padding: '20px',
              height: '100%',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <img src='/icons/salon/bookings/tick.svg' />
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#212529'
                    }}
                  >
                    Appointment Booked!
                  </Typography>
                </Box>
                <Box sx={{ display: 'grid', justifyItems: 'right', gap: '8px' }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#212529',
                      fontWeight: '400',
                      backgroundColor: '#F8F8F9',
                      width: 'fit-content',
                      padding: ' 1px 3px',
                      borderRadius: '6px'
                    }}
                  >
                    Pending
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#212529',
                        fontWeight: '400',
                        textAlign: 'right'
                      }}
                    >
                      16 Sep 2024
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#212529',
                        fontWeight: '400',
                        textAlign: 'right'
                      }}
                    >
                      09:12pm
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ padding: '14px 0px' }}>
                <hr></hr>
              </Box>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '8px' }}>
                  <TextBox title={'Salon'} detail={'Smart Cut Salon'} />
                  <CustomOutlineButton text={'View Location'} />
                </Box>
                <Grid container gap={'14px'}>
                  {detailData.map((item, index) => (
                    <Grid item xs={5} sm={5} md={5} lg={5} key={index}>
                      <TextBox title={item.title} detail={item.detail} />
                    </Grid>
                  ))}
                </Grid>
              </Box>{' '}
            </Box>
            <Box sx={{ display: 'flex', gap: '14px', width: '100%', alignContent: 'end', mt: '20%' }}>
              <CustomSecondaryButton text={'Reschedule'} width={'100%'} />
              <CustomOutlineButton text={'Cancel Booking'} width={'100%'} />
              <CustomContainButton text={'Confirm'} width={'100%'} />
            </Box>
          </Card>
        </Grid>
        <Grid item xl={3}>
          <Card elevation={0} sx={{ padding: '20px' }}>
            <Box sx={{ display: 'grid', gap: '14px' }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#212529'
                  }}
                >
                  Pricing Details
                </Typography>
              </Box>
              <hr></hr>
              <DetailCardText item={'Hair Cut'} price={25} />
              <DetailCardText item={'Facial'} price={25} />
              <hr></hr>
              <DetailCardText item={'Loyalty Points'} price={-5} color={'#1BA40F'} />
              <DetailCardText item={'Discount'} price={-5} color={'#1BA40F'} />
              <DetailCardText item={'VAT.Tax'} price={5} />
              <hr></hr>
              <DetailCardText item={'Grand Total'} price={45} weight={'600'} color={'#212529'} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ViewBookings
