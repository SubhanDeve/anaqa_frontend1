import { Box, Card, Grid, Tabs, Typography, Tab, useTheme, useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BackButton from 'src/@core/components/custom-button/BackButton'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import PropTypes from 'prop-types'
import SalonInfo from './Tabs Pages/SalonInfo'
import { styled } from '@mui/system'
import Commission from './Tabs Pages/Commission'
import Bookings from './Tabs Pages/Bookings'
import Invoices from './Tabs Pages/Invoices'
import Professionals from './Tabs Pages/Professionals'
import Services from './Tabs Pages/Services'
import Reviews from './Tabs Pages/Reviews'
import UpdatePassword from './Tabs Pages/UpdatePass'

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none' // Hide the indicator
  },
  width: '100%',
  overflow: 'auto'
})
const StyledTab = styled(Tab)({
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '16px',
  backgroundColor: '#F8F8F9',
  borderRadius: '6px',
  alignItems: 'start',
  padding: '14px 10px',
  marginBottom: '8px',
  marginRight: '8px',
  ':active': {
    backgroundColor: '#FAF5F6'
  },
  '&.Mui-selected': {
    color: '#CD929D', // Selected color
    backgroundColor: '#FAF5F6' // Selected background
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
      {value === index && <Box sx={{ p: '20px' }}>{children}</Box>}
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

const SalonProfile = () => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const router = useRouter()
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px ' }}>
        <BackButton handleBack={() => router.back()} />
        <CustomPageHeading text={'Salon Profile'} />
      </Box>

      <Card elevation={0} sx={{ height: { xs: '100%', md: '100%' } }}>
        <Box
          sx={{
            width: '100%',
            height: '24vh',
            backgroundColor: '#ECD5D9',
            borderRadius: '10px',
            padding: '20px 22px'
          }}
        >
          <Box sx={{ display: 'flex', gap: '10px', left: '95%', position: 'relative' }}>
            <img src='/icons/profile/block.svg' style={{ cursor: 'pointer' }} />
            <img src='/icons/profile/delete.svg' style={{ cursor: 'pointer' }} />
          </Box>
        </Box>
        <Grid container sx={{ padding: '20px 30px 20px 30px', marginTop: '-5%' }} gap={'20px'}>
          <Grid item xs={12} md={3} lg={3} xl={2}>
            <Card elevation={0} sx={{ height: '100%', width: '100%', padding: '14px', border: '1px solid #F8F8F9' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  justifyItems: 'center',
                  alignItems: 'center'
                }}
              >
                <img src='/images/avatars/profile2.png' />
                <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#212529' }}>
                  Smart Cut Beauty Salon
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: '500', color: '#6C757D' }}>Jeddah</Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1BA40F',
                    backgroundColor: '#31B6250D',
                    padding: '10px',
                    width: 'fit-content',
                    borderRadius: '8px'
                  }}
                >
                  Active
                </Typography>
              </Box>
              <Box sx={{ padding: '12px 0px' }}>
                <hr></hr>
              </Box>
              <Box sx={{ overflow: 'auto', width: '100%' }}>
                <StyledTabs
                  orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                  value={value}
                  onChange={handleChange}
                >
                  <StyledTab label={'Salon Information'} {...a11yProps(0)} />
                  <StyledTab label={'Bookings'} {...a11yProps(1)} />
                  <StyledTab label={'Commission Management'} {...a11yProps(2)} />
                  <StyledTab label={'Invoices'} {...a11yProps(3)} />
                  <StyledTab label={'Professionals'} {...a11yProps(4)} />
                  <StyledTab label={'Services'} {...a11yProps(5)} />
                  <StyledTab label={'Update Password'} {...a11yProps(6)} />
                  <StyledTab label={'Reviews'} {...a11yProps(7)} />
                </StyledTabs>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={8.7} lg={8.6} xl={9.8}>
            <Card elevation={0} sx={{ height: '100%', border: '1px solid #F8F8F9' }}>
              <TabPanel value={value} index={0}>
                <SalonInfo />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Bookings />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Commission />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Invoices />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Professionals />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Services />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <UpdatePassword />
              </TabPanel>
              <TabPanel value={value} index={7}>
                <Reviews />
              </TabPanel>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default SalonProfile
