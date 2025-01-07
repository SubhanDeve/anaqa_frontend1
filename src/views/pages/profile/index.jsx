import { Avatar, Badge, Box, Card } from '@mui/material'
import React from 'react'
import CustomContainButton from 'src/@core/components/custom-button/CustomContainButton'
import CustomSecondaryButton from 'src/@core/components/custom-button/CustomSecondaryButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import Heading from 'src/@core/components/Heading'
import FormSection from './FormSection'

const ProfilePage = () => {
  return (
    <Box>
      <Box>
        <CustomPageHeading text={'Admin Profile'} />
      </Box>
      <Card elevation={0} sx={{ height: { xs: '100%', md: '82vh' } }}>
        <Box
          sx={{
            width: '100%',
            height: '24vh',
            backgroundColor: '#ECD5D9',
            borderRadius: '10px'
          }}
        ></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            padding: '20px 30px',
            marginTop: '-4%',
            gap: '20px'
          }}
        >
          <Box sx={{ border: '1px solid #F8F8F9', borderRadius: '10px', height: 'fit-content' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px 14px',
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Badge
                  overlap='circular'
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <Avatar
                      alt='Upload'
                      src='/icons/upload.svg'
                      sx={{ width: '50px', height: '50px', cursor: 'pointer' }}
                    />
                  }
                >
                  <img alt='mdi:admin' src='/images/avatars/profile1.png' width={'137px'} />
                </Badge>
                <Heading headingText={'Makenna Ekstrom Bothman'} />

                <CustomSecondaryButton text={'Admin'} />
              </Box>
              <Box sx={{ width: '100%' }}>
                <CustomContainButton text={'Edit Profile'} width={'100%'} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', md: '69vw' },
              backgroundColor: '#fff',
              border: '1px solid #F8F8F9',
              borderRadius: '10px',
              height: '50vh'
            }}
          >
            <FormSection />
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default ProfilePage
