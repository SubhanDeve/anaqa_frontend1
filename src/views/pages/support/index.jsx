import { Box, Card, styled, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from './tabs/layout'

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
  width: 'fit-content',
  fontWeight: '500',
  padding: '14px 28px',
  lineHeight: '16px',
  backgroundColor: '#FFF',
  borderRadius: '6px',
  alignItems: 'start',
  textAlign: 'center',
  ':active': {
    backgroundColor: '#FAF5F6'
  },
  '&.Mui-selected': {
    color: '#FFFFFF', // Selected color
    backgroundColor: '#CD929D' // Selected background
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

const SupportPage = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ display: 'grid', gap: '12px' }}>
      <Box>
        <Typography sx={{ fontSize: '26px', fontWeight: '600', lineHeight: '39px', color: '#212529' }}>
          Support
        </Typography>
      </Box>
      <Box>
        <StyledTabs orientation={'horizontal'} value={value} onChange={handleChange}>
          <StyledTab label={'Customer Support'} {...a11yProps(0)} />
          <StyledTab label={'Salon Support'} {...a11yProps(1)} />
        </StyledTabs>
      </Box>
      <Card elevation={0}>
        <TabPanel value={value} index={0}>
          <Layout />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Hello
        </TabPanel>
      </Card>
    </Box>
  )
}

export default SupportPage
