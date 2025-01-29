import * as React from 'react'

import { Box, Grid, Typography } from '@mui/material'
import { useAuth } from 'src/hooks/useAuth'

import LineChart2 from 'src/views/dashboards/Charts/LineCard'

import { useLanguage } from 'src/context/LanguageContext'
import { getTranslations } from 'src/context/getTranslations'

import HeaderCard from 'src/views/dashboards/HeaderCard'
import DonutChart from 'src/views/dashboards/Charts/donutChart'
import Table from 'src/views/dashboards/Table'
import BookingChart from 'src/views/dashboards/Charts/BookingChart'
import ServicesChart from 'src/views/dashboards/Charts/ServicesChart'
import SaloonSuggestions from 'src/views/dashboards/Charts/SaloonSuggestions'
import RequestCard from 'src/views/dashboards/Charts/RequestCard'
import CustomPageHeading from 'src/@core/components/CustomPageHeading'
import CustomSelectMenu from 'src/@core/components/CustomSelectMenu'
import DateTimeRange from 'src/@core/components/DateTimeRange/DateTimeRange'

const Dashboard = () => {
  const { language } = useLanguage()

  const {
    pages: { dashboard }
  } = getTranslations(language)

  const auth = useAuth()

  const menuOptions = [{
    title: 'Hello'
  }]

  return (
    <Box sx={{ display: 'grid', alignItems: 'center', gap: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <Typography sx={{ fontSize: '26px', fontWeight: '600', color: '#212529' }}>Dashboard</Typography>

        <Box sx={{ display: { xs: 'grid', lg: 'flex' }, gap: '5px' }}>
          <CustomSelectMenu menuOptions={menuOptions} bgcolor={'#FFFFFF'} title={'Salon'} />
          <CustomSelectMenu menuOptions={menuOptions} bgcolor={'#FFFFFF'} title={'City'} />
          <DateTimeRange bgcolor={'#FFFFFF'} />
        </Box>
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <HeaderCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <DonutChart />
        </Grid>
        <Grid item xs={12} md={8}>
          <LineChart2 />
        </Grid>
        <Grid item xs={12} md={4}>
          <BookingChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServicesChart />
        </Grid>
        <Grid item xs={12} md={8}>
          <Table />
        </Grid>
        <Grid item xs={12} md={8}>
          <SaloonSuggestions />
        </Grid>
        <Grid item xs={12} md={4}>
          <RequestCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
