// External Imports
import { Box, Card, Typography } from '@mui/material'

// Internal Imports
import InfoIcon from '@mui/icons-material/Info'
import MovingIcon from '@mui/icons-material/Moving'
import Odometer from 'src/@core/components/Odometer/Odometer'

const DashboardCard = ({ name, icons, tradeIcon, total, countPercent, tradebgColor, tradetextColor }) => {

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'white',
          height: '100%',
          borderRadius: '16px',
          padding: "20px 16px",
          boxShadow: 'none',
          width: '100%',
          gap: '14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={icons} width={'36px'} />
            <Typography sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px' }}>
              {name}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '13px', fontWeight: '600', lineHeight: '16px', color: tradetextColor, backgroundColor: tradebgColor, padding: '4px 10px', borderRadius: '6px', display: 'flex' }}>
            {countPercent}
            <img src={tradeIcon} />
          </Typography>
        </Box>
        <Box>
          <Odometer number={total} />
        </Box>
      </Card>
    </>
  )
}

export default DashboardCard
