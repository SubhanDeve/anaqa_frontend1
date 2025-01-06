// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationButton from '../NotificationButton'
import { Typography } from '@mui/material'
import Search from 'src/@core/components/search'

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: settings?.mode !== 'dark' ? 'white' : '#30334E',
        padding: 5,
      }}
    >
      <Box sx={{ display: { lg: 'none', md: 'block' } }}>
        <img src='/anaqa.svg' />
      </Box>
      <Box sx={{ width: '60%', display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }}>
        <Search />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignContent: 'center', gap: '12px' }}>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <NotificationButton icon={'/icons/Notifications.svg'} />
        <NotificationButton icon={'/icons/NotificationBell.svg'} />
        <Box style={{ width: '1px', backgroundColor: '#E3E3E3' }} ></Box>
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
