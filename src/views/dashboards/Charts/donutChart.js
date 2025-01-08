// External Imports
import React from 'react';
import ReactApexcharts from 'src/@core/components/react-apexcharts';
import { Box, Card } from '@mui/material';
import CustomOutlineButton from 'src/@core/components/custom-button';

const DonutChart = () => {
  const seriesData = [70]; // Chart value (70%)

  const optionsData = {
    chart: {
      type: 'radialBar',
      sparkline: {
        enabled: true, // Removes extra spacing
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#FAF4F5', // Light pink background
          strokeWidth: '97%', // Makes the track match the bar size
        },
        dataLabels: {
          name: {
            show: true, // Show the "Active Salons" label
            fontSize: '13px', // Smaller font size for the label
            fontWeight: '600', // Normal weight for the label
            color: '#6C757D', // Grey color for "Active Salons"
            offsetY: -20, // Moves "Active Salons" closer to "70%"
          },
          value: {
            show: true,
            fontSize: '48px', // Bold font size for percentage
            fontWeight: '600', // Bold weight for percentage
            color: '#CD929D', // Pink color for the percentage
            offsetY: -60, // Moves "70%" upwards inside the radial bar
            formatter: function (val) {
              return `${val}%`; // Add percentage sign
            },
          },
        },
        hollow: {
          size: '60%', // Hollow center size
        },
        stroke: {
          lineCap: 'round', // Ensures rounded ends
          curve: 'smooth', // Makes the bar curve smooth
        },
      },
    },
    fill: {
      colors: ['#CD929D'], // Pink active bar color
    },
  };

  return (
    <Card
      elevation={0}
      sx={{
        padding: '18px 14px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '19px',
      }}
    >
      <Box sx={{
        width: '100%', textAlign: 'center', marginTop: '-50px'
      }}>
        <ReactApexcharts
          options={optionsData}
          series={seriesData}
          type="radialBar"
          width="100%"
        />
      </Box>
      <CustomOutlineButton text="See Details" width="68%" />
    </Card>
  );
};

export default DonutChart;
