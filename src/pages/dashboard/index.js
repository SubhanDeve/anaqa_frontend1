import * as React from 'react'

import { Box, Grid, Typography } from '@mui/material'
import { useAuth } from 'src/hooks/useAuth'

import LineChart from 'src/views/dashboards/Charts/LineChart'
import LineChart2 from 'src/views/dashboards/Charts/LineCard'
import RightBoxDashboard from 'src/views/dashboards/RightBoxDashboard'

import { useLanguage } from 'src/context/LanguageContext'
import { getTranslations } from 'src/context/getTranslations'

import HeaderCard from 'src/views/dashboards/HeaderCard'
import DonutChart from 'src/views/dashboards/Charts/donutChart'
import Table from 'src/views/dashboards/Table'
import BookingChart from 'src/views/dashboards/Charts/BookingChart'

const Dashboard = () => {
  const { language } = useLanguage()
  const {
    pages: { dashboard }
  } = getTranslations(language)
  const auth = useAuth()

  return (
    <Box sx={{ display: 'grid', alignItems: 'center' }}>
      <Box >
        <Typography sx={{ fontSize: '26px', fontWeight: '600', lineHeight: '40px', mb: 3 }}>DashBoard</Typography>
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
          <DonutChart />
        </Grid>
        <Grid item xs={12} md={8}>
          <Table />
        </Grid>
        <Grid item xs={12} md={8}>
          <Table />
        </Grid>
        <Grid item xs={12} md={4}>
          <DonutChart />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
