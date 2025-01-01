// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icon Imports
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationButton from '../NotificationButton'
import { Typography } from '@mui/material'

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
      <Box sx={{ width: '60%' }}>
        <Box sx={{ display: 'flex', backgroundColor: '#F8F8F9', borderRadius: '8px', px: '32px', py: '12px' }}>
          <img src='/icons/Search.svg' />
          <Typography sx={{ color: '#BBC0C3' }}>Search</Typography>
        </Box>
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
