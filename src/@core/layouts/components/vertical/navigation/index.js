// ** React Import
import { useRef, useState } from 'react'

// ** MUI Import
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import Drawer from './Drawer'
import VerticalNavItems from './VerticalNavItems'
import VerticalNavHeader from './VerticalNavHeader'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { Button, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Candle from 'src/icons/candle'
import Logout from 'src/icons/logout'
import { useAuth } from 'src/hooks/useAuth'
import { useRouter } from 'next/router'



const StyledBoxForShadow = styled(Box)(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  '&.scrolled': {
    opacity: 1
  }
}))

const Navigation = props => {
  // ** Props
  const { hidden, settings, afterNavMenuContent, beforeNavMenuContent, navMenuContent: userNavMenuContent } = props

  // ** States
  const [navHover, setNavHover] = useState(false)
  const [groupActive, setGroupActive] = useState([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState([])

  // ** Ref
  const shadowRef = useRef(null)

  // ** Hooks
  const theme = useTheme()
  const { mode } = settings

  // ** Var
  const { afterVerticalNavMenuContentPosition, beforeVerticalNavMenuContentPosition } = themeConfig

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = ref => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect
      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  // ** Scroll Menu
  const scrollMenu = container => {
    if (beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) {
      container = hidden ? container.target : container
      if (shadowRef && container.scrollTop > 0) {
        // @ts-ignore
        if (!shadowRef.current.classList.contains('scrolled')) {
          // @ts-ignore
          shadowRef.current.classList.add('scrolled')
        }
      } else {
        // @ts-ignore
        shadowRef.current.classList.remove('scrolled')
      }
    }
  }

  const shadowBgColor = () => {
    if (mode === 'light') {
      return `linear-gradient(${theme.palette.customColors.lightBg} 5%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.85
      )} 30%,${hexToRGBA(theme.palette.customColors.lightBg, 0.5)} 65%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.3
      )} 75%,transparent)`
    } else {
      return `linear-gradient(${theme.palette.customColors.darkBg} 5%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.85
      )} 30%,${hexToRGBA(theme.palette.customColors.darkBg, 0.5)} 65%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.3
      )} 75%,transparent)`
    }
  }
  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
  }

  const handleClick = () => {
    router.push('/settings')
  }

  return (
    <Drawer {...props} navHover={navHover} setNavHover={setNavHover}>
      <VerticalNavHeader {...props} navHover={navHover} />
      {beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'fixed' ? beforeNavMenuContent(props) : null}
      {(beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) && (
        <StyledBoxForShadow ref={shadowRef} sx={{ background: shadowBgColor() }} />
      )}
      <Box sx={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
        <Box>


          <Box sx={{ display: 'grid', px: '18px', gap: '15px' }}>
            <hr></hr>
            <Typography sx={{ color: '#80807D', fontSize: '12px', fontWeight: '700', lineHeight: '19.2px' }}>MENU</Typography>
          </Box>
          <ScrollWrapper
            {...(hidden
              ? {
                onScroll: container => scrollMenu(container),
                sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' }
              }
              : {
                options: { wheelPropagation: false },
                onScrollY: container => scrollMenu(container),
                containerRef: ref => handleInfiniteScroll(ref)
              })}
          >
            {beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'static'
              ? beforeNavMenuContent(props)
              : null}
            {userNavMenuContent ? (
              userNavMenuContent(props)
            ) : (
              <List className='nav-items' sx={{ pt: 0, '& > :first-child': { mt: '20px' } }}>
                <VerticalNavItems
                  navHover={navHover}
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
            {afterNavMenuContent && afterVerticalNavMenuContentPosition === 'static' ? afterNavMenuContent(props) : null}
          </ScrollWrapper>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 0, alignItems: 'center', gap: '10px' }}>
          <hr style={{ width: '90%' }}></hr>
          <ListItem>
            <ListItemButton sx={{
              '&.Mui-focusVisible': {
                backgroundColor: '#FAF5F6',
                color: '#CD929D'
              }
            }}
              onClick={handleClick}
            >
              <ListItemIcon>
                <Candle />
              </ListItemIcon>
              <ListItemText>
                Settings
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <hr style={{ width: '90%' }}></hr>
          <ListItem>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText>
                Logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Box>
      </Box>
      {afterNavMenuContent && afterVerticalNavMenuContentPosition === 'fixed' ? afterNavMenuContent(props) : null}
    </Drawer>
  )
}

export default Navigation
