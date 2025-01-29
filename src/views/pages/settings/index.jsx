import { Box, Card, Grid, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import Heading from 'src/@core/components/Heading'
import PropTypes from 'prop-types'
import AccountInfo from './Tabs/AccountInfo'
import ChangePassword from './Tabs/ChangePassword'
import NotificationSettings from './Tabs/NotificationSettings'
import Terms from './Tabs/Terms'
import Privacy from './Tabs/Privacy'
import CommissionSettings from './Tabs/CommissionSettings'
import AppBanner from './Tabs/AppBanner'

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
  width: '100%',
  fontWeight: '500',
  lineHeight: '16px',
  backgroundColor: '#F8F8F9',
  borderRadius: '6px',
  alignItems: 'start',
  marginBottom: '8px',
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

const StyledTabValue = ({ text, selected }) => {
  return (
    <Typography
      sx={{
        fontSize: '16px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        justifyContent: 'space-between',
        width: '100%',
        color: selected ? '#CD929D' : 'inherit' // Apply color based on selected state
      }}
    >
      {text} <img src='/icons/arrow-right.svg' />
    </Typography>
  )
}

StyledTabValue.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool // Add prop validation for selected
}

const SettingsPage = () => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box>
        <Heading headingText={'Settings'} />
      </Box>
      <Box>
        <Grid container gap={'20px'}>
          <Grid item>
            <Card elevation={0} sx={{ padding: '20px 14px' }}>
              <StyledTabs orientation={isSmallScreen ? 'horizontal' : 'vertical'} value={value} onChange={handleChange}>
                <StyledTab label={<StyledTabValue text={'Account Information'} />} {...a11yProps(0)} />
                <StyledTab label={<StyledTabValue text={'Commission Settings'} />} {...a11yProps(1)} />
                <StyledTab label={<StyledTabValue text={'App Banner'} />} {...a11yProps(2)} />
                <StyledTab label={<StyledTabValue text={'Change Password'} />} {...a11yProps(3)} />
                <StyledTab label={<StyledTabValue text={'Notification Settings'} />} {...a11yProps(4)} />
                <StyledTab label={<StyledTabValue text={'Terms & Condition'} />} {...a11yProps(5)} />
                <StyledTab label={<StyledTabValue text={'Privacy Policy'} />} {...a11yProps(6)} />
              </StyledTabs>
            </Card>
          </Grid>
          <Grid item sm>
            <Card elevation={0} sx={{ padding: '20px ' }}>
              <TabPanel value={value} index={0}>
                <AccountInfo />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CommissionSettings />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <AppBanner />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ChangePassword />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <NotificationSettings />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Terms />
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Privacy />
              </TabPanel>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SettingsPage
