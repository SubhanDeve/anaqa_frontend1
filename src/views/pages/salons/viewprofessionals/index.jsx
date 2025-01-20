import { Box, Card, Grid, Tab, Tabs, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import TextBox from '../viewbookings/components/TextBox'
import { styled } from '@mui/system'
import PropTypes from 'prop-types'
import BookingsTable from './bookingstable'
import ReviewsTable from './reviewstable'
import StatusTab from './statustab'

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none' // Hide the indicator
  },
  width: '100%'
})
const StyledTab = styled(Tab)({
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '16px',
  backgroundColor: '#F8F8F9',
  borderRadius: '0px',
  alignItems: 'start',
  padding: '13px 30px',
  marginBottom: '8px',
  ':active': {
    backgroundColor: '#FAF5F6',
    borderRadius: '8px'
  },
  '&.Mui-selected': {
    color: '#FFFFFF', // Selected color
    backgroundColor: '#CD929D', // Selected background
    borderRadius: '6px'
  }
})

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const ViewProfessionals = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const professionalData = [
    {
      title: 'Professional Name',
      detail: 'Carla Culhane'
    },
    {
      title: 'Email',
      detail: 'Carla@gmail.com'
    },
    {
      title: 'Phone Number',
      detail: '+966 123 456 7890'
    },
    {
      title: 'Role',
      detail: 'Stylist'
    }
  ]

  const Services = [
    {
      name: 'Hair Cut'
    },
    {
      name: 'Facial'
    },
    {
      name: 'Nail Art'
    }
  ]
  const router = useRouter()
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Professional Detail'} />
      </Box>
      <Card elevation={0} sx={{ padding: '20px', display: 'grid', gap: '14px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: '#F8F8F9',
            width: '100%',
            borderRadius: '10px'
          }}
        >
          <Box sx={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <Box>
              <img src='/images/avatars/profile.png' />
            </Box>
            <Box sx={{ display: 'grid', gap: '4px' }}>
              <Typography sx={{ lineHeight: '20px', fontSize: '18px', fontWeight: '700', color: '#212529' }}>
                Carla Culhane
              </Typography>
              <Typography sx={{ lineHeight: '20px', fontSize: '16px', fontWeight: '400' }}>Professional</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '9px 10px',
                borderRadius: '5px'
              }}
            >
              <img src='/icons/star.svg' width={'24px'} />
              <Typography sx={{ lineHeight: '20px', fontSize: '16px', fontWeight: '500' }}>4.5</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <img src='/icons/profile/blockw.svg' style={{ cursor: 'pointer' }} width={'36px'} />
            <img src='/icons/profile/deletew.svg' style={{ cursor: 'pointer' }} width={'36px'} />
          </Box>
        </Box>
        <Box>
          <Grid container gap={'15px'}>
            {professionalData.map((item, index) => (
              <Grid item xl={5} key={index}>
                <TextBox title={item.title} detail={item.detail} />
              </Grid>
            ))}
            <Grid xl={12} sx={{ display: 'grid', gap: '8px' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#212529' }}>Assigned Services</Typography>
              <Box sx={{ display: 'flex', gap: '8px' }}>
                {Services.map((item, index) => (
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#CD929D',
                      backgroundColor: '#FAF5F6',
                      padding: '10px',
                      borderRadius: '7px',
                      width: 'fit-content'
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
              <hr></hr>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label={'Bookings'} {...a11yProps(0)} />
            <StyledTab label={'Reviews'} {...a11yProps(1)} />
            <StyledTab label={'Status'} {...a11yProps(2)} />
          </StyledTabs>
        </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <BookingsTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ReviewsTable />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <StatusTab />
          </TabPanel>
        </Box>
      </Card>
    </Box>
  )
}

export default ViewProfessionals
