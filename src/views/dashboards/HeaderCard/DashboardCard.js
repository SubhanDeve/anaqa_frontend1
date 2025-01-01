// External Imports
import { Box, Card, Typography } from '@mui/material'

// Internal Imports
import InfoIcon from '@mui/icons-material/Info'
import MovingIcon from '@mui/icons-material/Moving'

const DashboardCard = ({ name, icons, tradeIcon, total, countPercent }) => {

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'white',
          height: 'auto',
          borderRadius: '16px',
          padding: "20px 16px",
          maxHeight: '161px',
          boxShadow: 'none',
          width: '100%',
          gap: '14px',
          display: 'grid',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={icons} width={'24px'} />
            <Typography sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px' }}>
              {name}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '13px', fontWeight: '600', lineHeight: '16px', color: '#FFB91B', backgroundColor: '#FFFBEA', padding: '4px 10px', borderRadius: '6px', display: 'flex' }}>
            {countPercent}
            <img src={tradeIcon} />
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '36px' }}>
            {total}
          </Typography>
        </Box>
      </Card>
    </>
  )
}

export default DashboardCard
