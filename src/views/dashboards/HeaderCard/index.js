import Grid from '@mui/material/Grid'
import DashboardCard from './DashboardCard'

const conduct = [
  {
    id: 1,
    icon: '/icons/totalcard/userthree.svg',
    name: 'Total users',
    total: '6323',
    countPercent: '16%',
    tradebgColor: '#FFFBEA',
    tradetextColor: '#FFB91B',
    tradeIcon: '/icons/totalcard/trade-up.svg'
  },
  {
    id: 2,
    icon: '/icons/totalcard/saloon.svg',
    name: 'Total Saloons',
    total: '512',
    countPercent: '16%',
    tradebgColor: '#FFF2F1',
    tradetextColor: '#FF6C64',
    tradeIcon: '/icons/totalcard/trade-down.svg'
  },
  {
    id: 3,
    icon: '/icons/totalcard/note.svg',
    name: 'Total Bookings',
    total: '4724',
    countPercent: '16%',
    tradebgColor: '#FFF2F1',
    tradetextColor: '#FF6C64',
    tradeIcon: '/icons/totalcard/trade-down.svg'
  },
  {
    id: 4,
    icon: '/icons/totalcard/coin.svg',
    name: 'Anaqa Revenue',
    total: '612,000',
    countPercent: '16%',
    tradebgColor: '#FFFBEA',
    tradetextColor: '#FFB91B',
    tradeIcon: '/icons/totalcard/trade-up.svg'
  }
]
const HeaderCard = () => {

  return (
    <Grid container gap={6} sx={{ height: '100%' }}>
      {conduct?.map((item, index) => {
        return (
          <Grid item key={index} xs={12} sm={5.88} md={5.88} lg={5.88} xxl={5.88} sx={{ display: 'flex' }}>
            <DashboardCard name={item.name} icons={item.icon} tradeIcon={item.tradeIcon} countPercent={item.countPercent} total={item.total} tradebgColor={item.tradebgColor} tradetextColor={item.tradetextColor} index={index} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default HeaderCard
